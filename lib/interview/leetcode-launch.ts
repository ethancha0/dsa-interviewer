import type { LeetCodeLaunchConfig, PracticeProblem } from "./types";
import { camelCaseToKebabSlug, lookupProblemInCatalog } from "./problem-catalog";

export const LEETCODE_LAUNCH_HASH_PREFIX = "#__dsa_interviewer__=";
export const EXTENSION_DATASET_KEY = "dsaInterviewerExtension";

export function hasInterviewerExtensionInstalled() {
  if (typeof document === "undefined") {
    return false;
  }

  return document.documentElement.dataset[EXTENSION_DATASET_KEY] === "1";
}

export function buildLeetCodeLaunchConfig(
  problem: PracticeProblem,
  appOrigin = typeof window !== "undefined" ? window.location.origin : "",
): LeetCodeLaunchConfig {
  return {
    appOrigin,
    category: problem.category,
    slug: problem.slug,
    title: problem.title,
  };
}

export function encodeLeetCodeLaunchConfig(config: LeetCodeLaunchConfig) {
  return encodeURIComponent(btoa(JSON.stringify(config)));
}

export function decodeLeetCodeLaunchConfig(
  encodedValue: string,
): LeetCodeLaunchConfig | null {
  try {
    const parsed = JSON.parse(atob(decodeURIComponent(encodedValue))) as LeetCodeLaunchConfig;

    if (!parsed.slug || !parsed.title || !parsed.appOrigin) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function buildLeetCodeLaunchUrl(problem: PracticeProblem, appOrigin: string) {
  const payload = encodeLeetCodeLaunchConfig(
    buildLeetCodeLaunchConfig(problem, appOrigin),
  );

  return `${problem.url}${LEETCODE_LAUNCH_HASH_PREFIX}${payload}`;
}

export function buildNeetCodeLaunchUrl(problem: PracticeProblem, appOrigin: string) {
  const payload = encodeLeetCodeLaunchConfig(
    buildLeetCodeLaunchConfig(problem, appOrigin),
  );

  return `https://neetcode.io/problems/${problem.slug}${LEETCODE_LAUNCH_HASH_PREFIX}${payload}`;
}

export function launchInterviewOnLeetCode(problem: PracticeProblem) {
  window.location.assign(buildLeetCodeLaunchUrl(problem, window.location.origin));
}

export function launchInterviewOnNeetCode(problem: PracticeProblem) {
  window.location.assign(buildNeetCodeLaunchUrl(problem, window.location.origin));
}

export function launchConfigToProblem(config: LeetCodeLaunchConfig): PracticeProblem {
  return {
    category: config.category,
    slug: config.slug,
    title: config.title,
    url: `https://leetcode.com/problems/${config.slug}/`,
  };
}

const PROBLEM_PATH = /^\/problems\/([^/?#]+)/;

export function parseProblemSlugFromPath(pathname = "") {
  return pathname.match(PROBLEM_PATH)?.[1] ?? null;
}

export function parseProblemSlugFromLeetCodePath(pathname = "") {
  return parseProblemSlugFromPath(pathname);
}

export function titleizeProblemSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function buildLaunchConfigFromProblemPage({
  appOrigin,
  pathname = "",
}: {
  appOrigin: string;
  pathname?: string;
}): LeetCodeLaunchConfig | null {
  const rawSlug = parseProblemSlugFromPath(pathname);

  if (!rawSlug) {
    return null;
  }

  const catalogMatch = lookupProblemInCatalog(rawSlug);

  if (catalogMatch) {
    return {
      appOrigin,
      category: catalogMatch.category,
      slug: catalogMatch.slug,
      title: catalogMatch.title,
    };
  }

  return {
    appOrigin,
    slug: camelCaseToKebabSlug(rawSlug),
    title: titleizeProblemSlug(camelCaseToKebabSlug(rawSlug)),
  };
}

export function buildLaunchConfigFromLeetCodePage({
  appOrigin,
  pathname = "",
}: {
  appOrigin: string;
  pathname?: string;
}): LeetCodeLaunchConfig | null {
  return buildLaunchConfigFromProblemPage({ appOrigin, pathname });
}
