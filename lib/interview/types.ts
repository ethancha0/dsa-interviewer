export type PracticeProblem = {
  category?: string;
  slug: string;
  title: string;
  url: string;
};

export type StartInterviewOptions = {
  shareScreen: boolean;
};

export type TranscriptLine = {
  speaker: "Alex" | "You";
  text: string;
};

export type InterviewSummary = {
  areasToImprove: string[];
  breakdown: Array<{
    label: string;
    score: number | null;
  }>;
  elapsedSeconds: number;
  exchangeCount: number;
  finalComplexity: string | null;
  hintsUsed: number;
  overallScore: number | null;
  problemTitle: string;
  transcript: TranscriptLine[];
  verdict: string;
  wentWell: string[];
};

export type LeetCodeLaunchConfig = {
  appOrigin: string;
  category?: string;
  slug: string;
  title: string;
};

export const INITIAL_INTERVIEWER_RESPONSE = "";
export const NOT_ENOUGH_INFO =
  "Not enough information captured to assess this section.";
