import {
  blind75Problems,
  neetcode150Problems,
  type ProblemListItem,
} from "@/app/dashboard/problem-lists";

export type { ProblemListItem };

export const neetCodePracticeProblems = neetcode150Problems;
export const blind75PracticeProblems = blind75Problems;

const catalogBySlug = new Map<string, ProblemListItem>();

for (const problem of [...neetcode150Problems, ...blind75Problems]) {
  catalogBySlug.set(problem.slug, problem);
}

export function camelCaseToKebabSlug(slug: string) {
  return slug
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
}

export function lookupProblemInCatalog(rawSlug: string): ProblemListItem | null {
  const candidates = [rawSlug, camelCaseToKebabSlug(rawSlug)];

  for (const slug of candidates) {
    const match = catalogBySlug.get(slug);

    if (match) {
      return match;
    }
  }

  return null;
}

export function buildNeetCodeProblemUrl(slug: string) {
  return `https://neetcode.io/problems/${slug}`;
}
