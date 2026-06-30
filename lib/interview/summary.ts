import {
  INITIAL_INTERVIEWER_RESPONSE,
  type InterviewSummary,
  type TranscriptLine,
} from "./types";

export function createInterviewSummary({
  elapsedSeconds,
  exchangeCount,
  hintsUsed,
  interviewerResponse,
  problemTitle,
  transcript,
}: {
  elapsedSeconds: number;
  exchangeCount: number;
  hintsUsed: number;
  interviewerResponse: string;
  problemTitle: string;
  transcript: TranscriptLine[];
}): InterviewSummary {
  const normalizedTranscript = transcript
    .map((line) => ({
      ...line,
      text: normalizeSummaryText(line.text),
    }))
    .filter((line) => line.text);
  const candidateTranscript = normalizeSummaryText(
    normalizedTranscript
      .filter((line) => line.speaker === "You")
      .map((line) => line.text)
      .join(" "),
  );
  const conversationTranscript = normalizeSummaryText(
    normalizedTranscript.map((line) => `${line.speaker}: ${line.text}`).join(" "),
  );
  const interviewerTranscript = normalizeSummaryText(
    interviewerResponse === INITIAL_INTERVIEWER_RESPONSE ? "" : interviewerResponse,
  );
  const wordCount = countWords(candidateTranscript);
  const completedExchanges = Math.max(exchangeCount, candidateTranscript ? 1 : 0);
  const hasAcceptedSignal = hasAcceptedTestSignal(conversationTranscript);
  const hasPositiveInterviewerSignal = hasInterviewerSolutionApproval(conversationTranscript);
  const hasSolutionSignal =
    hasAcceptedSignal ||
    hasPositiveInterviewerSignal ||
    hasGeneralSolutionSignal(candidateTranscript);
  const hasAssessableTranscript =
    hasAcceptedSignal ||
    (normalizedTranscript.length >= 3 && wordCount >= 12);
  const finalComplexity =
    extractComplexity(candidateTranscript) ??
    inferComplexityFromApproach(candidateTranscript);
  const communicationScore = hasAssessableTranscript
    ? Math.min(10, Math.max(5, Math.round(wordCount / 18) + 6))
    : null;
  const comprehensionScore = hasAssessableTranscript
    ? hasSolutionSignal
      ? hasAcceptedSignal
        ? 9
        : 8
      : 6
    : null;
  const correctnessScore = hasAcceptedSignal
    ? 10
    : hasAssessableTranscript
      ? hasSolutionSignal
        ? 8
        : 5
      : null;
  const complexityScore =
    hasAssessableTranscript && finalComplexity
      ? 8
      : hasAssessableTranscript
        ? null
        : null;
  const hintScore = hasAssessableTranscript ? Math.max(5, 9 - hintsUsed) : null;
  const scoredBreakdown = [
    comprehensionScore,
    communicationScore,
    correctnessScore,
    complexityScore,
    hintScore,
  ].filter((score): score is number => score !== null);
  const overallScore = scoredBreakdown.length
    ? Math.round(
        (scoredBreakdown.reduce((total, score) => total + score, 0) /
          scoredBreakdown.length) *
          10,
      )
    : null;
  const wentWell = getEvidenceBackedWentWell({
    accepted: hasAcceptedSignal,
    transcript: candidateTranscript,
  });
  const areasToImprove = hasAssessableTranscript
    ? getEvidenceBackedAreasToImprove({
        accepted: hasAcceptedSignal,
        hasSolutionSignal,
        mentionedComplexity: Boolean(finalComplexity),
        transcript: candidateTranscript,
      })
    : [];

  return {
    areasToImprove,
    breakdown: hasAssessableTranscript
      ? [
          { label: "Problem comprehension", score: comprehensionScore },
          { label: "Communication", score: communicationScore },
          { label: "Code correctness", score: correctnessScore },
          { label: "Complexity analysis", score: complexityScore },
          { label: "Handling hints", score: hintScore },
        ]
      : [],
    elapsedSeconds,
    exchangeCount: completedExchanges,
    finalComplexity,
    hintsUsed,
    overallScore,
    problemTitle,
    transcript: normalizedTranscript.length
      ? normalizedTranscript
      : [
          ...(interviewerTranscript
            ? ([{ speaker: "Alex", text: interviewerTranscript }] satisfies TranscriptLine[])
            : []),
          {
            speaker: "You",
            text: candidateTranscript || "No candidate transcript was captured.",
          },
        ],
    verdict: overallScore === null ? "Not assessed" : overallScore >= 75 ? "Hire" : "Lean no",
    wentWell: hasAssessableTranscript ? wentWell : [],
  };
}

export function normalizeSummaryText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function countWords(text: string) {
  return text ? text.split(/\s+/).length : 0;
}

function hasAcceptedTestSignal(text: string) {
  return /\b(accepted|all\s+\d+\s+(?:out\s+of\s+\d+\s+)?test cases|passes?\s+all\s+test cases|all\s+test cases\s+(?:pass|passed|passing)|\d+\s*\/\s*\d+\s+test cases)\b/i.test(
    text,
  );
}

function hasInterviewerSolutionApproval(text: string) {
  return /\b(looks correct|looks good|correct overall|logic is solid|solution is solid|you're in good shape|very close|passes?)\b/i.test(
    text,
  );
}

function hasGeneralSolutionSignal(text: string) {
  return /\b(hash ?map|map|dictionary|dict|set|frequency|count|sort|sorted|two[- ]?pointer|sliding window|stack|queue|heap|binary search|dfs|bfs|dynamic programming|dp|recursion|prefix|suffix|greedy|return false|return true|edge case|constraint)\b/i.test(
    text,
  );
}

function extractComplexity(text: string) {
  const normalizedText = text.toLowerCase();

  if (/\bo\(\s*n\s*\)\b|linear/.test(normalizedText)) {
    return "O(n)";
  }

  if (/\bo\(\s*n\s*(?:\^2|\*\s*n|squared)\s*\)\b|quadratic|nested loop/.test(normalizedText)) {
    return "O(n²)";
  }

  if (/\bo\(\s*1\s*\)\b|constant/.test(normalizedText)) {
    return "O(1)";
  }

  if (/\bo\(\s*n\s*log\s*n\s*\)\b|n log n/.test(normalizedText)) {
    return "O(n log n)";
  }

  return null;
}

function inferComplexityFromApproach(text: string) {
  if (/\b(frequency|count|hash ?map|map|dictionary|dict|set)\b/i.test(text)) {
    return "O(n)";
  }

  if (/\b(sort|sorted)\b/i.test(text)) {
    return "O(n log n)";
  }

  return null;
}

function getEvidenceBackedWentWell({
  accepted,
  transcript,
}: {
  accepted: boolean;
  transcript: string;
}) {
  const wentWell: string[] = [];

  if (accepted) {
    wentWell.push("Reached an accepted solution with passing test cases.");
  }

  if (/\b(hash ?map|map|dictionary|dict|frequency|count)\b/i.test(transcript)) {
    wentWell.push("Explained a counting or map-based strategy.");
  }

  if (/\b(edge case|length|constraint|negative|duplicate|empty|null)\b/i.test(transcript)) {
    wentWell.push("Discussed constraints or edge-case handling.");
  }

  if (extractComplexity(transcript)) {
    wentWell.push("Stated a time or space complexity.");
  }

  return wentWell;
}

function getEvidenceBackedAreasToImprove({
  accepted,
  hasSolutionSignal,
  mentionedComplexity,
  transcript,
}: {
  accepted: boolean;
  hasSolutionSignal: boolean;
  mentionedComplexity: boolean;
  transcript: string;
}) {
  const areasToImprove: string[] = [];

  if (!hasSolutionSignal && !accepted) {
    areasToImprove.push(
      "The captured answer did not clearly explain a complete solution strategy.",
    );
  }

  if (!mentionedComplexity) {
    areasToImprove.push("The captured answer did not state final time or space complexity.");
  }

  if (!/\b(edge case|duplicate|same index|no solution|empty)\b/i.test(transcript)) {
    areasToImprove.push("Edge cases were not discussed in the captured transcript.");
  }

  return areasToImprove;
}

export function formatSummaryDuration(elapsedSeconds: number) {
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  if (minutes === 0) {
    return `${seconds}s`;
  }

  if (seconds === 0) {
    return `${minutes}m`;
  }

  return `${minutes}m ${seconds}s`;
}
