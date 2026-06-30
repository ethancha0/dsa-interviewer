import {
  integer,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    googleSub: text("google_sub").notNull(),
    email: text("email").notNull(),
    name: text("name").notNull(),
    image: text("image"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
    lastSignedInAt: timestamp("last_signed_in_at", { withTimezone: true }),
    lastSignedOutAt: timestamp("last_signed_out_at", { withTimezone: true }),
  },
  (table) => ({
    googleSubIdx: uniqueIndex("users_google_sub_idx").on(table.googleSub),
    emailIdx: uniqueIndex("users_email_idx").on(table.email),
  }),
);

export const completedProblems = pgTable(
  "completed_problems",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    problemSlug: text("problem_slug").notNull(),
    problemTitle: text("problem_title").notNull(),
    category: text("category"),
    completedAt: timestamp("completed_at", { withTimezone: true }).notNull(),
    elapsedSeconds: integer("elapsed_seconds").notNull().default(0),
    overallScore: integer("overall_score"),
    verdict: text("verdict").notNull().default("Completed"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    userProblemIdx: uniqueIndex("completed_problems_user_problem_idx").on(
      table.userId,
      table.problemSlug,
    ),
  }),
);

export type User = typeof users.$inferSelect;
export type CompletedProblem = typeof completedProblems.$inferSelect;
