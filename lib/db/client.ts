import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString =
  process.env.DATABASE_URL?.trim() || process.env.SUPABASE_DATABASE_URL?.trim();

if (!connectionString) {
  throw new Error("Missing DATABASE_URL or SUPABASE_DATABASE_URL environment variable.");
}

const globalForDb = globalThis as typeof globalThis & {
  postgresClient?: postgres.Sql;
};

const sql =
  globalForDb.postgresClient ??
  postgres(connectionString, {
    max: 1,
    prepare: false,
    ssl: process.env.DATABASE_SSL === "false" ? false : "require",
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.postgresClient = sql;
}

export const db = drizzle(sql, { schema });
