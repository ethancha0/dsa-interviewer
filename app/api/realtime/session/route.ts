const OPENAI_REALTIME_CLIENT_SECRETS_URL =
  "https://api.openai.com/v1/realtime/client_secrets";

const DEFAULT_PROBLEM_TITLE = "Two Sum";

const BASE_INTERVIEWER_INSTRUCTIONS =
  "You are Alex, a senior software engineer conducting a DSA interview. " +
  "Use provided screen context snapshots to understand the candidate's visible code and problem page. " +
  "Ask focused follow-up questions, give small nudges when the candidate is stuck, and do not reveal the full solution. " +
  "If the current shared screen clearly shows LeetCode Accepted, all test cases passed, or a successful submission for the current problem, acknowledge it, ask one or two final follow-up questions about complexity, edge cases, or alternatives, then tell the candidate they can click End interview when they are ready. " +
  "Do not claim the code passed unless that result is visible in the current screen context or the candidate explicitly says it passed. " +
  "Reply in one or two concise sentences unless the candidate asks for deeper clarification.";

export async function POST(request: Request) {
  const apiKey = normalizeApiKey(process.env.OPENAI_API_KEY);

  if (!apiKey) {
    return Response.json(
      { error: "Missing OPENAI_API_KEY environment variable." },
      { status: 500 },
    );
  }

  const requestPayload = await request.json().catch(() => null);
  const problemTitle =
    requestPayload && typeof requestPayload === "object"
      ? getStringPayloadValue(requestPayload, "problemTitle") ?? DEFAULT_PROBLEM_TITLE
      : DEFAULT_PROBLEM_TITLE;
  const problemUrl =
    requestPayload && typeof requestPayload === "object"
      ? getStringPayloadValue(requestPayload, "problemUrl")
      : null;
  const interviewerInstructions = [
    BASE_INTERVIEWER_INSTRUCTIONS,
    `The candidate is solving LeetCode ${problemTitle}.`,
    problemUrl ? `Problem URL: ${problemUrl}.` : null,
    "Tailor every follow-up to that specific problem.",
  ]
    .filter(Boolean)
    .join(" ");

  let openAIResponse: Response;

  try {
    openAIResponse = await fetch(OPENAI_REALTIME_CLIENT_SECRETS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "OpenAI-Safety-Identifier": "local-dsa-interviewer",
      },
      body: JSON.stringify({
        session: {
          type: "realtime",
          model: process.env.OPENAI_REALTIME_MODEL?.trim() || "gpt-realtime-2",
          instructions: interviewerInstructions,
          audio: {
            input: {
              transcription: {
                model:
                  process.env.OPENAI_REALTIME_TRANSCRIPTION_MODEL?.trim() ||
                  "gpt-4o-mini-transcribe",
              },
              turn_detection: {
                type: "server_vad",
              },
            },
            output: {
              voice: process.env.OPENAI_REALTIME_VOICE?.trim() || "marin",
            },
          },
        },
      }),
    });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to reach OpenAI realtime API.",
      },
      { status: 502 },
    );
  }

  const openAIPayload = await parseJsonResponse(openAIResponse);

  if (!openAIResponse.ok) {
    return Response.json(
      {
        error:
          getOpenAIErrorMessage(openAIPayload) ??
          "OpenAI realtime session request failed.",
      },
      { status: openAIResponse.status },
    );
  }

  return Response.json(openAIPayload);
}

async function parseJsonResponse(response: Response) {
  const text = await response.text();

  if (!text.trim()) {
    return null;
  }

  try {
    return JSON.parse(text) as unknown;
  } catch {
    return null;
  }
}

function normalizeApiKey(apiKey: string | undefined) {
  return apiKey?.trim().replace(/^Bearer\s+/i, "");
}

function getStringPayloadValue(payload: unknown, key: string) {
  if (!payload || typeof payload !== "object" || !(key in payload)) {
    return null;
  }

  const value = (payload as Record<string, unknown>)[key];

  return typeof value === "string" ? value.trim() || null : null;
}

function getOpenAIErrorMessage(payload: unknown) {
  if (!payload || typeof payload !== "object" || !("error" in payload)) {
    return null;
  }

  const error = payload.error;

  if (typeof error === "string") {
    return error;
  }

  if (error && typeof error === "object" && "message" in error) {
    return typeof error.message === "string" ? error.message : null;
  }

  return null;
}
