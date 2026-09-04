import { validateAdminDraft } from "@/lib/admin-validation";

export async function POST(request: Request) {
  try {
    const draft = await request.json();
    const issues = validateAdminDraft(draft);

    return Response.json({
      ok: issues.every((issue) => issue.severity !== "danger"),
      issues,
    });
  } catch {
    return Response.json(
      {
        ok: false,
        issues: [
          {
            scope: "JSON",
            message: "Não foi possível validar o rascunho enviado.",
            severity: "danger",
          },
        ],
      },
      { status: 400 },
    );
  }
}
