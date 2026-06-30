import { defineConfig } from "drizzle-kit";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

loadEnvFile(".env");

const databaseUrl = process.env.DATABASE_URL ?? process.env.SUPABASE_DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "Missing DATABASE_URL. Add your Supabase direct connection string to .env.",
  );
}

export default defineConfig({
  dbCredentials: {
    url: databaseUrl,
  },
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./lib/db/schema.ts",
  strict: true,
  verbose: true,
});

function loadEnvFile(fileName: string) {
  const envPath = resolve(process.cwd(), fileName);

  if (!existsSync(envPath)) {
    return;
  }

  const envFile = readFileSync(envPath, "utf8");

  for (const line of envFile.split(/\r?\n/)) {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmedLine.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    const value = trimmedLine.slice(separatorIndex + 1).trim();

    if (key && !(key in process.env)) {
      process.env[key] = value.replace(/^["']|["']$/g, "");
    }
  }
}
