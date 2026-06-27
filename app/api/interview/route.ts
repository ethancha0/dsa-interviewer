const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";

export async function POST(request: Request) {
  const apiKey = normalizeApiKey(process.env.OPENAI_API_KEY);

  if (!apiKey) {
    return Response.json(
      { error: "Missing OPENAI_API_KEY environment variable." },
      { status: 500 },
    );
  }

  const payload = await request.json().catch(() => null);
  const transcript =
    payload && typeof payload === "object" && "transcript" in payload
      ? String(payload.transcript ?? "").trim()
      : "";

  if (!transcript) {
    return Response.json(
      { error: "Send the user transcript in the `transcript` field." },
      { status: 400 },
    );
  }

  const openAIResponse = await fetch(OPENAI_RESPONSES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL?.trim() || "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text:
                "You are Alex, a senior software engineer conducting a DSA interview. " +
                "The candidate is solving LeetCode Two Sum. Reply in one or two concise sentences. " +
                "Ask a targeted follow-up question or give a small nudge, but do not reveal the full solution.",
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Candidate transcript: ${transcript}`,
            },
          ],
        },
      ],
      max_output_tokens: 140,
    }),
  });

  const openAIPayload = await openAIResponse.json().catch(() => null);

  if (!openAIResponse.ok) {
    return Response.json(
      {
        error:
          getOpenAIErrorMessage(openAIPayload) ?? "OpenAI request failed.",
      },
      { status: openAIResponse.status },
    );
  }

  return Response.json({ response: getOpenAIOutputText(openAIPayload) });
}

function normalizeApiKey(apiKey: string | undefined) {
  return apiKey?.trim().replace(/^Bearer\s+/i, "");
}

function getOpenAIOutputText(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return "";
  }

  if ("output_text" in payload && typeof payload.output_text === "string") {
    return payload.output_text.trim();
  }

  if (!("output" in payload) || !Array.isArray(payload.output)) {
    return "";
  }

  return payload.output
    .flatMap((item) =>
      item && typeof item === "object" && "content" in item
        ? item.content
        : [],
    )
    .map((content) =>
      content &&
      typeof content === "object" &&
      "text" in content &&
      typeof content.text === "string"
        ? content.text
        : "",
    )
    .join("")
    .trim();
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
