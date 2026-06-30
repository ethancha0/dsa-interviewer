import { getGoogleSession } from "@/lib/auth/google-session";
import type { DashboardInterviewRecord } from "@/lib/dashboard-progress";
import {
  getDashboardProgressForUser,
  upsertCompletedProblemForUser,
} from "@/lib/db/queries";

export async function GET() {
  const session = await getGoogleSession();

  if (!session) {
    return Response.json({ error: "Not authenticated." }, { status: 401 });
  }

  const progress = await getDashboardProgressForUser(session.userId);

  return Response.json(progress);
}

export async function POST(request: Request) {
  const session = await getGoogleSession();

  if (!session) {
    return Response.json({ error: "Not authenticated." }, { status: 401 });
  }

  const payload = await request.json().catch(() => null);
  const record = parseCompletedProblemRecord(payload);

  if (!record) {
    return Response.json({ error: "Invalid completed problem payload." }, { status: 400 });
  }

  await upsertCompletedProblemForUser({
    record,
    userId: session.userId,
  });

  return Response.json({ ok: true });
}

function parseCompletedProblemRecord(payload: unknown): DashboardInterviewRecord | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const record = payload as Partial<DashboardInterviewRecord>;

  if (
    typeof record.problemSlug !== "string" ||
    typeof record.problemTitle !== "string" ||
    typeof record.completedAt !== "string"
  ) {
    return null;
  }

  return {
    category: typeof record.category === "string" ? record.category : undefined,
    completedAt: record.completedAt,
    elapsedSeconds:
      typeof record.elapsedSeconds === "number" ? record.elapsedSeconds : 0,
    overallScore: typeof record.overallScore === "number" ? record.overallScore : null,
    problemSlug: record.problemSlug,
    problemTitle: record.problemTitle,
    verdict: typeof record.verdict === "string" ? record.verdict : "Completed",
  };
}
