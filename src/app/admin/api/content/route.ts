import { getAdminSeed } from "@/lib/admin-seed";

export function GET() {
  return Response.json({
    ok: true,
    content: getAdminSeed(),
  });
}
