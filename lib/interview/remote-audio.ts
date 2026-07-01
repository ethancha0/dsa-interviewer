const REMOTE_AUDIO_ID = "dsa-interviewer-remote-audio";

export function mountRemoteAudioElement() {
  const existing = document.getElementById(REMOTE_AUDIO_ID) as HTMLAudioElement | null;

  if (existing) {
    return existing;
  }

  const audio = document.createElement("audio");
  audio.id = REMOTE_AUDIO_ID;
  audio.autoplay = true;
  audio.setAttribute("playsinline", "true");
  audio.style.display = "none";
  audio.volume = 1;
  document.documentElement.appendChild(audio);

  return audio;
}

export async function playRemoteAudio(audio: HTMLAudioElement) {
  audio.muted = false;
  audio.volume = 1;

  if (audio.paused) {
    try {
      await audio.play();
    } catch {
      // Autoplay can fail until the next user gesture; callers may retry.
    }
  }
}

export function unmountRemoteAudioElement(audio: HTMLAudioElement | null) {
  if (!audio) {
    return;
  }

  audio.pause();
  audio.srcObject = null;
  audio.remove();
}
