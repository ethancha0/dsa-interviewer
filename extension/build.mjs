import { build } from "esbuild";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const rootDir = path.dirname(new URL(import.meta.url).pathname);
const outDir = path.join(rootDir, "dist");

await mkdir(outDir, { recursive: true });

await build({
  alias: {
    "@": path.join(rootDir, ".."),
  },
  bundle: true,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  entryPoints: [path.join(rootDir, "content-entry.tsx")],
  format: "iife",
  jsx: "automatic",
  legalComments: "none",
  logLevel: "info",
  outfile: path.join(outDir, "content.js"),
  platform: "browser",
  target: ["chrome109"],
});

console.log("Built extension/dist/content.js");
