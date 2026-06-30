import { desc, eq } from "drizzle-orm";
import type { DashboardInterviewRecord, DashboardProgress } from "@/lib/dashboard-progress";
import { db } from "./client";
import { completedProblems, users } from "./schema";

export type GoogleUserInput = {
  email: string;
  googleSub: string;
  image?: string;
  name: string;
};

export async function upsertGoogleUser(input: GoogleUserInput) {
  const now = new Date();
  const [user] = await db
    .insert(users)
    .values({
      email: input.email,
      googleSub: input.googleSub,
      image: input.image,
      lastSignedInAt: now,
      name: input.name,
      updatedAt: now,
    })
    .onConflictDoUpdate({
      set: {
        email: input.email,
        image: input.image,
        lastSignedInAt: now,
        name: input.name,
        updatedAt: now,
      },
      target: users.googleSub,
    })
    .returning();

  return user;
}

export async function markUserSignedOut(userId: string) {
  await db
    .update(users)
    .set({
      lastSignedOutAt: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(users.id, userId));
}

export async function getDashboardProgressForUser(userId: string): Promise<DashboardProgress> {
  const rows = await db
    .select()
    .from(completedProblems)
    .where(eq(completedProblems.userId, userId))
    .orderBy(desc(completedProblems.completedAt));

  return {
    interviews: rows.map((row) => ({
      category: row.category ?? undefined,
      completedAt: row.completedAt.toISOString(),
      elapsedSeconds: row.elapsedSeconds,
      overallScore: row.overallScore,
      problemSlug: row.problemSlug,
      problemTitle: row.problemTitle,
      verdict: row.verdict,
    })),
  };
}

export async function upsertCompletedProblemForUser({
  record,
  userId,
}: {
  record: DashboardInterviewRecord;
  userId: string;
}) {
  const now = new Date();

  await db
    .insert(completedProblems)
    .values({
      category: record.category,
      completedAt: new Date(record.completedAt),
      elapsedSeconds: record.elapsedSeconds,
      overallScore: record.overallScore,
      problemSlug: record.problemSlug,
      problemTitle: record.problemTitle,
      updatedAt: now,
      userId,
      verdict: record.verdict,
    })
    .onConflictDoUpdate({
      set: {
        category: record.category,
        completedAt: new Date(record.completedAt),
        elapsedSeconds: record.elapsedSeconds,
        overallScore: record.overallScore,
        problemTitle: record.problemTitle,
        updatedAt: now,
        verdict: record.verdict,
      },
      target: [completedProblems.userId, completedProblems.problemSlug],
    });
}
