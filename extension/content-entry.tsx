import { createRoot, type Root } from "react-dom/client";
import { StrictMode } from "react";
import { LeetCodeExtensionOverlay } from "../components/interview/leetcode-extension-overlay";
import {
  buildLaunchConfigFromLeetCodePage,
  decodeLeetCodeLaunchConfig,
  LEETCODE_LAUNCH_HASH_PREFIX,
} from "../lib/interview/leetcode-launch";
import type { LeetCodeLaunchConfig } from "../lib/interview/types";

const HOST_ID = "dsa-interviewer-host";
const DEFAULT_APP_ORIGIN = "http://localhost:3000";

declare const chrome: {
  storage?: {
    local: {
      get: (keys: string[]) => Promise<Record<string, string | undefined>>;
      set: (items: Record<string, string>) => Promise<void>;
    };
  };
};

let reactRoot: Root | null = null;
let mountedSlug: string | null = null;

function readHashLaunchConfig(): LeetCodeLaunchConfig | null {
  if (!location.hash.startsWith(LEETCODE_LAUNCH_HASH_PREFIX)) {
    return null;
  }

  return decodeLeetCodeLaunchConfig(location.hash.slice(LEETCODE_LAUNCH_HASH_PREFIX.length));
}

async function getAppOrigin() {
  try {
    const stored = await chrome.storage?.local.get(["appOrigin"]);
    return stored?.appOrigin || DEFAULT_APP_ORIGIN;
  } catch {
    return DEFAULT_APP_ORIGIN;
  }
}

async function resolveLaunchConfig(): Promise<LeetCodeLaunchConfig | null> {
  const hashConfig = readHashLaunchConfig();

  if (hashConfig) {
    history.replaceState(null, "", `${location.pathname}${location.search}`);
    return hashConfig;
  }

  const appOrigin = await getAppOrigin();

  return buildLaunchConfigFromLeetCodePage({
    appOrigin,
    pathname: location.pathname,
  });
}

function ensureMountPoint() {
  let host = document.getElementById(HOST_ID);

  if (!host) {
    host = document.createElement("div");
    host.id = HOST_ID;
    host.style.all = "initial";
    host.style.position = "fixed";
    host.style.inset = "0";
    host.style.pointerEvents = "none";
    host.style.zIndex = "2147483647";
    document.documentElement.appendChild(host);
  }

  let mountPoint = host.firstElementChild as HTMLDivElement | null;

  if (!mountPoint) {
    mountPoint = document.createElement("div");
    mountPoint.style.pointerEvents = "auto";
    host.appendChild(mountPoint);
  }

  return mountPoint;
}

function mountOverlay(config: LeetCodeLaunchConfig) {
  if (mountedSlug === config.slug && reactRoot) {
    return;
  }

  mountedSlug = config.slug;
  const mountPoint = ensureMountPoint();

  if (!reactRoot) {
    reactRoot = createRoot(mountPoint);
  }

  reactRoot.render(
    <StrictMode>
      <LeetCodeExtensionOverlay config={config} />
    </StrictMode>,
  );
}

function unmountOverlay() {
  if (reactRoot) {
    reactRoot.unmount();
    reactRoot = null;
  }

  mountedSlug = null;
  document.getElementById(HOST_ID)?.remove();
}

async function syncOverlayWithPage() {
  const config = await resolveLaunchConfig();

  if (!config) {
    unmountOverlay();
    return;
  }

  mountOverlay(config);
}

function watchLeetCodeNavigation() {
  let lastPath = location.pathname;

  const checkNavigation = () => {
    if (location.pathname === lastPath) {
      return;
    }

    lastPath = location.pathname;
    void syncOverlayWithPage();
  };

  window.addEventListener("popstate", checkNavigation);

  const originalPushState = history.pushState.bind(history);
  const originalReplaceState = history.replaceState.bind(history);

  history.pushState = (...args) => {
    originalPushState(...args);
    checkNavigation();
  };

  history.replaceState = (...args) => {
    originalReplaceState(...args);
    checkNavigation();
  };

  window.setInterval(checkNavigation, 1000);
}

void syncOverlayWithPage();
watchLeetCodeNavigation();
