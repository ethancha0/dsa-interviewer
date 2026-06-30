CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS "users" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "google_sub" text NOT NULL,
  "email" text NOT NULL,
  "name" text NOT NULL,
  "image" text,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL,
  "last_signed_in_at" timestamp with time zone,
  "last_signed_out_at" timestamp with time zone
);

CREATE TABLE IF NOT EXISTS "completed_problems" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE cascade,
  "problem_slug" text NOT NULL,
  "problem_title" text NOT NULL,
  "category" text,
  "completed_at" timestamp with time zone NOT NULL,
  "elapsed_seconds" integer DEFAULT 0 NOT NULL,
  "overall_score" integer,
  "verdict" text DEFAULT 'Completed' NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS "users_google_sub_idx"
  ON "users" ("google_sub");

CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx"
  ON "users" ("email");

CREATE UNIQUE INDEX IF NOT EXISTS "completed_problems_user_problem_idx"
  ON "completed_problems" ("user_id", "problem_slug");
