const OPENAI_REALTIME_CLIENT_SECRETS_URL =
  "https://api.openai.com/v1/realtime/client_secrets";

const INTERVIEWER_INSTRUCTIONS =
  "You are Alex, a senior software engineer conducting a DSA interview. " +
  "The candidate is solving LeetCode Two Sum. Keep the interview conversational and voice-first. " +
  "Ask focused follow-up questions, give small nudges when the candidate is stuck, and do not reveal the full solution. " +
  "Reply in one or two concise sentences unless the candidate asks for deeper clarification.";

export async function POST() {
  const apiKey = normalizeApiKey(process.env.OPENAI_API_KEY);

  if (!apiKey) {
    return Response.json(
      { error: "Missing OPENAI_API_KEY environment variable." },
      { status: 500 },
    );
  }

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
          instructions: INTERVIEWER_INSTRUCTIONS,
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

  const payload = await parseJsonResponse(openAIResponse);

  if (!openAIResponse.ok) {
    return Response.json(
      {
        error:
          getOpenAIErrorMessage(payload) ??
          "OpenAI realtime session request failed.",
      },
      { status: openAIResponse.status },
    );
  }

  return Response.json(payload);
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
