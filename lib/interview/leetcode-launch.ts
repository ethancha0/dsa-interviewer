import type { LeetCodeLaunchConfig, PracticeProblem } from "./types";

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

export function launchInterviewOnLeetCode(problem: PracticeProblem) {
  window.location.assign(buildLeetCodeLaunchUrl(problem, window.location.origin));
}

export function launchConfigToProblem(config: LeetCodeLaunchConfig): PracticeProblem {
  return {
    category: config.category,
    slug: config.slug,
    title: config.title,
    url: `https://leetcode.com/problems/${config.slug}/`,
  };
}

const LEETCODE_PROBLEM_PATH = /^\/problems\/([^/]+)/;

export function parseProblemSlugFromLeetCodePath(pathname = "") {
  return pathname.match(LEETCODE_PROBLEM_PATH)?.[1] ?? null;
}

export function titleizeProblemSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function buildLaunchConfigFromLeetCodePage({
  appOrigin,
  pathname = "",
}: {
  appOrigin: string;
  pathname?: string;
}): LeetCodeLaunchConfig | null {
  const slug = parseProblemSlugFromLeetCodePath(pathname);

  if (!slug) {
    return null;
  }

  return {
    appOrigin,
    slug,
    title: titleizeProblemSlug(slug),
  };
}
