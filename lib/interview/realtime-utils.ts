export function getRealtimeClientSecret(payload: unknown) {
  const directValue = getStringPayloadValue(payload, "value");

  if (directValue) {
    return directValue;
  }

  if (!payload || typeof payload !== "object" || !("client_secret" in payload)) {
    return null;
  }

  return getStringPayloadValue(payload.client_secret, "value");
}

export function parseRealtimeEvent(data: unknown) {
  try {
    return JSON.parse(String(data)) as unknown;
  } catch {
    return null;
  }
}

export async function parseJsonResponse(response: Response) {
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

export function getStringPayloadValue(payload: unknown, key: string) {
  return getRawStringPayloadValue(payload, key)?.trim() || null;
}

export function getRawStringPayloadValue(payload: unknown, key: string) {
  if (!payload || typeof payload !== "object" || !(key in payload)) {
    return null;
  }

  const value = (payload as Record<string, unknown>)[key];

  return typeof value === "string" ? value : null;
}
