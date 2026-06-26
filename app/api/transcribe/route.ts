export async function POST(request: Request) {
  const apiKey = normalizeApiKey(process.env.ELEVENLABS_API_KEY);

  if (!apiKey) {
    return Response.json(
      { error: "Missing ELEVENLABS_API_KEY environment variable." },
      { status: 500 },
    );
  }

  const incomingFormData = await request.formData();
  const audio = incomingFormData.get("audio") ?? incomingFormData.get("file");

  if (!(audio instanceof Blob) || audio.size === 0) {
    return Response.json(
      { error: "Upload an audio blob in the `audio` or `file` form field." },
      { status: 400 },
    );
  }

  const fileName = audio instanceof File ? audio.name : "speech.webm";
  const elevenLabsFormData = new FormData();

  elevenLabsFormData.append("file", audio, fileName);
  elevenLabsFormData.append("model_id", "scribe_v2");
  elevenLabsFormData.append("language_code", "eng");
  elevenLabsFormData.append("timestamps_granularity", "none");

  const elevenLabsResponse = await fetch(
    "https://api.elevenlabs.io/v1/speech-to-text",
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
      },
      body: elevenLabsFormData,
    },
  );

  const payload = await elevenLabsResponse.json().catch(() => null);

  if (!elevenLabsResponse.ok) {
    return Response.json(
      {
        error:
          getElevenLabsErrorMessage(payload) ??
          "ElevenLabs transcription request failed.",
      },
      { status: elevenLabsResponse.status },
    );
  }

  return Response.json({ text: payload?.text ?? "" });
}

function normalizeApiKey(apiKey: string | undefined) {
  return apiKey?.trim().replace(/^Bearer\s+/i, "");
}

function getElevenLabsErrorMessage(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  if ("detail" in payload) {
    return stringifyErrorDetail(payload.detail);
  }

  if ("message" in payload) {
    return stringifyErrorDetail(payload.message);
  }

  return null;
}

function stringifyErrorDetail(detail: unknown): string | null {
  if (typeof detail === "string") {
    return detail;
  }

  if (Array.isArray(detail)) {
    return detail
      .map((item) => stringifyErrorDetail(item))
      .filter(Boolean)
      .join(" ");
  }

  if (detail && typeof detail === "object" && "message" in detail) {
    return stringifyErrorDetail(detail.message);
  }

  return null;
}
