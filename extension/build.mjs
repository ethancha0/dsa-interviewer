import tailwindcss from "@tailwindcss/postcss";
import { build } from "esbuild";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import postcss from "postcss";

const rootDir = path.dirname(new URL(import.meta.url).pathname);
const outDir = path.join(rootDir, "dist");

await mkdir(outDir, { recursive: true });

const cssEntry = path.join(rootDir, "overlay.css");
const cssInput = await readFile(cssEntry, "utf8");
const cssResult = await postcss([tailwindcss()]).process(cssInput, {
  from: cssEntry,
});
const overlayStyles = cssResult.css;

await build({
  alias: {
    "@": path.join(rootDir, ".."),
  },
  banner: {
    js: `var OVERLAY_STYLES=${JSON.stringify(overlayStyles)};`,
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

await writeFile(path.join(outDir, "overlay.css"), overlayStyles);

console.log("Built extension/dist/content.js and extension/dist/overlay.css");
