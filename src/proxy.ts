import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AUTH_REALM = "Pereira e Medeiros Admin";

function unauthorized(message = "Autenticacao necessaria.") {
  return new NextResponse(message, {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${AUTH_REALM}", charset="UTF-8"`,
    },
  });
}

function missingCredentials() {
  return new NextResponse(
    "Painel administrativo sem credenciais configuradas. Defina ADMIN_USERNAME e ADMIN_PASSWORD.",
    { status: 503 },
  );
}

function safeEqual(left: string, right: string) {
  if (left.length !== right.length) {
    return false;
  }

  let result = 0;

  for (let index = 0; index < left.length; index += 1) {
    result |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }

  return result === 0;
}

export function proxy(request: NextRequest) {
  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedUsername || !expectedPassword) {
    return missingCredentials();
  }

  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Basic ")) {
    return unauthorized();
  }

  let decoded = "";

  try {
    decoded = atob(authorization.slice("Basic ".length));
  } catch {
    return unauthorized("Credenciais invalidas.");
  }

  const separatorIndex = decoded.indexOf(":");

  if (separatorIndex < 0) {
    return unauthorized("Credenciais invalidas.");
  }

  const username = decoded.slice(0, separatorIndex);
  const password = decoded.slice(separatorIndex + 1);

  if (
    !safeEqual(username, expectedUsername) ||
    !safeEqual(password, expectedPassword)
  ) {
    return unauthorized("Credenciais invalidas.");
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
