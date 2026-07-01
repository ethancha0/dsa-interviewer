var OVERLAY_STYLES="/*! tailwindcss v4.3.1 | MIT License | https://tailwindcss.com */\n@layer properties;\n@layer theme, base, components, utilities;\n@layer theme {\n  :root, :host {\n    --font-sans: \"Geist Variable\", \"Geist Sans\", Arial, Helvetica, sans-serif;\n    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\",\n      \"Courier New\", monospace;\n    --color-red-200: oklch(88.5% 0.062 18.334);\n    --color-red-400: oklch(70.4% 0.191 22.216);\n    --color-red-500: oklch(63.7% 0.237 25.331);\n    --color-amber-50: oklch(98.7% 0.022 95.277);\n    --color-amber-100: oklch(96.2% 0.059 95.617);\n    --color-amber-300: oklch(87.9% 0.169 91.605);\n    --color-amber-400: oklch(82.8% 0.189 84.429);\n    --color-amber-500: oklch(76.9% 0.188 70.08);\n    --color-lime-100: oklch(96.7% 0.067 122.328);\n    --color-lime-200: oklch(93.8% 0.127 124.321);\n    --color-lime-300: oklch(89.7% 0.196 126.665);\n    --color-lime-400: oklch(84.1% 0.238 128.85);\n    --color-lime-500: oklch(76.8% 0.233 130.85);\n    --color-emerald-400: oklch(76.5% 0.177 163.223);\n    --color-emerald-500: oklch(69.6% 0.17 162.48);\n    --color-emerald-600: oklch(59.6% 0.145 163.225);\n    --color-blue-300: oklch(80.9% 0.105 251.813);\n    --color-blue-400: oklch(70.7% 0.165 254.624);\n    --color-blue-500: oklch(62.3% 0.214 259.815);\n    --color-gray-500: oklch(55.1% 0.027 264.364);\n    --color-zinc-50: oklch(98.5% 0 0);\n    --color-zinc-100: oklch(96.7% 0.001 286.375);\n    --color-zinc-200: oklch(92% 0.004 286.32);\n    --color-zinc-300: oklch(87.1% 0.006 286.286);\n    --color-zinc-400: oklch(70.5% 0.015 286.067);\n    --color-zinc-500: oklch(55.2% 0.016 285.938);\n    --color-zinc-600: oklch(44.2% 0.017 285.786);\n    --color-zinc-700: oklch(37% 0.013 285.805);\n    --color-zinc-800: oklch(27.4% 0.006 286.033);\n    --color-zinc-900: oklch(21% 0.006 285.885);\n    --color-zinc-950: oklch(14.1% 0.005 285.823);\n    --color-black: #000;\n    --color-white: #fff;\n    --spacing: 0.25rem;\n    --container-xl: 36rem;\n    --text-xs: 0.75rem;\n    --text-xs--line-height: calc(1 / 0.75);\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n    --text-base: 1rem;\n    --text-base--line-height: calc(1.5 / 1);\n    --text-lg: 1.125rem;\n    --text-lg--line-height: calc(1.75 / 1.125);\n    --text-xl: 1.25rem;\n    --text-xl--line-height: calc(1.75 / 1.25);\n    --text-2xl: 1.5rem;\n    --text-2xl--line-height: calc(2 / 1.5);\n    --text-3xl: 1.875rem;\n    --text-3xl--line-height: calc(2.25 / 1.875);\n    --text-4xl: 2.25rem;\n    --text-4xl--line-height: calc(2.5 / 2.25);\n    --text-5xl: 3rem;\n    --text-5xl--line-height: 1;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-weight-black: 900;\n    --tracking-wide: 0.025em;\n    --leading-tight: 1.25;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --blur-sm: 8px;\n    --default-transition-duration: 150ms;\n    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    --default-font-family: \"Geist Variable\", \"Geist Sans\", Arial, Helvetica, sans-serif;\n    --default-mono-font-family: var(--font-mono);\n  }\n}\n@layer base {\n  *, ::after, ::before, ::backdrop, ::file-selector-button {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0 solid;\n  }\n  html, :host {\n    line-height: 1.5;\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");\n    font-feature-settings: var(--default-font-feature-settings, normal);\n    font-variation-settings: var(--default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n  b, strong {\n    font-weight: bolder;\n  }\n  code, kbd, samp, pre {\n    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--default-mono-font-variation-settings, normal);\n    font-size: 1em;\n  }\n  small {\n    font-size: 80%;\n  }\n  sub, sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  sub {\n    bottom: -0.25em;\n  }\n  sup {\n    top: -0.5em;\n  }\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n  :-moz-focusring {\n    outline: auto;\n  }\n  progress {\n    vertical-align: baseline;\n  }\n  summary {\n    display: list-item;\n  }\n  ol, ul, menu {\n    list-style: none;\n  }\n  img, svg, video, canvas, audio, iframe, embed, object {\n    display: block;\n    vertical-align: middle;\n  }\n  img, video {\n    max-width: 100%;\n    height: auto;\n  }\n  button, input, select, optgroup, textarea, ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    border-radius: 0;\n    background-color: transparent;\n    opacity: 1;\n  }\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n  ::placeholder {\n    opacity: 1;\n  }\n  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {\n    ::placeholder {\n      color: currentcolor;\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n  textarea {\n    resize: vertical;\n  }\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n  ::-webkit-calendar-picker-indicator {\n    line-height: 1;\n  }\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n  button, input:where([type=\"button\"], [type=\"reset\"], [type=\"submit\"]), ::file-selector-button {\n    appearance: button;\n  }\n  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\n    height: auto;\n  }\n  [hidden]:where(:not([hidden=\"until-found\"])) {\n    display: none !important;\n  }\n}\n@layer utilities {\n  .\\@container {\n    container-type: inline-size;\n  }\n  .pointer-events-auto {\n    pointer-events: auto;\n  }\n  .visible {\n    visibility: visible;\n  }\n  .absolute {\n    position: absolute;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .relative {\n    position: relative;\n  }\n  .sticky {\n    position: sticky;\n  }\n  .inset-0 {\n    inset: 0;\n  }\n  .right-5 {\n    right: calc(var(--spacing) * 5);\n  }\n  .bottom-8 {\n    bottom: calc(var(--spacing) * 8);\n  }\n  .left-5 {\n    left: calc(var(--spacing) * 5);\n  }\n  .isolate {\n    isolation: isolate;\n  }\n  .z-20 {\n    z-index: 20;\n  }\n  .z-30 {\n    z-index: 30;\n  }\n  .z-50 {\n    z-index: 50;\n  }\n  .z-\\[2147483647\\] {\n    z-index: 2147483647;\n  }\n  .container {\n    width: 100%;\n    @media (width >= 40rem) {\n      max-width: 40rem;\n    }\n    @media (width >= 48rem) {\n      max-width: 48rem;\n    }\n    @media (width >= 64rem) {\n      max-width: 64rem;\n    }\n    @media (width >= 80rem) {\n      max-width: 80rem;\n    }\n    @media (width >= 96rem) {\n      max-width: 96rem;\n    }\n  }\n  .mx-auto {\n    margin-inline: auto;\n  }\n  .mt-0 {\n    margin-top: 0;\n  }\n  .mt-0\\.5 {\n    margin-top: calc(var(--spacing) * 0.5);\n  }\n  .mt-1 {\n    margin-top: var(--spacing);\n  }\n  .mt-2 {\n    margin-top: calc(var(--spacing) * 2);\n  }\n  .mt-3 {\n    margin-top: calc(var(--spacing) * 3);\n  }\n  .mt-4 {\n    margin-top: calc(var(--spacing) * 4);\n  }\n  .mt-5 {\n    margin-top: calc(var(--spacing) * 5);\n  }\n  .mt-6 {\n    margin-top: calc(var(--spacing) * 6);\n  }\n  .mt-7 {\n    margin-top: calc(var(--spacing) * 7);\n  }\n  .mt-8 {\n    margin-top: calc(var(--spacing) * 8);\n  }\n  .mt-9 {\n    margin-top: calc(var(--spacing) * 9);\n  }\n  .mt-14 {\n    margin-top: calc(var(--spacing) * 14);\n  }\n  .mr-2 {\n    margin-right: calc(var(--spacing) * 2);\n  }\n  .mb-1 {\n    margin-bottom: var(--spacing);\n  }\n  .mb-3 {\n    margin-bottom: calc(var(--spacing) * 3);\n  }\n  .mb-5 {\n    margin-bottom: calc(var(--spacing) * 5);\n  }\n  .mb-7 {\n    margin-bottom: calc(var(--spacing) * 7);\n  }\n  .ml-2 {\n    margin-left: calc(var(--spacing) * 2);\n  }\n  .ml-7 {\n    margin-left: calc(var(--spacing) * 7);\n  }\n  .line-clamp-2 {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n  }\n  .block {\n    display: block;\n  }\n  .flex {\n    display: flex;\n  }\n  .grid {\n    display: grid;\n  }\n  .hidden {\n    display: none;\n  }\n  .inline-block {\n    display: inline-block;\n  }\n  .inline-flex {\n    display: inline-flex;\n  }\n  .table {\n    display: table;\n  }\n  .size-1 {\n    width: var(--spacing);\n    height: var(--spacing);\n  }\n  .size-1\\.5 {\n    width: calc(var(--spacing) * 1.5);\n    height: calc(var(--spacing) * 1.5);\n  }\n  .size-2 {\n    width: calc(var(--spacing) * 2);\n    height: calc(var(--spacing) * 2);\n  }\n  .size-3 {\n    width: calc(var(--spacing) * 3);\n    height: calc(var(--spacing) * 3);\n  }\n  .size-3\\.5 {\n    width: calc(var(--spacing) * 3.5);\n    height: calc(var(--spacing) * 3.5);\n  }\n  .size-4 {\n    width: calc(var(--spacing) * 4);\n    height: calc(var(--spacing) * 4);\n  }\n  .size-5 {\n    width: calc(var(--spacing) * 5);\n    height: calc(var(--spacing) * 5);\n  }\n  .size-6 {\n    width: calc(var(--spacing) * 6);\n    height: calc(var(--spacing) * 6);\n  }\n  .size-7 {\n    width: calc(var(--spacing) * 7);\n    height: calc(var(--spacing) * 7);\n  }\n  .size-8 {\n    width: calc(var(--spacing) * 8);\n    height: calc(var(--spacing) * 8);\n  }\n  .size-10 {\n    width: calc(var(--spacing) * 10);\n    height: calc(var(--spacing) * 10);\n  }\n  .size-11 {\n    width: calc(var(--spacing) * 11);\n    height: calc(var(--spacing) * 11);\n  }\n  .size-12 {\n    width: calc(var(--spacing) * 12);\n    height: calc(var(--spacing) * 12);\n  }\n  .size-16 {\n    width: calc(var(--spacing) * 16);\n    height: calc(var(--spacing) * 16);\n  }\n  .size-full {\n    width: 100%;\n    height: 100%;\n  }\n  .h-1 {\n    height: var(--spacing);\n  }\n  .h-1\\.5 {\n    height: calc(var(--spacing) * 1.5);\n  }\n  .h-3 {\n    height: calc(var(--spacing) * 3);\n  }\n  .h-8 {\n    height: calc(var(--spacing) * 8);\n  }\n  .h-9 {\n    height: calc(var(--spacing) * 9);\n  }\n  .h-10 {\n    height: calc(var(--spacing) * 10);\n  }\n  .h-11 {\n    height: calc(var(--spacing) * 11);\n  }\n  .h-12 {\n    height: calc(var(--spacing) * 12);\n  }\n  .h-\\[222px\\] {\n    height: 222px;\n  }\n  .h-full {\n    height: 100%;\n  }\n  .max-h-\\[560px\\] {\n    max-height: 560px;\n  }\n  .min-h-\\[66px\\] {\n    min-height: 66px;\n  }\n  .min-h-\\[360px\\] {\n    min-height: 360px;\n  }\n  .min-h-\\[calc\\(100vh-2\\.5rem\\)\\] {\n    min-height: calc(100vh - 2.5rem);\n  }\n  .min-h-full {\n    min-height: 100%;\n  }\n  .min-h-screen {\n    min-height: 100vh;\n  }\n  .w-1 {\n    width: var(--spacing);\n  }\n  .w-\\[352px\\] {\n    width: 352px;\n  }\n  .w-\\[calc\\(100\\%-2\\.5rem\\)\\] {\n    width: calc(100% - 2.5rem);\n  }\n  .w-fit {\n    width: fit-content;\n  }\n  .w-full {\n    width: 100%;\n  }\n  .max-w-\\[285px\\] {\n    max-width: 285px;\n  }\n  .max-w-\\[560px\\] {\n    max-width: 560px;\n  }\n  .max-w-\\[610px\\] {\n    max-width: 610px;\n  }\n  .max-w-\\[620px\\] {\n    max-width: 620px;\n  }\n  .max-w-\\[670px\\] {\n    max-width: 670px;\n  }\n  .max-w-\\[690px\\] {\n    max-width: 690px;\n  }\n  .max-w-\\[860px\\] {\n    max-width: 860px;\n  }\n  .max-w-\\[1120px\\] {\n    max-width: 1120px;\n  }\n  .max-w-\\[1220px\\] {\n    max-width: 1220px;\n  }\n  .max-w-\\[1240px\\] {\n    max-width: 1240px;\n  }\n  .max-w-xl {\n    max-width: var(--container-xl);\n  }\n  .min-w-0 {\n    min-width: 0;\n  }\n  .flex-1 {\n    flex: 1;\n  }\n  .flex-shrink {\n    flex-shrink: 1;\n  }\n  .shrink {\n    flex-shrink: 1;\n  }\n  .shrink-0 {\n    flex-shrink: 0;\n  }\n  .flex-grow {\n    flex-grow: 1;\n  }\n  .grow {\n    flex-grow: 1;\n  }\n  .border-collapse {\n    border-collapse: collapse;\n  }\n  .origin-left {\n    transform-origin: 0;\n  }\n  .transform {\n    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);\n  }\n  .animate-\\[interviewer-overlay-enter_420ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_80ms_both\\] {\n    animation: interviewer-overlay-enter 420ms cubic-bezier(.16,1,.3,1) 80ms both;\n  }\n  .animate-\\[interviewer-overlay-enter_420ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_140ms_both\\] {\n    animation: interviewer-overlay-enter 420ms cubic-bezier(.16,1,.3,1) 140ms both;\n  }\n  .animate-\\[interviewer-overlay-enter_420ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_both\\] {\n    animation: interviewer-overlay-enter 420ms cubic-bezier(.16,1,.3,1) both;\n  }\n  .animate-\\[interviewer-overlay-enter_620ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_420ms_both\\] {\n    animation: interviewer-overlay-enter 620ms cubic-bezier(.16,1,.3,1) 420ms both;\n  }\n  .animate-\\[interviewer-overlay-enter_620ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_both\\] {\n    animation: interviewer-overlay-enter 620ms cubic-bezier(.16,1,.3,1) both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_90ms_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) 90ms both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_140ms_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) 140ms both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_170ms_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) 170ms both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_190ms_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) 190ms both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_230ms_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) 230ms both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_240ms_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) 240ms both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_290ms_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) 290ms both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_310ms_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) 310ms both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_350ms_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) 350ms both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_380ms_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) 380ms both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_400ms_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) 400ms both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_450ms_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) 450ms both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_500ms_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) 500ms both;\n  }\n  .animate-\\[panel-rise-in_520ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_both\\] {\n    animation: panel-rise-in 520ms cubic-bezier(.16,1,.3,1) both;\n  }\n  .animate-\\[panel-rise-in_560ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_460ms_both\\] {\n    animation: panel-rise-in 560ms cubic-bezier(.16,1,.3,1) 460ms both;\n  }\n  .animate-\\[panel-rise-in_560ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_560ms_both\\] {\n    animation: panel-rise-in 560ms cubic-bezier(.16,1,.3,1) 560ms both;\n  }\n  .animate-\\[panel-rise-in_560ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_570ms_both\\] {\n    animation: panel-rise-in 560ms cubic-bezier(.16,1,.3,1) 570ms both;\n  }\n  .animate-\\[panel-rise-in_560ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_640ms_both\\] {\n    animation: panel-rise-in 560ms cubic-bezier(.16,1,.3,1) 640ms both;\n  }\n  .animate-\\[panel-rise-in_560ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_720ms_both\\] {\n    animation: panel-rise-in 560ms cubic-bezier(.16,1,.3,1) 720ms both;\n  }\n  .animate-\\[panel-rise-in_560ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_800ms_both\\] {\n    animation: panel-rise-in 560ms cubic-bezier(.16,1,.3,1) 800ms both;\n  }\n  .animate-\\[row-fade-in_380ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_both\\] {\n    animation: row-fade-in 380ms cubic-bezier(.16,1,.3,1) both;\n  }\n  .animate-\\[row-fade-in_420ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_both\\] {\n    animation: row-fade-in 420ms cubic-bezier(.16,1,.3,1) both;\n  }\n  .animate-\\[score-bar-fill_760ms_cubic-bezier\\(\\.16\\,1\\,\\.3\\,1\\)_both\\] {\n    animation: score-bar-fill 760ms cubic-bezier(.16,1,.3,1) both;\n  }\n  .cursor-grab {\n    cursor: grab;\n  }\n  .touch-none {\n    touch-action: none;\n  }\n  .resize {\n    resize: both;\n  }\n  .list-decimal {\n    list-style-type: decimal;\n  }\n  .grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-\\[1fr_auto_48px\\] {\n    grid-template-columns: 1fr auto 48px;\n  }\n  .grid-cols-\\[40px_1fr_auto\\] {\n    grid-template-columns: 40px 1fr auto;\n  }\n  .grid-cols-\\[138px_1fr_72px\\] {\n    grid-template-columns: 138px 1fr 72px;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n  .place-items-center {\n    place-items: center;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .gap-1 {\n    gap: var(--spacing);\n  }\n  .gap-2 {\n    gap: calc(var(--spacing) * 2);\n  }\n  .gap-3 {\n    gap: calc(var(--spacing) * 3);\n  }\n  .gap-4 {\n    gap: calc(var(--spacing) * 4);\n  }\n  .gap-5 {\n    gap: calc(var(--spacing) * 5);\n  }\n  .gap-6 {\n    gap: calc(var(--spacing) * 6);\n  }\n  .gap-7 {\n    gap: calc(var(--spacing) * 7);\n  }\n  .gap-10 {\n    gap: calc(var(--spacing) * 10);\n  }\n  .space-y-1 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(var(--spacing) * var(--tw-space-y-reverse));\n      margin-block-end: calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-3 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-4 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-5 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .divide-y {\n    :where(& > :not(:last-child)) {\n      --tw-divide-y-reverse: 0;\n      border-bottom-style: var(--tw-border-style);\n      border-top-style: var(--tw-border-style);\n      border-top-width: calc(1px * var(--tw-divide-y-reverse));\n      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n    }\n  }\n  .divide-white {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-white);\n    }\n  }\n  .divide-white\\/5 {\n    :where(& > :not(:last-child)) {\n      border-color: color-mix(in srgb, #fff 5%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-white) 5%, transparent);\n      }\n    }\n  }\n  .truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .overflow-hidden {\n    overflow: hidden;\n  }\n  .overflow-y-auto {\n    overflow-y: auto;\n  }\n  .rounded-2xl {\n    border-radius: var(--radius-2xl);\n  }\n  .rounded-\\[1\\.6rem\\] {\n    border-radius: 1.6rem;\n  }\n  .rounded-\\[1\\.25rem\\] {\n    border-radius: 1.25rem;\n  }\n  .rounded-\\[1\\.45rem\\] {\n    border-radius: 1.45rem;\n  }\n  .rounded-full {\n    border-radius: calc(infinity * 1px);\n  }\n  .rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .rounded-md {\n    border-radius: var(--radius-md);\n  }\n  .rounded-xl {\n    border-radius: var(--radius-xl);\n  }\n  .border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .border-0 {\n    border-style: var(--tw-border-style);\n    border-width: 0px;\n  }\n  .border-b {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 1px;\n  }\n  .border-dashed {\n    --tw-border-style: dashed;\n    border-style: dashed;\n  }\n  .border-amber-400 {\n    border-color: var(--color-amber-400);\n  }\n  .border-amber-400\\/20 {\n    border-color: color-mix(in srgb, oklch(82.8% 0.189 84.429) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-amber-400) 20%, transparent);\n    }\n  }\n  .border-emerald-500 {\n    border-color: var(--color-emerald-500);\n  }\n  .border-emerald-500\\/45 {\n    border-color: color-mix(in srgb, oklch(69.6% 0.17 162.48) 45%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-emerald-500) 45%, transparent);\n    }\n  }\n  .border-lime-400 {\n    border-color: var(--color-lime-400);\n  }\n  .border-lime-400\\/20 {\n    border-color: color-mix(in srgb, oklch(84.1% 0.238 128.85) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-lime-400) 20%, transparent);\n    }\n  }\n  .border-lime-400\\/25 {\n    border-color: color-mix(in srgb, oklch(84.1% 0.238 128.85) 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-lime-400) 25%, transparent);\n    }\n  }\n  .border-red-400 {\n    border-color: var(--color-red-400);\n  }\n  .border-red-400\\/20 {\n    border-color: color-mix(in srgb, oklch(70.4% 0.191 22.216) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-red-400) 20%, transparent);\n    }\n  }\n  .border-white {\n    border-color: var(--color-white);\n  }\n  .border-white\\/5 {\n    border-color: color-mix(in srgb, #fff 5%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-white) 5%, transparent);\n    }\n  }\n  .border-white\\/10 {\n    border-color: color-mix(in srgb, #fff 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-white) 10%, transparent);\n    }\n  }\n  .border-white\\/15 {\n    border-color: color-mix(in srgb, #fff 15%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-white) 15%, transparent);\n    }\n  }\n  .border-white\\/25 {\n    border-color: color-mix(in srgb, #fff 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-white) 25%, transparent);\n    }\n  }\n  .bg-\\[\\#0b0b0b\\] {\n    background-color: #0b0b0b;\n  }\n  .bg-\\[\\#0b0b0c\\] {\n    background-color: #0b0b0c;\n  }\n  .bg-\\[\\#1c1c1b\\] {\n    background-color: #1c1c1b;\n  }\n  .bg-\\[\\#1d1d1b\\]\\/95 {\n    background-color: color-mix(in oklab, #1d1d1b 95%, transparent);\n  }\n  .bg-\\[\\#1d1d1b\\]\\/96 {\n    background-color: color-mix(in oklab, #1d1d1b 96%, transparent);\n  }\n  .bg-\\[\\#1f1f1d\\] {\n    background-color: #1f1f1d;\n  }\n  .bg-\\[\\#2a2a28\\] {\n    background-color: #2a2a28;\n  }\n  .bg-\\[\\#10100f\\]\\/95 {\n    background-color: color-mix(in oklab, #10100f 95%, transparent);\n  }\n  .bg-\\[\\#33332f\\] {\n    background-color: #33332f;\n  }\n  .bg-\\[\\#111110\\] {\n    background-color: #111110;\n  }\n  .bg-\\[\\#111111\\] {\n    background-color: #111111;\n  }\n  .bg-\\[\\#141416\\] {\n    background-color: #141416;\n  }\n  .bg-\\[\\#151514\\] {\n    background-color: #151514;\n  }\n  .bg-\\[\\#161618\\] {\n    background-color: #161618;\n  }\n  .bg-\\[\\#171716\\] {\n    background-color: #171716;\n  }\n  .bg-\\[\\#171717\\] {\n    background-color: #171717;\n  }\n  .bg-\\[\\#181817\\] {\n    background-color: #181817;\n  }\n  .bg-\\[\\#191917\\] {\n    background-color: #191917;\n  }\n  .bg-\\[\\#202020\\] {\n    background-color: #202020;\n  }\n  .bg-\\[\\#232326\\] {\n    background-color: #232326;\n  }\n  .bg-\\[\\#262624\\] {\n    background-color: #262624;\n  }\n  .bg-\\[\\#282826\\] {\n    background-color: #282826;\n  }\n  .bg-\\[\\#a7e079\\] {\n    background-color: #a7e079;\n  }\n  .bg-\\[\\#ff7b7b\\] {\n    background-color: #ff7b7b;\n  }\n  .bg-\\[\\#ffd36b\\] {\n    background-color: #ffd36b;\n  }\n  .bg-amber-300 {\n    background-color: var(--color-amber-300);\n  }\n  .bg-amber-400 {\n    background-color: var(--color-amber-400);\n  }\n  .bg-amber-400\\/10 {\n    background-color: color-mix(in srgb, oklch(82.8% 0.189 84.429) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-amber-400) 10%, transparent);\n    }\n  }\n  .bg-amber-500 {\n    background-color: var(--color-amber-500);\n  }\n  .bg-amber-500\\/15 {\n    background-color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 15%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-amber-500) 15%, transparent);\n    }\n  }\n  .bg-black {\n    background-color: var(--color-black);\n  }\n  .bg-blue-400 {\n    background-color: var(--color-blue-400);\n  }\n  .bg-blue-500 {\n    background-color: var(--color-blue-500);\n  }\n  .bg-blue-500\\/15 {\n    background-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 15%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-blue-500) 15%, transparent);\n    }\n  }\n  .bg-emerald-400 {\n    background-color: var(--color-emerald-400);\n  }\n  .bg-emerald-500 {\n    background-color: var(--color-emerald-500);\n  }\n  .bg-emerald-500\\/5 {\n    background-color: color-mix(in srgb, oklch(69.6% 0.17 162.48) 5%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-emerald-500) 5%, transparent);\n    }\n  }\n  .bg-emerald-500\\/15 {\n    background-color: color-mix(in srgb, oklch(69.6% 0.17 162.48) 15%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-emerald-500) 15%, transparent);\n    }\n  }\n  .bg-lime-100 {\n    background-color: var(--color-lime-100);\n  }\n  .bg-lime-400 {\n    background-color: var(--color-lime-400);\n  }\n  .bg-lime-400\\/10 {\n    background-color: color-mix(in srgb, oklch(84.1% 0.238 128.85) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-lime-400) 10%, transparent);\n    }\n  }\n  .bg-lime-500 {\n    background-color: var(--color-lime-500);\n  }\n  .bg-lime-500\\/10 {\n    background-color: color-mix(in srgb, oklch(76.8% 0.233 130.85) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-lime-500) 10%, transparent);\n    }\n  }\n  .bg-lime-500\\/20 {\n    background-color: color-mix(in srgb, oklch(76.8% 0.233 130.85) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-lime-500) 20%, transparent);\n    }\n  }\n  .bg-red-400 {\n    background-color: var(--color-red-400);\n  }\n  .bg-red-400\\/10 {\n    background-color: color-mix(in srgb, oklch(70.4% 0.191 22.216) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-red-400) 10%, transparent);\n    }\n  }\n  .bg-red-500 {\n    background-color: var(--color-red-500);\n  }\n  .bg-red-500\\/15 {\n    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 15%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-red-500) 15%, transparent);\n    }\n  }\n  .bg-transparent {\n    background-color: transparent;\n  }\n  .bg-white {\n    background-color: var(--color-white);\n  }\n  .bg-white\\/2 {\n    background-color: color-mix(in srgb, #fff 2%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-white) 2%, transparent);\n    }\n  }\n  .bg-white\\/5 {\n    background-color: color-mix(in srgb, #fff 5%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-white) 5%, transparent);\n    }\n  }\n  .bg-zinc-500 {\n    background-color: var(--color-zinc-500);\n  }\n  .bg-zinc-700 {\n    background-color: var(--color-zinc-700);\n  }\n  .bg-zinc-800 {\n    background-color: var(--color-zinc-800);\n  }\n  .bg-zinc-900 {\n    background-color: var(--color-zinc-900);\n  }\n  .bg-zinc-900\\/95 {\n    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 95%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-zinc-900) 95%, transparent);\n    }\n  }\n  .bg-linear-to-br {\n    --tw-gradient-position: to bottom right;\n    @supports (background-image: linear-gradient(in lab, red, red)) {\n      --tw-gradient-position: to bottom right in oklab;\n    }\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-linear-to-r {\n    --tw-gradient-position: to right;\n    @supports (background-image: linear-gradient(in lab, red, red)) {\n      --tw-gradient-position: to right in oklab;\n    }\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-linear-to-t {\n    --tw-gradient-position: to top;\n    @supports (background-image: linear-gradient(in lab, red, red)) {\n      --tw-gradient-position: to top in oklab;\n    }\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .from-black {\n    --tw-gradient-from: var(--color-black);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-black\\/5 {\n    --tw-gradient-from: color-mix(in srgb, #000 5%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-gradient-from: color-mix(in oklab, var(--color-black) 5%, transparent);\n    }\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-black\\/30 {\n    --tw-gradient-from: color-mix(in srgb, #000 30%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-gradient-from: color-mix(in oklab, var(--color-black) 30%, transparent);\n    }\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-lime-300 {\n    --tw-gradient-from: var(--color-lime-300);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .via-transparent {\n    --tw-gradient-via: transparent;\n    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-via-stops);\n  }\n  .to-black {\n    --tw-gradient-to: var(--color-black);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-black\\/45 {\n    --tw-gradient-to: color-mix(in srgb, #000 45%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-gradient-to: color-mix(in oklab, var(--color-black) 45%, transparent);\n    }\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-emerald-600 {\n    --tw-gradient-to: var(--color-emerald-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-transparent {\n    --tw-gradient-to: transparent;\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .object-cover {\n    object-fit: cover;\n  }\n  .object-\\[50\\%_18\\%\\] {\n    object-position: 50% 18%;\n  }\n  .p-0 {\n    padding: 0;\n  }\n  .p-1 {\n    padding: var(--spacing);\n  }\n  .p-3 {\n    padding: calc(var(--spacing) * 3);\n  }\n  .p-4 {\n    padding: calc(var(--spacing) * 4);\n  }\n  .p-5 {\n    padding: calc(var(--spacing) * 5);\n  }\n  .p-6 {\n    padding: calc(var(--spacing) * 6);\n  }\n  .p-7 {\n    padding: calc(var(--spacing) * 7);\n  }\n  .p-8 {\n    padding: calc(var(--spacing) * 8);\n  }\n  .px-1 {\n    padding-inline: var(--spacing);\n  }\n  .px-2 {\n    padding-inline: calc(var(--spacing) * 2);\n  }\n  .px-3 {\n    padding-inline: calc(var(--spacing) * 3);\n  }\n  .px-4 {\n    padding-inline: calc(var(--spacing) * 4);\n  }\n  .px-5 {\n    padding-inline: calc(var(--spacing) * 5);\n  }\n  .px-6 {\n    padding-inline: calc(var(--spacing) * 6);\n  }\n  .px-7 {\n    padding-inline: calc(var(--spacing) * 7);\n  }\n  .py-1 {\n    padding-block: var(--spacing);\n  }\n  .py-1\\.5 {\n    padding-block: calc(var(--spacing) * 1.5);\n  }\n  .py-2 {\n    padding-block: calc(var(--spacing) * 2);\n  }\n  .py-3 {\n    padding-block: calc(var(--spacing) * 3);\n  }\n  .py-4 {\n    padding-block: calc(var(--spacing) * 4);\n  }\n  .py-5 {\n    padding-block: calc(var(--spacing) * 5);\n  }\n  .py-6 {\n    padding-block: calc(var(--spacing) * 6);\n  }\n  .py-8 {\n    padding-block: calc(var(--spacing) * 8);\n  }\n  .py-9 {\n    padding-block: calc(var(--spacing) * 9);\n  }\n  .py-12 {\n    padding-block: calc(var(--spacing) * 12);\n  }\n  .pt-2 {\n    padding-top: calc(var(--spacing) * 2);\n  }\n  .pt-16 {\n    padding-top: calc(var(--spacing) * 16);\n  }\n  .pr-2 {\n    padding-right: calc(var(--spacing) * 2);\n  }\n  .pb-3 {\n    padding-bottom: calc(var(--spacing) * 3);\n  }\n  .pb-4 {\n    padding-bottom: calc(var(--spacing) * 4);\n  }\n  .pb-5 {\n    padding-bottom: calc(var(--spacing) * 5);\n  }\n  .pb-8 {\n    padding-bottom: calc(var(--spacing) * 8);\n  }\n  .pl-5 {\n    padding-left: calc(var(--spacing) * 5);\n  }\n  .text-center {\n    text-align: center;\n  }\n  .text-left {\n    text-align: left;\n  }\n  .text-right {\n    text-align: right;\n  }\n  .font-mono {\n    font-family: var(--font-mono);\n  }\n  .text-2xl {\n    font-size: var(--text-2xl);\n    line-height: var(--tw-leading, var(--text-2xl--line-height));\n  }\n  .text-3xl {\n    font-size: var(--text-3xl);\n    line-height: var(--tw-leading, var(--text-3xl--line-height));\n  }\n  .text-base {\n    font-size: var(--text-base);\n    line-height: var(--tw-leading, var(--text-base--line-height));\n  }\n  .text-lg {\n    font-size: var(--text-lg);\n    line-height: var(--tw-leading, var(--text-lg--line-height));\n  }\n  .text-sm {\n    font-size: var(--text-sm);\n    line-height: var(--tw-leading, var(--text-sm--line-height));\n  }\n  .text-xl {\n    font-size: var(--text-xl);\n    line-height: var(--tw-leading, var(--text-xl--line-height));\n  }\n  .text-xs {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n  }\n  .text-\\[11px\\] {\n    font-size: 11px;\n  }\n  .text-\\[12px\\] {\n    font-size: 12px;\n  }\n  .text-\\[14px\\] {\n    font-size: 14px;\n  }\n  .text-\\[15px\\] {\n    font-size: 15px;\n  }\n  .text-\\[38px\\] {\n    font-size: 38px;\n  }\n  .text-\\[42px\\] {\n    font-size: 42px;\n  }\n  .leading-5 {\n    --tw-leading: calc(var(--spacing) * 5);\n    line-height: calc(var(--spacing) * 5);\n  }\n  .leading-6 {\n    --tw-leading: calc(var(--spacing) * 6);\n    line-height: calc(var(--spacing) * 6);\n  }\n  .leading-7 {\n    --tw-leading: calc(var(--spacing) * 7);\n    line-height: calc(var(--spacing) * 7);\n  }\n  .leading-\\[0\\.96\\] {\n    --tw-leading: 0.96;\n    line-height: 0.96;\n  }\n  .leading-tight {\n    --tw-leading: var(--leading-tight);\n    line-height: var(--leading-tight);\n  }\n  .font-black {\n    --tw-font-weight: var(--font-weight-black);\n    font-weight: var(--font-weight-black);\n  }\n  .font-bold {\n    --tw-font-weight: var(--font-weight-bold);\n    font-weight: var(--font-weight-bold);\n  }\n  .font-medium {\n    --tw-font-weight: var(--font-weight-medium);\n    font-weight: var(--font-weight-medium);\n  }\n  .font-semibold {\n    --tw-font-weight: var(--font-weight-semibold);\n    font-weight: var(--font-weight-semibold);\n  }\n  .tracking-\\[-0\\.02em\\] {\n    --tw-tracking: -0.02em;\n    letter-spacing: -0.02em;\n  }\n  .tracking-\\[-0\\.03em\\] {\n    --tw-tracking: -0.03em;\n    letter-spacing: -0.03em;\n  }\n  .tracking-\\[-0\\.04em\\] {\n    --tw-tracking: -0.04em;\n    letter-spacing: -0.04em;\n  }\n  .tracking-\\[-0\\.045em\\] {\n    --tw-tracking: -0.045em;\n    letter-spacing: -0.045em;\n  }\n  .tracking-\\[0\\.12em\\] {\n    --tw-tracking: 0.12em;\n    letter-spacing: 0.12em;\n  }\n  .tracking-\\[0\\.14em\\] {\n    --tw-tracking: 0.14em;\n    letter-spacing: 0.14em;\n  }\n  .tracking-\\[0\\.16em\\] {\n    --tw-tracking: 0.16em;\n    letter-spacing: 0.16em;\n  }\n  .tracking-wide {\n    --tw-tracking: var(--tracking-wide);\n    letter-spacing: var(--tracking-wide);\n  }\n  .text-balance {\n    text-wrap: balance;\n  }\n  .text-wrap {\n    text-wrap: wrap;\n  }\n  .whitespace-nowrap {\n    white-space: nowrap;\n  }\n  .text-amber-50 {\n    color: var(--color-amber-50);\n  }\n  .text-amber-100 {\n    color: var(--color-amber-100);\n  }\n  .text-amber-300 {\n    color: var(--color-amber-300);\n  }\n  .text-amber-500 {\n    color: var(--color-amber-500);\n  }\n  .text-blue-300 {\n    color: var(--color-blue-300);\n  }\n  .text-emerald-400 {\n    color: var(--color-emerald-400);\n  }\n  .text-gray-500 {\n    color: var(--color-gray-500);\n  }\n  .text-lime-100 {\n    color: var(--color-lime-100);\n  }\n  .text-lime-200 {\n    color: var(--color-lime-200);\n  }\n  .text-lime-400 {\n    color: var(--color-lime-400);\n  }\n  .text-lime-500 {\n    color: var(--color-lime-500);\n  }\n  .text-red-200 {\n    color: var(--color-red-200);\n  }\n  .text-red-400 {\n    color: var(--color-red-400);\n  }\n  .text-white {\n    color: var(--color-white);\n  }\n  .text-zinc-50 {\n    color: var(--color-zinc-50);\n  }\n  .text-zinc-100 {\n    color: var(--color-zinc-100);\n  }\n  .text-zinc-200 {\n    color: var(--color-zinc-200);\n  }\n  .text-zinc-300 {\n    color: var(--color-zinc-300);\n  }\n  .text-zinc-400 {\n    color: var(--color-zinc-400);\n  }\n  .text-zinc-500 {\n    color: var(--color-zinc-500);\n  }\n  .text-zinc-600 {\n    color: var(--color-zinc-600);\n  }\n  .text-zinc-950 {\n    color: var(--color-zinc-950);\n  }\n  .lowercase {\n    text-transform: lowercase;\n  }\n  .uppercase {\n    text-transform: uppercase;\n  }\n  .italic {\n    font-style: italic;\n  }\n  .overline {\n    text-decoration-line: overline;\n  }\n  .underline {\n    text-decoration-line: underline;\n  }\n  .antialiased {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  .shadow-2xl {\n    --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, rgb(0 0 0 / 0.25));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_0_10px_rgba\\(132\\,204\\,22\\,0\\.3\\)\\] {\n    --tw-shadow: 0 0 10px var(--tw-shadow-color, rgba(132,204,22,0.3));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_0_10px_rgba\\(132\\,204\\,22\\,0\\.25\\)\\] {\n    --tw-shadow: 0 0 10px var(--tw-shadow-color, rgba(132,204,22,0.25));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_0_12px_rgba\\(132\\,204\\,22\\,0\\.65\\)\\] {\n    --tw-shadow: 0 0 12px var(--tw-shadow-color, rgba(132,204,22,0.65));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_0_30px_rgba\\(34\\,197\\,94\\,0\\.25\\)\\] {\n    --tw-shadow: 0 0 30px var(--tw-shadow-color, rgba(34,197,94,0.25));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_24px_70px_rgba\\(0\\,0\\,0\\,0\\.55\\)\\] {\n    --tw-shadow: 0 24px 70px var(--tw-shadow-color, rgba(0,0,0,0.55));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_28px_80px_rgba\\(0\\,0\\,0\\,0\\.55\\)\\] {\n    --tw-shadow: 0 28px 80px var(--tw-shadow-color, rgba(0,0,0,0.55));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_28px_90px_rgba\\(0\\,0\\,0\\,0\\.35\\)\\] {\n    --tw-shadow: 0 28px 90px var(--tw-shadow-color, rgba(0,0,0,0.35));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_32px_120px_rgba\\(0\\,0\\,0\\,0\\.45\\)\\] {\n    --tw-shadow: 0 32px 120px var(--tw-shadow-color, rgba(0,0,0,0.45));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_32px_120px_rgba\\(0\\,0\\,0\\,0\\.55\\)\\] {\n    --tw-shadow: 0 32px 120px var(--tw-shadow-color, rgba(0,0,0,0.55));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[inset_0_0_0_1px_rgba\\(255\\,255\\,255\\,0\\.03\\)\\] {\n    --tw-shadow: inset 0 0 0 1px var(--tw-shadow-color, rgba(255,255,255,0.03));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[inset_0_1px_0_rgba\\(255\\,255\\,255\\,0\\.03\\)\\] {\n    --tw-shadow: inset 0 1px 0 var(--tw-shadow-color, rgba(255,255,255,0.03));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[inset_0_1px_0_rgba\\(255\\,255\\,255\\,0\\.04\\)\\] {\n    --tw-shadow: inset 0 1px 0 var(--tw-shadow-color, rgba(255,255,255,0.04));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[inset_0_1px_0_rgba\\(255\\,255\\,255\\,0\\.05\\)\\] {\n    --tw-shadow: inset 0 1px 0 var(--tw-shadow-color, rgba(255,255,255,0.05));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[inset_0_1px_0_rgba\\(255\\,255\\,255\\,0\\.08\\)\\] {\n    --tw-shadow: inset 0 1px 0 var(--tw-shadow-color, rgba(255,255,255,0.08));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[inset_0_1px_0_rgba\\(255\\,255\\,255\\,0\\.12\\)\\] {\n    --tw-shadow: inset 0 1px 0 var(--tw-shadow-color, rgba(255,255,255,0.12));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[inset_0_1px_0_rgba\\(255\\,255\\,255\\,0\\.65\\)\\] {\n    --tw-shadow: inset 0 1px 0 var(--tw-shadow-color, rgba(255,255,255,0.65));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-none {\n    --tw-shadow: 0 0 #0000;\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-black {\n    --tw-shadow-color: #000;\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-shadow-color: color-mix(in oklab, var(--color-black) var(--tw-shadow-alpha), transparent);\n    }\n  }\n  .shadow-black\\/40 {\n    --tw-shadow-color: color-mix(in srgb, #000 40%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-black) 40%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n  .outline {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n  .blur {\n    --tw-blur: blur(8px);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .filter {\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .backdrop-blur {\n    --tw-backdrop-blur: blur(8px);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-blur-sm {\n    --tw-backdrop-blur: blur(var(--blur-sm));\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-filter {\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .transition {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-colors {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .last\\:border-b-0 {\n    &:last-child {\n      border-bottom-style: var(--tw-border-style);\n      border-bottom-width: 0px;\n    }\n  }\n  .last\\:pb-0 {\n    &:last-child {\n      padding-bottom: 0;\n    }\n  }\n  .hover\\:bg-\\[\\#343431\\] {\n    &:hover {\n      @media (hover: hover) {\n        background-color: #343431;\n      }\n    }\n  }\n  .hover\\:bg-lime-200 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-lime-200);\n      }\n    }\n  }\n  .hover\\:bg-lime-300 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-lime-300);\n      }\n    }\n  }\n  .hover\\:bg-white\\/5 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, #fff 5%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-white) 5%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-white\\/10 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, #fff 10%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-white) 10%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-zinc-100 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-zinc-100);\n      }\n    }\n  }\n  .hover\\:bg-zinc-800 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-zinc-800);\n      }\n    }\n  }\n  .hover\\:text-white {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-white);\n      }\n    }\n  }\n  .focus-visible\\:ring-2 {\n    &:focus-visible {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus-visible\\:ring-lime-400\\/70 {\n    &:focus-visible {\n      --tw-ring-color: color-mix(in srgb, oklch(84.1% 0.238 128.85) 70%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-lime-400) 70%, transparent);\n      }\n    }\n  }\n  .focus-visible\\:outline-none {\n    &:focus-visible {\n      --tw-outline-style: none;\n      outline-style: none;\n    }\n  }\n  .active\\:cursor-grabbing {\n    &:active {\n      cursor: grabbing;\n    }\n  }\n  .disabled\\:pointer-events-none {\n    &:disabled {\n      pointer-events: none;\n    }\n  }\n  .disabled\\:opacity-50 {\n    &:disabled {\n      opacity: 50%;\n    }\n  }\n  .sm\\:inline {\n    @media (width >= 40rem) {\n      display: inline;\n    }\n  }\n  .sm\\:min-h-\\[520px\\] {\n    @media (width >= 40rem) {\n      min-height: 520px;\n    }\n  }\n  .sm\\:grid-cols-3 {\n    @media (width >= 40rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .sm\\:flex-row {\n    @media (width >= 40rem) {\n      flex-direction: row;\n    }\n  }\n  .sm\\:px-6 {\n    @media (width >= 40rem) {\n      padding-inline: calc(var(--spacing) * 6);\n    }\n  }\n  .sm\\:px-8 {\n    @media (width >= 40rem) {\n      padding-inline: calc(var(--spacing) * 8);\n    }\n  }\n  .sm\\:pt-20 {\n    @media (width >= 40rem) {\n      padding-top: calc(var(--spacing) * 20);\n    }\n  }\n  .sm\\:text-4xl {\n    @media (width >= 40rem) {\n      font-size: var(--text-4xl);\n      line-height: var(--tw-leading, var(--text-4xl--line-height));\n    }\n  }\n  .sm\\:text-5xl {\n    @media (width >= 40rem) {\n      font-size: var(--text-5xl);\n      line-height: var(--tw-leading, var(--text-5xl--line-height));\n    }\n  }\n  .sm\\:text-base {\n    @media (width >= 40rem) {\n      font-size: var(--text-base);\n      line-height: var(--tw-leading, var(--text-base--line-height));\n    }\n  }\n  .sm\\:text-lg {\n    @media (width >= 40rem) {\n      font-size: var(--text-lg);\n      line-height: var(--tw-leading, var(--text-lg--line-height));\n    }\n  }\n  .md\\:top-4 {\n    @media (width >= 48rem) {\n      top: calc(var(--spacing) * 4);\n    }\n  }\n  .md\\:right-7 {\n    @media (width >= 48rem) {\n      right: calc(var(--spacing) * 7);\n    }\n  }\n  .md\\:bottom-auto {\n    @media (width >= 48rem) {\n      bottom: auto;\n    }\n  }\n  .md\\:left-auto {\n    @media (width >= 48rem) {\n      left: auto;\n    }\n  }\n  .md\\:flex {\n    @media (width >= 48rem) {\n      display: flex;\n    }\n  }\n  .md\\:w-\\[350px\\] {\n    @media (width >= 48rem) {\n      width: 350px;\n    }\n  }\n  .md\\:grid-cols-2 {\n    @media (width >= 48rem) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .md\\:grid-cols-3 {\n    @media (width >= 48rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .md\\:flex-row {\n    @media (width >= 48rem) {\n      flex-direction: row;\n    }\n  }\n  .md\\:items-center {\n    @media (width >= 48rem) {\n      align-items: center;\n    }\n  }\n  .md\\:items-end {\n    @media (width >= 48rem) {\n      align-items: flex-end;\n    }\n  }\n  .md\\:justify-between {\n    @media (width >= 48rem) {\n      justify-content: space-between;\n    }\n  }\n  .md\\:p-6 {\n    @media (width >= 48rem) {\n      padding: calc(var(--spacing) * 6);\n    }\n  }\n  .lg\\:grid-cols-2 {\n    @media (width >= 64rem) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .lg\\:grid-cols-3 {\n    @media (width >= 64rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .lg\\:grid-cols-4 {\n    @media (width >= 64rem) {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  .lg\\:grid-cols-\\[1\\.35fr_0\\.95fr\\] {\n    @media (width >= 64rem) {\n      grid-template-columns: 1.35fr 0.95fr;\n    }\n  }\n  .lg\\:grid-cols-\\[1fr_440px\\] {\n    @media (width >= 64rem) {\n      grid-template-columns: 1fr 440px;\n    }\n  }\n  .lg\\:px-8 {\n    @media (width >= 64rem) {\n      padding-inline: calc(var(--spacing) * 8);\n    }\n  }\n  .lg\\:px-10 {\n    @media (width >= 64rem) {\n      padding-inline: calc(var(--spacing) * 10);\n    }\n  }\n  .lg\\:px-12 {\n    @media (width >= 64rem) {\n      padding-inline: calc(var(--spacing) * 12);\n    }\n  }\n  .lg\\:py-16 {\n    @media (width >= 64rem) {\n      padding-block: calc(var(--spacing) * 16);\n    }\n  }\n  .lg\\:text-\\[58px\\] {\n    @media (width >= 64rem) {\n      font-size: 58px;\n    }\n  }\n  .lg\\:text-\\[64px\\] {\n    @media (width >= 64rem) {\n      font-size: 64px;\n    }\n  }\n  .xl\\:grid-cols-4 {\n    @media (width >= 80rem) {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n}\n@font-face {\n  font-family: 'Geist Variable';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 100 900;\n  src: url(../node_modules/.pnpm/@fontsource-variable+geist@5.2.9/node_modules/@fontsource-variable/geist/files/geist-cyrillic-ext-wght-normal.woff2) format('woff2-variations');\n  unicode-range: U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;\n}\n@font-face {\n  font-family: 'Geist Variable';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 100 900;\n  src: url(../node_modules/.pnpm/@fontsource-variable+geist@5.2.9/node_modules/@fontsource-variable/geist/files/geist-cyrillic-wght-normal.woff2) format('woff2-variations');\n  unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;\n}\n@font-face {\n  font-family: 'Geist Variable';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 100 900;\n  src: url(../node_modules/.pnpm/@fontsource-variable+geist@5.2.9/node_modules/@fontsource-variable/geist/files/geist-vietnamese-wght-normal.woff2) format('woff2-variations');\n  unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;\n}\n@font-face {\n  font-family: 'Geist Variable';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 100 900;\n  src: url(../node_modules/.pnpm/@fontsource-variable+geist@5.2.9/node_modules/@fontsource-variable/geist/files/geist-latin-ext-wght-normal.woff2) format('woff2-variations');\n  unicode-range: U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;\n}\n@font-face {\n  font-family: 'Geist Variable';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 100 900;\n  src: url(../node_modules/.pnpm/@fontsource-variable+geist@5.2.9/node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2) format('woff2-variations');\n  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;\n}\n:host,\n.dsa-interviewer-root,\n.dsa-interviewer-root * {\n  font-family: var(--font-sans);\n}\n@keyframes interviewer-overlay-enter {\n  from {\n    opacity: 0;\n    transform: translateY(18px) scale(0.94);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.dsa-interviewer-root {\n  -webkit-font-smoothing: antialiased;\n  color: #fafafa;\n}\n@property --tw-rotate-x {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-rotate-y {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-rotate-z {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-skew-x {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-skew-y {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-space-y-reverse {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-divide-y-reverse {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-border-style {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-gradient-position {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-gradient-from {\n  syntax: \"<color>\";\n  inherits: false;\n  initial-value: #0000;\n}\n@property --tw-gradient-via {\n  syntax: \"<color>\";\n  inherits: false;\n  initial-value: #0000;\n}\n@property --tw-gradient-to {\n  syntax: \"<color>\";\n  inherits: false;\n  initial-value: #0000;\n}\n@property --tw-gradient-stops {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-gradient-via-stops {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-gradient-from-position {\n  syntax: \"<length-percentage>\";\n  inherits: false;\n  initial-value: 0%;\n}\n@property --tw-gradient-via-position {\n  syntax: \"<length-percentage>\";\n  inherits: false;\n  initial-value: 50%;\n}\n@property --tw-gradient-to-position {\n  syntax: \"<length-percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-leading {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-font-weight {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-tracking {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-shadow-color {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-inset-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-inset-shadow-color {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-inset-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-ring-color {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-ring-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-inset-ring-color {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-inset-ring-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-ring-inset {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-ring-offset-width {\n  syntax: \"<length>\";\n  inherits: false;\n  initial-value: 0px;\n}\n@property --tw-ring-offset-color {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: #fff;\n}\n@property --tw-ring-offset-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-outline-style {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-blur {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-brightness {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-contrast {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-grayscale {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-hue-rotate {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-invert {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-opacity {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-saturate {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-sepia {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-drop-shadow {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-drop-shadow-color {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-drop-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-drop-shadow-size {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-backdrop-blur {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-backdrop-brightness {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-backdrop-contrast {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-backdrop-grayscale {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-backdrop-hue-rotate {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-backdrop-invert {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-backdrop-opacity {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-backdrop-saturate {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-backdrop-sepia {\n  syntax: \"*\";\n  inherits: false;\n}\n@layer properties {\n  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {\n    *, ::before, ::after, ::backdrop {\n      --tw-rotate-x: initial;\n      --tw-rotate-y: initial;\n      --tw-rotate-z: initial;\n      --tw-skew-x: initial;\n      --tw-skew-y: initial;\n      --tw-space-y-reverse: 0;\n      --tw-divide-y-reverse: 0;\n      --tw-border-style: solid;\n      --tw-gradient-position: initial;\n      --tw-gradient-from: #0000;\n      --tw-gradient-via: #0000;\n      --tw-gradient-to: #0000;\n      --tw-gradient-stops: initial;\n      --tw-gradient-via-stops: initial;\n      --tw-gradient-from-position: 0%;\n      --tw-gradient-via-position: 50%;\n      --tw-gradient-to-position: 100%;\n      --tw-leading: initial;\n      --tw-font-weight: initial;\n      --tw-tracking: initial;\n      --tw-shadow: 0 0 #0000;\n      --tw-shadow-color: initial;\n      --tw-shadow-alpha: 100%;\n      --tw-inset-shadow: 0 0 #0000;\n      --tw-inset-shadow-color: initial;\n      --tw-inset-shadow-alpha: 100%;\n      --tw-ring-color: initial;\n      --tw-ring-shadow: 0 0 #0000;\n      --tw-inset-ring-color: initial;\n      --tw-inset-ring-shadow: 0 0 #0000;\n      --tw-ring-inset: initial;\n      --tw-ring-offset-width: 0px;\n      --tw-ring-offset-color: #fff;\n      --tw-ring-offset-shadow: 0 0 #0000;\n      --tw-outline-style: solid;\n      --tw-blur: initial;\n      --tw-brightness: initial;\n      --tw-contrast: initial;\n      --tw-grayscale: initial;\n      --tw-hue-rotate: initial;\n      --tw-invert: initial;\n      --tw-opacity: initial;\n      --tw-saturate: initial;\n      --tw-sepia: initial;\n      --tw-drop-shadow: initial;\n      --tw-drop-shadow-color: initial;\n      --tw-drop-shadow-alpha: 100%;\n      --tw-drop-shadow-size: initial;\n      --tw-backdrop-blur: initial;\n      --tw-backdrop-brightness: initial;\n      --tw-backdrop-contrast: initial;\n      --tw-backdrop-grayscale: initial;\n      --tw-backdrop-hue-rotate: initial;\n      --tw-backdrop-invert: initial;\n      --tw-backdrop-opacity: initial;\n      --tw-backdrop-saturate: initial;\n      --tw-backdrop-sepia: initial;\n    }\n  }\n}\n";
"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/cjs/scheduler.production.js
  var require_scheduler_production = __commonJS({
    "node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/cjs/scheduler.production.js"(exports) {
      "use strict";
      function push(heap, node2) {
        var index = heap.length;
        heap.push(node2);
        a: for (; 0 < index; ) {
          var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
          if (0 < compare(parent, node2))
            heap[parentIndex] = node2, heap[index] = parent, index = parentIndex;
          else break a;
        }
      }
      function peek2(heap) {
        return 0 === heap.length ? null : heap[0];
      }
      function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
          heap[0] = last;
          a: for (var index = 0, length2 = heap.length, halfLength = length2 >>> 1; index < halfLength; ) {
            var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
            if (0 > compare(left, last))
              rightIndex < length2 && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
            else if (rightIndex < length2 && 0 > compare(right, last))
              heap[index] = right, heap[rightIndex] = last, index = rightIndex;
            else break a;
          }
        }
        return first;
      }
      function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
      }
      exports.unstable_now = void 0;
      if ("object" === typeof performance && "function" === typeof performance.now) {
        localPerformance = performance;
        exports.unstable_now = function() {
          return localPerformance.now();
        };
      } else {
        localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
          return localDate.now() - initialTime;
        };
      }
      var localPerformance;
      var localDate;
      var initialTime;
      var taskQueue = [];
      var timerQueue = [];
      var taskIdCounter = 1;
      var currentTask = null;
      var currentPriorityLevel = 3;
      var isPerformingWork = false;
      var isHostCallbackScheduled = false;
      var isHostTimeoutScheduled = false;
      var needsPaint = false;
      var localSetTimeout = "function" === typeof setTimeout ? setTimeout : null;
      var localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null;
      var localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
      function advanceTimers(currentTime) {
        for (var timer = peek2(timerQueue); null !== timer; ) {
          if (null === timer.callback) pop(timerQueue);
          else if (timer.startTime <= currentTime)
            pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
          else break;
          timer = peek2(timerQueue);
        }
      }
      function handleTimeout(currentTime) {
        isHostTimeoutScheduled = false;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled)
          if (null !== peek2(taskQueue))
            isHostCallbackScheduled = true, isMessageLoopRunning || (isMessageLoopRunning = true, schedulePerformWorkUntilDeadline());
          else {
            var firstTimer = peek2(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
          }
      }
      var isMessageLoopRunning = false;
      var taskTimeoutID = -1;
      var frameInterval = 5;
      var startTime = -1;
      function shouldYieldToHost() {
        return needsPaint ? true : exports.unstable_now() - startTime < frameInterval ? false : true;
      }
      function performWorkUntilDeadline() {
        needsPaint = false;
        if (isMessageLoopRunning) {
          var currentTime = exports.unstable_now();
          startTime = currentTime;
          var hasMoreWork = true;
          try {
            a: {
              isHostCallbackScheduled = false;
              isHostTimeoutScheduled && (isHostTimeoutScheduled = false, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
              isPerformingWork = true;
              var previousPriorityLevel = currentPriorityLevel;
              try {
                b: {
                  advanceTimers(currentTime);
                  for (currentTask = peek2(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost()); ) {
                    var callback = currentTask.callback;
                    if ("function" === typeof callback) {
                      currentTask.callback = null;
                      currentPriorityLevel = currentTask.priorityLevel;
                      var continuationCallback = callback(
                        currentTask.expirationTime <= currentTime
                      );
                      currentTime = exports.unstable_now();
                      if ("function" === typeof continuationCallback) {
                        currentTask.callback = continuationCallback;
                        advanceTimers(currentTime);
                        hasMoreWork = true;
                        break b;
                      }
                      currentTask === peek2(taskQueue) && pop(taskQueue);
                      advanceTimers(currentTime);
                    } else pop(taskQueue);
                    currentTask = peek2(taskQueue);
                  }
                  if (null !== currentTask) hasMoreWork = true;
                  else {
                    var firstTimer = peek2(timerQueue);
                    null !== firstTimer && requestHostTimeout(
                      handleTimeout,
                      firstTimer.startTime - currentTime
                    );
                    hasMoreWork = false;
                  }
                }
                break a;
              } finally {
                currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = false;
              }
              hasMoreWork = void 0;
            }
          } finally {
            hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = false;
          }
        }
      }
      var schedulePerformWorkUntilDeadline;
      if ("function" === typeof localSetImmediate)
        schedulePerformWorkUntilDeadline = function() {
          localSetImmediate(performWorkUntilDeadline);
        };
      else if ("undefined" !== typeof MessageChannel) {
        channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
          port.postMessage(null);
        };
      } else
        schedulePerformWorkUntilDeadline = function() {
          localSetTimeout(performWorkUntilDeadline, 0);
        };
      var channel;
      var port;
      function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
          callback(exports.unstable_now());
        }, ms);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(task) {
        task.callback = null;
      };
      exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
      };
      exports.unstable_next = function(eventHandler) {
        switch (currentPriorityLevel) {
          case 1:
          case 2:
          case 3:
            var priorityLevel = 3;
            break;
          default:
            priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
      exports.unstable_requestPaint = function() {
        needsPaint = true;
      };
      exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch (priorityLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
      exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch (priorityLevel) {
          case 1:
            var timeout = -1;
            break;
          case 2:
            timeout = 250;
            break;
          case 5:
            timeout = 1073741823;
            break;
          case 4:
            timeout = 1e4;
            break;
          default:
            timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
          id: taskIdCounter++,
          callback,
          priorityLevel,
          startTime: options,
          expirationTime: timeout,
          sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek2(taskQueue) && priorityLevel === peek2(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = true, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = true, isMessageLoopRunning || (isMessageLoopRunning = true, schedulePerformWorkUntilDeadline())));
        return priorityLevel;
      };
      exports.unstable_shouldYield = shouldYieldToHost;
      exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = parentPriorityLevel;
          try {
            return callback.apply(this, arguments);
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        };
      };
    }
  });

  // node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/.pnpm/react@19.2.4/node_modules/react/cjs/react.production.js
  var require_react_production = __commonJS({
    "node_modules/.pnpm/react@19.2.4/node_modules/react/cjs/react.production.js"(exports) {
      "use strict";
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
      var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
      var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
      var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
      var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
      var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
      var REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      var ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function() {
        },
        enqueueReplaceState: function() {
        },
        enqueueSetState: function() {
        }
      };
      var assign2 = Object.assign;
      var emptyObject = {};
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      function ComponentDummy() {
      }
      ComponentDummy.prototype = Component.prototype;
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
      pureComponentPrototype.constructor = PureComponent;
      assign2(pureComponentPrototype, Component.prototype);
      pureComponentPrototype.isPureReactComponent = true;
      var isArrayImpl = Array.isArray;
      function noop() {
      }
      var ReactSharedInternals = { H: null, A: null, T: null, S: null };
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      function ReactElement(type, key, props) {
        var refProp = props.ref;
        return {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref: void 0 !== refProp ? refProp : null,
          props
        };
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        return ReactElement(oldElement.type, newKey, oldElement.props);
      }
      function isValidElement3(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match2) {
          return escaperLookup[match2];
        });
      }
      var userProvidedKeyEscapeRegex = /\/+/g;
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback)
          return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement3(callback) && (callback = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + invokeCallback
          )), array.push(callback)), 1;
        invokeCallback = 0;
        var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children), "function" === typeof i)
          for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ctor = payload._result;
          ctor = ctor();
          ctor.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status)
                payload._status = 1, payload._result = moduleObject;
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status)
                payload._status = 2, payload._result = error;
            }
          );
          -1 === payload._status && (payload._status = 0, payload._result = ctor);
        }
        if (1 === payload._status) return payload._result.default;
        throw payload._result;
      }
      var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      };
      var Children = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement3(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports.Activity = REACT_ACTIVITY_TYPE;
      exports.Children = Children;
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(size) {
          return ReactSharedInternals.H.useMemoCache(size);
        }
      };
      exports.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports.cacheSignal = function() {
        return null;
      };
      exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign2({}, element.props), key = element.key;
        if (null != config)
          for (propName in void 0 !== config.key && (key = "" + config.key), config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          for (var childArray = Array(propName), i = 0; i < propName; i++)
            childArray[i] = arguments[i + 2];
          props.children = childArray;
        }
        return ReactElement(element.type, key, props);
      };
      exports.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        return defaultValue;
      };
      exports.createElement = function(type, config, children) {
        var propName, props = {}, key = null;
        if (null != config)
          for (propName in void 0 !== config.key && (key = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) props.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
            childArray[i] = arguments[i + 2];
          props.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === props[propName] && (props[propName] = childrenLength[propName]);
        return ReactElement(type, key, props);
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(render) {
        return { $$typeof: REACT_FORWARD_REF_TYPE, render };
      };
      exports.isValidElement = isValidElement3;
      exports.lazy = function(ctor) {
        return {
          $$typeof: REACT_LAZY_TYPE,
          _payload: { _status: -1, _result: ctor },
          _init: lazyInitializer
        };
      };
      exports.memo = function(type, compare) {
        return {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
      };
      exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      };
      exports.unstable_useCacheRefresh = function() {
        return ReactSharedInternals.H.useCacheRefresh();
      };
      exports.use = function(usable) {
        return ReactSharedInternals.H.use(usable);
      };
      exports.useActionState = function(action, initialState, permalink) {
        return ReactSharedInternals.H.useActionState(action, initialState, permalink);
      };
      exports.useCallback = function(callback, deps) {
        return ReactSharedInternals.H.useCallback(callback, deps);
      };
      exports.useContext = function(Context) {
        return ReactSharedInternals.H.useContext(Context);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(value, initialValue) {
        return ReactSharedInternals.H.useDeferredValue(value, initialValue);
      };
      exports.useEffect = function(create, deps) {
        return ReactSharedInternals.H.useEffect(create, deps);
      };
      exports.useEffectEvent = function(callback) {
        return ReactSharedInternals.H.useEffectEvent(callback);
      };
      exports.useId = function() {
        return ReactSharedInternals.H.useId();
      };
      exports.useImperativeHandle = function(ref, create, deps) {
        return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
      };
      exports.useInsertionEffect = function(create, deps) {
        return ReactSharedInternals.H.useInsertionEffect(create, deps);
      };
      exports.useLayoutEffect = function(create, deps) {
        return ReactSharedInternals.H.useLayoutEffect(create, deps);
      };
      exports.useMemo = function(create, deps) {
        return ReactSharedInternals.H.useMemo(create, deps);
      };
      exports.useOptimistic = function(passthrough, reducer) {
        return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
      };
      exports.useReducer = function(reducer, initialArg, init) {
        return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
      };
      exports.useRef = function(initialValue) {
        return ReactSharedInternals.H.useRef(initialValue);
      };
      exports.useState = function(initialState) {
        return ReactSharedInternals.H.useState(initialState);
      };
      exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return ReactSharedInternals.H.useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function() {
        return ReactSharedInternals.H.useTransition();
      };
      exports.version = "19.2.4";
    }
  });

  // node_modules/.pnpm/react@19.2.4/node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/.pnpm/react@19.2.4/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/cjs/react-dom.production.js
  var require_react_dom_production = __commonJS({
    "node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/cjs/react-dom.production.js"(exports) {
      "use strict";
      var React10 = require_react();
      function formatProdErrorMessage(code) {
        var url = "https://react.dev/errors/" + code;
        if (1 < arguments.length) {
          url += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var i = 2; i < arguments.length; i++)
            url += "&args[]=" + encodeURIComponent(arguments[i]);
        }
        return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function noop() {
      }
      var Internals = {
        d: {
          f: noop,
          r: function() {
            throw Error(formatProdErrorMessage(522));
          },
          D: noop,
          C: noop,
          L: noop,
          m: noop,
          X: noop,
          S: noop,
          M: noop
        },
        p: 0,
        findDOMNode: null
      };
      var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
      function createPortal$1(children, containerInfo, implementation) {
        var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: REACT_PORTAL_TYPE,
          key: null == key ? null : "" + key,
          children,
          containerInfo,
          implementation
        };
      }
      var ReactSharedInternals = React10.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      function getCrossOriginStringAs(as, input) {
        if ("font" === as) return "";
        if ("string" === typeof input)
          return "use-credentials" === input ? input : "";
      }
      exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
      exports.createPortal = function(children, container2) {
        var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!container2 || 1 !== container2.nodeType && 9 !== container2.nodeType && 11 !== container2.nodeType)
          throw Error(formatProdErrorMessage(299));
        return createPortal$1(children, container2, null, key);
      };
      exports.flushSync = function(fn) {
        var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
        try {
          if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
        } finally {
          ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
        }
      };
      exports.preconnect = function(href, options) {
        "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
      };
      exports.prefetchDNS = function(href) {
        "string" === typeof href && Internals.d.D(href);
      };
      exports.preinit = function(href, options) {
        if ("string" === typeof href && options && "string" === typeof options.as) {
          var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
          "style" === as ? Internals.d.S(
            href,
            "string" === typeof options.precedence ? options.precedence : void 0,
            {
              crossOrigin,
              integrity,
              fetchPriority
            }
          ) : "script" === as && Internals.d.X(href, {
            crossOrigin,
            integrity,
            fetchPriority,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0
          });
        }
      };
      exports.preinitModule = function(href, options) {
        if ("string" === typeof href)
          if ("object" === typeof options && null !== options) {
            if (null == options.as || "script" === options.as) {
              var crossOrigin = getCrossOriginStringAs(
                options.as,
                options.crossOrigin
              );
              Internals.d.M(href, {
                crossOrigin,
                integrity: "string" === typeof options.integrity ? options.integrity : void 0,
                nonce: "string" === typeof options.nonce ? options.nonce : void 0
              });
            }
          } else null == options && Internals.d.M(href);
      };
      exports.preload = function(href, options) {
        if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
          var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
          Internals.d.L(href, as, {
            crossOrigin,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0,
            type: "string" === typeof options.type ? options.type : void 0,
            fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
            referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
            imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
            imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
            media: "string" === typeof options.media ? options.media : void 0
          });
        }
      };
      exports.preloadModule = function(href, options) {
        if ("string" === typeof href)
          if (options) {
            var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
            Internals.d.m(href, {
              as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
              crossOrigin,
              integrity: "string" === typeof options.integrity ? options.integrity : void 0
            });
          } else Internals.d.m(href);
      };
      exports.requestFormReset = function(form) {
        Internals.d.r(form);
      };
      exports.unstable_batchedUpdates = function(fn, a) {
        return fn(a);
      };
      exports.useFormState = function(action, initialState, permalink) {
        return ReactSharedInternals.H.useFormState(action, initialState, permalink);
      };
      exports.useFormStatus = function() {
        return ReactSharedInternals.H.useHostTransitionStatus();
      };
      exports.version = "19.2.4";
    }
  });

  // node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/cjs/react-dom-client.production.js
  var require_react_dom_client_production = __commonJS({
    "node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/cjs/react-dom-client.production.js"(exports) {
      "use strict";
      var Scheduler = require_scheduler();
      var React10 = require_react();
      var ReactDOM = require_react_dom();
      function formatProdErrorMessage(code) {
        var url = "https://react.dev/errors/" + code;
        if (1 < arguments.length) {
          url += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var i = 2; i < arguments.length; i++)
            url += "&args[]=" + encodeURIComponent(arguments[i]);
        }
        return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function isValidContainer(node2) {
        return !(!node2 || 1 !== node2.nodeType && 9 !== node2.nodeType && 11 !== node2.nodeType);
      }
      function getNearestMountedFiber(fiber) {
        var node2 = fiber, nearestMounted = fiber;
        if (fiber.alternate) for (; node2.return; ) node2 = node2.return;
        else {
          fiber = node2;
          do
            node2 = fiber, 0 !== (node2.flags & 4098) && (nearestMounted = node2.return), fiber = node2.return;
          while (fiber);
        }
        return 3 === node2.tag ? nearestMounted : null;
      }
      function getSuspenseInstanceFromFiber(fiber) {
        if (13 === fiber.tag) {
          var suspenseState = fiber.memoizedState;
          null === suspenseState && (fiber = fiber.alternate, null !== fiber && (suspenseState = fiber.memoizedState));
          if (null !== suspenseState) return suspenseState.dehydrated;
        }
        return null;
      }
      function getActivityInstanceFromFiber(fiber) {
        if (31 === fiber.tag) {
          var activityState = fiber.memoizedState;
          null === activityState && (fiber = fiber.alternate, null !== fiber && (activityState = fiber.memoizedState));
          if (null !== activityState) return activityState.dehydrated;
        }
        return null;
      }
      function assertIsMounted(fiber) {
        if (getNearestMountedFiber(fiber) !== fiber)
          throw Error(formatProdErrorMessage(188));
      }
      function findCurrentFiberUsingSlowPath(fiber) {
        var alternate = fiber.alternate;
        if (!alternate) {
          alternate = getNearestMountedFiber(fiber);
          if (null === alternate) throw Error(formatProdErrorMessage(188));
          return alternate !== fiber ? null : fiber;
        }
        for (var a = fiber, b = alternate; ; ) {
          var parentA = a.return;
          if (null === parentA) break;
          var parentB = parentA.alternate;
          if (null === parentB) {
            b = parentA.return;
            if (null !== b) {
              a = b;
              continue;
            }
            break;
          }
          if (parentA.child === parentB.child) {
            for (parentB = parentA.child; parentB; ) {
              if (parentB === a) return assertIsMounted(parentA), fiber;
              if (parentB === b) return assertIsMounted(parentA), alternate;
              parentB = parentB.sibling;
            }
            throw Error(formatProdErrorMessage(188));
          }
          if (a.return !== b.return) a = parentA, b = parentB;
          else {
            for (var didFindChild = false, child$0 = parentA.child; child$0; ) {
              if (child$0 === a) {
                didFindChild = true;
                a = parentA;
                b = parentB;
                break;
              }
              if (child$0 === b) {
                didFindChild = true;
                b = parentA;
                a = parentB;
                break;
              }
              child$0 = child$0.sibling;
            }
            if (!didFindChild) {
              for (child$0 = parentB.child; child$0; ) {
                if (child$0 === a) {
                  didFindChild = true;
                  a = parentB;
                  b = parentA;
                  break;
                }
                if (child$0 === b) {
                  didFindChild = true;
                  b = parentB;
                  a = parentA;
                  break;
                }
                child$0 = child$0.sibling;
              }
              if (!didFindChild) throw Error(formatProdErrorMessage(189));
            }
          }
          if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
        }
        if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
        return a.stateNode.current === a ? fiber : alternate;
      }
      function findCurrentHostFiberImpl(node2) {
        var tag = node2.tag;
        if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node2;
        for (node2 = node2.child; null !== node2; ) {
          tag = findCurrentHostFiberImpl(node2);
          if (null !== tag) return tag;
          node2 = node2.sibling;
        }
        return null;
      }
      var assign2 = Object.assign;
      var REACT_LEGACY_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.element");
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
      var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
      var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
      var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
      var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
      var REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity");
      var REACT_MEMO_CACHE_SENTINEL = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      var REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference");
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch (type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      var isArrayImpl = Array.isArray;
      var ReactSharedInternals = React10.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      var ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      var sharedNotPendingObject = {
        pending: false,
        data: null,
        method: null,
        action: null
      };
      var valueStack = [];
      var index = -1;
      function createCursor(defaultValue) {
        return { current: defaultValue };
      }
      function pop(cursor2) {
        0 > index || (cursor2.current = valueStack[index], valueStack[index] = null, index--);
      }
      function push(cursor2, value) {
        index++;
        valueStack[index] = cursor2.current;
        cursor2.current = value;
      }
      var contextStackCursor = createCursor(null);
      var contextFiberStackCursor = createCursor(null);
      var rootInstanceStackCursor = createCursor(null);
      var hostTransitionProviderCursor = createCursor(null);
      function pushHostContainer(fiber, nextRootInstance) {
        push(rootInstanceStackCursor, nextRootInstance);
        push(contextFiberStackCursor, fiber);
        push(contextStackCursor, null);
        switch (nextRootInstance.nodeType) {
          case 9:
          case 11:
            fiber = (fiber = nextRootInstance.documentElement) ? (fiber = fiber.namespaceURI) ? getOwnHostContext(fiber) : 0 : 0;
            break;
          default:
            if (fiber = nextRootInstance.tagName, nextRootInstance = nextRootInstance.namespaceURI)
              nextRootInstance = getOwnHostContext(nextRootInstance), fiber = getChildHostContextProd(nextRootInstance, fiber);
            else
              switch (fiber) {
                case "svg":
                  fiber = 1;
                  break;
                case "math":
                  fiber = 2;
                  break;
                default:
                  fiber = 0;
              }
        }
        pop(contextStackCursor);
        push(contextStackCursor, fiber);
      }
      function popHostContainer() {
        pop(contextStackCursor);
        pop(contextFiberStackCursor);
        pop(rootInstanceStackCursor);
      }
      function pushHostContext(fiber) {
        null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
        var context = contextStackCursor.current;
        var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
        context !== JSCompiler_inline_result && (push(contextFiberStackCursor, fiber), push(contextStackCursor, JSCompiler_inline_result));
      }
      function popHostContext(fiber) {
        contextFiberStackCursor.current === fiber && (pop(contextStackCursor), pop(contextFiberStackCursor));
        hostTransitionProviderCursor.current === fiber && (pop(hostTransitionProviderCursor), HostTransitionContext._currentValue = sharedNotPendingObject);
      }
      var prefix2;
      var suffix;
      function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix2)
          try {
            throw Error();
          } catch (x) {
            var match2 = x.stack.trim().match(/\n( *(at )?)/);
            prefix2 = match2 && match2[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return "\n" + prefix2 + name + suffix;
      }
      var reentry = false;
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var RunInRootFrame = {
            DetermineComponentFrameRoot: function() {
              try {
                if (construct) {
                  var Fake = function() {
                    throw Error();
                  };
                  Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  });
                  if ("object" === typeof Reflect && Reflect.construct) {
                    try {
                      Reflect.construct(Fake, []);
                    } catch (x) {
                      var control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                  } else {
                    try {
                      Fake.call();
                    } catch (x$1) {
                      control = x$1;
                    }
                    fn.call(Fake.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (x$2) {
                    control = x$2;
                  }
                  (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                  });
                }
              } catch (sample) {
                if (sample && control && "string" === typeof sample.stack)
                  return [sample.stack, control.stack];
              }
              return [null, null];
            }
          };
          RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var namePropDescriptor = Object.getOwnPropertyDescriptor(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name"
          );
          namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
          if (sampleStack && controlStack) {
            var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
            for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot"); )
              RunInRootFrame++;
            for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes(
              "DetermineComponentFrameRoot"
            ); )
              namePropDescriptor++;
            if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length)
              for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]; )
                namePropDescriptor--;
            for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--)
              if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
                if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
                  do
                    if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
                      var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
                      fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
                      return frame;
                    }
                  while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
                }
                break;
              }
          }
        } finally {
          reentry = false, Error.prepareStackTrace = previousPrepareStackTrace;
        }
        return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
      }
      function describeFiber(fiber, childFiber) {
        switch (fiber.tag) {
          case 26:
          case 27:
          case 5:
            return describeBuiltInComponentFrame(fiber.type);
          case 16:
            return describeBuiltInComponentFrame("Lazy");
          case 13:
            return fiber.child !== childFiber && null !== childFiber ? describeBuiltInComponentFrame("Suspense Fallback") : describeBuiltInComponentFrame("Suspense");
          case 19:
            return describeBuiltInComponentFrame("SuspenseList");
          case 0:
          case 15:
            return describeNativeComponentFrame(fiber.type, false);
          case 11:
            return describeNativeComponentFrame(fiber.type.render, false);
          case 1:
            return describeNativeComponentFrame(fiber.type, true);
          case 31:
            return describeBuiltInComponentFrame("Activity");
          default:
            return "";
        }
      }
      function getStackByFiberInDevAndProd(workInProgress2) {
        try {
          var info = "", previous = null;
          do
            info += describeFiber(workInProgress2, previous), previous = workInProgress2, workInProgress2 = workInProgress2.return;
          while (workInProgress2);
          return info;
        } catch (x) {
          return "\nError generating stack: " + x.message + "\n" + x.stack;
        }
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var scheduleCallback$3 = Scheduler.unstable_scheduleCallback;
      var cancelCallback$1 = Scheduler.unstable_cancelCallback;
      var shouldYield = Scheduler.unstable_shouldYield;
      var requestPaint = Scheduler.unstable_requestPaint;
      var now = Scheduler.unstable_now;
      var getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel;
      var ImmediatePriority = Scheduler.unstable_ImmediatePriority;
      var UserBlockingPriority = Scheduler.unstable_UserBlockingPriority;
      var NormalPriority$1 = Scheduler.unstable_NormalPriority;
      var LowPriority = Scheduler.unstable_LowPriority;
      var IdlePriority = Scheduler.unstable_IdlePriority;
      var log$1 = Scheduler.log;
      var unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue;
      var rendererID = null;
      var injectedHook = null;
      function setIsStrictModeForDevtools(newIsStrictMode) {
        "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
        if (injectedHook && "function" === typeof injectedHook.setStrictMode)
          try {
            injectedHook.setStrictMode(rendererID, newIsStrictMode);
          } catch (err) {
          }
      }
      var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
      var log = Math.log;
      var LN2 = Math.LN2;
      function clz32Fallback(x) {
        x >>>= 0;
        return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
      }
      var nextTransitionUpdateLane = 256;
      var nextTransitionDeferredLane = 262144;
      var nextRetryLane = 4194304;
      function getHighestPriorityLanes(lanes) {
        var pendingSyncLanes = lanes & 42;
        if (0 !== pendingSyncLanes) return pendingSyncLanes;
        switch (lanes & -lanes) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
            return 128;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
            return lanes & 261888;
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return lanes & 3932160;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return lanes & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return lanes;
        }
      }
      function getNextLanes(root2, wipLanes, rootHasPendingCommit) {
        var pendingLanes = root2.pendingLanes;
        if (0 === pendingLanes) return 0;
        var nextLanes = 0, suspendedLanes = root2.suspendedLanes, pingedLanes = root2.pingedLanes;
        root2 = root2.warmLanes;
        var nonIdlePendingLanes = pendingLanes & 134217727;
        0 !== nonIdlePendingLanes ? (pendingLanes = nonIdlePendingLanes & ~suspendedLanes, 0 !== pendingLanes ? nextLanes = getHighestPriorityLanes(pendingLanes) : (pingedLanes &= nonIdlePendingLanes, 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = nonIdlePendingLanes & ~root2, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))))) : (nonIdlePendingLanes = pendingLanes & ~suspendedLanes, 0 !== nonIdlePendingLanes ? nextLanes = getHighestPriorityLanes(nonIdlePendingLanes) : 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = pendingLanes & ~root2, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
        return 0 === nextLanes ? 0 : 0 !== wipLanes && wipLanes !== nextLanes && 0 === (wipLanes & suspendedLanes) && (suspendedLanes = nextLanes & -nextLanes, rootHasPendingCommit = wipLanes & -wipLanes, suspendedLanes >= rootHasPendingCommit || 32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)) ? wipLanes : nextLanes;
      }
      function checkIfRootIsPrerendering(root2, renderLanes2) {
        return 0 === (root2.pendingLanes & ~(root2.suspendedLanes & ~root2.pingedLanes) & renderLanes2);
      }
      function computeExpirationTime(lane, currentTime) {
        switch (lane) {
          case 1:
          case 2:
          case 4:
          case 8:
          case 64:
            return currentTime + 250;
          case 16:
          case 32:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return currentTime + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function claimNextRetryLane() {
        var lane = nextRetryLane;
        nextRetryLane <<= 1;
        0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
        return lane;
      }
      function createLaneMap(initial) {
        for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
        return laneMap;
      }
      function markRootUpdated$1(root2, updateLane) {
        root2.pendingLanes |= updateLane;
        268435456 !== updateLane && (root2.suspendedLanes = 0, root2.pingedLanes = 0, root2.warmLanes = 0);
      }
      function markRootFinished(root2, finishedLanes, remainingLanes, spawnedLane, updatedLanes, suspendedRetryLanes) {
        var previouslyPendingLanes = root2.pendingLanes;
        root2.pendingLanes = remainingLanes;
        root2.suspendedLanes = 0;
        root2.pingedLanes = 0;
        root2.warmLanes = 0;
        root2.expiredLanes &= remainingLanes;
        root2.entangledLanes &= remainingLanes;
        root2.errorRecoveryDisabledLanes &= remainingLanes;
        root2.shellSuspendCounter = 0;
        var entanglements = root2.entanglements, expirationTimes = root2.expirationTimes, hiddenUpdates = root2.hiddenUpdates;
        for (remainingLanes = previouslyPendingLanes & ~remainingLanes; 0 < remainingLanes; ) {
          var index$7 = 31 - clz32(remainingLanes), lane = 1 << index$7;
          entanglements[index$7] = 0;
          expirationTimes[index$7] = -1;
          var hiddenUpdatesForLane = hiddenUpdates[index$7];
          if (null !== hiddenUpdatesForLane)
            for (hiddenUpdates[index$7] = null, index$7 = 0; index$7 < hiddenUpdatesForLane.length; index$7++) {
              var update = hiddenUpdatesForLane[index$7];
              null !== update && (update.lane &= -536870913);
            }
          remainingLanes &= ~lane;
        }
        0 !== spawnedLane && markSpawnedDeferredLane(root2, spawnedLane, 0);
        0 !== suspendedRetryLanes && 0 === updatedLanes && 0 !== root2.tag && (root2.suspendedLanes |= suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
      }
      function markSpawnedDeferredLane(root2, spawnedLane, entangledLanes) {
        root2.pendingLanes |= spawnedLane;
        root2.suspendedLanes &= ~spawnedLane;
        var spawnedLaneIndex = 31 - clz32(spawnedLane);
        root2.entangledLanes |= spawnedLane;
        root2.entanglements[spawnedLaneIndex] = root2.entanglements[spawnedLaneIndex] | 1073741824 | entangledLanes & 261930;
      }
      function markRootEntangled(root2, entangledLanes) {
        var rootEntangledLanes = root2.entangledLanes |= entangledLanes;
        for (root2 = root2.entanglements; rootEntangledLanes; ) {
          var index$8 = 31 - clz32(rootEntangledLanes), lane = 1 << index$8;
          lane & entangledLanes | root2[index$8] & entangledLanes && (root2[index$8] |= entangledLanes);
          rootEntangledLanes &= ~lane;
        }
      }
      function getBumpedLaneForHydration(root2, renderLanes2) {
        var renderLane = renderLanes2 & -renderLanes2;
        renderLane = 0 !== (renderLane & 42) ? 1 : getBumpedLaneForHydrationByLane(renderLane);
        return 0 !== (renderLane & (root2.suspendedLanes | renderLanes2)) ? 0 : renderLane;
      }
      function getBumpedLaneForHydrationByLane(lane) {
        switch (lane) {
          case 2:
            lane = 1;
            break;
          case 8:
            lane = 4;
            break;
          case 32:
            lane = 16;
            break;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            lane = 128;
            break;
          case 268435456:
            lane = 134217728;
            break;
          default:
            lane = 0;
        }
        return lane;
      }
      function lanesToEventPriority(lanes) {
        lanes &= -lanes;
        return 2 < lanes ? 8 < lanes ? 0 !== (lanes & 134217727) ? 32 : 268435456 : 8 : 2;
      }
      function resolveUpdatePriority() {
        var updatePriority = ReactDOMSharedInternals.p;
        if (0 !== updatePriority) return updatePriority;
        updatePriority = window.event;
        return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
      }
      function runWithPriority(priority, fn) {
        var previousPriority = ReactDOMSharedInternals.p;
        try {
          return ReactDOMSharedInternals.p = priority, fn();
        } finally {
          ReactDOMSharedInternals.p = previousPriority;
        }
      }
      var randomKey = Math.random().toString(36).slice(2);
      var internalInstanceKey = "__reactFiber$" + randomKey;
      var internalPropsKey = "__reactProps$" + randomKey;
      var internalContainerInstanceKey = "__reactContainer$" + randomKey;
      var internalEventHandlersKey = "__reactEvents$" + randomKey;
      var internalEventHandlerListenersKey = "__reactListeners$" + randomKey;
      var internalEventHandlesSetKey = "__reactHandles$" + randomKey;
      var internalRootNodeResourcesKey = "__reactResources$" + randomKey;
      var internalHoistableMarker = "__reactMarker$" + randomKey;
      function detachDeletedInstance(node2) {
        delete node2[internalInstanceKey];
        delete node2[internalPropsKey];
        delete node2[internalEventHandlersKey];
        delete node2[internalEventHandlerListenersKey];
        delete node2[internalEventHandlesSetKey];
      }
      function getClosestInstanceFromNode(targetNode) {
        var targetInst = targetNode[internalInstanceKey];
        if (targetInst) return targetInst;
        for (var parentNode = targetNode.parentNode; parentNode; ) {
          if (targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey]) {
            parentNode = targetInst.alternate;
            if (null !== targetInst.child || null !== parentNode && null !== parentNode.child)
              for (targetNode = getParentHydrationBoundary(targetNode); null !== targetNode; ) {
                if (parentNode = targetNode[internalInstanceKey]) return parentNode;
                targetNode = getParentHydrationBoundary(targetNode);
              }
            return targetInst;
          }
          targetNode = parentNode;
          parentNode = targetNode.parentNode;
        }
        return null;
      }
      function getInstanceFromNode(node2) {
        if (node2 = node2[internalInstanceKey] || node2[internalContainerInstanceKey]) {
          var tag = node2.tag;
          if (5 === tag || 6 === tag || 13 === tag || 31 === tag || 26 === tag || 27 === tag || 3 === tag)
            return node2;
        }
        return null;
      }
      function getNodeFromInstance(inst) {
        var tag = inst.tag;
        if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
        throw Error(formatProdErrorMessage(33));
      }
      function getResourcesFromRoot(root2) {
        var resources = root2[internalRootNodeResourcesKey];
        resources || (resources = root2[internalRootNodeResourcesKey] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() });
        return resources;
      }
      function markNodeAsHoistable(node2) {
        node2[internalHoistableMarker] = true;
      }
      var allNativeEvents = /* @__PURE__ */ new Set();
      var registrationNameDependencies = {};
      function registerTwoPhaseEvent(registrationName, dependencies) {
        registerDirectEvent(registrationName, dependencies);
        registerDirectEvent(registrationName + "Capture", dependencies);
      }
      function registerDirectEvent(registrationName, dependencies) {
        registrationNameDependencies[registrationName] = dependencies;
        for (registrationName = 0; registrationName < dependencies.length; registrationName++)
          allNativeEvents.add(dependencies[registrationName]);
      }
      var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
      );
      var illegalAttributeNameCache = {};
      var validatedAttributeNameCache = {};
      function isAttributeNameSafe(attributeName) {
        if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
          return true;
        if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
        if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
          return validatedAttributeNameCache[attributeName] = true;
        illegalAttributeNameCache[attributeName] = true;
        return false;
      }
      function setValueForAttribute(node2, name, value) {
        if (isAttributeNameSafe(name))
          if (null === value) node2.removeAttribute(name);
          else {
            switch (typeof value) {
              case "undefined":
              case "function":
              case "symbol":
                node2.removeAttribute(name);
                return;
              case "boolean":
                var prefix$10 = name.toLowerCase().slice(0, 5);
                if ("data-" !== prefix$10 && "aria-" !== prefix$10) {
                  node2.removeAttribute(name);
                  return;
                }
            }
            node2.setAttribute(name, "" + value);
          }
      }
      function setValueForKnownAttribute(node2, name, value) {
        if (null === value) node2.removeAttribute(name);
        else {
          switch (typeof value) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
              node2.removeAttribute(name);
              return;
          }
          node2.setAttribute(name, "" + value);
        }
      }
      function setValueForNamespacedAttribute(node2, namespace, name, value) {
        if (null === value) node2.removeAttribute(name);
        else {
          switch (typeof value) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
              node2.removeAttribute(name);
              return;
          }
          node2.setAttributeNS(namespace, name, "" + value);
        }
      }
      function getToStringValue(value) {
        switch (typeof value) {
          case "bigint":
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return value;
          case "object":
            return value;
          default:
            return "";
        }
      }
      function isCheckable(elem) {
        var type = elem.type;
        return (elem = elem.nodeName) && "input" === elem.toLowerCase() && ("checkbox" === type || "radio" === type);
      }
      function trackValueOnNode(node2, valueField, currentValue) {
        var descriptor = Object.getOwnPropertyDescriptor(
          node2.constructor.prototype,
          valueField
        );
        if (!node2.hasOwnProperty(valueField) && "undefined" !== typeof descriptor && "function" === typeof descriptor.get && "function" === typeof descriptor.set) {
          var get = descriptor.get, set = descriptor.set;
          Object.defineProperty(node2, valueField, {
            configurable: true,
            get: function() {
              return get.call(this);
            },
            set: function(value) {
              currentValue = "" + value;
              set.call(this, value);
            }
          });
          Object.defineProperty(node2, valueField, {
            enumerable: descriptor.enumerable
          });
          return {
            getValue: function() {
              return currentValue;
            },
            setValue: function(value) {
              currentValue = "" + value;
            },
            stopTracking: function() {
              node2._valueTracker = null;
              delete node2[valueField];
            }
          };
        }
      }
      function track(node2) {
        if (!node2._valueTracker) {
          var valueField = isCheckable(node2) ? "checked" : "value";
          node2._valueTracker = trackValueOnNode(
            node2,
            valueField,
            "" + node2[valueField]
          );
        }
      }
      function updateValueIfChanged(node2) {
        if (!node2) return false;
        var tracker = node2._valueTracker;
        if (!tracker) return true;
        var lastValue = tracker.getValue();
        var value = "";
        node2 && (value = isCheckable(node2) ? node2.checked ? "true" : "false" : node2.value);
        node2 = value;
        return node2 !== lastValue ? (tracker.setValue(node2), true) : false;
      }
      function getActiveElement(doc) {
        doc = doc || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof doc) return null;
        try {
          return doc.activeElement || doc.body;
        } catch (e) {
          return doc.body;
        }
      }
      var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
      function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
        return value.replace(
          escapeSelectorAttributeValueInsideDoubleQuotesRegex,
          function(ch) {
            return "\\" + ch.charCodeAt(0).toString(16) + " ";
          }
        );
      }
      function updateInput(element, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name) {
        element.name = "";
        null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type ? element.type = type : element.removeAttribute("type");
        if (null != value)
          if ("number" === type) {
            if (0 === value && "" === element.value || element.value != value)
              element.value = "" + getToStringValue(value);
          } else
            element.value !== "" + getToStringValue(value) && (element.value = "" + getToStringValue(value));
        else
          "submit" !== type && "reset" !== type || element.removeAttribute("value");
        null != value ? setDefaultValue(element, type, getToStringValue(value)) : null != defaultValue ? setDefaultValue(element, type, getToStringValue(defaultValue)) : null != lastDefaultValue && element.removeAttribute("value");
        null == checked && null != defaultChecked && (element.defaultChecked = !!defaultChecked);
        null != checked && (element.checked = checked && "function" !== typeof checked && "symbol" !== typeof checked);
        null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name ? element.name = "" + getToStringValue(name) : element.removeAttribute("name");
      }
      function initInput(element, value, defaultValue, checked, defaultChecked, type, name, isHydrating2) {
        null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type && (element.type = type);
        if (null != value || null != defaultValue) {
          if (!("submit" !== type && "reset" !== type || void 0 !== value && null !== value)) {
            track(element);
            return;
          }
          defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
          value = null != value ? "" + getToStringValue(value) : defaultValue;
          isHydrating2 || value === element.value || (element.value = value);
          element.defaultValue = value;
        }
        checked = null != checked ? checked : defaultChecked;
        checked = "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
        element.checked = isHydrating2 ? element.checked : !!checked;
        element.defaultChecked = !!checked;
        null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name && (element.name = name);
        track(element);
      }
      function setDefaultValue(node2, type, value) {
        "number" === type && getActiveElement(node2.ownerDocument) === node2 || node2.defaultValue === "" + value || (node2.defaultValue = "" + value);
      }
      function updateOptions(node2, multiple, propValue, setDefaultSelected) {
        node2 = node2.options;
        if (multiple) {
          multiple = {};
          for (var i = 0; i < propValue.length; i++)
            multiple["$" + propValue[i]] = true;
          for (propValue = 0; propValue < node2.length; propValue++)
            i = multiple.hasOwnProperty("$" + node2[propValue].value), node2[propValue].selected !== i && (node2[propValue].selected = i), i && setDefaultSelected && (node2[propValue].defaultSelected = true);
        } else {
          propValue = "" + getToStringValue(propValue);
          multiple = null;
          for (i = 0; i < node2.length; i++) {
            if (node2[i].value === propValue) {
              node2[i].selected = true;
              setDefaultSelected && (node2[i].defaultSelected = true);
              return;
            }
            null !== multiple || node2[i].disabled || (multiple = node2[i]);
          }
          null !== multiple && (multiple.selected = true);
        }
      }
      function updateTextarea(element, value, defaultValue) {
        if (null != value && (value = "" + getToStringValue(value), value !== element.value && (element.value = value), null == defaultValue)) {
          element.defaultValue !== value && (element.defaultValue = value);
          return;
        }
        element.defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
      }
      function initTextarea(element, value, defaultValue, children) {
        if (null == value) {
          if (null != children) {
            if (null != defaultValue) throw Error(formatProdErrorMessage(92));
            if (isArrayImpl(children)) {
              if (1 < children.length) throw Error(formatProdErrorMessage(93));
              children = children[0];
            }
            defaultValue = children;
          }
          null == defaultValue && (defaultValue = "");
          value = defaultValue;
        }
        defaultValue = getToStringValue(value);
        element.defaultValue = defaultValue;
        children = element.textContent;
        children === defaultValue && "" !== children && null !== children && (element.value = children);
        track(element);
      }
      function setTextContent(node2, text) {
        if (text) {
          var firstChild = node2.firstChild;
          if (firstChild && firstChild === node2.lastChild && 3 === firstChild.nodeType) {
            firstChild.nodeValue = text;
            return;
          }
        }
        node2.textContent = text;
      }
      var unitlessNumbers = new Set(
        "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
          " "
        )
      );
      function setValueForStyle(style4, styleName, value) {
        var isCustomProperty3 = 0 === styleName.indexOf("--");
        null == value || "boolean" === typeof value || "" === value ? isCustomProperty3 ? style4.setProperty(styleName, "") : "float" === styleName ? style4.cssFloat = "" : style4[styleName] = "" : isCustomProperty3 ? style4.setProperty(styleName, value) : "number" !== typeof value || 0 === value || unitlessNumbers.has(styleName) ? "float" === styleName ? style4.cssFloat = value : style4[styleName] = ("" + value).trim() : style4[styleName] = value + "px";
      }
      function setValueForStyles(node2, styles, prevStyles) {
        if (null != styles && "object" !== typeof styles)
          throw Error(formatProdErrorMessage(62));
        node2 = node2.style;
        if (null != prevStyles) {
          for (var styleName in prevStyles)
            !prevStyles.hasOwnProperty(styleName) || null != styles && styles.hasOwnProperty(styleName) || (0 === styleName.indexOf("--") ? node2.setProperty(styleName, "") : "float" === styleName ? node2.cssFloat = "" : node2[styleName] = "");
          for (var styleName$16 in styles)
            styleName = styles[styleName$16], styles.hasOwnProperty(styleName$16) && prevStyles[styleName$16] !== styleName && setValueForStyle(node2, styleName$16, styleName);
        } else
          for (var styleName$17 in styles)
            styles.hasOwnProperty(styleName$17) && setValueForStyle(node2, styleName$17, styles[styleName$17]);
      }
      function isCustomElement(tagName) {
        if (-1 === tagName.indexOf("-")) return false;
        switch (tagName) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var aliases2 = /* @__PURE__ */ new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"]
      ]);
      var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
      function sanitizeURL(url) {
        return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
      }
      function noop$1() {
      }
      var currentReplayingEvent = null;
      function getEventTarget(nativeEvent) {
        nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
        nativeEvent.correspondingUseElement && (nativeEvent = nativeEvent.correspondingUseElement);
        return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
      }
      var restoreTarget = null;
      var restoreQueue = null;
      function restoreStateOfTarget(target) {
        var internalInstance = getInstanceFromNode(target);
        if (internalInstance && (target = internalInstance.stateNode)) {
          var props = target[internalPropsKey] || null;
          a: switch (target = internalInstance.stateNode, internalInstance.type) {
            case "input":
              updateInput(
                target,
                props.value,
                props.defaultValue,
                props.defaultValue,
                props.checked,
                props.defaultChecked,
                props.type,
                props.name
              );
              internalInstance = props.name;
              if ("radio" === props.type && null != internalInstance) {
                for (props = target; props.parentNode; ) props = props.parentNode;
                props = props.querySelectorAll(
                  'input[name="' + escapeSelectorAttributeValueInsideDoubleQuotes(
                    "" + internalInstance
                  ) + '"][type="radio"]'
                );
                for (internalInstance = 0; internalInstance < props.length; internalInstance++) {
                  var otherNode = props[internalInstance];
                  if (otherNode !== target && otherNode.form === target.form) {
                    var otherProps = otherNode[internalPropsKey] || null;
                    if (!otherProps) throw Error(formatProdErrorMessage(90));
                    updateInput(
                      otherNode,
                      otherProps.value,
                      otherProps.defaultValue,
                      otherProps.defaultValue,
                      otherProps.checked,
                      otherProps.defaultChecked,
                      otherProps.type,
                      otherProps.name
                    );
                  }
                }
                for (internalInstance = 0; internalInstance < props.length; internalInstance++)
                  otherNode = props[internalInstance], otherNode.form === target.form && updateValueIfChanged(otherNode);
              }
              break a;
            case "textarea":
              updateTextarea(target, props.value, props.defaultValue);
              break a;
            case "select":
              internalInstance = props.value, null != internalInstance && updateOptions(target, !!props.multiple, internalInstance, false);
          }
        }
      }
      var isInsideEventHandler = false;
      function batchedUpdates$1(fn, a, b) {
        if (isInsideEventHandler) return fn(a, b);
        isInsideEventHandler = true;
        try {
          var JSCompiler_inline_result = fn(a);
          return JSCompiler_inline_result;
        } finally {
          if (isInsideEventHandler = false, null !== restoreTarget || null !== restoreQueue) {
            if (flushSyncWork$1(), restoreTarget && (a = restoreTarget, fn = restoreQueue, restoreQueue = restoreTarget = null, restoreStateOfTarget(a), fn))
              for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
          }
        }
      }
      function getListener(inst, registrationName) {
        var stateNode = inst.stateNode;
        if (null === stateNode) return null;
        var props = stateNode[internalPropsKey] || null;
        if (null === props) return null;
        stateNode = props[registrationName];
        a: switch (registrationName) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (props = !props.disabled) || (inst = inst.type, props = !("button" === inst || "input" === inst || "select" === inst || "textarea" === inst));
            inst = !props;
            break a;
          default:
            inst = false;
        }
        if (inst) return null;
        if (stateNode && "function" !== typeof stateNode)
          throw Error(
            formatProdErrorMessage(231, registrationName, typeof stateNode)
          );
        return stateNode;
      }
      var canUseDOM = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var passiveBrowserEventsSupported = false;
      if (canUseDOM)
        try {
          options = {};
          Object.defineProperty(options, "passive", {
            get: function() {
              passiveBrowserEventsSupported = true;
            }
          });
          window.addEventListener("test", options, options);
          window.removeEventListener("test", options, options);
        } catch (e) {
          passiveBrowserEventsSupported = false;
        }
      var options;
      var root = null;
      var startText = null;
      var fallbackText = null;
      function getData() {
        if (fallbackText) return fallbackText;
        var start, startValue = startText, startLength = startValue.length, end, endValue = "value" in root ? root.value : root.textContent, endLength = endValue.length;
        for (start = 0; start < startLength && startValue[start] === endValue[start]; start++) ;
        var minEnd = startLength - start;
        for (end = 1; end <= minEnd && startValue[startLength - end] === endValue[endLength - end]; end++) ;
        return fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0);
      }
      function getEventCharCode(nativeEvent) {
        var keyCode = nativeEvent.keyCode;
        "charCode" in nativeEvent ? (nativeEvent = nativeEvent.charCode, 0 === nativeEvent && 13 === keyCode && (nativeEvent = 13)) : nativeEvent = keyCode;
        10 === nativeEvent && (nativeEvent = 13);
        return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
      }
      function functionThatReturnsTrue() {
        return true;
      }
      function functionThatReturnsFalse() {
        return false;
      }
      function createSyntheticEvent(Interface) {
        function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
          this._reactName = reactName;
          this._targetInst = targetInst;
          this.type = reactEventType;
          this.nativeEvent = nativeEvent;
          this.target = nativeEventTarget;
          this.currentTarget = null;
          for (var propName in Interface)
            Interface.hasOwnProperty(propName) && (reactName = Interface[propName], this[propName] = reactName ? reactName(nativeEvent) : nativeEvent[propName]);
          this.isDefaultPrevented = (null != nativeEvent.defaultPrevented ? nativeEvent.defaultPrevented : false === nativeEvent.returnValue) ? functionThatReturnsTrue : functionThatReturnsFalse;
          this.isPropagationStopped = functionThatReturnsFalse;
          return this;
        }
        assign2(SyntheticBaseEvent.prototype, {
          preventDefault: function() {
            this.defaultPrevented = true;
            var event = this.nativeEvent;
            event && (event.preventDefault ? event.preventDefault() : "unknown" !== typeof event.returnValue && (event.returnValue = false), this.isDefaultPrevented = functionThatReturnsTrue);
          },
          stopPropagation: function() {
            var event = this.nativeEvent;
            event && (event.stopPropagation ? event.stopPropagation() : "unknown" !== typeof event.cancelBubble && (event.cancelBubble = true), this.isPropagationStopped = functionThatReturnsTrue);
          },
          persist: function() {
          },
          isPersistent: functionThatReturnsTrue
        });
        return SyntheticBaseEvent;
      }
      var EventInterface = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(event) {
          return event.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
      };
      var SyntheticEvent = createSyntheticEvent(EventInterface);
      var UIEventInterface = assign2({}, EventInterface, { view: 0, detail: 0 });
      var SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
      var lastMovementX;
      var lastMovementY;
      var lastMouseEvent;
      var MouseEventInterface = assign2({}, UIEventInterface, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: getEventModifierState,
        button: 0,
        buttons: 0,
        relatedTarget: function(event) {
          return void 0 === event.relatedTarget ? event.fromElement === event.srcElement ? event.toElement : event.fromElement : event.relatedTarget;
        },
        movementX: function(event) {
          if ("movementX" in event) return event.movementX;
          event !== lastMouseEvent && (lastMouseEvent && "mousemove" === event.type ? (lastMovementX = event.screenX - lastMouseEvent.screenX, lastMovementY = event.screenY - lastMouseEvent.screenY) : lastMovementY = lastMovementX = 0, lastMouseEvent = event);
          return lastMovementX;
        },
        movementY: function(event) {
          return "movementY" in event ? event.movementY : lastMovementY;
        }
      });
      var SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
      var DragEventInterface = assign2({}, MouseEventInterface, { dataTransfer: 0 });
      var SyntheticDragEvent = createSyntheticEvent(DragEventInterface);
      var FocusEventInterface = assign2({}, UIEventInterface, { relatedTarget: 0 });
      var SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface);
      var AnimationEventInterface = assign2({}, EventInterface, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      });
      var SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface);
      var ClipboardEventInterface = assign2({}, EventInterface, {
        clipboardData: function(event) {
          return "clipboardData" in event ? event.clipboardData : window.clipboardData;
        }
      });
      var SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface);
      var CompositionEventInterface = assign2({}, EventInterface, { data: 0 });
      var SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface);
      var normalizeKey = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var translateToKey = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var modifierKeyToProp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
      function modifierStateGetter(keyArg) {
        var nativeEvent = this.nativeEvent;
        return nativeEvent.getModifierState ? nativeEvent.getModifierState(keyArg) : (keyArg = modifierKeyToProp[keyArg]) ? !!nativeEvent[keyArg] : false;
      }
      function getEventModifierState() {
        return modifierStateGetter;
      }
      var KeyboardEventInterface = assign2({}, UIEventInterface, {
        key: function(nativeEvent) {
          if (nativeEvent.key) {
            var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
            if ("Unidentified" !== key) return key;
          }
          return "keypress" === nativeEvent.type ? (nativeEvent = getEventCharCode(nativeEvent), 13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent)) : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type ? translateToKey[nativeEvent.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: getEventModifierState,
        charCode: function(event) {
          return "keypress" === event.type ? getEventCharCode(event) : 0;
        },
        keyCode: function(event) {
          return "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
        },
        which: function(event) {
          return "keypress" === event.type ? getEventCharCode(event) : "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
        }
      });
      var SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface);
      var PointerEventInterface = assign2({}, MouseEventInterface, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
      });
      var SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface);
      var TouchEventInterface = assign2({}, UIEventInterface, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: getEventModifierState
      });
      var SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface);
      var TransitionEventInterface = assign2({}, EventInterface, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      });
      var SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface);
      var WheelEventInterface = assign2({}, MouseEventInterface, {
        deltaX: function(event) {
          return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
        },
        deltaY: function(event) {
          return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface);
      var ToggleEventInterface = assign2({}, EventInterface, {
        newState: 0,
        oldState: 0
      });
      var SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface);
      var END_KEYCODES = [9, 13, 27, 32];
      var canUseCompositionEvent = canUseDOM && "CompositionEvent" in window;
      var documentMode = null;
      canUseDOM && "documentMode" in document && (documentMode = document.documentMode);
      var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode;
      var useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && 8 < documentMode && 11 >= documentMode);
      var SPACEBAR_CHAR = String.fromCharCode(32);
      var hasSpaceKeypress = false;
      function isFallbackCompositionEnd(domEventName, nativeEvent) {
        switch (domEventName) {
          case "keyup":
            return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
          case "keydown":
            return 229 !== nativeEvent.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function getDataFromCustomEvent(nativeEvent) {
        nativeEvent = nativeEvent.detail;
        return "object" === typeof nativeEvent && "data" in nativeEvent ? nativeEvent.data : null;
      }
      var isComposing = false;
      function getNativeBeforeInputChars(domEventName, nativeEvent) {
        switch (domEventName) {
          case "compositionend":
            return getDataFromCustomEvent(nativeEvent);
          case "keypress":
            if (32 !== nativeEvent.which) return null;
            hasSpaceKeypress = true;
            return SPACEBAR_CHAR;
          case "textInput":
            return domEventName = nativeEvent.data, domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName;
          default:
            return null;
        }
      }
      function getFallbackBeforeInputChars(domEventName, nativeEvent) {
        if (isComposing)
          return "compositionend" === domEventName || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent) ? (domEventName = getData(), fallbackText = startText = root = null, isComposing = false, domEventName) : null;
        switch (domEventName) {
          case "paste":
            return null;
          case "keypress":
            if (!(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) || nativeEvent.ctrlKey && nativeEvent.altKey) {
              if (nativeEvent.char && 1 < nativeEvent.char.length)
                return nativeEvent.char;
              if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
            }
            return null;
          case "compositionend":
            return useFallbackCompositionData && "ko" !== nativeEvent.locale ? null : nativeEvent.data;
          default:
            return null;
        }
      }
      var supportedInputTypes = {
        color: true,
        date: true,
        datetime: true,
        "datetime-local": true,
        email: true,
        month: true,
        number: true,
        password: true,
        range: true,
        search: true,
        tel: true,
        text: true,
        time: true,
        url: true,
        week: true
      };
      function isTextInputElement(elem) {
        var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
        return "input" === nodeName ? !!supportedInputTypes[elem.type] : "textarea" === nodeName ? true : false;
      }
      function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
        restoreTarget ? restoreQueue ? restoreQueue.push(target) : restoreQueue = [target] : restoreTarget = target;
        inst = accumulateTwoPhaseListeners(inst, "onChange");
        0 < inst.length && (nativeEvent = new SyntheticEvent(
          "onChange",
          "change",
          null,
          nativeEvent,
          target
        ), dispatchQueue.push({ event: nativeEvent, listeners: inst }));
      }
      var activeElement$1 = null;
      var activeElementInst$1 = null;
      function runEventInBatch(dispatchQueue) {
        processDispatchQueue(dispatchQueue, 0);
      }
      function getInstIfValueChanged(targetInst) {
        var targetNode = getNodeFromInstance(targetInst);
        if (updateValueIfChanged(targetNode)) return targetInst;
      }
      function getTargetInstForChangeEvent(domEventName, targetInst) {
        if ("change" === domEventName) return targetInst;
      }
      var isInputEventSupported = false;
      if (canUseDOM) {
        if (canUseDOM) {
          isSupported$jscomp$inline_427 = "oninput" in document;
          if (!isSupported$jscomp$inline_427) {
            element$jscomp$inline_428 = document.createElement("div");
            element$jscomp$inline_428.setAttribute("oninput", "return;");
            isSupported$jscomp$inline_427 = "function" === typeof element$jscomp$inline_428.oninput;
          }
          JSCompiler_inline_result$jscomp$286 = isSupported$jscomp$inline_427;
        } else JSCompiler_inline_result$jscomp$286 = false;
        isInputEventSupported = JSCompiler_inline_result$jscomp$286 && (!document.documentMode || 9 < document.documentMode);
      }
      var JSCompiler_inline_result$jscomp$286;
      var isSupported$jscomp$inline_427;
      var element$jscomp$inline_428;
      function stopWatchingForValueChange() {
        activeElement$1 && (activeElement$1.detachEvent("onpropertychange", handlePropertyChange), activeElementInst$1 = activeElement$1 = null);
      }
      function handlePropertyChange(nativeEvent) {
        if ("value" === nativeEvent.propertyName && getInstIfValueChanged(activeElementInst$1)) {
          var dispatchQueue = [];
          createAndAccumulateChangeEvent(
            dispatchQueue,
            activeElementInst$1,
            nativeEvent,
            getEventTarget(nativeEvent)
          );
          batchedUpdates$1(runEventInBatch, dispatchQueue);
        }
      }
      function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
        "focusin" === domEventName ? (stopWatchingForValueChange(), activeElement$1 = target, activeElementInst$1 = targetInst, activeElement$1.attachEvent("onpropertychange", handlePropertyChange)) : "focusout" === domEventName && stopWatchingForValueChange();
      }
      function getTargetInstForInputEventPolyfill(domEventName) {
        if ("selectionchange" === domEventName || "keyup" === domEventName || "keydown" === domEventName)
          return getInstIfValueChanged(activeElementInst$1);
      }
      function getTargetInstForClickEvent(domEventName, targetInst) {
        if ("click" === domEventName) return getInstIfValueChanged(targetInst);
      }
      function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
        if ("input" === domEventName || "change" === domEventName)
          return getInstIfValueChanged(targetInst);
      }
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      var objectIs = "function" === typeof Object.is ? Object.is : is;
      function shallowEqual(objA, objB) {
        if (objectIs(objA, objB)) return true;
        if ("object" !== typeof objA || null === objA || "object" !== typeof objB || null === objB)
          return false;
        var keysA = Object.keys(objA), keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) return false;
        for (keysB = 0; keysB < keysA.length; keysB++) {
          var currentKey = keysA[keysB];
          if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey]))
            return false;
        }
        return true;
      }
      function getLeafNode(node2) {
        for (; node2 && node2.firstChild; ) node2 = node2.firstChild;
        return node2;
      }
      function getNodeForCharacterOffset(root2, offset) {
        var node2 = getLeafNode(root2);
        root2 = 0;
        for (var nodeEnd; node2; ) {
          if (3 === node2.nodeType) {
            nodeEnd = root2 + node2.textContent.length;
            if (root2 <= offset && nodeEnd >= offset)
              return { node: node2, offset: offset - root2 };
            root2 = nodeEnd;
          }
          a: {
            for (; node2; ) {
              if (node2.nextSibling) {
                node2 = node2.nextSibling;
                break a;
              }
              node2 = node2.parentNode;
            }
            node2 = void 0;
          }
          node2 = getLeafNode(node2);
        }
      }
      function containsNode(outerNode, innerNode) {
        return outerNode && innerNode ? outerNode === innerNode ? true : outerNode && 3 === outerNode.nodeType ? false : innerNode && 3 === innerNode.nodeType ? containsNode(outerNode, innerNode.parentNode) : "contains" in outerNode ? outerNode.contains(innerNode) : outerNode.compareDocumentPosition ? !!(outerNode.compareDocumentPosition(innerNode) & 16) : false : false;
      }
      function getActiveElementDeep(containerInfo) {
        containerInfo = null != containerInfo && null != containerInfo.ownerDocument && null != containerInfo.ownerDocument.defaultView ? containerInfo.ownerDocument.defaultView : window;
        for (var element = getActiveElement(containerInfo.document); element instanceof containerInfo.HTMLIFrameElement; ) {
          try {
            var JSCompiler_inline_result = "string" === typeof element.contentWindow.location.href;
          } catch (err) {
            JSCompiler_inline_result = false;
          }
          if (JSCompiler_inline_result) containerInfo = element.contentWindow;
          else break;
          element = getActiveElement(containerInfo.document);
        }
        return element;
      }
      function hasSelectionCapabilities(elem) {
        var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
        return nodeName && ("input" === nodeName && ("text" === elem.type || "search" === elem.type || "tel" === elem.type || "url" === elem.type || "password" === elem.type) || "textarea" === nodeName || "true" === elem.contentEditable);
      }
      var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && 11 >= document.documentMode;
      var activeElement = null;
      var activeElementInst = null;
      var lastSelection = null;
      var mouseDown = false;
      function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
        var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : 9 === nativeEventTarget.nodeType ? nativeEventTarget : nativeEventTarget.ownerDocument;
        mouseDown || null == activeElement || activeElement !== getActiveElement(doc) || (doc = activeElement, "selectionStart" in doc && hasSelectionCapabilities(doc) ? doc = { start: doc.selectionStart, end: doc.selectionEnd } : (doc = (doc.ownerDocument && doc.ownerDocument.defaultView || window).getSelection(), doc = {
          anchorNode: doc.anchorNode,
          anchorOffset: doc.anchorOffset,
          focusNode: doc.focusNode,
          focusOffset: doc.focusOffset
        }), lastSelection && shallowEqual(lastSelection, doc) || (lastSelection = doc, doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect"), 0 < doc.length && (nativeEvent = new SyntheticEvent(
          "onSelect",
          "select",
          null,
          nativeEvent,
          nativeEventTarget
        ), dispatchQueue.push({ event: nativeEvent, listeners: doc }), nativeEvent.target = activeElement)));
      }
      function makePrefixMap(styleProp, eventName) {
        var prefixes = {};
        prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
        prefixes["Webkit" + styleProp] = "webkit" + eventName;
        prefixes["Moz" + styleProp] = "moz" + eventName;
        return prefixes;
      }
      var vendorPrefixes = {
        animationend: makePrefixMap("Animation", "AnimationEnd"),
        animationiteration: makePrefixMap("Animation", "AnimationIteration"),
        animationstart: makePrefixMap("Animation", "AnimationStart"),
        transitionrun: makePrefixMap("Transition", "TransitionRun"),
        transitionstart: makePrefixMap("Transition", "TransitionStart"),
        transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
        transitionend: makePrefixMap("Transition", "TransitionEnd")
      };
      var prefixedEventNames = {};
      var style3 = {};
      canUseDOM && (style3 = document.createElement("div").style, "AnimationEvent" in window || (delete vendorPrefixes.animationend.animation, delete vendorPrefixes.animationiteration.animation, delete vendorPrefixes.animationstart.animation), "TransitionEvent" in window || delete vendorPrefixes.transitionend.transition);
      function getVendorPrefixedEventName(eventName) {
        if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
        if (!vendorPrefixes[eventName]) return eventName;
        var prefixMap = vendorPrefixes[eventName], styleProp;
        for (styleProp in prefixMap)
          if (prefixMap.hasOwnProperty(styleProp) && styleProp in style3)
            return prefixedEventNames[eventName] = prefixMap[styleProp];
        return eventName;
      }
      var ANIMATION_END = getVendorPrefixedEventName("animationend");
      var ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration");
      var ANIMATION_START = getVendorPrefixedEventName("animationstart");
      var TRANSITION_RUN = getVendorPrefixedEventName("transitionrun");
      var TRANSITION_START = getVendorPrefixedEventName("transitionstart");
      var TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel");
      var TRANSITION_END = getVendorPrefixedEventName("transitionend");
      var topLevelEventsToReactNames = /* @__PURE__ */ new Map();
      var simpleEventPluginEvents = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
      simpleEventPluginEvents.push("scrollEnd");
      function registerSimpleEvent(domEventName, reactName) {
        topLevelEventsToReactNames.set(domEventName, reactName);
        registerTwoPhaseEvent(reactName, [domEventName]);
      }
      var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      };
      var concurrentQueues = [];
      var concurrentQueuesIndex = 0;
      var concurrentlyUpdatedLanes = 0;
      function finishQueueingConcurrentUpdates() {
        for (var endIndex = concurrentQueuesIndex, i = concurrentlyUpdatedLanes = concurrentQueuesIndex = 0; i < endIndex; ) {
          var fiber = concurrentQueues[i];
          concurrentQueues[i++] = null;
          var queue = concurrentQueues[i];
          concurrentQueues[i++] = null;
          var update = concurrentQueues[i];
          concurrentQueues[i++] = null;
          var lane = concurrentQueues[i];
          concurrentQueues[i++] = null;
          if (null !== queue && null !== update) {
            var pending = queue.pending;
            null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
            queue.pending = update;
          }
          0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
        }
      }
      function enqueueUpdate$1(fiber, queue, update, lane) {
        concurrentQueues[concurrentQueuesIndex++] = fiber;
        concurrentQueues[concurrentQueuesIndex++] = queue;
        concurrentQueues[concurrentQueuesIndex++] = update;
        concurrentQueues[concurrentQueuesIndex++] = lane;
        concurrentlyUpdatedLanes |= lane;
        fiber.lanes |= lane;
        fiber = fiber.alternate;
        null !== fiber && (fiber.lanes |= lane);
      }
      function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
        enqueueUpdate$1(fiber, queue, update, lane);
        return getRootForUpdatedFiber(fiber);
      }
      function enqueueConcurrentRenderForLane(fiber, lane) {
        enqueueUpdate$1(fiber, null, null, lane);
        return getRootForUpdatedFiber(fiber);
      }
      function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
        sourceFiber.lanes |= lane;
        var alternate = sourceFiber.alternate;
        null !== alternate && (alternate.lanes |= lane);
        for (var isHidden = false, parent = sourceFiber.return; null !== parent; )
          parent.childLanes |= lane, alternate = parent.alternate, null !== alternate && (alternate.childLanes |= lane), 22 === parent.tag && (sourceFiber = parent.stateNode, null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = true)), sourceFiber = parent, parent = parent.return;
        return 3 === sourceFiber.tag ? (parent = sourceFiber.stateNode, isHidden && null !== update && (isHidden = 31 - clz32(lane), sourceFiber = parent.hiddenUpdates, alternate = sourceFiber[isHidden], null === alternate ? sourceFiber[isHidden] = [update] : alternate.push(update), update.lane = lane | 536870912), parent) : null;
      }
      function getRootForUpdatedFiber(sourceFiber) {
        if (50 < nestedUpdateCount)
          throw nestedUpdateCount = 0, rootWithNestedUpdates = null, Error(formatProdErrorMessage(185));
        for (var parent = sourceFiber.return; null !== parent; )
          sourceFiber = parent, parent = sourceFiber.return;
        return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
      }
      var emptyContextObject = {};
      function FiberNode(tag, pendingProps, key, mode) {
        this.tag = tag;
        this.key = key;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.refCleanup = this.ref = null;
        this.pendingProps = pendingProps;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = mode;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function createFiberImplClass(tag, pendingProps, key, mode) {
        return new FiberNode(tag, pendingProps, key, mode);
      }
      function shouldConstruct(Component) {
        Component = Component.prototype;
        return !(!Component || !Component.isReactComponent);
      }
      function createWorkInProgress(current, pendingProps) {
        var workInProgress2 = current.alternate;
        null === workInProgress2 ? (workInProgress2 = createFiberImplClass(
          current.tag,
          pendingProps,
          current.key,
          current.mode
        ), workInProgress2.elementType = current.elementType, workInProgress2.type = current.type, workInProgress2.stateNode = current.stateNode, workInProgress2.alternate = current, current.alternate = workInProgress2) : (workInProgress2.pendingProps = pendingProps, workInProgress2.type = current.type, workInProgress2.flags = 0, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null);
        workInProgress2.flags = current.flags & 65011712;
        workInProgress2.childLanes = current.childLanes;
        workInProgress2.lanes = current.lanes;
        workInProgress2.child = current.child;
        workInProgress2.memoizedProps = current.memoizedProps;
        workInProgress2.memoizedState = current.memoizedState;
        workInProgress2.updateQueue = current.updateQueue;
        pendingProps = current.dependencies;
        workInProgress2.dependencies = null === pendingProps ? null : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
        workInProgress2.sibling = current.sibling;
        workInProgress2.index = current.index;
        workInProgress2.ref = current.ref;
        workInProgress2.refCleanup = current.refCleanup;
        return workInProgress2;
      }
      function resetWorkInProgress(workInProgress2, renderLanes2) {
        workInProgress2.flags &= 65011714;
        var current = workInProgress2.alternate;
        null === current ? (workInProgress2.childLanes = 0, workInProgress2.lanes = renderLanes2, workInProgress2.child = null, workInProgress2.subtreeFlags = 0, workInProgress2.memoizedProps = null, workInProgress2.memoizedState = null, workInProgress2.updateQueue = null, workInProgress2.dependencies = null, workInProgress2.stateNode = null) : (workInProgress2.childLanes = current.childLanes, workInProgress2.lanes = current.lanes, workInProgress2.child = current.child, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null, workInProgress2.memoizedProps = current.memoizedProps, workInProgress2.memoizedState = current.memoizedState, workInProgress2.updateQueue = current.updateQueue, workInProgress2.type = current.type, renderLanes2 = current.dependencies, workInProgress2.dependencies = null === renderLanes2 ? null : {
          lanes: renderLanes2.lanes,
          firstContext: renderLanes2.firstContext
        });
        return workInProgress2;
      }
      function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
        var fiberTag = 0;
        owner = type;
        if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
        else if ("string" === typeof type)
          fiberTag = isHostHoistableType(
            type,
            pendingProps,
            contextStackCursor.current
          ) ? 26 : "html" === type || "head" === type || "body" === type ? 27 : 5;
        else
          a: switch (type) {
            case REACT_ACTIVITY_TYPE:
              return type = createFiberImplClass(31, pendingProps, key, mode), type.elementType = REACT_ACTIVITY_TYPE, type.lanes = lanes, type;
            case REACT_FRAGMENT_TYPE:
              return createFiberFromFragment(pendingProps.children, mode, lanes, key);
            case REACT_STRICT_MODE_TYPE:
              fiberTag = 8;
              mode |= 24;
              break;
            case REACT_PROFILER_TYPE:
              return type = createFiberImplClass(12, pendingProps, key, mode | 2), type.elementType = REACT_PROFILER_TYPE, type.lanes = lanes, type;
            case REACT_SUSPENSE_TYPE:
              return type = createFiberImplClass(13, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_TYPE, type.lanes = lanes, type;
            case REACT_SUSPENSE_LIST_TYPE:
              return type = createFiberImplClass(19, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_LIST_TYPE, type.lanes = lanes, type;
            default:
              if ("object" === typeof type && null !== type)
                switch (type.$$typeof) {
                  case REACT_CONTEXT_TYPE:
                    fiberTag = 10;
                    break a;
                  case REACT_CONSUMER_TYPE:
                    fiberTag = 9;
                    break a;
                  case REACT_FORWARD_REF_TYPE:
                    fiberTag = 11;
                    break a;
                  case REACT_MEMO_TYPE:
                    fiberTag = 14;
                    break a;
                  case REACT_LAZY_TYPE:
                    fiberTag = 16;
                    owner = null;
                    break a;
                }
              fiberTag = 29;
              pendingProps = Error(
                formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
              );
              owner = null;
          }
        key = createFiberImplClass(fiberTag, pendingProps, key, mode);
        key.elementType = type;
        key.type = owner;
        key.lanes = lanes;
        return key;
      }
      function createFiberFromFragment(elements, mode, lanes, key) {
        elements = createFiberImplClass(7, elements, key, mode);
        elements.lanes = lanes;
        return elements;
      }
      function createFiberFromText(content, mode, lanes) {
        content = createFiberImplClass(6, content, null, mode);
        content.lanes = lanes;
        return content;
      }
      function createFiberFromDehydratedFragment(dehydratedNode) {
        var fiber = createFiberImplClass(18, null, null, 0);
        fiber.stateNode = dehydratedNode;
        return fiber;
      }
      function createFiberFromPortal(portal, mode, lanes) {
        mode = createFiberImplClass(
          4,
          null !== portal.children ? portal.children : [],
          portal.key,
          mode
        );
        mode.lanes = lanes;
        mode.stateNode = {
          containerInfo: portal.containerInfo,
          pendingChildren: null,
          implementation: portal.implementation
        };
        return mode;
      }
      var CapturedStacks = /* @__PURE__ */ new WeakMap();
      function createCapturedValueAtFiber(value, source) {
        if ("object" === typeof value && null !== value) {
          var existing = CapturedStacks.get(value);
          if (void 0 !== existing) return existing;
          source = {
            value,
            source,
            stack: getStackByFiberInDevAndProd(source)
          };
          CapturedStacks.set(value, source);
          return source;
        }
        return {
          value,
          source,
          stack: getStackByFiberInDevAndProd(source)
        };
      }
      var forkStack = [];
      var forkStackIndex = 0;
      var treeForkProvider = null;
      var treeForkCount = 0;
      var idStack = [];
      var idStackIndex = 0;
      var treeContextProvider = null;
      var treeContextId = 1;
      var treeContextOverflow = "";
      function pushTreeFork(workInProgress2, totalChildren) {
        forkStack[forkStackIndex++] = treeForkCount;
        forkStack[forkStackIndex++] = treeForkProvider;
        treeForkProvider = workInProgress2;
        treeForkCount = totalChildren;
      }
      function pushTreeId(workInProgress2, totalChildren, index2) {
        idStack[idStackIndex++] = treeContextId;
        idStack[idStackIndex++] = treeContextOverflow;
        idStack[idStackIndex++] = treeContextProvider;
        treeContextProvider = workInProgress2;
        var baseIdWithLeadingBit = treeContextId;
        workInProgress2 = treeContextOverflow;
        var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
        baseIdWithLeadingBit &= ~(1 << baseLength);
        index2 += 1;
        var length2 = 32 - clz32(totalChildren) + baseLength;
        if (30 < length2) {
          var numberOfOverflowBits = baseLength - baseLength % 5;
          length2 = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
          baseIdWithLeadingBit >>= numberOfOverflowBits;
          baseLength -= numberOfOverflowBits;
          treeContextId = 1 << 32 - clz32(totalChildren) + baseLength | index2 << baseLength | baseIdWithLeadingBit;
          treeContextOverflow = length2 + workInProgress2;
        } else
          treeContextId = 1 << length2 | index2 << baseLength | baseIdWithLeadingBit, treeContextOverflow = workInProgress2;
      }
      function pushMaterializedTreeId(workInProgress2) {
        null !== workInProgress2.return && (pushTreeFork(workInProgress2, 1), pushTreeId(workInProgress2, 1, 0));
      }
      function popTreeContext(workInProgress2) {
        for (; workInProgress2 === treeForkProvider; )
          treeForkProvider = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null, treeForkCount = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null;
        for (; workInProgress2 === treeContextProvider; )
          treeContextProvider = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextOverflow = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextId = idStack[--idStackIndex], idStack[idStackIndex] = null;
      }
      function restoreSuspendedTreeContext(workInProgress2, suspendedContext) {
        idStack[idStackIndex++] = treeContextId;
        idStack[idStackIndex++] = treeContextOverflow;
        idStack[idStackIndex++] = treeContextProvider;
        treeContextId = suspendedContext.id;
        treeContextOverflow = suspendedContext.overflow;
        treeContextProvider = workInProgress2;
      }
      var hydrationParentFiber = null;
      var nextHydratableInstance = null;
      var isHydrating = false;
      var hydrationErrors = null;
      var rootOrSingletonContext = false;
      var HydrationMismatchException = Error(formatProdErrorMessage(519));
      function throwOnHydrationMismatch(fiber) {
        var error = Error(
          formatProdErrorMessage(
            418,
            1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML",
            ""
          )
        );
        queueHydrationError(createCapturedValueAtFiber(error, fiber));
        throw HydrationMismatchException;
      }
      function prepareToHydrateHostInstance(fiber) {
        var instance = fiber.stateNode, type = fiber.type, props = fiber.memoizedProps;
        instance[internalInstanceKey] = fiber;
        instance[internalPropsKey] = props;
        switch (type) {
          case "dialog":
            listenToNonDelegatedEvent("cancel", instance);
            listenToNonDelegatedEvent("close", instance);
            break;
          case "iframe":
          case "object":
          case "embed":
            listenToNonDelegatedEvent("load", instance);
            break;
          case "video":
          case "audio":
            for (type = 0; type < mediaEventTypes.length; type++)
              listenToNonDelegatedEvent(mediaEventTypes[type], instance);
            break;
          case "source":
            listenToNonDelegatedEvent("error", instance);
            break;
          case "img":
          case "image":
          case "link":
            listenToNonDelegatedEvent("error", instance);
            listenToNonDelegatedEvent("load", instance);
            break;
          case "details":
            listenToNonDelegatedEvent("toggle", instance);
            break;
          case "input":
            listenToNonDelegatedEvent("invalid", instance);
            initInput(
              instance,
              props.value,
              props.defaultValue,
              props.checked,
              props.defaultChecked,
              props.type,
              props.name,
              true
            );
            break;
          case "select":
            listenToNonDelegatedEvent("invalid", instance);
            break;
          case "textarea":
            listenToNonDelegatedEvent("invalid", instance), initTextarea(instance, props.value, props.defaultValue, props.children);
        }
        type = props.children;
        "string" !== typeof type && "number" !== typeof type && "bigint" !== typeof type || instance.textContent === "" + type || true === props.suppressHydrationWarning || checkForUnmatchedText(instance.textContent, type) ? (null != props.popover && (listenToNonDelegatedEvent("beforetoggle", instance), listenToNonDelegatedEvent("toggle", instance)), null != props.onScroll && listenToNonDelegatedEvent("scroll", instance), null != props.onScrollEnd && listenToNonDelegatedEvent("scrollend", instance), null != props.onClick && (instance.onclick = noop$1), instance = true) : instance = false;
        instance || throwOnHydrationMismatch(fiber, true);
      }
      function popToNextHostParent(fiber) {
        for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
          switch (hydrationParentFiber.tag) {
            case 5:
            case 31:
            case 13:
              rootOrSingletonContext = false;
              return;
            case 27:
            case 3:
              rootOrSingletonContext = true;
              return;
            default:
              hydrationParentFiber = hydrationParentFiber.return;
          }
      }
      function popHydrationState(fiber) {
        if (fiber !== hydrationParentFiber) return false;
        if (!isHydrating) return popToNextHostParent(fiber), isHydrating = true, false;
        var tag = fiber.tag, JSCompiler_temp;
        if (JSCompiler_temp = 3 !== tag && 27 !== tag) {
          if (JSCompiler_temp = 5 === tag)
            JSCompiler_temp = fiber.type, JSCompiler_temp = !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) || shouldSetTextContent(fiber.type, fiber.memoizedProps);
          JSCompiler_temp = !JSCompiler_temp;
        }
        JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
        popToNextHostParent(fiber);
        if (13 === tag) {
          fiber = fiber.memoizedState;
          fiber = null !== fiber ? fiber.dehydrated : null;
          if (!fiber) throw Error(formatProdErrorMessage(317));
          nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
        } else if (31 === tag) {
          fiber = fiber.memoizedState;
          fiber = null !== fiber ? fiber.dehydrated : null;
          if (!fiber) throw Error(formatProdErrorMessage(317));
          nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
        } else
          27 === tag ? (tag = nextHydratableInstance, isSingletonScope(fiber.type) ? (fiber = previousHydratableOnEnteringScopedSingleton, previousHydratableOnEnteringScopedSingleton = null, nextHydratableInstance = fiber) : nextHydratableInstance = tag) : nextHydratableInstance = hydrationParentFiber ? getNextHydratable(fiber.stateNode.nextSibling) : null;
        return true;
      }
      function resetHydrationState() {
        nextHydratableInstance = hydrationParentFiber = null;
        isHydrating = false;
      }
      function upgradeHydrationErrorsToRecoverable() {
        var queuedErrors = hydrationErrors;
        null !== queuedErrors && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = queuedErrors : workInProgressRootRecoverableErrors.push.apply(
          workInProgressRootRecoverableErrors,
          queuedErrors
        ), hydrationErrors = null);
        return queuedErrors;
      }
      function queueHydrationError(error) {
        null === hydrationErrors ? hydrationErrors = [error] : hydrationErrors.push(error);
      }
      var valueCursor = createCursor(null);
      var currentlyRenderingFiber$1 = null;
      var lastContextDependency = null;
      function pushProvider(providerFiber, context, nextValue) {
        push(valueCursor, context._currentValue);
        context._currentValue = nextValue;
      }
      function popProvider(context) {
        context._currentValue = valueCursor.current;
        pop(valueCursor);
      }
      function scheduleContextWorkOnParentPath(parent, renderLanes2, propagationRoot) {
        for (; null !== parent; ) {
          var alternate = parent.alternate;
          (parent.childLanes & renderLanes2) !== renderLanes2 ? (parent.childLanes |= renderLanes2, null !== alternate && (alternate.childLanes |= renderLanes2)) : null !== alternate && (alternate.childLanes & renderLanes2) !== renderLanes2 && (alternate.childLanes |= renderLanes2);
          if (parent === propagationRoot) break;
          parent = parent.return;
        }
      }
      function propagateContextChanges(workInProgress2, contexts, renderLanes2, forcePropagateEntireTree) {
        var fiber = workInProgress2.child;
        null !== fiber && (fiber.return = workInProgress2);
        for (; null !== fiber; ) {
          var list = fiber.dependencies;
          if (null !== list) {
            var nextFiber = fiber.child;
            list = list.firstContext;
            a: for (; null !== list; ) {
              var dependency = list;
              list = fiber;
              for (var i = 0; i < contexts.length; i++)
                if (dependency.context === contexts[i]) {
                  list.lanes |= renderLanes2;
                  dependency = list.alternate;
                  null !== dependency && (dependency.lanes |= renderLanes2);
                  scheduleContextWorkOnParentPath(
                    list.return,
                    renderLanes2,
                    workInProgress2
                  );
                  forcePropagateEntireTree || (nextFiber = null);
                  break a;
                }
              list = dependency.next;
            }
          } else if (18 === fiber.tag) {
            nextFiber = fiber.return;
            if (null === nextFiber) throw Error(formatProdErrorMessage(341));
            nextFiber.lanes |= renderLanes2;
            list = nextFiber.alternate;
            null !== list && (list.lanes |= renderLanes2);
            scheduleContextWorkOnParentPath(nextFiber, renderLanes2, workInProgress2);
            nextFiber = null;
          } else nextFiber = fiber.child;
          if (null !== nextFiber) nextFiber.return = fiber;
          else
            for (nextFiber = fiber; null !== nextFiber; ) {
              if (nextFiber === workInProgress2) {
                nextFiber = null;
                break;
              }
              fiber = nextFiber.sibling;
              if (null !== fiber) {
                fiber.return = nextFiber.return;
                nextFiber = fiber;
                break;
              }
              nextFiber = nextFiber.return;
            }
          fiber = nextFiber;
        }
      }
      function propagateParentContextChanges(current, workInProgress2, renderLanes2, forcePropagateEntireTree) {
        current = null;
        for (var parent = workInProgress2, isInsidePropagationBailout = false; null !== parent; ) {
          if (!isInsidePropagationBailout) {
            if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = true;
            else if (0 !== (parent.flags & 262144)) break;
          }
          if (10 === parent.tag) {
            var currentParent = parent.alternate;
            if (null === currentParent) throw Error(formatProdErrorMessage(387));
            currentParent = currentParent.memoizedProps;
            if (null !== currentParent) {
              var context = parent.type;
              objectIs(parent.pendingProps.value, currentParent.value) || (null !== current ? current.push(context) : current = [context]);
            }
          } else if (parent === hostTransitionProviderCursor.current) {
            currentParent = parent.alternate;
            if (null === currentParent) throw Error(formatProdErrorMessage(387));
            currentParent.memoizedState.memoizedState !== parent.memoizedState.memoizedState && (null !== current ? current.push(HostTransitionContext) : current = [HostTransitionContext]);
          }
          parent = parent.return;
        }
        null !== current && propagateContextChanges(
          workInProgress2,
          current,
          renderLanes2,
          forcePropagateEntireTree
        );
        workInProgress2.flags |= 262144;
      }
      function checkIfContextChanged(currentDependencies) {
        for (currentDependencies = currentDependencies.firstContext; null !== currentDependencies; ) {
          if (!objectIs(
            currentDependencies.context._currentValue,
            currentDependencies.memoizedValue
          ))
            return true;
          currentDependencies = currentDependencies.next;
        }
        return false;
      }
      function prepareToReadContext(workInProgress2) {
        currentlyRenderingFiber$1 = workInProgress2;
        lastContextDependency = null;
        workInProgress2 = workInProgress2.dependencies;
        null !== workInProgress2 && (workInProgress2.firstContext = null);
      }
      function readContext(context) {
        return readContextForConsumer(currentlyRenderingFiber$1, context);
      }
      function readContextDuringReconciliation(consumer, context) {
        null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
        return readContextForConsumer(consumer, context);
      }
      function readContextForConsumer(consumer, context) {
        var value = context._currentValue;
        context = { context, memoizedValue: value, next: null };
        if (null === lastContextDependency) {
          if (null === consumer) throw Error(formatProdErrorMessage(308));
          lastContextDependency = context;
          consumer.dependencies = { lanes: 0, firstContext: context };
          consumer.flags |= 524288;
        } else lastContextDependency = lastContextDependency.next = context;
        return value;
      }
      var AbortControllerLocal = "undefined" !== typeof AbortController ? AbortController : function() {
        var listeners = [], signal = this.signal = {
          aborted: false,
          addEventListener: function(type, listener) {
            listeners.push(listener);
          }
        };
        this.abort = function() {
          signal.aborted = true;
          listeners.forEach(function(listener) {
            return listener();
          });
        };
      };
      var scheduleCallback$2 = Scheduler.unstable_scheduleCallback;
      var NormalPriority = Scheduler.unstable_NormalPriority;
      var CacheContext = {
        $$typeof: REACT_CONTEXT_TYPE,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      };
      function createCache3() {
        return {
          controller: new AbortControllerLocal(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function releaseCache(cache) {
        cache.refCount--;
        0 === cache.refCount && scheduleCallback$2(NormalPriority, function() {
          cache.controller.abort();
        });
      }
      var currentEntangledListeners = null;
      var currentEntangledPendingCount = 0;
      var currentEntangledLane = 0;
      var currentEntangledActionThenable = null;
      function entangleAsyncAction(transition, thenable) {
        if (null === currentEntangledListeners) {
          var entangledListeners = currentEntangledListeners = [];
          currentEntangledPendingCount = 0;
          currentEntangledLane = requestTransitionLane();
          currentEntangledActionThenable = {
            status: "pending",
            value: void 0,
            then: function(resolve) {
              entangledListeners.push(resolve);
            }
          };
        }
        currentEntangledPendingCount++;
        thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
        return thenable;
      }
      function pingEngtangledActionScope() {
        if (0 === --currentEntangledPendingCount && null !== currentEntangledListeners) {
          null !== currentEntangledActionThenable && (currentEntangledActionThenable.status = "fulfilled");
          var listeners = currentEntangledListeners;
          currentEntangledListeners = null;
          currentEntangledLane = 0;
          currentEntangledActionThenable = null;
          for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
        }
      }
      function chainThenableValue(thenable, result) {
        var listeners = [], thenableWithOverride = {
          status: "pending",
          value: null,
          reason: null,
          then: function(resolve) {
            listeners.push(resolve);
          }
        };
        thenable.then(
          function() {
            thenableWithOverride.status = "fulfilled";
            thenableWithOverride.value = result;
            for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
          },
          function(error) {
            thenableWithOverride.status = "rejected";
            thenableWithOverride.reason = error;
            for (error = 0; error < listeners.length; error++)
              (0, listeners[error])(void 0);
          }
        );
        return thenableWithOverride;
      }
      var prevOnStartTransitionFinish = ReactSharedInternals.S;
      ReactSharedInternals.S = function(transition, returnValue) {
        globalMostRecentTransitionTime = now();
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && entangleAsyncAction(transition, returnValue);
        null !== prevOnStartTransitionFinish && prevOnStartTransitionFinish(transition, returnValue);
      };
      var resumedCache = createCursor(null);
      function peekCacheFromPool() {
        var cacheResumedFromPreviousRender = resumedCache.current;
        return null !== cacheResumedFromPreviousRender ? cacheResumedFromPreviousRender : workInProgressRoot.pooledCache;
      }
      function pushTransition(offscreenWorkInProgress, prevCachePool) {
        null === prevCachePool ? push(resumedCache, resumedCache.current) : push(resumedCache, prevCachePool.pool);
      }
      function getSuspendedCache() {
        var cacheFromPool = peekCacheFromPool();
        return null === cacheFromPool ? null : { parent: CacheContext._currentValue, pool: cacheFromPool };
      }
      var SuspenseException = Error(formatProdErrorMessage(460));
      var SuspenseyCommitException = Error(formatProdErrorMessage(474));
      var SuspenseActionException = Error(formatProdErrorMessage(542));
      var noopSuspenseyCommitThenable = { then: function() {
      } };
      function isThenableResolved(thenable) {
        thenable = thenable.status;
        return "fulfilled" === thenable || "rejected" === thenable;
      }
      function trackUsedThenable(thenableState2, thenable, index2) {
        index2 = thenableState2[index2];
        void 0 === index2 ? thenableState2.push(thenable) : index2 !== thenable && (thenable.then(noop$1, noop$1), thenable = index2);
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenableState2 = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState2), thenableState2;
          default:
            if ("string" === typeof thenable.status) thenable.then(noop$1, noop$1);
            else {
              thenableState2 = workInProgressRoot;
              if (null !== thenableState2 && 100 < thenableState2.shellSuspendCounter)
                throw Error(formatProdErrorMessage(482));
              thenableState2 = thenable;
              thenableState2.status = "pending";
              thenableState2.then(
                function(fulfilledValue) {
                  if ("pending" === thenable.status) {
                    var fulfilledThenable = thenable;
                    fulfilledThenable.status = "fulfilled";
                    fulfilledThenable.value = fulfilledValue;
                  }
                },
                function(error) {
                  if ("pending" === thenable.status) {
                    var rejectedThenable = thenable;
                    rejectedThenable.status = "rejected";
                    rejectedThenable.reason = error;
                  }
                }
              );
            }
            switch (thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenableState2 = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState2), thenableState2;
            }
            suspendedThenable = thenable;
            throw SuspenseException;
        }
      }
      function resolveLazy(lazyType) {
        try {
          var init = lazyType._init;
          return init(lazyType._payload);
        } catch (x) {
          if (null !== x && "object" === typeof x && "function" === typeof x.then)
            throw suspendedThenable = x, SuspenseException;
          throw x;
        }
      }
      var suspendedThenable = null;
      function getSuspendedThenable() {
        if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
        var thenable = suspendedThenable;
        suspendedThenable = null;
        return thenable;
      }
      function checkIfUseWrappedInAsyncCatch(rejectedReason) {
        if (rejectedReason === SuspenseException || rejectedReason === SuspenseActionException)
          throw Error(formatProdErrorMessage(483));
      }
      var thenableState$1 = null;
      var thenableIndexCounter$1 = 0;
      function unwrapThenable(thenable) {
        var index2 = thenableIndexCounter$1;
        thenableIndexCounter$1 += 1;
        null === thenableState$1 && (thenableState$1 = []);
        return trackUsedThenable(thenableState$1, thenable, index2);
      }
      function coerceRef(workInProgress2, element) {
        element = element.props.ref;
        workInProgress2.ref = void 0 !== element ? element : null;
      }
      function throwOnInvalidObjectTypeImpl(returnFiber, newChild) {
        if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
          throw Error(formatProdErrorMessage(525));
        returnFiber = Object.prototype.toString.call(newChild);
        throw Error(
          formatProdErrorMessage(
            31,
            "[object Object]" === returnFiber ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : returnFiber
          )
        );
      }
      function createChildReconciler(shouldTrackSideEffects) {
        function deleteChild(returnFiber, childToDelete) {
          if (shouldTrackSideEffects) {
            var deletions = returnFiber.deletions;
            null === deletions ? (returnFiber.deletions = [childToDelete], returnFiber.flags |= 16) : deletions.push(childToDelete);
          }
        }
        function deleteRemainingChildren(returnFiber, currentFirstChild) {
          if (!shouldTrackSideEffects) return null;
          for (; null !== currentFirstChild; )
            deleteChild(returnFiber, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
          return null;
        }
        function mapRemainingChildren(currentFirstChild) {
          for (var existingChildren = /* @__PURE__ */ new Map(); null !== currentFirstChild; )
            null !== currentFirstChild.key ? existingChildren.set(currentFirstChild.key, currentFirstChild) : existingChildren.set(currentFirstChild.index, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
          return existingChildren;
        }
        function useFiber(fiber, pendingProps) {
          fiber = createWorkInProgress(fiber, pendingProps);
          fiber.index = 0;
          fiber.sibling = null;
          return fiber;
        }
        function placeChild(newFiber, lastPlacedIndex, newIndex) {
          newFiber.index = newIndex;
          if (!shouldTrackSideEffects)
            return newFiber.flags |= 1048576, lastPlacedIndex;
          newIndex = newFiber.alternate;
          if (null !== newIndex)
            return newIndex = newIndex.index, newIndex < lastPlacedIndex ? (newFiber.flags |= 67108866, lastPlacedIndex) : newIndex;
          newFiber.flags |= 67108866;
          return lastPlacedIndex;
        }
        function placeSingleChild(newFiber) {
          shouldTrackSideEffects && null === newFiber.alternate && (newFiber.flags |= 67108866);
          return newFiber;
        }
        function updateTextNode(returnFiber, current, textContent, lanes) {
          if (null === current || 6 !== current.tag)
            return current = createFiberFromText(textContent, returnFiber.mode, lanes), current.return = returnFiber, current;
          current = useFiber(current, textContent);
          current.return = returnFiber;
          return current;
        }
        function updateElement(returnFiber, current, element, lanes) {
          var elementType = element.type;
          if (elementType === REACT_FRAGMENT_TYPE)
            return updateFragment(
              returnFiber,
              current,
              element.props.children,
              lanes,
              element.key
            );
          if (null !== current && (current.elementType === elementType || "object" === typeof elementType && null !== elementType && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current.type))
            return current = useFiber(current, element.props), coerceRef(current, element), current.return = returnFiber, current;
          current = createFiberFromTypeAndProps(
            element.type,
            element.key,
            element.props,
            null,
            returnFiber.mode,
            lanes
          );
          coerceRef(current, element);
          current.return = returnFiber;
          return current;
        }
        function updatePortal(returnFiber, current, portal, lanes) {
          if (null === current || 4 !== current.tag || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation)
            return current = createFiberFromPortal(portal, returnFiber.mode, lanes), current.return = returnFiber, current;
          current = useFiber(current, portal.children || []);
          current.return = returnFiber;
          return current;
        }
        function updateFragment(returnFiber, current, fragment, lanes, key) {
          if (null === current || 7 !== current.tag)
            return current = createFiberFromFragment(
              fragment,
              returnFiber.mode,
              lanes,
              key
            ), current.return = returnFiber, current;
          current = useFiber(current, fragment);
          current.return = returnFiber;
          return current;
        }
        function createChild(returnFiber, newChild, lanes) {
          if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
            return newChild = createFiberFromText(
              "" + newChild,
              returnFiber.mode,
              lanes
            ), newChild.return = returnFiber, newChild;
          if ("object" === typeof newChild && null !== newChild) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                return lanes = createFiberFromTypeAndProps(
                  newChild.type,
                  newChild.key,
                  newChild.props,
                  null,
                  returnFiber.mode,
                  lanes
                ), coerceRef(lanes, newChild), lanes.return = returnFiber, lanes;
              case REACT_PORTAL_TYPE:
                return newChild = createFiberFromPortal(
                  newChild,
                  returnFiber.mode,
                  lanes
                ), newChild.return = returnFiber, newChild;
              case REACT_LAZY_TYPE:
                return newChild = resolveLazy(newChild), createChild(returnFiber, newChild, lanes);
            }
            if (isArrayImpl(newChild) || getIteratorFn(newChild))
              return newChild = createFiberFromFragment(
                newChild,
                returnFiber.mode,
                lanes,
                null
              ), newChild.return = returnFiber, newChild;
            if ("function" === typeof newChild.then)
              return createChild(returnFiber, unwrapThenable(newChild), lanes);
            if (newChild.$$typeof === REACT_CONTEXT_TYPE)
              return createChild(
                returnFiber,
                readContextDuringReconciliation(returnFiber, newChild),
                lanes
              );
            throwOnInvalidObjectTypeImpl(returnFiber, newChild);
          }
          return null;
        }
        function updateSlot(returnFiber, oldFiber, newChild, lanes) {
          var key = null !== oldFiber ? oldFiber.key : null;
          if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
            return null !== key ? null : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
          if ("object" === typeof newChild && null !== newChild) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                return newChild.key === key ? updateElement(returnFiber, oldFiber, newChild, lanes) : null;
              case REACT_PORTAL_TYPE:
                return newChild.key === key ? updatePortal(returnFiber, oldFiber, newChild, lanes) : null;
              case REACT_LAZY_TYPE:
                return newChild = resolveLazy(newChild), updateSlot(returnFiber, oldFiber, newChild, lanes);
            }
            if (isArrayImpl(newChild) || getIteratorFn(newChild))
              return null !== key ? null : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
            if ("function" === typeof newChild.then)
              return updateSlot(
                returnFiber,
                oldFiber,
                unwrapThenable(newChild),
                lanes
              );
            if (newChild.$$typeof === REACT_CONTEXT_TYPE)
              return updateSlot(
                returnFiber,
                oldFiber,
                readContextDuringReconciliation(returnFiber, newChild),
                lanes
              );
            throwOnInvalidObjectTypeImpl(returnFiber, newChild);
          }
          return null;
        }
        function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
          if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
            return existingChildren = existingChildren.get(newIdx) || null, updateTextNode(returnFiber, existingChildren, "" + newChild, lanes);
          if ("object" === typeof newChild && null !== newChild) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                return existingChildren = existingChildren.get(
                  null === newChild.key ? newIdx : newChild.key
                ) || null, updateElement(returnFiber, existingChildren, newChild, lanes);
              case REACT_PORTAL_TYPE:
                return existingChildren = existingChildren.get(
                  null === newChild.key ? newIdx : newChild.key
                ) || null, updatePortal(returnFiber, existingChildren, newChild, lanes);
              case REACT_LAZY_TYPE:
                return newChild = resolveLazy(newChild), updateFromMap(
                  existingChildren,
                  returnFiber,
                  newIdx,
                  newChild,
                  lanes
                );
            }
            if (isArrayImpl(newChild) || getIteratorFn(newChild))
              return existingChildren = existingChildren.get(newIdx) || null, updateFragment(returnFiber, existingChildren, newChild, lanes, null);
            if ("function" === typeof newChild.then)
              return updateFromMap(
                existingChildren,
                returnFiber,
                newIdx,
                unwrapThenable(newChild),
                lanes
              );
            if (newChild.$$typeof === REACT_CONTEXT_TYPE)
              return updateFromMap(
                existingChildren,
                returnFiber,
                newIdx,
                readContextDuringReconciliation(returnFiber, newChild),
                lanes
              );
            throwOnInvalidObjectTypeImpl(returnFiber, newChild);
          }
          return null;
        }
        function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
          for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null; null !== oldFiber && newIdx < newChildren.length; newIdx++) {
            oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
            var newFiber = updateSlot(
              returnFiber,
              oldFiber,
              newChildren[newIdx],
              lanes
            );
            if (null === newFiber) {
              null === oldFiber && (oldFiber = nextOldFiber);
              break;
            }
            shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
            currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
            null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
            previousNewFiber = newFiber;
            oldFiber = nextOldFiber;
          }
          if (newIdx === newChildren.length)
            return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
          if (null === oldFiber) {
            for (; newIdx < newChildren.length; newIdx++)
              oldFiber = createChild(returnFiber, newChildren[newIdx], lanes), null !== oldFiber && (currentFirstChild = placeChild(
                oldFiber,
                currentFirstChild,
                newIdx
              ), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
            isHydrating && pushTreeFork(returnFiber, newIdx);
            return resultingFirstChild;
          }
          for (oldFiber = mapRemainingChildren(oldFiber); newIdx < newChildren.length; newIdx++)
            nextOldFiber = updateFromMap(
              oldFiber,
              returnFiber,
              newIdx,
              newChildren[newIdx],
              lanes
            ), null !== nextOldFiber && (shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(
              null === nextOldFiber.key ? newIdx : nextOldFiber.key
            ), currentFirstChild = placeChild(
              nextOldFiber,
              currentFirstChild,
              newIdx
            ), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
          shouldTrackSideEffects && oldFiber.forEach(function(child) {
            return deleteChild(returnFiber, child);
          });
          isHydrating && pushTreeFork(returnFiber, newIdx);
          return resultingFirstChild;
        }
        function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildren, lanes) {
          if (null == newChildren) throw Error(formatProdErrorMessage(151));
          for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null, step = newChildren.next(); null !== oldFiber && !step.done; newIdx++, step = newChildren.next()) {
            oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
            var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
            if (null === newFiber) {
              null === oldFiber && (oldFiber = nextOldFiber);
              break;
            }
            shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
            currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
            null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
            previousNewFiber = newFiber;
            oldFiber = nextOldFiber;
          }
          if (step.done)
            return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
          if (null === oldFiber) {
            for (; !step.done; newIdx++, step = newChildren.next())
              step = createChild(returnFiber, step.value, lanes), null !== step && (currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
            isHydrating && pushTreeFork(returnFiber, newIdx);
            return resultingFirstChild;
          }
          for (oldFiber = mapRemainingChildren(oldFiber); !step.done; newIdx++, step = newChildren.next())
            step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes), null !== step && (shouldTrackSideEffects && null !== step.alternate && oldFiber.delete(null === step.key ? newIdx : step.key), currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
          shouldTrackSideEffects && oldFiber.forEach(function(child) {
            return deleteChild(returnFiber, child);
          });
          isHydrating && pushTreeFork(returnFiber, newIdx);
          return resultingFirstChild;
        }
        function reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes) {
          "object" === typeof newChild && null !== newChild && newChild.type === REACT_FRAGMENT_TYPE && null === newChild.key && (newChild = newChild.props.children);
          if ("object" === typeof newChild && null !== newChild) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                a: {
                  for (var key = newChild.key; null !== currentFirstChild; ) {
                    if (currentFirstChild.key === key) {
                      key = newChild.type;
                      if (key === REACT_FRAGMENT_TYPE) {
                        if (7 === currentFirstChild.tag) {
                          deleteRemainingChildren(
                            returnFiber,
                            currentFirstChild.sibling
                          );
                          lanes = useFiber(
                            currentFirstChild,
                            newChild.props.children
                          );
                          lanes.return = returnFiber;
                          returnFiber = lanes;
                          break a;
                        }
                      } else if (currentFirstChild.elementType === key || "object" === typeof key && null !== key && key.$$typeof === REACT_LAZY_TYPE && resolveLazy(key) === currentFirstChild.type) {
                        deleteRemainingChildren(
                          returnFiber,
                          currentFirstChild.sibling
                        );
                        lanes = useFiber(currentFirstChild, newChild.props);
                        coerceRef(lanes, newChild);
                        lanes.return = returnFiber;
                        returnFiber = lanes;
                        break a;
                      }
                      deleteRemainingChildren(returnFiber, currentFirstChild);
                      break;
                    } else deleteChild(returnFiber, currentFirstChild);
                    currentFirstChild = currentFirstChild.sibling;
                  }
                  newChild.type === REACT_FRAGMENT_TYPE ? (lanes = createFiberFromFragment(
                    newChild.props.children,
                    returnFiber.mode,
                    lanes,
                    newChild.key
                  ), lanes.return = returnFiber, returnFiber = lanes) : (lanes = createFiberFromTypeAndProps(
                    newChild.type,
                    newChild.key,
                    newChild.props,
                    null,
                    returnFiber.mode,
                    lanes
                  ), coerceRef(lanes, newChild), lanes.return = returnFiber, returnFiber = lanes);
                }
                return placeSingleChild(returnFiber);
              case REACT_PORTAL_TYPE:
                a: {
                  for (key = newChild.key; null !== currentFirstChild; ) {
                    if (currentFirstChild.key === key)
                      if (4 === currentFirstChild.tag && currentFirstChild.stateNode.containerInfo === newChild.containerInfo && currentFirstChild.stateNode.implementation === newChild.implementation) {
                        deleteRemainingChildren(
                          returnFiber,
                          currentFirstChild.sibling
                        );
                        lanes = useFiber(currentFirstChild, newChild.children || []);
                        lanes.return = returnFiber;
                        returnFiber = lanes;
                        break a;
                      } else {
                        deleteRemainingChildren(returnFiber, currentFirstChild);
                        break;
                      }
                    else deleteChild(returnFiber, currentFirstChild);
                    currentFirstChild = currentFirstChild.sibling;
                  }
                  lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
                  lanes.return = returnFiber;
                  returnFiber = lanes;
                }
                return placeSingleChild(returnFiber);
              case REACT_LAZY_TYPE:
                return newChild = resolveLazy(newChild), reconcileChildFibersImpl(
                  returnFiber,
                  currentFirstChild,
                  newChild,
                  lanes
                );
            }
            if (isArrayImpl(newChild))
              return reconcileChildrenArray(
                returnFiber,
                currentFirstChild,
                newChild,
                lanes
              );
            if (getIteratorFn(newChild)) {
              key = getIteratorFn(newChild);
              if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
              newChild = key.call(newChild);
              return reconcileChildrenIterator(
                returnFiber,
                currentFirstChild,
                newChild,
                lanes
              );
            }
            if ("function" === typeof newChild.then)
              return reconcileChildFibersImpl(
                returnFiber,
                currentFirstChild,
                unwrapThenable(newChild),
                lanes
              );
            if (newChild.$$typeof === REACT_CONTEXT_TYPE)
              return reconcileChildFibersImpl(
                returnFiber,
                currentFirstChild,
                readContextDuringReconciliation(returnFiber, newChild),
                lanes
              );
            throwOnInvalidObjectTypeImpl(returnFiber, newChild);
          }
          return "string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild ? (newChild = "" + newChild, null !== currentFirstChild && 6 === currentFirstChild.tag ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling), lanes = useFiber(currentFirstChild, newChild), lanes.return = returnFiber, returnFiber = lanes) : (deleteRemainingChildren(returnFiber, currentFirstChild), lanes = createFiberFromText(newChild, returnFiber.mode, lanes), lanes.return = returnFiber, returnFiber = lanes), placeSingleChild(returnFiber)) : deleteRemainingChildren(returnFiber, currentFirstChild);
        }
        return function(returnFiber, currentFirstChild, newChild, lanes) {
          try {
            thenableIndexCounter$1 = 0;
            var firstChildFiber = reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes
            );
            thenableState$1 = null;
            return firstChildFiber;
          } catch (x) {
            if (x === SuspenseException || x === SuspenseActionException) throw x;
            var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
            fiber.lanes = lanes;
            fiber.return = returnFiber;
            return fiber;
          } finally {
          }
        };
      }
      var reconcileChildFibers = createChildReconciler(true);
      var mountChildFibers = createChildReconciler(false);
      var hasForceUpdate = false;
      function initializeUpdateQueue(fiber) {
        fiber.updateQueue = {
          baseState: fiber.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null
        };
      }
      function cloneUpdateQueue(current, workInProgress2) {
        current = current.updateQueue;
        workInProgress2.updateQueue === current && (workInProgress2.updateQueue = {
          baseState: current.baseState,
          firstBaseUpdate: current.firstBaseUpdate,
          lastBaseUpdate: current.lastBaseUpdate,
          shared: current.shared,
          callbacks: null
        });
      }
      function createUpdate(lane) {
        return { lane, tag: 0, payload: null, callback: null, next: null };
      }
      function enqueueUpdate(fiber, update, lane) {
        var updateQueue = fiber.updateQueue;
        if (null === updateQueue) return null;
        updateQueue = updateQueue.shared;
        if (0 !== (executionContext & 2)) {
          var pending = updateQueue.pending;
          null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
          updateQueue.pending = update;
          update = getRootForUpdatedFiber(fiber);
          markUpdateLaneFromFiberToRoot(fiber, null, lane);
          return update;
        }
        enqueueUpdate$1(fiber, updateQueue, update, lane);
        return getRootForUpdatedFiber(fiber);
      }
      function entangleTransitions(root2, fiber, lane) {
        fiber = fiber.updateQueue;
        if (null !== fiber && (fiber = fiber.shared, 0 !== (lane & 4194048))) {
          var queueLanes = fiber.lanes;
          queueLanes &= root2.pendingLanes;
          lane |= queueLanes;
          fiber.lanes = lane;
          markRootEntangled(root2, lane);
        }
      }
      function enqueueCapturedUpdate(workInProgress2, capturedUpdate) {
        var queue = workInProgress2.updateQueue, current = workInProgress2.alternate;
        if (null !== current && (current = current.updateQueue, queue === current)) {
          var newFirst = null, newLast = null;
          queue = queue.firstBaseUpdate;
          if (null !== queue) {
            do {
              var clone2 = {
                lane: queue.lane,
                tag: queue.tag,
                payload: queue.payload,
                callback: null,
                next: null
              };
              null === newLast ? newFirst = newLast = clone2 : newLast = newLast.next = clone2;
              queue = queue.next;
            } while (null !== queue);
            null === newLast ? newFirst = newLast = capturedUpdate : newLast = newLast.next = capturedUpdate;
          } else newFirst = newLast = capturedUpdate;
          queue = {
            baseState: current.baseState,
            firstBaseUpdate: newFirst,
            lastBaseUpdate: newLast,
            shared: current.shared,
            callbacks: current.callbacks
          };
          workInProgress2.updateQueue = queue;
          return;
        }
        workInProgress2 = queue.lastBaseUpdate;
        null === workInProgress2 ? queue.firstBaseUpdate = capturedUpdate : workInProgress2.next = capturedUpdate;
        queue.lastBaseUpdate = capturedUpdate;
      }
      var didReadFromEntangledAsyncAction = false;
      function suspendIfUpdateReadFromEntangledAsyncAction() {
        if (didReadFromEntangledAsyncAction) {
          var entangledActionThenable = currentEntangledActionThenable;
          if (null !== entangledActionThenable) throw entangledActionThenable;
        }
      }
      function processUpdateQueue(workInProgress$jscomp$0, props, instance$jscomp$0, renderLanes2) {
        didReadFromEntangledAsyncAction = false;
        var queue = workInProgress$jscomp$0.updateQueue;
        hasForceUpdate = false;
        var firstBaseUpdate = queue.firstBaseUpdate, lastBaseUpdate = queue.lastBaseUpdate, pendingQueue = queue.shared.pending;
        if (null !== pendingQueue) {
          queue.shared.pending = null;
          var lastPendingUpdate = pendingQueue, firstPendingUpdate = lastPendingUpdate.next;
          lastPendingUpdate.next = null;
          null === lastBaseUpdate ? firstBaseUpdate = firstPendingUpdate : lastBaseUpdate.next = firstPendingUpdate;
          lastBaseUpdate = lastPendingUpdate;
          var current = workInProgress$jscomp$0.alternate;
          null !== current && (current = current.updateQueue, pendingQueue = current.lastBaseUpdate, pendingQueue !== lastBaseUpdate && (null === pendingQueue ? current.firstBaseUpdate = firstPendingUpdate : pendingQueue.next = firstPendingUpdate, current.lastBaseUpdate = lastPendingUpdate));
        }
        if (null !== firstBaseUpdate) {
          var newState = queue.baseState;
          lastBaseUpdate = 0;
          current = firstPendingUpdate = lastPendingUpdate = null;
          pendingQueue = firstBaseUpdate;
          do {
            var updateLane = pendingQueue.lane & -536870913, isHiddenUpdate = updateLane !== pendingQueue.lane;
            if (isHiddenUpdate ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes2 & updateLane) === updateLane) {
              0 !== updateLane && updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction = true);
              null !== current && (current = current.next = {
                lane: 0,
                tag: pendingQueue.tag,
                payload: pendingQueue.payload,
                callback: null,
                next: null
              });
              a: {
                var workInProgress2 = workInProgress$jscomp$0, update = pendingQueue;
                updateLane = props;
                var instance = instance$jscomp$0;
                switch (update.tag) {
                  case 1:
                    workInProgress2 = update.payload;
                    if ("function" === typeof workInProgress2) {
                      newState = workInProgress2.call(instance, newState, updateLane);
                      break a;
                    }
                    newState = workInProgress2;
                    break a;
                  case 3:
                    workInProgress2.flags = workInProgress2.flags & -65537 | 128;
                  case 0:
                    workInProgress2 = update.payload;
                    updateLane = "function" === typeof workInProgress2 ? workInProgress2.call(instance, newState, updateLane) : workInProgress2;
                    if (null === updateLane || void 0 === updateLane) break a;
                    newState = assign2({}, newState, updateLane);
                    break a;
                  case 2:
                    hasForceUpdate = true;
                }
              }
              updateLane = pendingQueue.callback;
              null !== updateLane && (workInProgress$jscomp$0.flags |= 64, isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192), isHiddenUpdate = queue.callbacks, null === isHiddenUpdate ? queue.callbacks = [updateLane] : isHiddenUpdate.push(updateLane));
            } else
              isHiddenUpdate = {
                lane: updateLane,
                tag: pendingQueue.tag,
                payload: pendingQueue.payload,
                callback: pendingQueue.callback,
                next: null
              }, null === current ? (firstPendingUpdate = current = isHiddenUpdate, lastPendingUpdate = newState) : current = current.next = isHiddenUpdate, lastBaseUpdate |= updateLane;
            pendingQueue = pendingQueue.next;
            if (null === pendingQueue)
              if (pendingQueue = queue.shared.pending, null === pendingQueue)
                break;
              else
                isHiddenUpdate = pendingQueue, pendingQueue = isHiddenUpdate.next, isHiddenUpdate.next = null, queue.lastBaseUpdate = isHiddenUpdate, queue.shared.pending = null;
          } while (1);
          null === current && (lastPendingUpdate = newState);
          queue.baseState = lastPendingUpdate;
          queue.firstBaseUpdate = firstPendingUpdate;
          queue.lastBaseUpdate = current;
          null === firstBaseUpdate && (queue.shared.lanes = 0);
          workInProgressRootSkippedLanes |= lastBaseUpdate;
          workInProgress$jscomp$0.lanes = lastBaseUpdate;
          workInProgress$jscomp$0.memoizedState = newState;
        }
      }
      function callCallback(callback, context) {
        if ("function" !== typeof callback)
          throw Error(formatProdErrorMessage(191, callback));
        callback.call(context);
      }
      function commitCallbacks(updateQueue, context) {
        var callbacks = updateQueue.callbacks;
        if (null !== callbacks)
          for (updateQueue.callbacks = null, updateQueue = 0; updateQueue < callbacks.length; updateQueue++)
            callCallback(callbacks[updateQueue], context);
      }
      var currentTreeHiddenStackCursor = createCursor(null);
      var prevEntangledRenderLanesCursor = createCursor(0);
      function pushHiddenContext(fiber, context) {
        fiber = entangledRenderLanes;
        push(prevEntangledRenderLanesCursor, fiber);
        push(currentTreeHiddenStackCursor, context);
        entangledRenderLanes = fiber | context.baseLanes;
      }
      function reuseHiddenContextOnStack() {
        push(prevEntangledRenderLanesCursor, entangledRenderLanes);
        push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
      }
      function popHiddenContext() {
        entangledRenderLanes = prevEntangledRenderLanesCursor.current;
        pop(currentTreeHiddenStackCursor);
        pop(prevEntangledRenderLanesCursor);
      }
      var suspenseHandlerStackCursor = createCursor(null);
      var shellBoundary = null;
      function pushPrimaryTreeSuspenseHandler(handler) {
        var current = handler.alternate;
        push(suspenseStackCursor, suspenseStackCursor.current & 1);
        push(suspenseHandlerStackCursor, handler);
        null === shellBoundary && (null === current || null !== currentTreeHiddenStackCursor.current ? shellBoundary = handler : null !== current.memoizedState && (shellBoundary = handler));
      }
      function pushDehydratedActivitySuspenseHandler(fiber) {
        push(suspenseStackCursor, suspenseStackCursor.current);
        push(suspenseHandlerStackCursor, fiber);
        null === shellBoundary && (shellBoundary = fiber);
      }
      function pushOffscreenSuspenseHandler(fiber) {
        22 === fiber.tag ? (push(suspenseStackCursor, suspenseStackCursor.current), push(suspenseHandlerStackCursor, fiber), null === shellBoundary && (shellBoundary = fiber)) : reuseSuspenseHandlerOnStack(fiber);
      }
      function reuseSuspenseHandlerOnStack() {
        push(suspenseStackCursor, suspenseStackCursor.current);
        push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
      }
      function popSuspenseHandler(fiber) {
        pop(suspenseHandlerStackCursor);
        shellBoundary === fiber && (shellBoundary = null);
        pop(suspenseStackCursor);
      }
      var suspenseStackCursor = createCursor(0);
      function findFirstSuspended(row) {
        for (var node2 = row; null !== node2; ) {
          if (13 === node2.tag) {
            var state = node2.memoizedState;
            if (null !== state && (state = state.dehydrated, null === state || isSuspenseInstancePending(state) || isSuspenseInstanceFallback(state)))
              return node2;
          } else if (19 === node2.tag && ("forwards" === node2.memoizedProps.revealOrder || "backwards" === node2.memoizedProps.revealOrder || "unstable_legacy-backwards" === node2.memoizedProps.revealOrder || "together" === node2.memoizedProps.revealOrder)) {
            if (0 !== (node2.flags & 128)) return node2;
          } else if (null !== node2.child) {
            node2.child.return = node2;
            node2 = node2.child;
            continue;
          }
          if (node2 === row) break;
          for (; null === node2.sibling; ) {
            if (null === node2.return || node2.return === row) return null;
            node2 = node2.return;
          }
          node2.sibling.return = node2.return;
          node2 = node2.sibling;
        }
        return null;
      }
      var renderLanes = 0;
      var currentlyRenderingFiber = null;
      var currentHook = null;
      var workInProgressHook = null;
      var didScheduleRenderPhaseUpdate = false;
      var didScheduleRenderPhaseUpdateDuringThisPass = false;
      var shouldDoubleInvokeUserFnsInHooksDEV = false;
      var localIdCounter = 0;
      var thenableIndexCounter = 0;
      var thenableState = null;
      var globalClientIdCounter = 0;
      function throwInvalidHookError() {
        throw Error(formatProdErrorMessage(321));
      }
      function areHookInputsEqual(nextDeps, prevDeps) {
        if (null === prevDeps) return false;
        for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
          if (!objectIs(nextDeps[i], prevDeps[i])) return false;
        return true;
      }
      function renderWithHooks(current, workInProgress2, Component, props, secondArg, nextRenderLanes) {
        renderLanes = nextRenderLanes;
        currentlyRenderingFiber = workInProgress2;
        workInProgress2.memoizedState = null;
        workInProgress2.updateQueue = null;
        workInProgress2.lanes = 0;
        ReactSharedInternals.H = null === current || null === current.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate;
        shouldDoubleInvokeUserFnsInHooksDEV = false;
        nextRenderLanes = Component(props, secondArg);
        shouldDoubleInvokeUserFnsInHooksDEV = false;
        didScheduleRenderPhaseUpdateDuringThisPass && (nextRenderLanes = renderWithHooksAgain(
          workInProgress2,
          Component,
          props,
          secondArg
        ));
        finishRenderingHooks(current);
        return nextRenderLanes;
      }
      function finishRenderingHooks(current) {
        ReactSharedInternals.H = ContextOnlyDispatcher;
        var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
        renderLanes = 0;
        workInProgressHook = currentHook = currentlyRenderingFiber = null;
        didScheduleRenderPhaseUpdate = false;
        thenableIndexCounter = 0;
        thenableState = null;
        if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
        null === current || didReceiveUpdate || (current = current.dependencies, null !== current && checkIfContextChanged(current) && (didReceiveUpdate = true));
      }
      function renderWithHooksAgain(workInProgress2, Component, props, secondArg) {
        currentlyRenderingFiber = workInProgress2;
        var numberOfReRenders = 0;
        do {
          didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
          thenableIndexCounter = 0;
          didScheduleRenderPhaseUpdateDuringThisPass = false;
          if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
          numberOfReRenders += 1;
          workInProgressHook = currentHook = null;
          if (null != workInProgress2.updateQueue) {
            var children = workInProgress2.updateQueue;
            children.lastEffect = null;
            children.events = null;
            children.stores = null;
            null != children.memoCache && (children.memoCache.index = 0);
          }
          ReactSharedInternals.H = HooksDispatcherOnRerender;
          children = Component(props, secondArg);
        } while (didScheduleRenderPhaseUpdateDuringThisPass);
        return children;
      }
      function TransitionAwareHostComponent() {
        var dispatcher = ReactSharedInternals.H, maybeThenable = dispatcher.useState()[0];
        maybeThenable = "function" === typeof maybeThenable.then ? useThenable(maybeThenable) : maybeThenable;
        dispatcher = dispatcher.useState()[0];
        (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher && (currentlyRenderingFiber.flags |= 1024);
        return maybeThenable;
      }
      function checkDidRenderIdHook() {
        var didRenderIdHook = 0 !== localIdCounter;
        localIdCounter = 0;
        return didRenderIdHook;
      }
      function bailoutHooks(current, workInProgress2, lanes) {
        workInProgress2.updateQueue = current.updateQueue;
        workInProgress2.flags &= -2053;
        current.lanes &= ~lanes;
      }
      function resetHooksOnUnwind(workInProgress2) {
        if (didScheduleRenderPhaseUpdate) {
          for (workInProgress2 = workInProgress2.memoizedState; null !== workInProgress2; ) {
            var queue = workInProgress2.queue;
            null !== queue && (queue.pending = null);
            workInProgress2 = workInProgress2.next;
          }
          didScheduleRenderPhaseUpdate = false;
        }
        renderLanes = 0;
        workInProgressHook = currentHook = currentlyRenderingFiber = null;
        didScheduleRenderPhaseUpdateDuringThisPass = false;
        thenableIndexCounter = localIdCounter = 0;
        thenableState = null;
      }
      function mountWorkInProgressHook() {
        var hook = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = hook : workInProgressHook = workInProgressHook.next = hook;
        return workInProgressHook;
      }
      function updateWorkInProgressHook() {
        if (null === currentHook) {
          var nextCurrentHook = currentlyRenderingFiber.alternate;
          nextCurrentHook = null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
        } else nextCurrentHook = currentHook.next;
        var nextWorkInProgressHook = null === workInProgressHook ? currentlyRenderingFiber.memoizedState : workInProgressHook.next;
        if (null !== nextWorkInProgressHook)
          workInProgressHook = nextWorkInProgressHook, currentHook = nextCurrentHook;
        else {
          if (null === nextCurrentHook) {
            if (null === currentlyRenderingFiber.alternate)
              throw Error(formatProdErrorMessage(467));
            throw Error(formatProdErrorMessage(310));
          }
          currentHook = nextCurrentHook;
          nextCurrentHook = {
            memoizedState: currentHook.memoizedState,
            baseState: currentHook.baseState,
            baseQueue: currentHook.baseQueue,
            queue: currentHook.queue,
            next: null
          };
          null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = nextCurrentHook : workInProgressHook = workInProgressHook.next = nextCurrentHook;
        }
        return workInProgressHook;
      }
      function createFunctionComponentUpdateQueue() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }
      function useThenable(thenable) {
        var index2 = thenableIndexCounter;
        thenableIndexCounter += 1;
        null === thenableState && (thenableState = []);
        thenable = trackUsedThenable(thenableState, thenable, index2);
        index2 = currentlyRenderingFiber;
        null === (null === workInProgressHook ? index2.memoizedState : workInProgressHook.next) && (index2 = index2.alternate, ReactSharedInternals.H = null === index2 || null === index2.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate);
        return thenable;
      }
      function use(usable) {
        if (null !== usable && "object" === typeof usable) {
          if ("function" === typeof usable.then) return useThenable(usable);
          if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
        }
        throw Error(formatProdErrorMessage(438, String(usable)));
      }
      function useMemoCache(size) {
        var memoCache = null, updateQueue = currentlyRenderingFiber.updateQueue;
        null !== updateQueue && (memoCache = updateQueue.memoCache);
        if (null == memoCache) {
          var current = currentlyRenderingFiber.alternate;
          null !== current && (current = current.updateQueue, null !== current && (current = current.memoCache, null != current && (memoCache = {
            data: current.data.map(function(array) {
              return array.slice();
            }),
            index: 0
          })));
        }
        null == memoCache && (memoCache = { data: [], index: 0 });
        null === updateQueue && (updateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = updateQueue);
        updateQueue.memoCache = memoCache;
        updateQueue = memoCache.data[memoCache.index];
        if (void 0 === updateQueue)
          for (updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0; current < size; current++)
            updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
        memoCache.index++;
        return updateQueue;
      }
      function basicStateReducer(state, action) {
        return "function" === typeof action ? action(state) : action;
      }
      function updateReducer(reducer) {
        var hook = updateWorkInProgressHook();
        return updateReducerImpl(hook, currentHook, reducer);
      }
      function updateReducerImpl(hook, current, reducer) {
        var queue = hook.queue;
        if (null === queue) throw Error(formatProdErrorMessage(311));
        queue.lastRenderedReducer = reducer;
        var baseQueue = hook.baseQueue, pendingQueue = queue.pending;
        if (null !== pendingQueue) {
          if (null !== baseQueue) {
            var baseFirst = baseQueue.next;
            baseQueue.next = pendingQueue.next;
            pendingQueue.next = baseFirst;
          }
          current.baseQueue = baseQueue = pendingQueue;
          queue.pending = null;
        }
        pendingQueue = hook.baseState;
        if (null === baseQueue) hook.memoizedState = pendingQueue;
        else {
          current = baseQueue.next;
          var newBaseQueueFirst = baseFirst = null, newBaseQueueLast = null, update = current, didReadFromEntangledAsyncAction$60 = false;
          do {
            var updateLane = update.lane & -536870913;
            if (updateLane !== update.lane ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
              var revertLane = update.revertLane;
              if (0 === revertLane)
                null !== newBaseQueueLast && (newBaseQueueLast = newBaseQueueLast.next = {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: update.action,
                  hasEagerState: update.hasEagerState,
                  eagerState: update.eagerState,
                  next: null
                }), updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = true);
              else if ((renderLanes & revertLane) === revertLane) {
                update = update.next;
                revertLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = true);
                continue;
              } else
                updateLane = {
                  lane: 0,
                  revertLane: update.revertLane,
                  gesture: null,
                  action: update.action,
                  hasEagerState: update.hasEagerState,
                  eagerState: update.eagerState,
                  next: null
                }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = updateLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = updateLane, currentlyRenderingFiber.lanes |= revertLane, workInProgressRootSkippedLanes |= revertLane;
              updateLane = update.action;
              shouldDoubleInvokeUserFnsInHooksDEV && reducer(pendingQueue, updateLane);
              pendingQueue = update.hasEagerState ? update.eagerState : reducer(pendingQueue, updateLane);
            } else
              revertLane = {
                lane: updateLane,
                revertLane: update.revertLane,
                gesture: update.gesture,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = revertLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = revertLane, currentlyRenderingFiber.lanes |= updateLane, workInProgressRootSkippedLanes |= updateLane;
            update = update.next;
          } while (null !== update && update !== current);
          null === newBaseQueueLast ? baseFirst = pendingQueue : newBaseQueueLast.next = newBaseQueueFirst;
          if (!objectIs(pendingQueue, hook.memoizedState) && (didReceiveUpdate = true, didReadFromEntangledAsyncAction$60 && (reducer = currentEntangledActionThenable, null !== reducer)))
            throw reducer;
          hook.memoizedState = pendingQueue;
          hook.baseState = baseFirst;
          hook.baseQueue = newBaseQueueLast;
          queue.lastRenderedState = pendingQueue;
        }
        null === baseQueue && (queue.lanes = 0);
        return [hook.memoizedState, queue.dispatch];
      }
      function rerenderReducer(reducer) {
        var hook = updateWorkInProgressHook(), queue = hook.queue;
        if (null === queue) throw Error(formatProdErrorMessage(311));
        queue.lastRenderedReducer = reducer;
        var dispatch = queue.dispatch, lastRenderPhaseUpdate = queue.pending, newState = hook.memoizedState;
        if (null !== lastRenderPhaseUpdate) {
          queue.pending = null;
          var update = lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
          do
            newState = reducer(newState, update.action), update = update.next;
          while (update !== lastRenderPhaseUpdate);
          objectIs(newState, hook.memoizedState) || (didReceiveUpdate = true);
          hook.memoizedState = newState;
          null === hook.baseQueue && (hook.baseState = newState);
          queue.lastRenderedState = newState;
        }
        return [newState, dispatch];
      }
      function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var fiber = currentlyRenderingFiber, hook = updateWorkInProgressHook(), isHydrating$jscomp$0 = isHydrating;
        if (isHydrating$jscomp$0) {
          if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
          getServerSnapshot = getServerSnapshot();
        } else getServerSnapshot = getSnapshot();
        var snapshotChanged = !objectIs(
          (currentHook || hook).memoizedState,
          getServerSnapshot
        );
        snapshotChanged && (hook.memoizedState = getServerSnapshot, didReceiveUpdate = true);
        hook = hook.queue;
        updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [
          subscribe
        ]);
        if (hook.getSnapshot !== getSnapshot || snapshotChanged || null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1) {
          fiber.flags |= 2048;
          pushSimpleEffect(
            9,
            { destroy: void 0 },
            updateStoreInstance.bind(
              null,
              fiber,
              hook,
              getServerSnapshot,
              getSnapshot
            ),
            null
          );
          if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
          isHydrating$jscomp$0 || 0 !== (renderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
        }
        return getServerSnapshot;
      }
      function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
        fiber.flags |= 16384;
        fiber = { getSnapshot, value: renderedSnapshot };
        getSnapshot = currentlyRenderingFiber.updateQueue;
        null === getSnapshot ? (getSnapshot = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = getSnapshot, getSnapshot.stores = [fiber]) : (renderedSnapshot = getSnapshot.stores, null === renderedSnapshot ? getSnapshot.stores = [fiber] : renderedSnapshot.push(fiber));
      }
      function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
        inst.value = nextSnapshot;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
      }
      function subscribeToStore(fiber, inst, subscribe) {
        return subscribe(function() {
          checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
        });
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function forceStoreRerender(fiber) {
        var root2 = enqueueConcurrentRenderForLane(fiber, 2);
        null !== root2 && scheduleUpdateOnFiber(root2, fiber, 2);
      }
      function mountStateImpl(initialState) {
        var hook = mountWorkInProgressHook();
        if ("function" === typeof initialState) {
          var initialStateInitializer = initialState;
          initialState = initialStateInitializer();
          if (shouldDoubleInvokeUserFnsInHooksDEV) {
            setIsStrictModeForDevtools(true);
            try {
              initialStateInitializer();
            } finally {
              setIsStrictModeForDevtools(false);
            }
          }
        }
        hook.memoizedState = hook.baseState = initialState;
        hook.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: basicStateReducer,
          lastRenderedState: initialState
        };
        return hook;
      }
      function updateOptimisticImpl(hook, current, passthrough, reducer) {
        hook.baseState = passthrough;
        return updateReducerImpl(
          hook,
          currentHook,
          "function" === typeof reducer ? reducer : basicStateReducer
        );
      }
      function dispatchActionState(fiber, actionQueue, setPendingState, setState, payload) {
        if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
        fiber = actionQueue.action;
        if (null !== fiber) {
          var actionNode = {
            payload,
            action: fiber,
            next: null,
            isTransition: true,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(listener) {
              actionNode.listeners.push(listener);
            }
          };
          null !== ReactSharedInternals.T ? setPendingState(true) : actionNode.isTransition = false;
          setState(actionNode);
          setPendingState = actionQueue.pending;
          null === setPendingState ? (actionNode.next = actionQueue.pending = actionNode, runActionStateAction(actionQueue, actionNode)) : (actionNode.next = setPendingState.next, actionQueue.pending = setPendingState.next = actionNode);
        }
      }
      function runActionStateAction(actionQueue, node2) {
        var action = node2.action, payload = node2.payload, prevState = actionQueue.state;
        if (node2.isTransition) {
          var prevTransition = ReactSharedInternals.T, currentTransition = {};
          ReactSharedInternals.T = currentTransition;
          try {
            var returnValue = action(prevState, payload), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            handleActionReturnValue(actionQueue, node2, returnValue);
          } catch (error) {
            onActionError(actionQueue, node2, error);
          } finally {
            null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
          }
        } else
          try {
            prevTransition = action(prevState, payload), handleActionReturnValue(actionQueue, node2, prevTransition);
          } catch (error$66) {
            onActionError(actionQueue, node2, error$66);
          }
      }
      function handleActionReturnValue(actionQueue, node2, returnValue) {
        null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then ? returnValue.then(
          function(nextState) {
            onActionSuccess(actionQueue, node2, nextState);
          },
          function(error) {
            return onActionError(actionQueue, node2, error);
          }
        ) : onActionSuccess(actionQueue, node2, returnValue);
      }
      function onActionSuccess(actionQueue, actionNode, nextState) {
        actionNode.status = "fulfilled";
        actionNode.value = nextState;
        notifyActionListeners(actionNode);
        actionQueue.state = nextState;
        actionNode = actionQueue.pending;
        null !== actionNode && (nextState = actionNode.next, nextState === actionNode ? actionQueue.pending = null : (nextState = nextState.next, actionNode.next = nextState, runActionStateAction(actionQueue, nextState)));
      }
      function onActionError(actionQueue, actionNode, error) {
        var last = actionQueue.pending;
        actionQueue.pending = null;
        if (null !== last) {
          last = last.next;
          do
            actionNode.status = "rejected", actionNode.reason = error, notifyActionListeners(actionNode), actionNode = actionNode.next;
          while (actionNode !== last);
        }
        actionQueue.action = null;
      }
      function notifyActionListeners(actionNode) {
        actionNode = actionNode.listeners;
        for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
      }
      function actionStateReducer(oldState, newState) {
        return newState;
      }
      function mountActionState(action, initialStateProp) {
        if (isHydrating) {
          var ssrFormState = workInProgressRoot.formState;
          if (null !== ssrFormState) {
            a: {
              var JSCompiler_inline_result = currentlyRenderingFiber;
              if (isHydrating) {
                if (nextHydratableInstance) {
                  b: {
                    var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
                    for (var inRootOrSingleton = rootOrSingletonContext; 8 !== JSCompiler_inline_result$jscomp$0.nodeType; ) {
                      if (!inRootOrSingleton) {
                        JSCompiler_inline_result$jscomp$0 = null;
                        break b;
                      }
                      JSCompiler_inline_result$jscomp$0 = getNextHydratable(
                        JSCompiler_inline_result$jscomp$0.nextSibling
                      );
                      if (null === JSCompiler_inline_result$jscomp$0) {
                        JSCompiler_inline_result$jscomp$0 = null;
                        break b;
                      }
                    }
                    inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
                    JSCompiler_inline_result$jscomp$0 = "F!" === inRootOrSingleton || "F" === inRootOrSingleton ? JSCompiler_inline_result$jscomp$0 : null;
                  }
                  if (JSCompiler_inline_result$jscomp$0) {
                    nextHydratableInstance = getNextHydratable(
                      JSCompiler_inline_result$jscomp$0.nextSibling
                    );
                    JSCompiler_inline_result = "F!" === JSCompiler_inline_result$jscomp$0.data;
                    break a;
                  }
                }
                throwOnHydrationMismatch(JSCompiler_inline_result);
              }
              JSCompiler_inline_result = false;
            }
            JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
          }
        }
        ssrFormState = mountWorkInProgressHook();
        ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
        JSCompiler_inline_result = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: actionStateReducer,
          lastRenderedState: initialStateProp
        };
        ssrFormState.queue = JSCompiler_inline_result;
        ssrFormState = dispatchSetState.bind(
          null,
          currentlyRenderingFiber,
          JSCompiler_inline_result
        );
        JSCompiler_inline_result.dispatch = ssrFormState;
        JSCompiler_inline_result = mountStateImpl(false);
        inRootOrSingleton = dispatchOptimisticSetState.bind(
          null,
          currentlyRenderingFiber,
          false,
          JSCompiler_inline_result.queue
        );
        JSCompiler_inline_result = mountWorkInProgressHook();
        JSCompiler_inline_result$jscomp$0 = {
          state: initialStateProp,
          dispatch: null,
          action,
          pending: null
        };
        JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
        ssrFormState = dispatchActionState.bind(
          null,
          currentlyRenderingFiber,
          JSCompiler_inline_result$jscomp$0,
          inRootOrSingleton,
          ssrFormState
        );
        JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
        JSCompiler_inline_result.memoizedState = action;
        return [initialStateProp, ssrFormState, false];
      }
      function updateActionState(action) {
        var stateHook = updateWorkInProgressHook();
        return updateActionStateImpl(stateHook, currentHook, action);
      }
      function updateActionStateImpl(stateHook, currentStateHook, action) {
        currentStateHook = updateReducerImpl(
          stateHook,
          currentStateHook,
          actionStateReducer
        )[0];
        stateHook = updateReducer(basicStateReducer)[0];
        if ("object" === typeof currentStateHook && null !== currentStateHook && "function" === typeof currentStateHook.then)
          try {
            var state = useThenable(currentStateHook);
          } catch (x) {
            if (x === SuspenseException) throw SuspenseActionException;
            throw x;
          }
        else state = currentStateHook;
        currentStateHook = updateWorkInProgressHook();
        var actionQueue = currentStateHook.queue, dispatch = actionQueue.dispatch;
        action !== currentStateHook.memoizedState && (currentlyRenderingFiber.flags |= 2048, pushSimpleEffect(
          9,
          { destroy: void 0 },
          actionStateActionEffect.bind(null, actionQueue, action),
          null
        ));
        return [state, dispatch, stateHook];
      }
      function actionStateActionEffect(actionQueue, action) {
        actionQueue.action = action;
      }
      function rerenderActionState(action) {
        var stateHook = updateWorkInProgressHook(), currentStateHook = currentHook;
        if (null !== currentStateHook)
          return updateActionStateImpl(stateHook, currentStateHook, action);
        updateWorkInProgressHook();
        stateHook = stateHook.memoizedState;
        currentStateHook = updateWorkInProgressHook();
        var dispatch = currentStateHook.queue.dispatch;
        currentStateHook.memoizedState = action;
        return [stateHook, dispatch, false];
      }
      function pushSimpleEffect(tag, inst, create, deps) {
        tag = { tag, create, deps, inst, next: null };
        inst = currentlyRenderingFiber.updateQueue;
        null === inst && (inst = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = inst);
        create = inst.lastEffect;
        null === create ? inst.lastEffect = tag.next = tag : (deps = create.next, create.next = tag, tag.next = deps, inst.lastEffect = tag);
        return tag;
      }
      function updateRef() {
        return updateWorkInProgressHook().memoizedState;
      }
      function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
        var hook = mountWorkInProgressHook();
        currentlyRenderingFiber.flags |= fiberFlags;
        hook.memoizedState = pushSimpleEffect(
          1 | hookFlags,
          { destroy: void 0 },
          create,
          void 0 === deps ? null : deps
        );
      }
      function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
        var hook = updateWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var inst = hook.memoizedState.inst;
        null !== currentHook && null !== deps && areHookInputsEqual(deps, currentHook.memoizedState.deps) ? hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps) : (currentlyRenderingFiber.flags |= fiberFlags, hook.memoizedState = pushSimpleEffect(
          1 | hookFlags,
          inst,
          create,
          deps
        ));
      }
      function mountEffect(create, deps) {
        mountEffectImpl(8390656, 8, create, deps);
      }
      function updateEffect(create, deps) {
        updateEffectImpl(2048, 8, create, deps);
      }
      function useEffectEventImpl(payload) {
        currentlyRenderingFiber.flags |= 4;
        var componentUpdateQueue = currentlyRenderingFiber.updateQueue;
        if (null === componentUpdateQueue)
          componentUpdateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = componentUpdateQueue, componentUpdateQueue.events = [payload];
        else {
          var events = componentUpdateQueue.events;
          null === events ? componentUpdateQueue.events = [payload] : events.push(payload);
        }
      }
      function updateEvent(callback) {
        var ref = updateWorkInProgressHook().memoizedState;
        useEffectEventImpl({ ref, nextImpl: callback });
        return function() {
          if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
          return ref.impl.apply(void 0, arguments);
        };
      }
      function updateInsertionEffect(create, deps) {
        return updateEffectImpl(4, 2, create, deps);
      }
      function updateLayoutEffect(create, deps) {
        return updateEffectImpl(4, 4, create, deps);
      }
      function imperativeHandleEffect(create, ref) {
        if ("function" === typeof ref) {
          create = create();
          var refCleanup = ref(create);
          return function() {
            "function" === typeof refCleanup ? refCleanup() : ref(null);
          };
        }
        if (null !== ref && void 0 !== ref)
          return create = create(), ref.current = create, function() {
            ref.current = null;
          };
      }
      function updateImperativeHandle(ref, create, deps) {
        deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
        updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
      }
      function mountDebugValue() {
      }
      function updateCallback(callback, deps) {
        var hook = updateWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var prevState = hook.memoizedState;
        if (null !== deps && areHookInputsEqual(deps, prevState[1]))
          return prevState[0];
        hook.memoizedState = [callback, deps];
        return callback;
      }
      function updateMemo(nextCreate, deps) {
        var hook = updateWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var prevState = hook.memoizedState;
        if (null !== deps && areHookInputsEqual(deps, prevState[1]))
          return prevState[0];
        prevState = nextCreate();
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(true);
          try {
            nextCreate();
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
        hook.memoizedState = [prevState, deps];
        return prevState;
      }
      function mountDeferredValueImpl(hook, value, initialValue) {
        if (void 0 === initialValue || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930))
          return hook.memoizedState = value;
        hook.memoizedState = initialValue;
        hook = requestDeferredLane();
        currentlyRenderingFiber.lanes |= hook;
        workInProgressRootSkippedLanes |= hook;
        return initialValue;
      }
      function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
        if (objectIs(value, prevValue)) return value;
        if (null !== currentTreeHiddenStackCursor.current)
          return hook = mountDeferredValueImpl(hook, value, initialValue), objectIs(hook, prevValue) || (didReceiveUpdate = true), hook;
        if (0 === (renderLanes & 42) || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930))
          return didReceiveUpdate = true, hook.memoizedState = value;
        hook = requestDeferredLane();
        currentlyRenderingFiber.lanes |= hook;
        workInProgressRootSkippedLanes |= hook;
        return prevValue;
      }
      function startTransition(fiber, queue, pendingState, finishedState, callback) {
        var previousPriority = ReactDOMSharedInternals.p;
        ReactDOMSharedInternals.p = 0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        dispatchOptimisticSetState(fiber, false, queue, pendingState);
        try {
          var returnValue = callback(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          if (null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then) {
            var thenableForFinishedState = chainThenableValue(
              returnValue,
              finishedState
            );
            dispatchSetStateInternal(
              fiber,
              queue,
              thenableForFinishedState,
              requestUpdateLane(fiber)
            );
          } else
            dispatchSetStateInternal(
              fiber,
              queue,
              finishedState,
              requestUpdateLane(fiber)
            );
        } catch (error) {
          dispatchSetStateInternal(
            fiber,
            queue,
            { then: function() {
            }, status: "rejected", reason: error },
            requestUpdateLane()
          );
        } finally {
          ReactDOMSharedInternals.p = previousPriority, null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      }
      function noop() {
      }
      function startHostTransition(formFiber, pendingState, action, formData) {
        if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
        var queue = ensureFormComponentIsStateful(formFiber).queue;
        startTransition(
          formFiber,
          queue,
          pendingState,
          sharedNotPendingObject,
          null === action ? noop : function() {
            requestFormReset$1(formFiber);
            return action(formData);
          }
        );
      }
      function ensureFormComponentIsStateful(formFiber) {
        var existingStateHook = formFiber.memoizedState;
        if (null !== existingStateHook) return existingStateHook;
        existingStateHook = {
          memoizedState: sharedNotPendingObject,
          baseState: sharedNotPendingObject,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: basicStateReducer,
            lastRenderedState: sharedNotPendingObject
          },
          next: null
        };
        var initialResetState = {};
        existingStateHook.next = {
          memoizedState: initialResetState,
          baseState: initialResetState,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: basicStateReducer,
            lastRenderedState: initialResetState
          },
          next: null
        };
        formFiber.memoizedState = existingStateHook;
        formFiber = formFiber.alternate;
        null !== formFiber && (formFiber.memoizedState = existingStateHook);
        return existingStateHook;
      }
      function requestFormReset$1(formFiber) {
        var stateHook = ensureFormComponentIsStateful(formFiber);
        null === stateHook.next && (stateHook = formFiber.alternate.memoizedState);
        dispatchSetStateInternal(
          formFiber,
          stateHook.next.queue,
          {},
          requestUpdateLane()
        );
      }
      function useHostTransitionStatus() {
        return readContext(HostTransitionContext);
      }
      function updateId() {
        return updateWorkInProgressHook().memoizedState;
      }
      function updateRefresh() {
        return updateWorkInProgressHook().memoizedState;
      }
      function refreshCache(fiber) {
        for (var provider = fiber.return; null !== provider; ) {
          switch (provider.tag) {
            case 24:
            case 3:
              var lane = requestUpdateLane();
              fiber = createUpdate(lane);
              var root$69 = enqueueUpdate(provider, fiber, lane);
              null !== root$69 && (scheduleUpdateOnFiber(root$69, provider, lane), entangleTransitions(root$69, provider, lane));
              provider = { cache: createCache3() };
              fiber.payload = provider;
              return;
          }
          provider = provider.return;
        }
      }
      function dispatchReducerAction(fiber, queue, action) {
        var lane = requestUpdateLane();
        action = {
          lane,
          revertLane: 0,
          gesture: null,
          action,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        isRenderPhaseUpdate(fiber) ? enqueueRenderPhaseUpdate(queue, action) : (action = enqueueConcurrentHookUpdate(fiber, queue, action, lane), null !== action && (scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane)));
      }
      function dispatchSetState(fiber, queue, action) {
        var lane = requestUpdateLane();
        dispatchSetStateInternal(fiber, queue, action, lane);
      }
      function dispatchSetStateInternal(fiber, queue, action, lane) {
        var update = {
          lane,
          revertLane: 0,
          gesture: null,
          action,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
        else {
          var alternate = fiber.alternate;
          if (0 === fiber.lanes && (null === alternate || 0 === alternate.lanes) && (alternate = queue.lastRenderedReducer, null !== alternate))
            try {
              var currentState = queue.lastRenderedState, eagerState = alternate(currentState, action);
              update.hasEagerState = true;
              update.eagerState = eagerState;
              if (objectIs(eagerState, currentState))
                return enqueueUpdate$1(fiber, queue, update, 0), null === workInProgressRoot && finishQueueingConcurrentUpdates(), false;
            } catch (error) {
            } finally {
            }
          action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
          if (null !== action)
            return scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane), true;
        }
        return false;
      }
      function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
        action = {
          lane: 2,
          revertLane: requestTransitionLane(),
          gesture: null,
          action,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        if (isRenderPhaseUpdate(fiber)) {
          if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
        } else
          throwIfDuringRender = enqueueConcurrentHookUpdate(
            fiber,
            queue,
            action,
            2
          ), null !== throwIfDuringRender && scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
      }
      function isRenderPhaseUpdate(fiber) {
        var alternate = fiber.alternate;
        return fiber === currentlyRenderingFiber || null !== alternate && alternate === currentlyRenderingFiber;
      }
      function enqueueRenderPhaseUpdate(queue, update) {
        didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
        var pending = queue.pending;
        null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
        queue.pending = update;
      }
      function entangleTransitionUpdate(root2, queue, lane) {
        if (0 !== (lane & 4194048)) {
          var queueLanes = queue.lanes;
          queueLanes &= root2.pendingLanes;
          lane |= queueLanes;
          queue.lanes = lane;
          markRootEntangled(root2, lane);
        }
      }
      var ContextOnlyDispatcher = {
        readContext,
        use,
        useCallback: throwInvalidHookError,
        useContext: throwInvalidHookError,
        useEffect: throwInvalidHookError,
        useImperativeHandle: throwInvalidHookError,
        useLayoutEffect: throwInvalidHookError,
        useInsertionEffect: throwInvalidHookError,
        useMemo: throwInvalidHookError,
        useReducer: throwInvalidHookError,
        useRef: throwInvalidHookError,
        useState: throwInvalidHookError,
        useDebugValue: throwInvalidHookError,
        useDeferredValue: throwInvalidHookError,
        useTransition: throwInvalidHookError,
        useSyncExternalStore: throwInvalidHookError,
        useId: throwInvalidHookError,
        useHostTransitionStatus: throwInvalidHookError,
        useFormState: throwInvalidHookError,
        useActionState: throwInvalidHookError,
        useOptimistic: throwInvalidHookError,
        useMemoCache: throwInvalidHookError,
        useCacheRefresh: throwInvalidHookError
      };
      ContextOnlyDispatcher.useEffectEvent = throwInvalidHookError;
      var HooksDispatcherOnMount = {
        readContext,
        use,
        useCallback: function(callback, deps) {
          mountWorkInProgressHook().memoizedState = [
            callback,
            void 0 === deps ? null : deps
          ];
          return callback;
        },
        useContext: readContext,
        useEffect: mountEffect,
        useImperativeHandle: function(ref, create, deps) {
          deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
          mountEffectImpl(
            4194308,
            4,
            imperativeHandleEffect.bind(null, create, ref),
            deps
          );
        },
        useLayoutEffect: function(create, deps) {
          return mountEffectImpl(4194308, 4, create, deps);
        },
        useInsertionEffect: function(create, deps) {
          mountEffectImpl(4, 2, create, deps);
        },
        useMemo: function(nextCreate, deps) {
          var hook = mountWorkInProgressHook();
          deps = void 0 === deps ? null : deps;
          var nextValue = nextCreate();
          if (shouldDoubleInvokeUserFnsInHooksDEV) {
            setIsStrictModeForDevtools(true);
            try {
              nextCreate();
            } finally {
              setIsStrictModeForDevtools(false);
            }
          }
          hook.memoizedState = [nextValue, deps];
          return nextValue;
        },
        useReducer: function(reducer, initialArg, init) {
          var hook = mountWorkInProgressHook();
          if (void 0 !== init) {
            var initialState = init(initialArg);
            if (shouldDoubleInvokeUserFnsInHooksDEV) {
              setIsStrictModeForDevtools(true);
              try {
                init(initialArg);
              } finally {
                setIsStrictModeForDevtools(false);
              }
            }
          } else initialState = initialArg;
          hook.memoizedState = hook.baseState = initialState;
          reducer = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: reducer,
            lastRenderedState: initialState
          };
          hook.queue = reducer;
          reducer = reducer.dispatch = dispatchReducerAction.bind(
            null,
            currentlyRenderingFiber,
            reducer
          );
          return [hook.memoizedState, reducer];
        },
        useRef: function(initialValue) {
          var hook = mountWorkInProgressHook();
          initialValue = { current: initialValue };
          return hook.memoizedState = initialValue;
        },
        useState: function(initialState) {
          initialState = mountStateImpl(initialState);
          var queue = initialState.queue, dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
          queue.dispatch = dispatch;
          return [initialState.memoizedState, dispatch];
        },
        useDebugValue: mountDebugValue,
        useDeferredValue: function(value, initialValue) {
          var hook = mountWorkInProgressHook();
          return mountDeferredValueImpl(hook, value, initialValue);
        },
        useTransition: function() {
          var stateHook = mountStateImpl(false);
          stateHook = startTransition.bind(
            null,
            currentlyRenderingFiber,
            stateHook.queue,
            true,
            false
          );
          mountWorkInProgressHook().memoizedState = stateHook;
          return [false, stateHook];
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          var fiber = currentlyRenderingFiber, hook = mountWorkInProgressHook();
          if (isHydrating) {
            if (void 0 === getServerSnapshot)
              throw Error(formatProdErrorMessage(407));
            getServerSnapshot = getServerSnapshot();
          } else {
            getServerSnapshot = getSnapshot();
            if (null === workInProgressRoot)
              throw Error(formatProdErrorMessage(349));
            0 !== (workInProgressRootRenderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
          }
          hook.memoizedState = getServerSnapshot;
          var inst = { value: getServerSnapshot, getSnapshot };
          hook.queue = inst;
          mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
            subscribe
          ]);
          fiber.flags |= 2048;
          pushSimpleEffect(
            9,
            { destroy: void 0 },
            updateStoreInstance.bind(
              null,
              fiber,
              inst,
              getServerSnapshot,
              getSnapshot
            ),
            null
          );
          return getServerSnapshot;
        },
        useId: function() {
          var hook = mountWorkInProgressHook(), identifierPrefix = workInProgressRoot.identifierPrefix;
          if (isHydrating) {
            var JSCompiler_inline_result = treeContextOverflow;
            var idWithLeadingBit = treeContextId;
            JSCompiler_inline_result = (idWithLeadingBit & ~(1 << 32 - clz32(idWithLeadingBit) - 1)).toString(32) + JSCompiler_inline_result;
            identifierPrefix = "_" + identifierPrefix + "R_" + JSCompiler_inline_result;
            JSCompiler_inline_result = localIdCounter++;
            0 < JSCompiler_inline_result && (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
            identifierPrefix += "_";
          } else
            JSCompiler_inline_result = globalClientIdCounter++, identifierPrefix = "_" + identifierPrefix + "r_" + JSCompiler_inline_result.toString(32) + "_";
          return hook.memoizedState = identifierPrefix;
        },
        useHostTransitionStatus,
        useFormState: mountActionState,
        useActionState: mountActionState,
        useOptimistic: function(passthrough) {
          var hook = mountWorkInProgressHook();
          hook.memoizedState = hook.baseState = passthrough;
          var queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null
          };
          hook.queue = queue;
          hook = dispatchOptimisticSetState.bind(
            null,
            currentlyRenderingFiber,
            true,
            queue
          );
          queue.dispatch = hook;
          return [passthrough, hook];
        },
        useMemoCache,
        useCacheRefresh: function() {
          return mountWorkInProgressHook().memoizedState = refreshCache.bind(
            null,
            currentlyRenderingFiber
          );
        },
        useEffectEvent: function(callback) {
          var hook = mountWorkInProgressHook(), ref = { impl: callback };
          hook.memoizedState = ref;
          return function() {
            if (0 !== (executionContext & 2))
              throw Error(formatProdErrorMessage(440));
            return ref.impl.apply(void 0, arguments);
          };
        }
      };
      var HooksDispatcherOnUpdate = {
        readContext,
        use,
        useCallback: updateCallback,
        useContext: readContext,
        useEffect: updateEffect,
        useImperativeHandle: updateImperativeHandle,
        useInsertionEffect: updateInsertionEffect,
        useLayoutEffect: updateLayoutEffect,
        useMemo: updateMemo,
        useReducer: updateReducer,
        useRef: updateRef,
        useState: function() {
          return updateReducer(basicStateReducer);
        },
        useDebugValue: mountDebugValue,
        useDeferredValue: function(value, initialValue) {
          var hook = updateWorkInProgressHook();
          return updateDeferredValueImpl(
            hook,
            currentHook.memoizedState,
            value,
            initialValue
          );
        },
        useTransition: function() {
          var booleanOrThenable = updateReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
          return [
            "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
            start
          ];
        },
        useSyncExternalStore: updateSyncExternalStore,
        useId: updateId,
        useHostTransitionStatus,
        useFormState: updateActionState,
        useActionState: updateActionState,
        useOptimistic: function(passthrough, reducer) {
          var hook = updateWorkInProgressHook();
          return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
        },
        useMemoCache,
        useCacheRefresh: updateRefresh
      };
      HooksDispatcherOnUpdate.useEffectEvent = updateEvent;
      var HooksDispatcherOnRerender = {
        readContext,
        use,
        useCallback: updateCallback,
        useContext: readContext,
        useEffect: updateEffect,
        useImperativeHandle: updateImperativeHandle,
        useInsertionEffect: updateInsertionEffect,
        useLayoutEffect: updateLayoutEffect,
        useMemo: updateMemo,
        useReducer: rerenderReducer,
        useRef: updateRef,
        useState: function() {
          return rerenderReducer(basicStateReducer);
        },
        useDebugValue: mountDebugValue,
        useDeferredValue: function(value, initialValue) {
          var hook = updateWorkInProgressHook();
          return null === currentHook ? mountDeferredValueImpl(hook, value, initialValue) : updateDeferredValueImpl(
            hook,
            currentHook.memoizedState,
            value,
            initialValue
          );
        },
        useTransition: function() {
          var booleanOrThenable = rerenderReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
          return [
            "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
            start
          ];
        },
        useSyncExternalStore: updateSyncExternalStore,
        useId: updateId,
        useHostTransitionStatus,
        useFormState: rerenderActionState,
        useActionState: rerenderActionState,
        useOptimistic: function(passthrough, reducer) {
          var hook = updateWorkInProgressHook();
          if (null !== currentHook)
            return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
          hook.baseState = passthrough;
          return [passthrough, hook.queue.dispatch];
        },
        useMemoCache,
        useCacheRefresh: updateRefresh
      };
      HooksDispatcherOnRerender.useEffectEvent = updateEvent;
      function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
        ctor = workInProgress2.memoizedState;
        getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
        getDerivedStateFromProps = null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps ? ctor : assign2({}, ctor, getDerivedStateFromProps);
        workInProgress2.memoizedState = getDerivedStateFromProps;
        0 === workInProgress2.lanes && (workInProgress2.updateQueue.baseState = getDerivedStateFromProps);
      }
      var classComponentUpdater = {
        enqueueSetState: function(inst, payload, callback) {
          inst = inst._reactInternals;
          var lane = requestUpdateLane(), update = createUpdate(lane);
          update.payload = payload;
          void 0 !== callback && null !== callback && (update.callback = callback);
          payload = enqueueUpdate(inst, update, lane);
          null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
        },
        enqueueReplaceState: function(inst, payload, callback) {
          inst = inst._reactInternals;
          var lane = requestUpdateLane(), update = createUpdate(lane);
          update.tag = 1;
          update.payload = payload;
          void 0 !== callback && null !== callback && (update.callback = callback);
          payload = enqueueUpdate(inst, update, lane);
          null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
        },
        enqueueForceUpdate: function(inst, callback) {
          inst = inst._reactInternals;
          var lane = requestUpdateLane(), update = createUpdate(lane);
          update.tag = 2;
          void 0 !== callback && null !== callback && (update.callback = callback);
          callback = enqueueUpdate(inst, update, lane);
          null !== callback && (scheduleUpdateOnFiber(callback, inst, lane), entangleTransitions(callback, inst, lane));
        }
      };
      function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
        workInProgress2 = workInProgress2.stateNode;
        return "function" === typeof workInProgress2.shouldComponentUpdate ? workInProgress2.shouldComponentUpdate(newProps, newState, nextContext) : ctor.prototype && ctor.prototype.isPureReactComponent ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState) : true;
      }
      function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
        workInProgress2 = instance.state;
        "function" === typeof instance.componentWillReceiveProps && instance.componentWillReceiveProps(newProps, nextContext);
        "function" === typeof instance.UNSAFE_componentWillReceiveProps && instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
        instance.state !== workInProgress2 && classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
      }
      function resolveClassComponentProps(Component, baseProps) {
        var newProps = baseProps;
        if ("ref" in baseProps) {
          newProps = {};
          for (var propName in baseProps)
            "ref" !== propName && (newProps[propName] = baseProps[propName]);
        }
        if (Component = Component.defaultProps) {
          newProps === baseProps && (newProps = assign2({}, newProps));
          for (var propName$73 in Component)
            void 0 === newProps[propName$73] && (newProps[propName$73] = Component[propName$73]);
        }
        return newProps;
      }
      function defaultOnUncaughtError(error) {
        reportGlobalError(error);
      }
      function defaultOnCaughtError(error) {
        console.error(error);
      }
      function defaultOnRecoverableError(error) {
        reportGlobalError(error);
      }
      function logUncaughtError(root2, errorInfo) {
        try {
          var onUncaughtError = root2.onUncaughtError;
          onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
        } catch (e$74) {
          setTimeout(function() {
            throw e$74;
          });
        }
      }
      function logCaughtError(root2, boundary, errorInfo) {
        try {
          var onCaughtError = root2.onCaughtError;
          onCaughtError(errorInfo.value, {
            componentStack: errorInfo.stack,
            errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
          });
        } catch (e$75) {
          setTimeout(function() {
            throw e$75;
          });
        }
      }
      function createRootErrorUpdate(root2, errorInfo, lane) {
        lane = createUpdate(lane);
        lane.tag = 3;
        lane.payload = { element: null };
        lane.callback = function() {
          logUncaughtError(root2, errorInfo);
        };
        return lane;
      }
      function createClassErrorUpdate(lane) {
        lane = createUpdate(lane);
        lane.tag = 3;
        return lane;
      }
      function initializeClassErrorUpdate(update, root2, fiber, errorInfo) {
        var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
        if ("function" === typeof getDerivedStateFromError) {
          var error = errorInfo.value;
          update.payload = function() {
            return getDerivedStateFromError(error);
          };
          update.callback = function() {
            logCaughtError(root2, fiber, errorInfo);
          };
        }
        var inst = fiber.stateNode;
        null !== inst && "function" === typeof inst.componentDidCatch && (update.callback = function() {
          logCaughtError(root2, fiber, errorInfo);
          "function" !== typeof getDerivedStateFromError && (null === legacyErrorBoundariesThatAlreadyFailed ? legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([this]) : legacyErrorBoundariesThatAlreadyFailed.add(this));
          var stack = errorInfo.stack;
          this.componentDidCatch(errorInfo.value, {
            componentStack: null !== stack ? stack : ""
          });
        });
      }
      function throwException(root2, returnFiber, sourceFiber, value, rootRenderLanes) {
        sourceFiber.flags |= 32768;
        if (null !== value && "object" === typeof value && "function" === typeof value.then) {
          returnFiber = sourceFiber.alternate;
          null !== returnFiber && propagateParentContextChanges(
            returnFiber,
            sourceFiber,
            rootRenderLanes,
            true
          );
          sourceFiber = suspenseHandlerStackCursor.current;
          if (null !== sourceFiber) {
            switch (sourceFiber.tag) {
              case 31:
              case 13:
                return null === shellBoundary ? renderDidSuspendDelayIfPossible() : null === sourceFiber.alternate && 0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 3), sourceFiber.flags &= -257, sourceFiber.flags |= 65536, sourceFiber.lanes = rootRenderLanes, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? sourceFiber.updateQueue = /* @__PURE__ */ new Set([value]) : returnFiber.add(value), attachPingListener(root2, value, rootRenderLanes)), false;
              case 22:
                return sourceFiber.flags |= 65536, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? (returnFiber = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([value])
                }, sourceFiber.updateQueue = returnFiber) : (sourceFiber = returnFiber.retryQueue, null === sourceFiber ? returnFiber.retryQueue = /* @__PURE__ */ new Set([value]) : sourceFiber.add(value)), attachPingListener(root2, value, rootRenderLanes)), false;
            }
            throw Error(formatProdErrorMessage(435, sourceFiber.tag));
          }
          attachPingListener(root2, value, rootRenderLanes);
          renderDidSuspendDelayIfPossible();
          return false;
        }
        if (isHydrating)
          return returnFiber = suspenseHandlerStackCursor.current, null !== returnFiber ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256), returnFiber.flags |= 65536, returnFiber.lanes = rootRenderLanes, value !== HydrationMismatchException && (root2 = Error(formatProdErrorMessage(422), { cause: value }), queueHydrationError(createCapturedValueAtFiber(root2, sourceFiber)))) : (value !== HydrationMismatchException && (returnFiber = Error(formatProdErrorMessage(423), {
            cause: value
          }), queueHydrationError(
            createCapturedValueAtFiber(returnFiber, sourceFiber)
          )), root2 = root2.current.alternate, root2.flags |= 65536, rootRenderLanes &= -rootRenderLanes, root2.lanes |= rootRenderLanes, value = createCapturedValueAtFiber(value, sourceFiber), rootRenderLanes = createRootErrorUpdate(
            root2.stateNode,
            value,
            rootRenderLanes
          ), enqueueCapturedUpdate(root2, rootRenderLanes), 4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2)), false;
        var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
        wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
        null === workInProgressRootConcurrentErrors ? workInProgressRootConcurrentErrors = [wrapperError] : workInProgressRootConcurrentErrors.push(wrapperError);
        4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
        if (null === returnFiber) return true;
        value = createCapturedValueAtFiber(value, sourceFiber);
        sourceFiber = returnFiber;
        do {
          switch (sourceFiber.tag) {
            case 3:
              return sourceFiber.flags |= 65536, root2 = rootRenderLanes & -rootRenderLanes, sourceFiber.lanes |= root2, root2 = createRootErrorUpdate(sourceFiber.stateNode, value, root2), enqueueCapturedUpdate(sourceFiber, root2), false;
            case 1:
              if (returnFiber = sourceFiber.type, wrapperError = sourceFiber.stateNode, 0 === (sourceFiber.flags & 128) && ("function" === typeof returnFiber.getDerivedStateFromError || null !== wrapperError && "function" === typeof wrapperError.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError))))
                return sourceFiber.flags |= 65536, rootRenderLanes &= -rootRenderLanes, sourceFiber.lanes |= rootRenderLanes, rootRenderLanes = createClassErrorUpdate(rootRenderLanes), initializeClassErrorUpdate(
                  rootRenderLanes,
                  root2,
                  sourceFiber,
                  value
                ), enqueueCapturedUpdate(sourceFiber, rootRenderLanes), false;
          }
          sourceFiber = sourceFiber.return;
        } while (null !== sourceFiber);
        return false;
      }
      var SelectiveHydrationException = Error(formatProdErrorMessage(461));
      var didReceiveUpdate = false;
      function reconcileChildren(current, workInProgress2, nextChildren, renderLanes2) {
        workInProgress2.child = null === current ? mountChildFibers(workInProgress2, null, nextChildren, renderLanes2) : reconcileChildFibers(
          workInProgress2,
          current.child,
          nextChildren,
          renderLanes2
        );
      }
      function updateForwardRef(current, workInProgress2, Component, nextProps, renderLanes2) {
        Component = Component.render;
        var ref = workInProgress2.ref;
        if ("ref" in nextProps) {
          var propsWithoutRef = {};
          for (var key in nextProps)
            "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
        } else propsWithoutRef = nextProps;
        prepareToReadContext(workInProgress2);
        nextProps = renderWithHooks(
          current,
          workInProgress2,
          Component,
          propsWithoutRef,
          ref,
          renderLanes2
        );
        key = checkDidRenderIdHook();
        if (null !== current && !didReceiveUpdate)
          return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
        isHydrating && key && pushMaterializedTreeId(workInProgress2);
        workInProgress2.flags |= 1;
        reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
        return workInProgress2.child;
      }
      function updateMemoComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
        if (null === current) {
          var type = Component.type;
          if ("function" === typeof type && !shouldConstruct(type) && void 0 === type.defaultProps && null === Component.compare)
            return workInProgress2.tag = 15, workInProgress2.type = type, updateSimpleMemoComponent(
              current,
              workInProgress2,
              type,
              nextProps,
              renderLanes2
            );
          current = createFiberFromTypeAndProps(
            Component.type,
            null,
            nextProps,
            workInProgress2,
            workInProgress2.mode,
            renderLanes2
          );
          current.ref = workInProgress2.ref;
          current.return = workInProgress2;
          return workInProgress2.child = current;
        }
        type = current.child;
        if (!checkScheduledUpdateOrContext(current, renderLanes2)) {
          var prevProps = type.memoizedProps;
          Component = Component.compare;
          Component = null !== Component ? Component : shallowEqual;
          if (Component(prevProps, nextProps) && current.ref === workInProgress2.ref)
            return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
        }
        workInProgress2.flags |= 1;
        current = createWorkInProgress(type, nextProps);
        current.ref = workInProgress2.ref;
        current.return = workInProgress2;
        return workInProgress2.child = current;
      }
      function updateSimpleMemoComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
        if (null !== current) {
          var prevProps = current.memoizedProps;
          if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress2.ref)
            if (didReceiveUpdate = false, workInProgress2.pendingProps = nextProps = prevProps, checkScheduledUpdateOrContext(current, renderLanes2))
              0 !== (current.flags & 131072) && (didReceiveUpdate = true);
            else
              return workInProgress2.lanes = current.lanes, bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
        }
        return updateFunctionComponent(
          current,
          workInProgress2,
          Component,
          nextProps,
          renderLanes2
        );
      }
      function updateOffscreenComponent(current, workInProgress2, renderLanes2, nextProps) {
        var nextChildren = nextProps.children, prevState = null !== current ? current.memoizedState : null;
        null === current && null === workInProgress2.stateNode && (workInProgress2.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
        });
        if ("hidden" === nextProps.mode) {
          if (0 !== (workInProgress2.flags & 128)) {
            prevState = null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2;
            if (null !== current) {
              nextProps = workInProgress2.child = current.child;
              for (nextChildren = 0; null !== nextProps; )
                nextChildren = nextChildren | nextProps.lanes | nextProps.childLanes, nextProps = nextProps.sibling;
              nextProps = nextChildren & ~prevState;
            } else nextProps = 0, workInProgress2.child = null;
            return deferHiddenOffscreenComponent(
              current,
              workInProgress2,
              prevState,
              renderLanes2,
              nextProps
            );
          }
          if (0 !== (renderLanes2 & 536870912))
            workInProgress2.memoizedState = { baseLanes: 0, cachePool: null }, null !== current && pushTransition(
              workInProgress2,
              null !== prevState ? prevState.cachePool : null
            ), null !== prevState ? pushHiddenContext(workInProgress2, prevState) : reuseHiddenContextOnStack(), pushOffscreenSuspenseHandler(workInProgress2);
          else
            return nextProps = workInProgress2.lanes = 536870912, deferHiddenOffscreenComponent(
              current,
              workInProgress2,
              null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2,
              renderLanes2,
              nextProps
            );
        } else
          null !== prevState ? (pushTransition(workInProgress2, prevState.cachePool), pushHiddenContext(workInProgress2, prevState), reuseSuspenseHandlerOnStack(workInProgress2), workInProgress2.memoizedState = null) : (null !== current && pushTransition(workInProgress2, null), reuseHiddenContextOnStack(), reuseSuspenseHandlerOnStack(workInProgress2));
        reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
        return workInProgress2.child;
      }
      function bailoutOffscreenComponent(current, workInProgress2) {
        null !== current && 22 === current.tag || null !== workInProgress2.stateNode || (workInProgress2.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
        });
        return workInProgress2.sibling;
      }
      function deferHiddenOffscreenComponent(current, workInProgress2, nextBaseLanes, renderLanes2, remainingChildLanes) {
        var JSCompiler_inline_result = peekCacheFromPool();
        JSCompiler_inline_result = null === JSCompiler_inline_result ? null : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
        workInProgress2.memoizedState = {
          baseLanes: nextBaseLanes,
          cachePool: JSCompiler_inline_result
        };
        null !== current && pushTransition(workInProgress2, null);
        reuseHiddenContextOnStack();
        pushOffscreenSuspenseHandler(workInProgress2);
        null !== current && propagateParentContextChanges(current, workInProgress2, renderLanes2, true);
        workInProgress2.childLanes = remainingChildLanes;
        return null;
      }
      function mountActivityChildren(workInProgress2, nextProps) {
        nextProps = mountWorkInProgressOffscreenFiber(
          { mode: nextProps.mode, children: nextProps.children },
          workInProgress2.mode
        );
        nextProps.ref = workInProgress2.ref;
        workInProgress2.child = nextProps;
        nextProps.return = workInProgress2;
        return nextProps;
      }
      function retryActivityComponentWithoutHydrating(current, workInProgress2, renderLanes2) {
        reconcileChildFibers(workInProgress2, current.child, null, renderLanes2);
        current = mountActivityChildren(workInProgress2, workInProgress2.pendingProps);
        current.flags |= 2;
        popSuspenseHandler(workInProgress2);
        workInProgress2.memoizedState = null;
        return current;
      }
      function updateActivityComponent(current, workInProgress2, renderLanes2) {
        var nextProps = workInProgress2.pendingProps, didSuspend = 0 !== (workInProgress2.flags & 128);
        workInProgress2.flags &= -129;
        if (null === current) {
          if (isHydrating) {
            if ("hidden" === nextProps.mode)
              return current = mountActivityChildren(workInProgress2, nextProps), workInProgress2.lanes = 536870912, bailoutOffscreenComponent(null, current);
            pushDehydratedActivitySuspenseHandler(workInProgress2);
            (current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(
              current,
              rootOrSingletonContext
            ), current = null !== current && "&" === current.data ? current : null, null !== current && (workInProgress2.memoizedState = {
              dehydrated: current,
              treeContext: null !== treeContextProvider ? { id: treeContextId, overflow: treeContextOverflow } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, renderLanes2 = createFiberFromDehydratedFragment(current), renderLanes2.return = workInProgress2, workInProgress2.child = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null)) : current = null;
            if (null === current) throw throwOnHydrationMismatch(workInProgress2);
            workInProgress2.lanes = 536870912;
            return null;
          }
          return mountActivityChildren(workInProgress2, nextProps);
        }
        var prevState = current.memoizedState;
        if (null !== prevState) {
          var dehydrated = prevState.dehydrated;
          pushDehydratedActivitySuspenseHandler(workInProgress2);
          if (didSuspend)
            if (workInProgress2.flags & 256)
              workInProgress2.flags &= -257, workInProgress2 = retryActivityComponentWithoutHydrating(
                current,
                workInProgress2,
                renderLanes2
              );
            else if (null !== workInProgress2.memoizedState)
              workInProgress2.child = current.child, workInProgress2.flags |= 128, workInProgress2 = null;
            else throw Error(formatProdErrorMessage(558));
          else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress2, renderLanes2, false), didSuspend = 0 !== (renderLanes2 & current.childLanes), didReceiveUpdate || didSuspend) {
            nextProps = workInProgressRoot;
            if (null !== nextProps && (dehydrated = getBumpedLaneForHydration(nextProps, renderLanes2), 0 !== dehydrated && dehydrated !== prevState.retryLane))
              throw prevState.retryLane = dehydrated, enqueueConcurrentRenderForLane(current, dehydrated), scheduleUpdateOnFiber(nextProps, current, dehydrated), SelectiveHydrationException;
            renderDidSuspendDelayIfPossible();
            workInProgress2 = retryActivityComponentWithoutHydrating(
              current,
              workInProgress2,
              renderLanes2
            );
          } else
            current = prevState.treeContext, nextHydratableInstance = getNextHydratable(dehydrated.nextSibling), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, rootOrSingletonContext = false, null !== current && restoreSuspendedTreeContext(workInProgress2, current), workInProgress2 = mountActivityChildren(workInProgress2, nextProps), workInProgress2.flags |= 4096;
          return workInProgress2;
        }
        current = createWorkInProgress(current.child, {
          mode: nextProps.mode,
          children: nextProps.children
        });
        current.ref = workInProgress2.ref;
        workInProgress2.child = current;
        current.return = workInProgress2;
        return current;
      }
      function markRef(current, workInProgress2) {
        var ref = workInProgress2.ref;
        if (null === ref)
          null !== current && null !== current.ref && (workInProgress2.flags |= 4194816);
        else {
          if ("function" !== typeof ref && "object" !== typeof ref)
            throw Error(formatProdErrorMessage(284));
          if (null === current || current.ref !== ref)
            workInProgress2.flags |= 4194816;
        }
      }
      function updateFunctionComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
        prepareToReadContext(workInProgress2);
        Component = renderWithHooks(
          current,
          workInProgress2,
          Component,
          nextProps,
          void 0,
          renderLanes2
        );
        nextProps = checkDidRenderIdHook();
        if (null !== current && !didReceiveUpdate)
          return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
        isHydrating && nextProps && pushMaterializedTreeId(workInProgress2);
        workInProgress2.flags |= 1;
        reconcileChildren(current, workInProgress2, Component, renderLanes2);
        return workInProgress2.child;
      }
      function replayFunctionComponent(current, workInProgress2, nextProps, Component, secondArg, renderLanes2) {
        prepareToReadContext(workInProgress2);
        workInProgress2.updateQueue = null;
        nextProps = renderWithHooksAgain(
          workInProgress2,
          Component,
          nextProps,
          secondArg
        );
        finishRenderingHooks(current);
        Component = checkDidRenderIdHook();
        if (null !== current && !didReceiveUpdate)
          return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
        isHydrating && Component && pushMaterializedTreeId(workInProgress2);
        workInProgress2.flags |= 1;
        reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
        return workInProgress2.child;
      }
      function updateClassComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
        prepareToReadContext(workInProgress2);
        if (null === workInProgress2.stateNode) {
          var context = emptyContextObject, contextType = Component.contextType;
          "object" === typeof contextType && null !== contextType && (context = readContext(contextType));
          context = new Component(nextProps, context);
          workInProgress2.memoizedState = null !== context.state && void 0 !== context.state ? context.state : null;
          context.updater = classComponentUpdater;
          workInProgress2.stateNode = context;
          context._reactInternals = workInProgress2;
          context = workInProgress2.stateNode;
          context.props = nextProps;
          context.state = workInProgress2.memoizedState;
          context.refs = {};
          initializeUpdateQueue(workInProgress2);
          contextType = Component.contextType;
          context.context = "object" === typeof contextType && null !== contextType ? readContext(contextType) : emptyContextObject;
          context.state = workInProgress2.memoizedState;
          contextType = Component.getDerivedStateFromProps;
          "function" === typeof contextType && (applyDerivedStateFromProps(
            workInProgress2,
            Component,
            contextType,
            nextProps
          ), context.state = workInProgress2.memoizedState);
          "function" === typeof Component.getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || (contextType = context.state, "function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount(), contextType !== context.state && classComponentUpdater.enqueueReplaceState(context, context.state, null), processUpdateQueue(workInProgress2, nextProps, context, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction(), context.state = workInProgress2.memoizedState);
          "function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308);
          nextProps = true;
        } else if (null === current) {
          context = workInProgress2.stateNode;
          var unresolvedOldProps = workInProgress2.memoizedProps, oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
          context.props = oldProps;
          var oldContext = context.context, contextType$jscomp$0 = Component.contextType;
          contextType = emptyContextObject;
          "object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 && (contextType = readContext(contextType$jscomp$0));
          var getDerivedStateFromProps = Component.getDerivedStateFromProps;
          contextType$jscomp$0 = "function" === typeof getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate;
          unresolvedOldProps = workInProgress2.pendingProps !== unresolvedOldProps;
          contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (unresolvedOldProps || oldContext !== contextType) && callComponentWillReceiveProps(
            workInProgress2,
            context,
            nextProps,
            contextType
          );
          hasForceUpdate = false;
          var oldState = workInProgress2.memoizedState;
          context.state = oldState;
          processUpdateQueue(workInProgress2, nextProps, context, renderLanes2);
          suspendIfUpdateReadFromEntangledAsyncAction();
          oldContext = workInProgress2.memoizedState;
          unresolvedOldProps || oldState !== oldContext || hasForceUpdate ? ("function" === typeof getDerivedStateFromProps && (applyDerivedStateFromProps(
            workInProgress2,
            Component,
            getDerivedStateFromProps,
            nextProps
          ), oldContext = workInProgress2.memoizedState), (oldProps = hasForceUpdate || checkShouldComponentUpdate(
            workInProgress2,
            Component,
            oldProps,
            nextProps,
            oldState,
            oldContext,
            contextType
          )) ? (contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || ("function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount()), "function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308)) : ("function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = oldContext), context.props = nextProps, context.state = oldContext, context.context = contextType, nextProps = oldProps) : ("function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308), nextProps = false);
        } else {
          context = workInProgress2.stateNode;
          cloneUpdateQueue(current, workInProgress2);
          contextType = workInProgress2.memoizedProps;
          contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
          context.props = contextType$jscomp$0;
          getDerivedStateFromProps = workInProgress2.pendingProps;
          oldState = context.context;
          oldContext = Component.contextType;
          oldProps = emptyContextObject;
          "object" === typeof oldContext && null !== oldContext && (oldProps = readContext(oldContext));
          unresolvedOldProps = Component.getDerivedStateFromProps;
          (oldContext = "function" === typeof unresolvedOldProps || "function" === typeof context.getSnapshotBeforeUpdate) || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (contextType !== getDerivedStateFromProps || oldState !== oldProps) && callComponentWillReceiveProps(
            workInProgress2,
            context,
            nextProps,
            oldProps
          );
          hasForceUpdate = false;
          oldState = workInProgress2.memoizedState;
          context.state = oldState;
          processUpdateQueue(workInProgress2, nextProps, context, renderLanes2);
          suspendIfUpdateReadFromEntangledAsyncAction();
          var newState = workInProgress2.memoizedState;
          contextType !== getDerivedStateFromProps || oldState !== newState || hasForceUpdate || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies) ? ("function" === typeof unresolvedOldProps && (applyDerivedStateFromProps(
            workInProgress2,
            Component,
            unresolvedOldProps,
            nextProps
          ), newState = workInProgress2.memoizedState), (contextType$jscomp$0 = hasForceUpdate || checkShouldComponentUpdate(
            workInProgress2,
            Component,
            contextType$jscomp$0,
            nextProps,
            oldState,
            newState,
            oldProps
          ) || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies)) ? (oldContext || "function" !== typeof context.UNSAFE_componentWillUpdate && "function" !== typeof context.componentWillUpdate || ("function" === typeof context.componentWillUpdate && context.componentWillUpdate(nextProps, newState, oldProps), "function" === typeof context.UNSAFE_componentWillUpdate && context.UNSAFE_componentWillUpdate(
            nextProps,
            newState,
            oldProps
          )), "function" === typeof context.componentDidUpdate && (workInProgress2.flags |= 4), "function" === typeof context.getSnapshotBeforeUpdate && (workInProgress2.flags |= 1024)) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = newState), context.props = nextProps, context.state = newState, context.context = oldProps, nextProps = contextType$jscomp$0) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), nextProps = false);
        }
        context = nextProps;
        markRef(current, workInProgress2);
        nextProps = 0 !== (workInProgress2.flags & 128);
        context || nextProps ? (context = workInProgress2.stateNode, Component = nextProps && "function" !== typeof Component.getDerivedStateFromError ? null : context.render(), workInProgress2.flags |= 1, null !== current && nextProps ? (workInProgress2.child = reconcileChildFibers(
          workInProgress2,
          current.child,
          null,
          renderLanes2
        ), workInProgress2.child = reconcileChildFibers(
          workInProgress2,
          null,
          Component,
          renderLanes2
        )) : reconcileChildren(current, workInProgress2, Component, renderLanes2), workInProgress2.memoizedState = context.state, current = workInProgress2.child) : current = bailoutOnAlreadyFinishedWork(
          current,
          workInProgress2,
          renderLanes2
        );
        return current;
      }
      function mountHostRootWithoutHydrating(current, workInProgress2, nextChildren, renderLanes2) {
        resetHydrationState();
        workInProgress2.flags |= 256;
        reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
        return workInProgress2.child;
      }
      var SUSPENDED_MARKER = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
      };
      function mountSuspenseOffscreenState(renderLanes2) {
        return { baseLanes: renderLanes2, cachePool: getSuspendedCache() };
      }
      function getRemainingWorkInPrimaryTree(current, primaryTreeDidDefer, renderLanes2) {
        current = null !== current ? current.childLanes & ~renderLanes2 : 0;
        primaryTreeDidDefer && (current |= workInProgressDeferredLane);
        return current;
      }
      function updateSuspenseComponent(current, workInProgress2, renderLanes2) {
        var nextProps = workInProgress2.pendingProps, showFallback = false, didSuspend = 0 !== (workInProgress2.flags & 128), JSCompiler_temp;
        (JSCompiler_temp = didSuspend) || (JSCompiler_temp = null !== current && null === current.memoizedState ? false : 0 !== (suspenseStackCursor.current & 2));
        JSCompiler_temp && (showFallback = true, workInProgress2.flags &= -129);
        JSCompiler_temp = 0 !== (workInProgress2.flags & 32);
        workInProgress2.flags &= -33;
        if (null === current) {
          if (isHydrating) {
            showFallback ? pushPrimaryTreeSuspenseHandler(workInProgress2) : reuseSuspenseHandlerOnStack(workInProgress2);
            (current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(
              current,
              rootOrSingletonContext
            ), current = null !== current && "&" !== current.data ? current : null, null !== current && (workInProgress2.memoizedState = {
              dehydrated: current,
              treeContext: null !== treeContextProvider ? { id: treeContextId, overflow: treeContextOverflow } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, renderLanes2 = createFiberFromDehydratedFragment(current), renderLanes2.return = workInProgress2, workInProgress2.child = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null)) : current = null;
            if (null === current) throw throwOnHydrationMismatch(workInProgress2);
            isSuspenseInstanceFallback(current) ? workInProgress2.lanes = 32 : workInProgress2.lanes = 536870912;
            return null;
          }
          var nextPrimaryChildren = nextProps.children;
          nextProps = nextProps.fallback;
          if (showFallback)
            return reuseSuspenseHandlerOnStack(workInProgress2), showFallback = workInProgress2.mode, nextPrimaryChildren = mountWorkInProgressOffscreenFiber(
              { mode: "hidden", children: nextPrimaryChildren },
              showFallback
            ), nextProps = createFiberFromFragment(
              nextProps,
              showFallback,
              renderLanes2,
              null
            ), nextPrimaryChildren.return = workInProgress2, nextProps.return = workInProgress2, nextPrimaryChildren.sibling = nextProps, workInProgress2.child = nextPrimaryChildren, nextProps = workInProgress2.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes2), nextProps.childLanes = getRemainingWorkInPrimaryTree(
              current,
              JSCompiler_temp,
              renderLanes2
            ), workInProgress2.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(null, nextProps);
          pushPrimaryTreeSuspenseHandler(workInProgress2);
          return mountSuspensePrimaryChildren(workInProgress2, nextPrimaryChildren);
        }
        var prevState = current.memoizedState;
        if (null !== prevState && (nextPrimaryChildren = prevState.dehydrated, null !== nextPrimaryChildren)) {
          if (didSuspend)
            workInProgress2.flags & 256 ? (pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags &= -257, workInProgress2 = retrySuspenseComponentWithoutHydrating(
              current,
              workInProgress2,
              renderLanes2
            )) : null !== workInProgress2.memoizedState ? (reuseSuspenseHandlerOnStack(workInProgress2), workInProgress2.child = current.child, workInProgress2.flags |= 128, workInProgress2 = null) : (reuseSuspenseHandlerOnStack(workInProgress2), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress2.mode, nextProps = mountWorkInProgressOffscreenFiber(
              { mode: "visible", children: nextProps.children },
              showFallback
            ), nextPrimaryChildren = createFiberFromFragment(
              nextPrimaryChildren,
              showFallback,
              renderLanes2,
              null
            ), nextPrimaryChildren.flags |= 2, nextProps.return = workInProgress2, nextPrimaryChildren.return = workInProgress2, nextProps.sibling = nextPrimaryChildren, workInProgress2.child = nextProps, reconcileChildFibers(
              workInProgress2,
              current.child,
              null,
              renderLanes2
            ), nextProps = workInProgress2.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes2), nextProps.childLanes = getRemainingWorkInPrimaryTree(
              current,
              JSCompiler_temp,
              renderLanes2
            ), workInProgress2.memoizedState = SUSPENDED_MARKER, workInProgress2 = bailoutOffscreenComponent(null, nextProps));
          else if (pushPrimaryTreeSuspenseHandler(workInProgress2), isSuspenseInstanceFallback(nextPrimaryChildren)) {
            JSCompiler_temp = nextPrimaryChildren.nextSibling && nextPrimaryChildren.nextSibling.dataset;
            if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
            JSCompiler_temp = digest;
            nextProps = Error(formatProdErrorMessage(419));
            nextProps.stack = "";
            nextProps.digest = JSCompiler_temp;
            queueHydrationError({ value: nextProps, source: null, stack: null });
            workInProgress2 = retrySuspenseComponentWithoutHydrating(
              current,
              workInProgress2,
              renderLanes2
            );
          } else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress2, renderLanes2, false), JSCompiler_temp = 0 !== (renderLanes2 & current.childLanes), didReceiveUpdate || JSCompiler_temp) {
            JSCompiler_temp = workInProgressRoot;
            if (null !== JSCompiler_temp && (nextProps = getBumpedLaneForHydration(JSCompiler_temp, renderLanes2), 0 !== nextProps && nextProps !== prevState.retryLane))
              throw prevState.retryLane = nextProps, enqueueConcurrentRenderForLane(current, nextProps), scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps), SelectiveHydrationException;
            isSuspenseInstancePending(nextPrimaryChildren) || renderDidSuspendDelayIfPossible();
            workInProgress2 = retrySuspenseComponentWithoutHydrating(
              current,
              workInProgress2,
              renderLanes2
            );
          } else
            isSuspenseInstancePending(nextPrimaryChildren) ? (workInProgress2.flags |= 192, workInProgress2.child = current.child, workInProgress2 = null) : (current = prevState.treeContext, nextHydratableInstance = getNextHydratable(
              nextPrimaryChildren.nextSibling
            ), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, rootOrSingletonContext = false, null !== current && restoreSuspendedTreeContext(workInProgress2, current), workInProgress2 = mountSuspensePrimaryChildren(
              workInProgress2,
              nextProps.children
            ), workInProgress2.flags |= 4096);
          return workInProgress2;
        }
        if (showFallback)
          return reuseSuspenseHandlerOnStack(workInProgress2), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress2.mode, prevState = current.child, digest = prevState.sibling, nextProps = createWorkInProgress(prevState, {
            mode: "hidden",
            children: nextProps.children
          }), nextProps.subtreeFlags = prevState.subtreeFlags & 65011712, null !== digest ? nextPrimaryChildren = createWorkInProgress(
            digest,
            nextPrimaryChildren
          ) : (nextPrimaryChildren = createFiberFromFragment(
            nextPrimaryChildren,
            showFallback,
            renderLanes2,
            null
          ), nextPrimaryChildren.flags |= 2), nextPrimaryChildren.return = workInProgress2, nextProps.return = workInProgress2, nextProps.sibling = nextPrimaryChildren, workInProgress2.child = nextProps, bailoutOffscreenComponent(null, nextProps), nextProps = workInProgress2.child, nextPrimaryChildren = current.child.memoizedState, null === nextPrimaryChildren ? nextPrimaryChildren = mountSuspenseOffscreenState(renderLanes2) : (showFallback = nextPrimaryChildren.cachePool, null !== showFallback ? (prevState = CacheContext._currentValue, showFallback = showFallback.parent !== prevState ? { parent: prevState, pool: prevState } : showFallback) : showFallback = getSuspendedCache(), nextPrimaryChildren = {
            baseLanes: nextPrimaryChildren.baseLanes | renderLanes2,
            cachePool: showFallback
          }), nextProps.memoizedState = nextPrimaryChildren, nextProps.childLanes = getRemainingWorkInPrimaryTree(
            current,
            JSCompiler_temp,
            renderLanes2
          ), workInProgress2.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(current.child, nextProps);
        pushPrimaryTreeSuspenseHandler(workInProgress2);
        renderLanes2 = current.child;
        current = renderLanes2.sibling;
        renderLanes2 = createWorkInProgress(renderLanes2, {
          mode: "visible",
          children: nextProps.children
        });
        renderLanes2.return = workInProgress2;
        renderLanes2.sibling = null;
        null !== current && (JSCompiler_temp = workInProgress2.deletions, null === JSCompiler_temp ? (workInProgress2.deletions = [current], workInProgress2.flags |= 16) : JSCompiler_temp.push(current));
        workInProgress2.child = renderLanes2;
        workInProgress2.memoizedState = null;
        return renderLanes2;
      }
      function mountSuspensePrimaryChildren(workInProgress2, primaryChildren) {
        primaryChildren = mountWorkInProgressOffscreenFiber(
          { mode: "visible", children: primaryChildren },
          workInProgress2.mode
        );
        primaryChildren.return = workInProgress2;
        return workInProgress2.child = primaryChildren;
      }
      function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
        offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
        offscreenProps.lanes = 0;
        return offscreenProps;
      }
      function retrySuspenseComponentWithoutHydrating(current, workInProgress2, renderLanes2) {
        reconcileChildFibers(workInProgress2, current.child, null, renderLanes2);
        current = mountSuspensePrimaryChildren(
          workInProgress2,
          workInProgress2.pendingProps.children
        );
        current.flags |= 2;
        workInProgress2.memoizedState = null;
        return current;
      }
      function scheduleSuspenseWorkOnFiber(fiber, renderLanes2, propagationRoot) {
        fiber.lanes |= renderLanes2;
        var alternate = fiber.alternate;
        null !== alternate && (alternate.lanes |= renderLanes2);
        scheduleContextWorkOnParentPath(fiber.return, renderLanes2, propagationRoot);
      }
      function initSuspenseListRenderState(workInProgress2, isBackwards, tail, lastContentRow, tailMode, treeForkCount2) {
        var renderState = workInProgress2.memoizedState;
        null === renderState ? workInProgress2.memoizedState = {
          isBackwards,
          rendering: null,
          renderingStartTime: 0,
          last: lastContentRow,
          tail,
          tailMode,
          treeForkCount: treeForkCount2
        } : (renderState.isBackwards = isBackwards, renderState.rendering = null, renderState.renderingStartTime = 0, renderState.last = lastContentRow, renderState.tail = tail, renderState.tailMode = tailMode, renderState.treeForkCount = treeForkCount2);
      }
      function updateSuspenseListComponent(current, workInProgress2, renderLanes2) {
        var nextProps = workInProgress2.pendingProps, revealOrder = nextProps.revealOrder, tailMode = nextProps.tail;
        nextProps = nextProps.children;
        var suspenseContext = suspenseStackCursor.current, shouldForceFallback = 0 !== (suspenseContext & 2);
        shouldForceFallback ? (suspenseContext = suspenseContext & 1 | 2, workInProgress2.flags |= 128) : suspenseContext &= 1;
        push(suspenseStackCursor, suspenseContext);
        reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
        nextProps = isHydrating ? treeForkCount : 0;
        if (!shouldForceFallback && null !== current && 0 !== (current.flags & 128))
          a: for (current = workInProgress2.child; null !== current; ) {
            if (13 === current.tag)
              null !== current.memoizedState && scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
            else if (19 === current.tag)
              scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
            else if (null !== current.child) {
              current.child.return = current;
              current = current.child;
              continue;
            }
            if (current === workInProgress2) break a;
            for (; null === current.sibling; ) {
              if (null === current.return || current.return === workInProgress2)
                break a;
              current = current.return;
            }
            current.sibling.return = current.return;
            current = current.sibling;
          }
        switch (revealOrder) {
          case "forwards":
            renderLanes2 = workInProgress2.child;
            for (revealOrder = null; null !== renderLanes2; )
              current = renderLanes2.alternate, null !== current && null === findFirstSuspended(current) && (revealOrder = renderLanes2), renderLanes2 = renderLanes2.sibling;
            renderLanes2 = revealOrder;
            null === renderLanes2 ? (revealOrder = workInProgress2.child, workInProgress2.child = null) : (revealOrder = renderLanes2.sibling, renderLanes2.sibling = null);
            initSuspenseListRenderState(
              workInProgress2,
              false,
              revealOrder,
              renderLanes2,
              tailMode,
              nextProps
            );
            break;
          case "backwards":
          case "unstable_legacy-backwards":
            renderLanes2 = null;
            revealOrder = workInProgress2.child;
            for (workInProgress2.child = null; null !== revealOrder; ) {
              current = revealOrder.alternate;
              if (null !== current && null === findFirstSuspended(current)) {
                workInProgress2.child = revealOrder;
                break;
              }
              current = revealOrder.sibling;
              revealOrder.sibling = renderLanes2;
              renderLanes2 = revealOrder;
              revealOrder = current;
            }
            initSuspenseListRenderState(
              workInProgress2,
              true,
              renderLanes2,
              null,
              tailMode,
              nextProps
            );
            break;
          case "together":
            initSuspenseListRenderState(
              workInProgress2,
              false,
              null,
              null,
              void 0,
              nextProps
            );
            break;
          default:
            workInProgress2.memoizedState = null;
        }
        return workInProgress2.child;
      }
      function bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2) {
        null !== current && (workInProgress2.dependencies = current.dependencies);
        workInProgressRootSkippedLanes |= workInProgress2.lanes;
        if (0 === (renderLanes2 & workInProgress2.childLanes))
          if (null !== current) {
            if (propagateParentContextChanges(
              current,
              workInProgress2,
              renderLanes2,
              false
            ), 0 === (renderLanes2 & workInProgress2.childLanes))
              return null;
          } else return null;
        if (null !== current && workInProgress2.child !== current.child)
          throw Error(formatProdErrorMessage(153));
        if (null !== workInProgress2.child) {
          current = workInProgress2.child;
          renderLanes2 = createWorkInProgress(current, current.pendingProps);
          workInProgress2.child = renderLanes2;
          for (renderLanes2.return = workInProgress2; null !== current.sibling; )
            current = current.sibling, renderLanes2 = renderLanes2.sibling = createWorkInProgress(current, current.pendingProps), renderLanes2.return = workInProgress2;
          renderLanes2.sibling = null;
        }
        return workInProgress2.child;
      }
      function checkScheduledUpdateOrContext(current, renderLanes2) {
        if (0 !== (current.lanes & renderLanes2)) return true;
        current = current.dependencies;
        return null !== current && checkIfContextChanged(current) ? true : false;
      }
      function attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress2, renderLanes2) {
        switch (workInProgress2.tag) {
          case 3:
            pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
            pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
            resetHydrationState();
            break;
          case 27:
          case 5:
            pushHostContext(workInProgress2);
            break;
          case 4:
            pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
            break;
          case 10:
            pushProvider(
              workInProgress2,
              workInProgress2.type,
              workInProgress2.memoizedProps.value
            );
            break;
          case 31:
            if (null !== workInProgress2.memoizedState)
              return workInProgress2.flags |= 128, pushDehydratedActivitySuspenseHandler(workInProgress2), null;
            break;
          case 13:
            var state$102 = workInProgress2.memoizedState;
            if (null !== state$102) {
              if (null !== state$102.dehydrated)
                return pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags |= 128, null;
              if (0 !== (renderLanes2 & workInProgress2.child.childLanes))
                return updateSuspenseComponent(current, workInProgress2, renderLanes2);
              pushPrimaryTreeSuspenseHandler(workInProgress2);
              current = bailoutOnAlreadyFinishedWork(
                current,
                workInProgress2,
                renderLanes2
              );
              return null !== current ? current.sibling : null;
            }
            pushPrimaryTreeSuspenseHandler(workInProgress2);
            break;
          case 19:
            var didSuspendBefore = 0 !== (current.flags & 128);
            state$102 = 0 !== (renderLanes2 & workInProgress2.childLanes);
            state$102 || (propagateParentContextChanges(
              current,
              workInProgress2,
              renderLanes2,
              false
            ), state$102 = 0 !== (renderLanes2 & workInProgress2.childLanes));
            if (didSuspendBefore) {
              if (state$102)
                return updateSuspenseListComponent(
                  current,
                  workInProgress2,
                  renderLanes2
                );
              workInProgress2.flags |= 128;
            }
            didSuspendBefore = workInProgress2.memoizedState;
            null !== didSuspendBefore && (didSuspendBefore.rendering = null, didSuspendBefore.tail = null, didSuspendBefore.lastEffect = null);
            push(suspenseStackCursor, suspenseStackCursor.current);
            if (state$102) break;
            else return null;
          case 22:
            return workInProgress2.lanes = 0, updateOffscreenComponent(
              current,
              workInProgress2,
              renderLanes2,
              workInProgress2.pendingProps
            );
          case 24:
            pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
        }
        return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      }
      function beginWork(current, workInProgress2, renderLanes2) {
        if (null !== current)
          if (current.memoizedProps !== workInProgress2.pendingProps)
            didReceiveUpdate = true;
          else {
            if (!checkScheduledUpdateOrContext(current, renderLanes2) && 0 === (workInProgress2.flags & 128))
              return didReceiveUpdate = false, attemptEarlyBailoutIfNoScheduledUpdate(
                current,
                workInProgress2,
                renderLanes2
              );
            didReceiveUpdate = 0 !== (current.flags & 131072) ? true : false;
          }
        else
          didReceiveUpdate = false, isHydrating && 0 !== (workInProgress2.flags & 1048576) && pushTreeId(workInProgress2, treeForkCount, workInProgress2.index);
        workInProgress2.lanes = 0;
        switch (workInProgress2.tag) {
          case 16:
            a: {
              var props = workInProgress2.pendingProps;
              current = resolveLazy(workInProgress2.elementType);
              workInProgress2.type = current;
              if ("function" === typeof current)
                shouldConstruct(current) ? (props = resolveClassComponentProps(current, props), workInProgress2.tag = 1, workInProgress2 = updateClassComponent(
                  null,
                  workInProgress2,
                  current,
                  props,
                  renderLanes2
                )) : (workInProgress2.tag = 0, workInProgress2 = updateFunctionComponent(
                  null,
                  workInProgress2,
                  current,
                  props,
                  renderLanes2
                ));
              else {
                if (void 0 !== current && null !== current) {
                  var $$typeof = current.$$typeof;
                  if ($$typeof === REACT_FORWARD_REF_TYPE) {
                    workInProgress2.tag = 11;
                    workInProgress2 = updateForwardRef(
                      null,
                      workInProgress2,
                      current,
                      props,
                      renderLanes2
                    );
                    break a;
                  } else if ($$typeof === REACT_MEMO_TYPE) {
                    workInProgress2.tag = 14;
                    workInProgress2 = updateMemoComponent(
                      null,
                      workInProgress2,
                      current,
                      props,
                      renderLanes2
                    );
                    break a;
                  }
                }
                workInProgress2 = getComponentNameFromType(current) || current;
                throw Error(formatProdErrorMessage(306, workInProgress2, ""));
              }
            }
            return workInProgress2;
          case 0:
            return updateFunctionComponent(
              current,
              workInProgress2,
              workInProgress2.type,
              workInProgress2.pendingProps,
              renderLanes2
            );
          case 1:
            return props = workInProgress2.type, $$typeof = resolveClassComponentProps(
              props,
              workInProgress2.pendingProps
            ), updateClassComponent(
              current,
              workInProgress2,
              props,
              $$typeof,
              renderLanes2
            );
          case 3:
            a: {
              pushHostContainer(
                workInProgress2,
                workInProgress2.stateNode.containerInfo
              );
              if (null === current) throw Error(formatProdErrorMessage(387));
              props = workInProgress2.pendingProps;
              var prevState = workInProgress2.memoizedState;
              $$typeof = prevState.element;
              cloneUpdateQueue(current, workInProgress2);
              processUpdateQueue(workInProgress2, props, null, renderLanes2);
              var nextState = workInProgress2.memoizedState;
              props = nextState.cache;
              pushProvider(workInProgress2, CacheContext, props);
              props !== prevState.cache && propagateContextChanges(
                workInProgress2,
                [CacheContext],
                renderLanes2,
                true
              );
              suspendIfUpdateReadFromEntangledAsyncAction();
              props = nextState.element;
              if (prevState.isDehydrated)
                if (prevState = {
                  element: props,
                  isDehydrated: false,
                  cache: nextState.cache
                }, workInProgress2.updateQueue.baseState = prevState, workInProgress2.memoizedState = prevState, workInProgress2.flags & 256) {
                  workInProgress2 = mountHostRootWithoutHydrating(
                    current,
                    workInProgress2,
                    props,
                    renderLanes2
                  );
                  break a;
                } else if (props !== $$typeof) {
                  $$typeof = createCapturedValueAtFiber(
                    Error(formatProdErrorMessage(424)),
                    workInProgress2
                  );
                  queueHydrationError($$typeof);
                  workInProgress2 = mountHostRootWithoutHydrating(
                    current,
                    workInProgress2,
                    props,
                    renderLanes2
                  );
                  break a;
                } else {
                  current = workInProgress2.stateNode.containerInfo;
                  switch (current.nodeType) {
                    case 9:
                      current = current.body;
                      break;
                    default:
                      current = "HTML" === current.nodeName ? current.ownerDocument.body : current;
                  }
                  nextHydratableInstance = getNextHydratable(current.firstChild);
                  hydrationParentFiber = workInProgress2;
                  isHydrating = true;
                  hydrationErrors = null;
                  rootOrSingletonContext = true;
                  renderLanes2 = mountChildFibers(
                    workInProgress2,
                    null,
                    props,
                    renderLanes2
                  );
                  for (workInProgress2.child = renderLanes2; renderLanes2; )
                    renderLanes2.flags = renderLanes2.flags & -3 | 4096, renderLanes2 = renderLanes2.sibling;
                }
              else {
                resetHydrationState();
                if (props === $$typeof) {
                  workInProgress2 = bailoutOnAlreadyFinishedWork(
                    current,
                    workInProgress2,
                    renderLanes2
                  );
                  break a;
                }
                reconcileChildren(current, workInProgress2, props, renderLanes2);
              }
              workInProgress2 = workInProgress2.child;
            }
            return workInProgress2;
          case 26:
            return markRef(current, workInProgress2), null === current ? (renderLanes2 = getResource(
              workInProgress2.type,
              null,
              workInProgress2.pendingProps,
              null
            )) ? workInProgress2.memoizedState = renderLanes2 : isHydrating || (renderLanes2 = workInProgress2.type, current = workInProgress2.pendingProps, props = getOwnerDocumentFromRootContainer(
              rootInstanceStackCursor.current
            ).createElement(renderLanes2), props[internalInstanceKey] = workInProgress2, props[internalPropsKey] = current, setInitialProperties(props, renderLanes2, current), markNodeAsHoistable(props), workInProgress2.stateNode = props) : workInProgress2.memoizedState = getResource(
              workInProgress2.type,
              current.memoizedProps,
              workInProgress2.pendingProps,
              current.memoizedState
            ), null;
          case 27:
            return pushHostContext(workInProgress2), null === current && isHydrating && (props = workInProgress2.stateNode = resolveSingletonInstance(
              workInProgress2.type,
              workInProgress2.pendingProps,
              rootInstanceStackCursor.current
            ), hydrationParentFiber = workInProgress2, rootOrSingletonContext = true, $$typeof = nextHydratableInstance, isSingletonScope(workInProgress2.type) ? (previousHydratableOnEnteringScopedSingleton = $$typeof, nextHydratableInstance = getNextHydratable(props.firstChild)) : nextHydratableInstance = $$typeof), reconcileChildren(
              current,
              workInProgress2,
              workInProgress2.pendingProps.children,
              renderLanes2
            ), markRef(current, workInProgress2), null === current && (workInProgress2.flags |= 4194304), workInProgress2.child;
          case 5:
            if (null === current && isHydrating) {
              if ($$typeof = props = nextHydratableInstance)
                props = canHydrateInstance(
                  props,
                  workInProgress2.type,
                  workInProgress2.pendingProps,
                  rootOrSingletonContext
                ), null !== props ? (workInProgress2.stateNode = props, hydrationParentFiber = workInProgress2, nextHydratableInstance = getNextHydratable(props.firstChild), rootOrSingletonContext = false, $$typeof = true) : $$typeof = false;
              $$typeof || throwOnHydrationMismatch(workInProgress2);
            }
            pushHostContext(workInProgress2);
            $$typeof = workInProgress2.type;
            prevState = workInProgress2.pendingProps;
            nextState = null !== current ? current.memoizedProps : null;
            props = prevState.children;
            shouldSetTextContent($$typeof, prevState) ? props = null : null !== nextState && shouldSetTextContent($$typeof, nextState) && (workInProgress2.flags |= 32);
            null !== workInProgress2.memoizedState && ($$typeof = renderWithHooks(
              current,
              workInProgress2,
              TransitionAwareHostComponent,
              null,
              null,
              renderLanes2
            ), HostTransitionContext._currentValue = $$typeof);
            markRef(current, workInProgress2);
            reconcileChildren(current, workInProgress2, props, renderLanes2);
            return workInProgress2.child;
          case 6:
            if (null === current && isHydrating) {
              if (current = renderLanes2 = nextHydratableInstance)
                renderLanes2 = canHydrateTextInstance(
                  renderLanes2,
                  workInProgress2.pendingProps,
                  rootOrSingletonContext
                ), null !== renderLanes2 ? (workInProgress2.stateNode = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null, current = true) : current = false;
              current || throwOnHydrationMismatch(workInProgress2);
            }
            return null;
          case 13:
            return updateSuspenseComponent(current, workInProgress2, renderLanes2);
          case 4:
            return pushHostContainer(
              workInProgress2,
              workInProgress2.stateNode.containerInfo
            ), props = workInProgress2.pendingProps, null === current ? workInProgress2.child = reconcileChildFibers(
              workInProgress2,
              null,
              props,
              renderLanes2
            ) : reconcileChildren(current, workInProgress2, props, renderLanes2), workInProgress2.child;
          case 11:
            return updateForwardRef(
              current,
              workInProgress2,
              workInProgress2.type,
              workInProgress2.pendingProps,
              renderLanes2
            );
          case 7:
            return reconcileChildren(
              current,
              workInProgress2,
              workInProgress2.pendingProps,
              renderLanes2
            ), workInProgress2.child;
          case 8:
            return reconcileChildren(
              current,
              workInProgress2,
              workInProgress2.pendingProps.children,
              renderLanes2
            ), workInProgress2.child;
          case 12:
            return reconcileChildren(
              current,
              workInProgress2,
              workInProgress2.pendingProps.children,
              renderLanes2
            ), workInProgress2.child;
          case 10:
            return props = workInProgress2.pendingProps, pushProvider(workInProgress2, workInProgress2.type, props.value), reconcileChildren(current, workInProgress2, props.children, renderLanes2), workInProgress2.child;
          case 9:
            return $$typeof = workInProgress2.type._context, props = workInProgress2.pendingProps.children, prepareToReadContext(workInProgress2), $$typeof = readContext($$typeof), props = props($$typeof), workInProgress2.flags |= 1, reconcileChildren(current, workInProgress2, props, renderLanes2), workInProgress2.child;
          case 14:
            return updateMemoComponent(
              current,
              workInProgress2,
              workInProgress2.type,
              workInProgress2.pendingProps,
              renderLanes2
            );
          case 15:
            return updateSimpleMemoComponent(
              current,
              workInProgress2,
              workInProgress2.type,
              workInProgress2.pendingProps,
              renderLanes2
            );
          case 19:
            return updateSuspenseListComponent(current, workInProgress2, renderLanes2);
          case 31:
            return updateActivityComponent(current, workInProgress2, renderLanes2);
          case 22:
            return updateOffscreenComponent(
              current,
              workInProgress2,
              renderLanes2,
              workInProgress2.pendingProps
            );
          case 24:
            return prepareToReadContext(workInProgress2), props = readContext(CacheContext), null === current ? ($$typeof = peekCacheFromPool(), null === $$typeof && ($$typeof = workInProgressRoot, prevState = createCache3(), $$typeof.pooledCache = prevState, prevState.refCount++, null !== prevState && ($$typeof.pooledCacheLanes |= renderLanes2), $$typeof = prevState), workInProgress2.memoizedState = { parent: props, cache: $$typeof }, initializeUpdateQueue(workInProgress2), pushProvider(workInProgress2, CacheContext, $$typeof)) : (0 !== (current.lanes & renderLanes2) && (cloneUpdateQueue(current, workInProgress2), processUpdateQueue(workInProgress2, null, null, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction()), $$typeof = current.memoizedState, prevState = workInProgress2.memoizedState, $$typeof.parent !== props ? ($$typeof = { parent: props, cache: props }, workInProgress2.memoizedState = $$typeof, 0 === workInProgress2.lanes && (workInProgress2.memoizedState = workInProgress2.updateQueue.baseState = $$typeof), pushProvider(workInProgress2, CacheContext, props)) : (props = prevState.cache, pushProvider(workInProgress2, CacheContext, props), props !== $$typeof.cache && propagateContextChanges(
              workInProgress2,
              [CacheContext],
              renderLanes2,
              true
            ))), reconcileChildren(
              current,
              workInProgress2,
              workInProgress2.pendingProps.children,
              renderLanes2
            ), workInProgress2.child;
          case 29:
            throw workInProgress2.pendingProps;
        }
        throw Error(formatProdErrorMessage(156, workInProgress2.tag));
      }
      function markUpdate(workInProgress2) {
        workInProgress2.flags |= 4;
      }
      function preloadInstanceAndSuspendIfNeeded(workInProgress2, type, oldProps, newProps, renderLanes2) {
        if (type = 0 !== (workInProgress2.mode & 32)) type = false;
        if (type) {
          if (workInProgress2.flags |= 16777216, (renderLanes2 & 335544128) === renderLanes2)
            if (workInProgress2.stateNode.complete) workInProgress2.flags |= 8192;
            else if (shouldRemainOnPreviousScreen()) workInProgress2.flags |= 8192;
            else
              throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
        } else workInProgress2.flags &= -16777217;
      }
      function preloadResourceAndSuspendIfNeeded(workInProgress2, resource) {
        if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
          workInProgress2.flags &= -16777217;
        else if (workInProgress2.flags |= 16777216, !preloadResource(resource))
          if (shouldRemainOnPreviousScreen()) workInProgress2.flags |= 8192;
          else
            throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
      }
      function scheduleRetryEffect(workInProgress2, retryQueue) {
        null !== retryQueue && (workInProgress2.flags |= 4);
        workInProgress2.flags & 16384 && (retryQueue = 22 !== workInProgress2.tag ? claimNextRetryLane() : 536870912, workInProgress2.lanes |= retryQueue, workInProgressSuspendedRetryLanes |= retryQueue);
      }
      function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
        if (!isHydrating)
          switch (renderState.tailMode) {
            case "hidden":
              hasRenderedATailFallback = renderState.tail;
              for (var lastTailNode = null; null !== hasRenderedATailFallback; )
                null !== hasRenderedATailFallback.alternate && (lastTailNode = hasRenderedATailFallback), hasRenderedATailFallback = hasRenderedATailFallback.sibling;
              null === lastTailNode ? renderState.tail = null : lastTailNode.sibling = null;
              break;
            case "collapsed":
              lastTailNode = renderState.tail;
              for (var lastTailNode$106 = null; null !== lastTailNode; )
                null !== lastTailNode.alternate && (lastTailNode$106 = lastTailNode), lastTailNode = lastTailNode.sibling;
              null === lastTailNode$106 ? hasRenderedATailFallback || null === renderState.tail ? renderState.tail = null : renderState.tail.sibling = null : lastTailNode$106.sibling = null;
          }
      }
      function bubbleProperties(completedWork) {
        var didBailout = null !== completedWork.alternate && completedWork.alternate.child === completedWork.child, newChildLanes = 0, subtreeFlags = 0;
        if (didBailout)
          for (var child$107 = completedWork.child; null !== child$107; )
            newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags & 65011712, subtreeFlags |= child$107.flags & 65011712, child$107.return = completedWork, child$107 = child$107.sibling;
        else
          for (child$107 = completedWork.child; null !== child$107; )
            newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags, subtreeFlags |= child$107.flags, child$107.return = completedWork, child$107 = child$107.sibling;
        completedWork.subtreeFlags |= subtreeFlags;
        completedWork.childLanes = newChildLanes;
        return didBailout;
      }
      function completeWork(current, workInProgress2, renderLanes2) {
        var newProps = workInProgress2.pendingProps;
        popTreeContext(workInProgress2);
        switch (workInProgress2.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return bubbleProperties(workInProgress2), null;
          case 1:
            return bubbleProperties(workInProgress2), null;
          case 3:
            renderLanes2 = workInProgress2.stateNode;
            newProps = null;
            null !== current && (newProps = current.memoizedState.cache);
            workInProgress2.memoizedState.cache !== newProps && (workInProgress2.flags |= 2048);
            popProvider(CacheContext);
            popHostContainer();
            renderLanes2.pendingContext && (renderLanes2.context = renderLanes2.pendingContext, renderLanes2.pendingContext = null);
            if (null === current || null === current.child)
              popHydrationState(workInProgress2) ? markUpdate(workInProgress2) : null === current || current.memoizedState.isDehydrated && 0 === (workInProgress2.flags & 256) || (workInProgress2.flags |= 1024, upgradeHydrationErrorsToRecoverable());
            bubbleProperties(workInProgress2);
            return null;
          case 26:
            var type = workInProgress2.type, nextResource = workInProgress2.memoizedState;
            null === current ? (markUpdate(workInProgress2), null !== nextResource ? (bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, nextResource)) : (bubbleProperties(workInProgress2), preloadInstanceAndSuspendIfNeeded(
              workInProgress2,
              type,
              null,
              newProps,
              renderLanes2
            ))) : nextResource ? nextResource !== current.memoizedState ? (markUpdate(workInProgress2), bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, nextResource)) : (bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217) : (current = current.memoizedProps, current !== newProps && markUpdate(workInProgress2), bubbleProperties(workInProgress2), preloadInstanceAndSuspendIfNeeded(
              workInProgress2,
              type,
              current,
              newProps,
              renderLanes2
            ));
            return null;
          case 27:
            popHostContext(workInProgress2);
            renderLanes2 = rootInstanceStackCursor.current;
            type = workInProgress2.type;
            if (null !== current && null != workInProgress2.stateNode)
              current.memoizedProps !== newProps && markUpdate(workInProgress2);
            else {
              if (!newProps) {
                if (null === workInProgress2.stateNode)
                  throw Error(formatProdErrorMessage(166));
                bubbleProperties(workInProgress2);
                return null;
              }
              current = contextStackCursor.current;
              popHydrationState(workInProgress2) ? prepareToHydrateHostInstance(workInProgress2, current) : (current = resolveSingletonInstance(type, newProps, renderLanes2), workInProgress2.stateNode = current, markUpdate(workInProgress2));
            }
            bubbleProperties(workInProgress2);
            return null;
          case 5:
            popHostContext(workInProgress2);
            type = workInProgress2.type;
            if (null !== current && null != workInProgress2.stateNode)
              current.memoizedProps !== newProps && markUpdate(workInProgress2);
            else {
              if (!newProps) {
                if (null === workInProgress2.stateNode)
                  throw Error(formatProdErrorMessage(166));
                bubbleProperties(workInProgress2);
                return null;
              }
              nextResource = contextStackCursor.current;
              if (popHydrationState(workInProgress2))
                prepareToHydrateHostInstance(workInProgress2, nextResource);
              else {
                var ownerDocument = getOwnerDocumentFromRootContainer(
                  rootInstanceStackCursor.current
                );
                switch (nextResource) {
                  case 1:
                    nextResource = ownerDocument.createElementNS(
                      "http://www.w3.org/2000/svg",
                      type
                    );
                    break;
                  case 2:
                    nextResource = ownerDocument.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      type
                    );
                    break;
                  default:
                    switch (type) {
                      case "svg":
                        nextResource = ownerDocument.createElementNS(
                          "http://www.w3.org/2000/svg",
                          type
                        );
                        break;
                      case "math":
                        nextResource = ownerDocument.createElementNS(
                          "http://www.w3.org/1998/Math/MathML",
                          type
                        );
                        break;
                      case "script":
                        nextResource = ownerDocument.createElement("div");
                        nextResource.innerHTML = "<script><\/script>";
                        nextResource = nextResource.removeChild(
                          nextResource.firstChild
                        );
                        break;
                      case "select":
                        nextResource = "string" === typeof newProps.is ? ownerDocument.createElement("select", {
                          is: newProps.is
                        }) : ownerDocument.createElement("select");
                        newProps.multiple ? nextResource.multiple = true : newProps.size && (nextResource.size = newProps.size);
                        break;
                      default:
                        nextResource = "string" === typeof newProps.is ? ownerDocument.createElement(type, { is: newProps.is }) : ownerDocument.createElement(type);
                    }
                }
                nextResource[internalInstanceKey] = workInProgress2;
                nextResource[internalPropsKey] = newProps;
                a: for (ownerDocument = workInProgress2.child; null !== ownerDocument; ) {
                  if (5 === ownerDocument.tag || 6 === ownerDocument.tag)
                    nextResource.appendChild(ownerDocument.stateNode);
                  else if (4 !== ownerDocument.tag && 27 !== ownerDocument.tag && null !== ownerDocument.child) {
                    ownerDocument.child.return = ownerDocument;
                    ownerDocument = ownerDocument.child;
                    continue;
                  }
                  if (ownerDocument === workInProgress2) break a;
                  for (; null === ownerDocument.sibling; ) {
                    if (null === ownerDocument.return || ownerDocument.return === workInProgress2)
                      break a;
                    ownerDocument = ownerDocument.return;
                  }
                  ownerDocument.sibling.return = ownerDocument.return;
                  ownerDocument = ownerDocument.sibling;
                }
                workInProgress2.stateNode = nextResource;
                a: switch (setInitialProperties(nextResource, type, newProps), type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    newProps = !!newProps.autoFocus;
                    break a;
                  case "img":
                    newProps = true;
                    break a;
                  default:
                    newProps = false;
                }
                newProps && markUpdate(workInProgress2);
              }
            }
            bubbleProperties(workInProgress2);
            preloadInstanceAndSuspendIfNeeded(
              workInProgress2,
              workInProgress2.type,
              null === current ? null : current.memoizedProps,
              workInProgress2.pendingProps,
              renderLanes2
            );
            return null;
          case 6:
            if (current && null != workInProgress2.stateNode)
              current.memoizedProps !== newProps && markUpdate(workInProgress2);
            else {
              if ("string" !== typeof newProps && null === workInProgress2.stateNode)
                throw Error(formatProdErrorMessage(166));
              current = rootInstanceStackCursor.current;
              if (popHydrationState(workInProgress2)) {
                current = workInProgress2.stateNode;
                renderLanes2 = workInProgress2.memoizedProps;
                newProps = null;
                type = hydrationParentFiber;
                if (null !== type)
                  switch (type.tag) {
                    case 27:
                    case 5:
                      newProps = type.memoizedProps;
                  }
                current[internalInstanceKey] = workInProgress2;
                current = current.nodeValue === renderLanes2 || null !== newProps && true === newProps.suppressHydrationWarning || checkForUnmatchedText(current.nodeValue, renderLanes2) ? true : false;
                current || throwOnHydrationMismatch(workInProgress2, true);
              } else
                current = getOwnerDocumentFromRootContainer(current).createTextNode(
                  newProps
                ), current[internalInstanceKey] = workInProgress2, workInProgress2.stateNode = current;
            }
            bubbleProperties(workInProgress2);
            return null;
          case 31:
            renderLanes2 = workInProgress2.memoizedState;
            if (null === current || null !== current.memoizedState) {
              newProps = popHydrationState(workInProgress2);
              if (null !== renderLanes2) {
                if (null === current) {
                  if (!newProps) throw Error(formatProdErrorMessage(318));
                  current = workInProgress2.memoizedState;
                  current = null !== current ? current.dehydrated : null;
                  if (!current) throw Error(formatProdErrorMessage(557));
                  current[internalInstanceKey] = workInProgress2;
                } else
                  resetHydrationState(), 0 === (workInProgress2.flags & 128) && (workInProgress2.memoizedState = null), workInProgress2.flags |= 4;
                bubbleProperties(workInProgress2);
                current = false;
              } else
                renderLanes2 = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = renderLanes2), current = true;
              if (!current) {
                if (workInProgress2.flags & 256)
                  return popSuspenseHandler(workInProgress2), workInProgress2;
                popSuspenseHandler(workInProgress2);
                return null;
              }
              if (0 !== (workInProgress2.flags & 128))
                throw Error(formatProdErrorMessage(558));
            }
            bubbleProperties(workInProgress2);
            return null;
          case 13:
            newProps = workInProgress2.memoizedState;
            if (null === current || null !== current.memoizedState && null !== current.memoizedState.dehydrated) {
              type = popHydrationState(workInProgress2);
              if (null !== newProps && null !== newProps.dehydrated) {
                if (null === current) {
                  if (!type) throw Error(formatProdErrorMessage(318));
                  type = workInProgress2.memoizedState;
                  type = null !== type ? type.dehydrated : null;
                  if (!type) throw Error(formatProdErrorMessage(317));
                  type[internalInstanceKey] = workInProgress2;
                } else
                  resetHydrationState(), 0 === (workInProgress2.flags & 128) && (workInProgress2.memoizedState = null), workInProgress2.flags |= 4;
                bubbleProperties(workInProgress2);
                type = false;
              } else
                type = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = type), type = true;
              if (!type) {
                if (workInProgress2.flags & 256)
                  return popSuspenseHandler(workInProgress2), workInProgress2;
                popSuspenseHandler(workInProgress2);
                return null;
              }
            }
            popSuspenseHandler(workInProgress2);
            if (0 !== (workInProgress2.flags & 128))
              return workInProgress2.lanes = renderLanes2, workInProgress2;
            renderLanes2 = null !== newProps;
            current = null !== current && null !== current.memoizedState;
            renderLanes2 && (newProps = workInProgress2.child, type = null, null !== newProps.alternate && null !== newProps.alternate.memoizedState && null !== newProps.alternate.memoizedState.cachePool && (type = newProps.alternate.memoizedState.cachePool.pool), nextResource = null, null !== newProps.memoizedState && null !== newProps.memoizedState.cachePool && (nextResource = newProps.memoizedState.cachePool.pool), nextResource !== type && (newProps.flags |= 2048));
            renderLanes2 !== current && renderLanes2 && (workInProgress2.child.flags |= 8192);
            scheduleRetryEffect(workInProgress2, workInProgress2.updateQueue);
            bubbleProperties(workInProgress2);
            return null;
          case 4:
            return popHostContainer(), null === current && listenToAllSupportedEvents(workInProgress2.stateNode.containerInfo), bubbleProperties(workInProgress2), null;
          case 10:
            return popProvider(workInProgress2.type), bubbleProperties(workInProgress2), null;
          case 19:
            pop(suspenseStackCursor);
            newProps = workInProgress2.memoizedState;
            if (null === newProps) return bubbleProperties(workInProgress2), null;
            type = 0 !== (workInProgress2.flags & 128);
            nextResource = newProps.rendering;
            if (null === nextResource)
              if (type) cutOffTailIfNeeded(newProps, false);
              else {
                if (0 !== workInProgressRootExitStatus || null !== current && 0 !== (current.flags & 128))
                  for (current = workInProgress2.child; null !== current; ) {
                    nextResource = findFirstSuspended(current);
                    if (null !== nextResource) {
                      workInProgress2.flags |= 128;
                      cutOffTailIfNeeded(newProps, false);
                      current = nextResource.updateQueue;
                      workInProgress2.updateQueue = current;
                      scheduleRetryEffect(workInProgress2, current);
                      workInProgress2.subtreeFlags = 0;
                      current = renderLanes2;
                      for (renderLanes2 = workInProgress2.child; null !== renderLanes2; )
                        resetWorkInProgress(renderLanes2, current), renderLanes2 = renderLanes2.sibling;
                      push(
                        suspenseStackCursor,
                        suspenseStackCursor.current & 1 | 2
                      );
                      isHydrating && pushTreeFork(workInProgress2, newProps.treeForkCount);
                      return workInProgress2.child;
                    }
                    current = current.sibling;
                  }
                null !== newProps.tail && now() > workInProgressRootRenderTargetTime && (workInProgress2.flags |= 128, type = true, cutOffTailIfNeeded(newProps, false), workInProgress2.lanes = 4194304);
              }
            else {
              if (!type)
                if (current = findFirstSuspended(nextResource), null !== current) {
                  if (workInProgress2.flags |= 128, type = true, current = current.updateQueue, workInProgress2.updateQueue = current, scheduleRetryEffect(workInProgress2, current), cutOffTailIfNeeded(newProps, true), null === newProps.tail && "hidden" === newProps.tailMode && !nextResource.alternate && !isHydrating)
                    return bubbleProperties(workInProgress2), null;
                } else
                  2 * now() - newProps.renderingStartTime > workInProgressRootRenderTargetTime && 536870912 !== renderLanes2 && (workInProgress2.flags |= 128, type = true, cutOffTailIfNeeded(newProps, false), workInProgress2.lanes = 4194304);
              newProps.isBackwards ? (nextResource.sibling = workInProgress2.child, workInProgress2.child = nextResource) : (current = newProps.last, null !== current ? current.sibling = nextResource : workInProgress2.child = nextResource, newProps.last = nextResource);
            }
            if (null !== newProps.tail)
              return current = newProps.tail, newProps.rendering = current, newProps.tail = current.sibling, newProps.renderingStartTime = now(), current.sibling = null, renderLanes2 = suspenseStackCursor.current, push(
                suspenseStackCursor,
                type ? renderLanes2 & 1 | 2 : renderLanes2 & 1
              ), isHydrating && pushTreeFork(workInProgress2, newProps.treeForkCount), current;
            bubbleProperties(workInProgress2);
            return null;
          case 22:
          case 23:
            return popSuspenseHandler(workInProgress2), popHiddenContext(), newProps = null !== workInProgress2.memoizedState, null !== current ? null !== current.memoizedState !== newProps && (workInProgress2.flags |= 8192) : newProps && (workInProgress2.flags |= 8192), newProps ? 0 !== (renderLanes2 & 536870912) && 0 === (workInProgress2.flags & 128) && (bubbleProperties(workInProgress2), workInProgress2.subtreeFlags & 6 && (workInProgress2.flags |= 8192)) : bubbleProperties(workInProgress2), renderLanes2 = workInProgress2.updateQueue, null !== renderLanes2 && scheduleRetryEffect(workInProgress2, renderLanes2.retryQueue), renderLanes2 = null, null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (renderLanes2 = current.memoizedState.cachePool.pool), newProps = null, null !== workInProgress2.memoizedState && null !== workInProgress2.memoizedState.cachePool && (newProps = workInProgress2.memoizedState.cachePool.pool), newProps !== renderLanes2 && (workInProgress2.flags |= 2048), null !== current && pop(resumedCache), null;
          case 24:
            return renderLanes2 = null, null !== current && (renderLanes2 = current.memoizedState.cache), workInProgress2.memoizedState.cache !== renderLanes2 && (workInProgress2.flags |= 2048), popProvider(CacheContext), bubbleProperties(workInProgress2), null;
          case 25:
            return null;
          case 30:
            return null;
        }
        throw Error(formatProdErrorMessage(156, workInProgress2.tag));
      }
      function unwindWork(current, workInProgress2) {
        popTreeContext(workInProgress2);
        switch (workInProgress2.tag) {
          case 1:
            return current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
          case 3:
            return popProvider(CacheContext), popHostContainer(), current = workInProgress2.flags, 0 !== (current & 65536) && 0 === (current & 128) ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
          case 26:
          case 27:
          case 5:
            return popHostContext(workInProgress2), null;
          case 31:
            if (null !== workInProgress2.memoizedState) {
              popSuspenseHandler(workInProgress2);
              if (null === workInProgress2.alternate)
                throw Error(formatProdErrorMessage(340));
              resetHydrationState();
            }
            current = workInProgress2.flags;
            return current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
          case 13:
            popSuspenseHandler(workInProgress2);
            current = workInProgress2.memoizedState;
            if (null !== current && null !== current.dehydrated) {
              if (null === workInProgress2.alternate)
                throw Error(formatProdErrorMessage(340));
              resetHydrationState();
            }
            current = workInProgress2.flags;
            return current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
          case 19:
            return pop(suspenseStackCursor), null;
          case 4:
            return popHostContainer(), null;
          case 10:
            return popProvider(workInProgress2.type), null;
          case 22:
          case 23:
            return popSuspenseHandler(workInProgress2), popHiddenContext(), null !== current && pop(resumedCache), current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
          case 24:
            return popProvider(CacheContext), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function unwindInterruptedWork(current, interruptedWork) {
        popTreeContext(interruptedWork);
        switch (interruptedWork.tag) {
          case 3:
            popProvider(CacheContext);
            popHostContainer();
            break;
          case 26:
          case 27:
          case 5:
            popHostContext(interruptedWork);
            break;
          case 4:
            popHostContainer();
            break;
          case 31:
            null !== interruptedWork.memoizedState && popSuspenseHandler(interruptedWork);
            break;
          case 13:
            popSuspenseHandler(interruptedWork);
            break;
          case 19:
            pop(suspenseStackCursor);
            break;
          case 10:
            popProvider(interruptedWork.type);
            break;
          case 22:
          case 23:
            popSuspenseHandler(interruptedWork);
            popHiddenContext();
            null !== current && pop(resumedCache);
            break;
          case 24:
            popProvider(CacheContext);
        }
      }
      function commitHookEffectListMount(flags, finishedWork) {
        try {
          var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
          if (null !== lastEffect) {
            var firstEffect = lastEffect.next;
            updateQueue = firstEffect;
            do {
              if ((updateQueue.tag & flags) === flags) {
                lastEffect = void 0;
                var create = updateQueue.create, inst = updateQueue.inst;
                lastEffect = create();
                inst.destroy = lastEffect;
              }
              updateQueue = updateQueue.next;
            } while (updateQueue !== firstEffect);
          }
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor$jscomp$0) {
        try {
          var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
          if (null !== lastEffect) {
            var firstEffect = lastEffect.next;
            updateQueue = firstEffect;
            do {
              if ((updateQueue.tag & flags) === flags) {
                var inst = updateQueue.inst, destroy = inst.destroy;
                if (void 0 !== destroy) {
                  inst.destroy = void 0;
                  lastEffect = finishedWork;
                  var nearestMountedAncestor = nearestMountedAncestor$jscomp$0, destroy_ = destroy;
                  try {
                    destroy_();
                  } catch (error) {
                    captureCommitPhaseError(
                      lastEffect,
                      nearestMountedAncestor,
                      error
                    );
                  }
                }
              }
              updateQueue = updateQueue.next;
            } while (updateQueue !== firstEffect);
          }
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      function commitClassCallbacks(finishedWork) {
        var updateQueue = finishedWork.updateQueue;
        if (null !== updateQueue) {
          var instance = finishedWork.stateNode;
          try {
            commitCallbacks(updateQueue, instance);
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
        }
      }
      function safelyCallComponentWillUnmount(current, nearestMountedAncestor, instance) {
        instance.props = resolveClassComponentProps(
          current.type,
          current.memoizedProps
        );
        instance.state = current.memoizedState;
        try {
          instance.componentWillUnmount();
        } catch (error) {
          captureCommitPhaseError(current, nearestMountedAncestor, error);
        }
      }
      function safelyAttachRef(current, nearestMountedAncestor) {
        try {
          var ref = current.ref;
          if (null !== ref) {
            switch (current.tag) {
              case 26:
              case 27:
              case 5:
                var instanceToUse = current.stateNode;
                break;
              case 30:
                instanceToUse = current.stateNode;
                break;
              default:
                instanceToUse = current.stateNode;
            }
            "function" === typeof ref ? current.refCleanup = ref(instanceToUse) : ref.current = instanceToUse;
          }
        } catch (error) {
          captureCommitPhaseError(current, nearestMountedAncestor, error);
        }
      }
      function safelyDetachRef(current, nearestMountedAncestor) {
        var ref = current.ref, refCleanup = current.refCleanup;
        if (null !== ref)
          if ("function" === typeof refCleanup)
            try {
              refCleanup();
            } catch (error) {
              captureCommitPhaseError(current, nearestMountedAncestor, error);
            } finally {
              current.refCleanup = null, current = current.alternate, null != current && (current.refCleanup = null);
            }
          else if ("function" === typeof ref)
            try {
              ref(null);
            } catch (error$140) {
              captureCommitPhaseError(current, nearestMountedAncestor, error$140);
            }
          else ref.current = null;
      }
      function commitHostMount(finishedWork) {
        var type = finishedWork.type, props = finishedWork.memoizedProps, instance = finishedWork.stateNode;
        try {
          a: switch (type) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              props.autoFocus && instance.focus();
              break a;
            case "img":
              props.src ? instance.src = props.src : props.srcSet && (instance.srcset = props.srcSet);
          }
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      function commitHostUpdate(finishedWork, newProps, oldProps) {
        try {
          var domElement = finishedWork.stateNode;
          updateProperties(domElement, finishedWork.type, oldProps, newProps);
          domElement[internalPropsKey] = newProps;
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      function isHostParent(fiber) {
        return 5 === fiber.tag || 3 === fiber.tag || 26 === fiber.tag || 27 === fiber.tag && isSingletonScope(fiber.type) || 4 === fiber.tag;
      }
      function getHostSibling(fiber) {
        a: for (; ; ) {
          for (; null === fiber.sibling; ) {
            if (null === fiber.return || isHostParent(fiber.return)) return null;
            fiber = fiber.return;
          }
          fiber.sibling.return = fiber.return;
          for (fiber = fiber.sibling; 5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag; ) {
            if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
            if (fiber.flags & 2) continue a;
            if (null === fiber.child || 4 === fiber.tag) continue a;
            else fiber.child.return = fiber, fiber = fiber.child;
          }
          if (!(fiber.flags & 2)) return fiber.stateNode;
        }
      }
      function insertOrAppendPlacementNodeIntoContainer(node2, before, parent) {
        var tag = node2.tag;
        if (5 === tag || 6 === tag)
          node2 = node2.stateNode, before ? (9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent).insertBefore(node2, before) : (before = 9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent, before.appendChild(node2), parent = parent._reactRootContainer, null !== parent && void 0 !== parent || null !== before.onclick || (before.onclick = noop$1));
        else if (4 !== tag && (27 === tag && isSingletonScope(node2.type) && (parent = node2.stateNode, before = null), node2 = node2.child, null !== node2))
          for (insertOrAppendPlacementNodeIntoContainer(node2, before, parent), node2 = node2.sibling; null !== node2; )
            insertOrAppendPlacementNodeIntoContainer(node2, before, parent), node2 = node2.sibling;
      }
      function insertOrAppendPlacementNode(node2, before, parent) {
        var tag = node2.tag;
        if (5 === tag || 6 === tag)
          node2 = node2.stateNode, before ? parent.insertBefore(node2, before) : parent.appendChild(node2);
        else if (4 !== tag && (27 === tag && isSingletonScope(node2.type) && (parent = node2.stateNode), node2 = node2.child, null !== node2))
          for (insertOrAppendPlacementNode(node2, before, parent), node2 = node2.sibling; null !== node2; )
            insertOrAppendPlacementNode(node2, before, parent), node2 = node2.sibling;
      }
      function commitHostSingletonAcquisition(finishedWork) {
        var singleton = finishedWork.stateNode, props = finishedWork.memoizedProps;
        try {
          for (var type = finishedWork.type, attributes = singleton.attributes; attributes.length; )
            singleton.removeAttributeNode(attributes[0]);
          setInitialProperties(singleton, type, props);
          singleton[internalInstanceKey] = finishedWork;
          singleton[internalPropsKey] = props;
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      var offscreenSubtreeIsHidden = false;
      var offscreenSubtreeWasHidden = false;
      var needsFormReset = false;
      var PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set;
      var nextEffect = null;
      function commitBeforeMutationEffects(root2, firstChild) {
        root2 = root2.containerInfo;
        eventsEnabled = _enabled;
        root2 = getActiveElementDeep(root2);
        if (hasSelectionCapabilities(root2)) {
          if ("selectionStart" in root2)
            var JSCompiler_temp = {
              start: root2.selectionStart,
              end: root2.selectionEnd
            };
          else
            a: {
              JSCompiler_temp = (JSCompiler_temp = root2.ownerDocument) && JSCompiler_temp.defaultView || window;
              var selection = JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
              if (selection && 0 !== selection.rangeCount) {
                JSCompiler_temp = selection.anchorNode;
                var anchorOffset = selection.anchorOffset, focusNode = selection.focusNode;
                selection = selection.focusOffset;
                try {
                  JSCompiler_temp.nodeType, focusNode.nodeType;
                } catch (e$20) {
                  JSCompiler_temp = null;
                  break a;
                }
                var length2 = 0, start = -1, end = -1, indexWithinAnchor = 0, indexWithinFocus = 0, node2 = root2, parentNode = null;
                b: for (; ; ) {
                  for (var next2; ; ) {
                    node2 !== JSCompiler_temp || 0 !== anchorOffset && 3 !== node2.nodeType || (start = length2 + anchorOffset);
                    node2 !== focusNode || 0 !== selection && 3 !== node2.nodeType || (end = length2 + selection);
                    3 === node2.nodeType && (length2 += node2.nodeValue.length);
                    if (null === (next2 = node2.firstChild)) break;
                    parentNode = node2;
                    node2 = next2;
                  }
                  for (; ; ) {
                    if (node2 === root2) break b;
                    parentNode === JSCompiler_temp && ++indexWithinAnchor === anchorOffset && (start = length2);
                    parentNode === focusNode && ++indexWithinFocus === selection && (end = length2);
                    if (null !== (next2 = node2.nextSibling)) break;
                    node2 = parentNode;
                    parentNode = node2.parentNode;
                  }
                  node2 = next2;
                }
                JSCompiler_temp = -1 === start || -1 === end ? null : { start, end };
              } else JSCompiler_temp = null;
            }
          JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
        } else JSCompiler_temp = null;
        selectionInformation = { focusedElem: root2, selectionRange: JSCompiler_temp };
        _enabled = false;
        for (nextEffect = firstChild; null !== nextEffect; )
          if (firstChild = nextEffect, root2 = firstChild.child, 0 !== (firstChild.subtreeFlags & 1028) && null !== root2)
            root2.return = firstChild, nextEffect = root2;
          else
            for (; null !== nextEffect; ) {
              firstChild = nextEffect;
              focusNode = firstChild.alternate;
              root2 = firstChild.flags;
              switch (firstChild.tag) {
                case 0:
                  if (0 !== (root2 & 4) && (root2 = firstChild.updateQueue, root2 = null !== root2 ? root2.events : null, null !== root2))
                    for (JSCompiler_temp = 0; JSCompiler_temp < root2.length; JSCompiler_temp++)
                      anchorOffset = root2[JSCompiler_temp], anchorOffset.ref.impl = anchorOffset.nextImpl;
                  break;
                case 11:
                case 15:
                  break;
                case 1:
                  if (0 !== (root2 & 1024) && null !== focusNode) {
                    root2 = void 0;
                    JSCompiler_temp = firstChild;
                    anchorOffset = focusNode.memoizedProps;
                    focusNode = focusNode.memoizedState;
                    selection = JSCompiler_temp.stateNode;
                    try {
                      var resolvedPrevProps = resolveClassComponentProps(
                        JSCompiler_temp.type,
                        anchorOffset
                      );
                      root2 = selection.getSnapshotBeforeUpdate(
                        resolvedPrevProps,
                        focusNode
                      );
                      selection.__reactInternalSnapshotBeforeUpdate = root2;
                    } catch (error) {
                      captureCommitPhaseError(
                        JSCompiler_temp,
                        JSCompiler_temp.return,
                        error
                      );
                    }
                  }
                  break;
                case 3:
                  if (0 !== (root2 & 1024)) {
                    if (root2 = firstChild.stateNode.containerInfo, JSCompiler_temp = root2.nodeType, 9 === JSCompiler_temp)
                      clearContainerSparingly(root2);
                    else if (1 === JSCompiler_temp)
                      switch (root2.nodeName) {
                        case "HEAD":
                        case "HTML":
                        case "BODY":
                          clearContainerSparingly(root2);
                          break;
                        default:
                          root2.textContent = "";
                      }
                  }
                  break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  if (0 !== (root2 & 1024)) throw Error(formatProdErrorMessage(163));
              }
              root2 = firstChild.sibling;
              if (null !== root2) {
                root2.return = firstChild.return;
                nextEffect = root2;
                break;
              }
              nextEffect = firstChild.return;
            }
      }
      function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
        var flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            flags & 4 && commitHookEffectListMount(5, finishedWork);
            break;
          case 1:
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            if (flags & 4)
              if (finishedRoot = finishedWork.stateNode, null === current)
                try {
                  finishedRoot.componentDidMount();
                } catch (error) {
                  captureCommitPhaseError(finishedWork, finishedWork.return, error);
                }
              else {
                var prevProps = resolveClassComponentProps(
                  finishedWork.type,
                  current.memoizedProps
                );
                current = current.memoizedState;
                try {
                  finishedRoot.componentDidUpdate(
                    prevProps,
                    current,
                    finishedRoot.__reactInternalSnapshotBeforeUpdate
                  );
                } catch (error$139) {
                  captureCommitPhaseError(
                    finishedWork,
                    finishedWork.return,
                    error$139
                  );
                }
              }
            flags & 64 && commitClassCallbacks(finishedWork);
            flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 3:
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            if (flags & 64 && (finishedRoot = finishedWork.updateQueue, null !== finishedRoot)) {
              current = null;
              if (null !== finishedWork.child)
                switch (finishedWork.child.tag) {
                  case 27:
                  case 5:
                    current = finishedWork.child.stateNode;
                    break;
                  case 1:
                    current = finishedWork.child.stateNode;
                }
              try {
                commitCallbacks(finishedRoot, current);
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            }
            break;
          case 27:
            null === current && flags & 4 && commitHostSingletonAcquisition(finishedWork);
          case 26:
          case 5:
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            null === current && flags & 4 && commitHostMount(finishedWork);
            flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 12:
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            break;
          case 31:
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
            break;
          case 13:
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
            flags & 64 && (finishedRoot = finishedWork.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot && (finishedWork = retryDehydratedSuspenseBoundary.bind(
              null,
              finishedWork
            ), registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
            break;
          case 22:
            flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
            if (!flags) {
              current = null !== current && null !== current.memoizedState || offscreenSubtreeWasHidden;
              prevProps = offscreenSubtreeIsHidden;
              var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
              offscreenSubtreeIsHidden = flags;
              (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden ? recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                0 !== (finishedWork.subtreeFlags & 8772)
              ) : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
              offscreenSubtreeIsHidden = prevProps;
              offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
            }
            break;
          case 30:
            break;
          default:
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
        }
      }
      function detachFiberAfterEffects(fiber) {
        var alternate = fiber.alternate;
        null !== alternate && (fiber.alternate = null, detachFiberAfterEffects(alternate));
        fiber.child = null;
        fiber.deletions = null;
        fiber.sibling = null;
        5 === fiber.tag && (alternate = fiber.stateNode, null !== alternate && detachDeletedInstance(alternate));
        fiber.stateNode = null;
        fiber.return = null;
        fiber.dependencies = null;
        fiber.memoizedProps = null;
        fiber.memoizedState = null;
        fiber.pendingProps = null;
        fiber.stateNode = null;
        fiber.updateQueue = null;
      }
      var hostParent = null;
      var hostParentIsContainer = false;
      function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
        for (parent = parent.child; null !== parent; )
          commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent), parent = parent.sibling;
      }
      function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
        if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
          try {
            injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
          } catch (err) {
          }
        switch (deletedFiber.tag) {
          case 26:
            offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
            deletedFiber.memoizedState ? deletedFiber.memoizedState.count-- : deletedFiber.stateNode && (deletedFiber = deletedFiber.stateNode, deletedFiber.parentNode.removeChild(deletedFiber));
            break;
          case 27:
            offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
            var prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer;
            isSingletonScope(deletedFiber.type) && (hostParent = deletedFiber.stateNode, hostParentIsContainer = false);
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
            releaseSingletonInstance(deletedFiber.stateNode);
            hostParent = prevHostParent;
            hostParentIsContainer = prevHostParentIsContainer;
            break;
          case 5:
            offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
          case 6:
            prevHostParent = hostParent;
            prevHostParentIsContainer = hostParentIsContainer;
            hostParent = null;
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
            hostParent = prevHostParent;
            hostParentIsContainer = prevHostParentIsContainer;
            if (null !== hostParent)
              if (hostParentIsContainer)
                try {
                  (9 === hostParent.nodeType ? hostParent.body : "HTML" === hostParent.nodeName ? hostParent.ownerDocument.body : hostParent).removeChild(deletedFiber.stateNode);
                } catch (error) {
                  captureCommitPhaseError(
                    deletedFiber,
                    nearestMountedAncestor,
                    error
                  );
                }
              else
                try {
                  hostParent.removeChild(deletedFiber.stateNode);
                } catch (error) {
                  captureCommitPhaseError(
                    deletedFiber,
                    nearestMountedAncestor,
                    error
                  );
                }
            break;
          case 18:
            null !== hostParent && (hostParentIsContainer ? (finishedRoot = hostParent, clearHydrationBoundary(
              9 === finishedRoot.nodeType ? finishedRoot.body : "HTML" === finishedRoot.nodeName ? finishedRoot.ownerDocument.body : finishedRoot,
              deletedFiber.stateNode
            ), retryIfBlockedOn(finishedRoot)) : clearHydrationBoundary(hostParent, deletedFiber.stateNode));
            break;
          case 4:
            prevHostParent = hostParent;
            prevHostParentIsContainer = hostParentIsContainer;
            hostParent = deletedFiber.stateNode.containerInfo;
            hostParentIsContainer = true;
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
            hostParent = prevHostParent;
            hostParentIsContainer = prevHostParentIsContainer;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
            offscreenSubtreeWasHidden || commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
            break;
          case 1:
            offscreenSubtreeWasHidden || (safelyDetachRef(deletedFiber, nearestMountedAncestor), prevHostParent = deletedFiber.stateNode, "function" === typeof prevHostParent.componentWillUnmount && safelyCallComponentWillUnmount(
              deletedFiber,
              nearestMountedAncestor,
              prevHostParent
            ));
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
            break;
          case 21:
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
            break;
          case 22:
            offscreenSubtreeWasHidden = (prevHostParent = offscreenSubtreeWasHidden) || null !== deletedFiber.memoizedState;
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
            offscreenSubtreeWasHidden = prevHostParent;
            break;
          default:
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
        }
      }
      function commitActivityHydrationCallbacks(finishedRoot, finishedWork) {
        if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot))) {
          finishedRoot = finishedRoot.dehydrated;
          try {
            retryIfBlockedOn(finishedRoot);
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
        }
      }
      function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
        if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot))))
          try {
            retryIfBlockedOn(finishedRoot);
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
      }
      function getRetryCache(finishedWork) {
        switch (finishedWork.tag) {
          case 31:
          case 13:
          case 19:
            var retryCache = finishedWork.stateNode;
            null === retryCache && (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
            return retryCache;
          case 22:
            return finishedWork = finishedWork.stateNode, retryCache = finishedWork._retryCache, null === retryCache && (retryCache = finishedWork._retryCache = new PossiblyWeakSet()), retryCache;
          default:
            throw Error(formatProdErrorMessage(435, finishedWork.tag));
        }
      }
      function attachSuspenseRetryListeners(finishedWork, wakeables) {
        var retryCache = getRetryCache(finishedWork);
        wakeables.forEach(function(wakeable) {
          if (!retryCache.has(wakeable)) {
            retryCache.add(wakeable);
            var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
            wakeable.then(retry, retry);
          }
        });
      }
      function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
        var deletions = parentFiber.deletions;
        if (null !== deletions)
          for (var i = 0; i < deletions.length; i++) {
            var childToDelete = deletions[i], root2 = root$jscomp$0, returnFiber = parentFiber, parent = returnFiber;
            a: for (; null !== parent; ) {
              switch (parent.tag) {
                case 27:
                  if (isSingletonScope(parent.type)) {
                    hostParent = parent.stateNode;
                    hostParentIsContainer = false;
                    break a;
                  }
                  break;
                case 5:
                  hostParent = parent.stateNode;
                  hostParentIsContainer = false;
                  break a;
                case 3:
                case 4:
                  hostParent = parent.stateNode.containerInfo;
                  hostParentIsContainer = true;
                  break a;
              }
              parent = parent.return;
            }
            if (null === hostParent) throw Error(formatProdErrorMessage(160));
            commitDeletionEffectsOnFiber(root2, returnFiber, childToDelete);
            hostParent = null;
            hostParentIsContainer = false;
            root2 = childToDelete.alternate;
            null !== root2 && (root2.return = null);
            childToDelete.return = null;
          }
        if (parentFiber.subtreeFlags & 13886)
          for (parentFiber = parentFiber.child; null !== parentFiber; )
            commitMutationEffectsOnFiber(parentFiber, root$jscomp$0), parentFiber = parentFiber.sibling;
      }
      var currentHoistableRoot = null;
      function commitMutationEffectsOnFiber(finishedWork, root2) {
        var current = finishedWork.alternate, flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            recursivelyTraverseMutationEffects(root2, finishedWork);
            commitReconciliationEffects(finishedWork);
            flags & 4 && (commitHookEffectListUnmount(3, finishedWork, finishedWork.return), commitHookEffectListMount(3, finishedWork), commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
            break;
          case 1:
            recursivelyTraverseMutationEffects(root2, finishedWork);
            commitReconciliationEffects(finishedWork);
            flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
            flags & 64 && offscreenSubtreeIsHidden && (finishedWork = finishedWork.updateQueue, null !== finishedWork && (flags = finishedWork.callbacks, null !== flags && (current = finishedWork.shared.hiddenCallbacks, finishedWork.shared.hiddenCallbacks = null === current ? flags : current.concat(flags))));
            break;
          case 26:
            var hoistableRoot = currentHoistableRoot;
            recursivelyTraverseMutationEffects(root2, finishedWork);
            commitReconciliationEffects(finishedWork);
            flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
            if (flags & 4) {
              var currentResource = null !== current ? current.memoizedState : null;
              flags = finishedWork.memoizedState;
              if (null === current)
                if (null === flags)
                  if (null === finishedWork.stateNode) {
                    a: {
                      flags = finishedWork.type;
                      current = finishedWork.memoizedProps;
                      hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
                      b: switch (flags) {
                        case "title":
                          currentResource = hoistableRoot.getElementsByTagName("title")[0];
                          if (!currentResource || currentResource[internalHoistableMarker] || currentResource[internalInstanceKey] || "http://www.w3.org/2000/svg" === currentResource.namespaceURI || currentResource.hasAttribute("itemprop"))
                            currentResource = hoistableRoot.createElement(flags), hoistableRoot.head.insertBefore(
                              currentResource,
                              hoistableRoot.querySelector("head > title")
                            );
                          setInitialProperties(currentResource, flags, current);
                          currentResource[internalInstanceKey] = finishedWork;
                          markNodeAsHoistable(currentResource);
                          flags = currentResource;
                          break a;
                        case "link":
                          var maybeNodes = getHydratableHoistableCache(
                            "link",
                            "href",
                            hoistableRoot
                          ).get(flags + (current.href || ""));
                          if (maybeNodes) {
                            for (var i = 0; i < maybeNodes.length; i++)
                              if (currentResource = maybeNodes[i], currentResource.getAttribute("href") === (null == current.href || "" === current.href ? null : current.href) && currentResource.getAttribute("rel") === (null == current.rel ? null : current.rel) && currentResource.getAttribute("title") === (null == current.title ? null : current.title) && currentResource.getAttribute("crossorigin") === (null == current.crossOrigin ? null : current.crossOrigin)) {
                                maybeNodes.splice(i, 1);
                                break b;
                              }
                          }
                          currentResource = hoistableRoot.createElement(flags);
                          setInitialProperties(currentResource, flags, current);
                          hoistableRoot.head.appendChild(currentResource);
                          break;
                        case "meta":
                          if (maybeNodes = getHydratableHoistableCache(
                            "meta",
                            "content",
                            hoistableRoot
                          ).get(flags + (current.content || ""))) {
                            for (i = 0; i < maybeNodes.length; i++)
                              if (currentResource = maybeNodes[i], currentResource.getAttribute("content") === (null == current.content ? null : "" + current.content) && currentResource.getAttribute("name") === (null == current.name ? null : current.name) && currentResource.getAttribute("property") === (null == current.property ? null : current.property) && currentResource.getAttribute("http-equiv") === (null == current.httpEquiv ? null : current.httpEquiv) && currentResource.getAttribute("charset") === (null == current.charSet ? null : current.charSet)) {
                                maybeNodes.splice(i, 1);
                                break b;
                              }
                          }
                          currentResource = hoistableRoot.createElement(flags);
                          setInitialProperties(currentResource, flags, current);
                          hoistableRoot.head.appendChild(currentResource);
                          break;
                        default:
                          throw Error(formatProdErrorMessage(468, flags));
                      }
                      currentResource[internalInstanceKey] = finishedWork;
                      markNodeAsHoistable(currentResource);
                      flags = currentResource;
                    }
                    finishedWork.stateNode = flags;
                  } else
                    mountHoistable(
                      hoistableRoot,
                      finishedWork.type,
                      finishedWork.stateNode
                    );
                else
                  finishedWork.stateNode = acquireResource(
                    hoistableRoot,
                    flags,
                    finishedWork.memoizedProps
                  );
              else
                currentResource !== flags ? (null === currentResource ? null !== current.stateNode && (current = current.stateNode, current.parentNode.removeChild(current)) : currentResource.count--, null === flags ? mountHoistable(
                  hoistableRoot,
                  finishedWork.type,
                  finishedWork.stateNode
                ) : acquireResource(
                  hoistableRoot,
                  flags,
                  finishedWork.memoizedProps
                )) : null === flags && null !== finishedWork.stateNode && commitHostUpdate(
                  finishedWork,
                  finishedWork.memoizedProps,
                  current.memoizedProps
                );
            }
            break;
          case 27:
            recursivelyTraverseMutationEffects(root2, finishedWork);
            commitReconciliationEffects(finishedWork);
            flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
            null !== current && flags & 4 && commitHostUpdate(
              finishedWork,
              finishedWork.memoizedProps,
              current.memoizedProps
            );
            break;
          case 5:
            recursivelyTraverseMutationEffects(root2, finishedWork);
            commitReconciliationEffects(finishedWork);
            flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
            if (finishedWork.flags & 32) {
              hoistableRoot = finishedWork.stateNode;
              try {
                setTextContent(hoistableRoot, "");
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            }
            flags & 4 && null != finishedWork.stateNode && (hoistableRoot = finishedWork.memoizedProps, commitHostUpdate(
              finishedWork,
              hoistableRoot,
              null !== current ? current.memoizedProps : hoistableRoot
            ));
            flags & 1024 && (needsFormReset = true);
            break;
          case 6:
            recursivelyTraverseMutationEffects(root2, finishedWork);
            commitReconciliationEffects(finishedWork);
            if (flags & 4) {
              if (null === finishedWork.stateNode)
                throw Error(formatProdErrorMessage(162));
              flags = finishedWork.memoizedProps;
              current = finishedWork.stateNode;
              try {
                current.nodeValue = flags;
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            }
            break;
          case 3:
            tagCaches = null;
            hoistableRoot = currentHoistableRoot;
            currentHoistableRoot = getHoistableRoot(root2.containerInfo);
            recursivelyTraverseMutationEffects(root2, finishedWork);
            currentHoistableRoot = hoistableRoot;
            commitReconciliationEffects(finishedWork);
            if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
              try {
                retryIfBlockedOn(root2.containerInfo);
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            needsFormReset && (needsFormReset = false, recursivelyResetForms(finishedWork));
            break;
          case 4:
            flags = currentHoistableRoot;
            currentHoistableRoot = getHoistableRoot(
              finishedWork.stateNode.containerInfo
            );
            recursivelyTraverseMutationEffects(root2, finishedWork);
            commitReconciliationEffects(finishedWork);
            currentHoistableRoot = flags;
            break;
          case 12:
            recursivelyTraverseMutationEffects(root2, finishedWork);
            commitReconciliationEffects(finishedWork);
            break;
          case 31:
            recursivelyTraverseMutationEffects(root2, finishedWork);
            commitReconciliationEffects(finishedWork);
            flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
            break;
          case 13:
            recursivelyTraverseMutationEffects(root2, finishedWork);
            commitReconciliationEffects(finishedWork);
            finishedWork.child.flags & 8192 && null !== finishedWork.memoizedState !== (null !== current && null !== current.memoizedState) && (globalMostRecentFallbackTime = now());
            flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
            break;
          case 22:
            hoistableRoot = null !== finishedWork.memoizedState;
            var wasHidden = null !== current && null !== current.memoizedState, prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden, prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
            offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
            offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
            recursivelyTraverseMutationEffects(root2, finishedWork);
            offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
            offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
            commitReconciliationEffects(finishedWork);
            if (flags & 8192)
              a: for (root2 = finishedWork.stateNode, root2._visibility = hoistableRoot ? root2._visibility & -2 : root2._visibility | 1, hoistableRoot && (null === current || wasHidden || offscreenSubtreeIsHidden || offscreenSubtreeWasHidden || recursivelyTraverseDisappearLayoutEffects(finishedWork)), current = null, root2 = finishedWork; ; ) {
                if (5 === root2.tag || 26 === root2.tag) {
                  if (null === current) {
                    wasHidden = current = root2;
                    try {
                      if (currentResource = wasHidden.stateNode, hoistableRoot)
                        maybeNodes = currentResource.style, "function" === typeof maybeNodes.setProperty ? maybeNodes.setProperty("display", "none", "important") : maybeNodes.display = "none";
                      else {
                        i = wasHidden.stateNode;
                        var styleProp = wasHidden.memoizedProps.style, display = void 0 !== styleProp && null !== styleProp && styleProp.hasOwnProperty("display") ? styleProp.display : null;
                        i.style.display = null == display || "boolean" === typeof display ? "" : ("" + display).trim();
                      }
                    } catch (error) {
                      captureCommitPhaseError(wasHidden, wasHidden.return, error);
                    }
                  }
                } else if (6 === root2.tag) {
                  if (null === current) {
                    wasHidden = root2;
                    try {
                      wasHidden.stateNode.nodeValue = hoistableRoot ? "" : wasHidden.memoizedProps;
                    } catch (error) {
                      captureCommitPhaseError(wasHidden, wasHidden.return, error);
                    }
                  }
                } else if (18 === root2.tag) {
                  if (null === current) {
                    wasHidden = root2;
                    try {
                      var instance = wasHidden.stateNode;
                      hoistableRoot ? hideOrUnhideDehydratedBoundary(instance, true) : hideOrUnhideDehydratedBoundary(wasHidden.stateNode, false);
                    } catch (error) {
                      captureCommitPhaseError(wasHidden, wasHidden.return, error);
                    }
                  }
                } else if ((22 !== root2.tag && 23 !== root2.tag || null === root2.memoizedState || root2 === finishedWork) && null !== root2.child) {
                  root2.child.return = root2;
                  root2 = root2.child;
                  continue;
                }
                if (root2 === finishedWork) break a;
                for (; null === root2.sibling; ) {
                  if (null === root2.return || root2.return === finishedWork) break a;
                  current === root2 && (current = null);
                  root2 = root2.return;
                }
                current === root2 && (current = null);
                root2.sibling.return = root2.return;
                root2 = root2.sibling;
              }
            flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (current = flags.retryQueue, null !== current && (flags.retryQueue = null, attachSuspenseRetryListeners(finishedWork, current))));
            break;
          case 19:
            recursivelyTraverseMutationEffects(root2, finishedWork);
            commitReconciliationEffects(finishedWork);
            flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
            break;
          case 30:
            break;
          case 21:
            break;
          default:
            recursivelyTraverseMutationEffects(root2, finishedWork), commitReconciliationEffects(finishedWork);
        }
      }
      function commitReconciliationEffects(finishedWork) {
        var flags = finishedWork.flags;
        if (flags & 2) {
          try {
            for (var hostParentFiber, parentFiber = finishedWork.return; null !== parentFiber; ) {
              if (isHostParent(parentFiber)) {
                hostParentFiber = parentFiber;
                break;
              }
              parentFiber = parentFiber.return;
            }
            if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
            switch (hostParentFiber.tag) {
              case 27:
                var parent = hostParentFiber.stateNode, before = getHostSibling(finishedWork);
                insertOrAppendPlacementNode(finishedWork, before, parent);
                break;
              case 5:
                var parent$141 = hostParentFiber.stateNode;
                hostParentFiber.flags & 32 && (setTextContent(parent$141, ""), hostParentFiber.flags &= -33);
                var before$142 = getHostSibling(finishedWork);
                insertOrAppendPlacementNode(finishedWork, before$142, parent$141);
                break;
              case 3:
              case 4:
                var parent$143 = hostParentFiber.stateNode.containerInfo, before$144 = getHostSibling(finishedWork);
                insertOrAppendPlacementNodeIntoContainer(
                  finishedWork,
                  before$144,
                  parent$143
                );
                break;
              default:
                throw Error(formatProdErrorMessage(161));
            }
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
          finishedWork.flags &= -3;
        }
        flags & 4096 && (finishedWork.flags &= -4097);
      }
      function recursivelyResetForms(parentFiber) {
        if (parentFiber.subtreeFlags & 1024)
          for (parentFiber = parentFiber.child; null !== parentFiber; ) {
            var fiber = parentFiber;
            recursivelyResetForms(fiber);
            5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
            parentFiber = parentFiber.sibling;
          }
      }
      function recursivelyTraverseLayoutEffects(root2, parentFiber) {
        if (parentFiber.subtreeFlags & 8772)
          for (parentFiber = parentFiber.child; null !== parentFiber; )
            commitLayoutEffectOnFiber(root2, parentFiber.alternate, parentFiber), parentFiber = parentFiber.sibling;
      }
      function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
        for (parentFiber = parentFiber.child; null !== parentFiber; ) {
          var finishedWork = parentFiber;
          switch (finishedWork.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
              recursivelyTraverseDisappearLayoutEffects(finishedWork);
              break;
            case 1:
              safelyDetachRef(finishedWork, finishedWork.return);
              var instance = finishedWork.stateNode;
              "function" === typeof instance.componentWillUnmount && safelyCallComponentWillUnmount(
                finishedWork,
                finishedWork.return,
                instance
              );
              recursivelyTraverseDisappearLayoutEffects(finishedWork);
              break;
            case 27:
              releaseSingletonInstance(finishedWork.stateNode);
            case 26:
            case 5:
              safelyDetachRef(finishedWork, finishedWork.return);
              recursivelyTraverseDisappearLayoutEffects(finishedWork);
              break;
            case 22:
              null === finishedWork.memoizedState && recursivelyTraverseDisappearLayoutEffects(finishedWork);
              break;
            case 30:
              recursivelyTraverseDisappearLayoutEffects(finishedWork);
              break;
            default:
              recursivelyTraverseDisappearLayoutEffects(finishedWork);
          }
          parentFiber = parentFiber.sibling;
        }
      }
      function recursivelyTraverseReappearLayoutEffects(finishedRoot$jscomp$0, parentFiber, includeWorkInProgressEffects) {
        includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
        for (parentFiber = parentFiber.child; null !== parentFiber; ) {
          var current = parentFiber.alternate, finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
          switch (finishedWork.tag) {
            case 0:
            case 11:
            case 15:
              recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                includeWorkInProgressEffects
              );
              commitHookEffectListMount(4, finishedWork);
              break;
            case 1:
              recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                includeWorkInProgressEffects
              );
              current = finishedWork;
              finishedRoot = current.stateNode;
              if ("function" === typeof finishedRoot.componentDidMount)
                try {
                  finishedRoot.componentDidMount();
                } catch (error) {
                  captureCommitPhaseError(current, current.return, error);
                }
              current = finishedWork;
              finishedRoot = current.updateQueue;
              if (null !== finishedRoot) {
                var instance = current.stateNode;
                try {
                  var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
                  if (null !== hiddenCallbacks)
                    for (finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0; finishedRoot < hiddenCallbacks.length; finishedRoot++)
                      callCallback(hiddenCallbacks[finishedRoot], instance);
                } catch (error) {
                  captureCommitPhaseError(current, current.return, error);
                }
              }
              includeWorkInProgressEffects && flags & 64 && commitClassCallbacks(finishedWork);
              safelyAttachRef(finishedWork, finishedWork.return);
              break;
            case 27:
              commitHostSingletonAcquisition(finishedWork);
            case 26:
            case 5:
              recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                includeWorkInProgressEffects
              );
              includeWorkInProgressEffects && null === current && flags & 4 && commitHostMount(finishedWork);
              safelyAttachRef(finishedWork, finishedWork.return);
              break;
            case 12:
              recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                includeWorkInProgressEffects
              );
              break;
            case 31:
              recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                includeWorkInProgressEffects
              );
              includeWorkInProgressEffects && flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
              break;
            case 13:
              recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                includeWorkInProgressEffects
              );
              includeWorkInProgressEffects && flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
              break;
            case 22:
              null === finishedWork.memoizedState && recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                includeWorkInProgressEffects
              );
              safelyAttachRef(finishedWork, finishedWork.return);
              break;
            case 30:
              break;
            default:
              recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                includeWorkInProgressEffects
              );
          }
          parentFiber = parentFiber.sibling;
        }
      }
      function commitOffscreenPassiveMountEffects(current, finishedWork) {
        var previousCache = null;
        null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (previousCache = current.memoizedState.cachePool.pool);
        current = null;
        null !== finishedWork.memoizedState && null !== finishedWork.memoizedState.cachePool && (current = finishedWork.memoizedState.cachePool.pool);
        current !== previousCache && (null != current && current.refCount++, null != previousCache && releaseCache(previousCache));
      }
      function commitCachePassiveMountEffect(current, finishedWork) {
        current = null;
        null !== finishedWork.alternate && (current = finishedWork.alternate.memoizedState.cache);
        finishedWork = finishedWork.memoizedState.cache;
        finishedWork !== current && (finishedWork.refCount++, null != current && releaseCache(current));
      }
      function recursivelyTraversePassiveMountEffects(root2, parentFiber, committedLanes, committedTransitions) {
        if (parentFiber.subtreeFlags & 10256)
          for (parentFiber = parentFiber.child; null !== parentFiber; )
            commitPassiveMountOnFiber(
              root2,
              parentFiber,
              committedLanes,
              committedTransitions
            ), parentFiber = parentFiber.sibling;
      }
      function commitPassiveMountOnFiber(finishedRoot, finishedWork, committedLanes, committedTransitions) {
        var flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
            flags & 2048 && commitHookEffectListMount(9, finishedWork);
            break;
          case 1:
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
            break;
          case 3:
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
            flags & 2048 && (finishedRoot = null, null !== finishedWork.alternate && (finishedRoot = finishedWork.alternate.memoizedState.cache), finishedWork = finishedWork.memoizedState.cache, finishedWork !== finishedRoot && (finishedWork.refCount++, null != finishedRoot && releaseCache(finishedRoot)));
            break;
          case 12:
            if (flags & 2048) {
              recursivelyTraversePassiveMountEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions
              );
              finishedRoot = finishedWork.stateNode;
              try {
                var _finishedWork$memoize2 = finishedWork.memoizedProps, id = _finishedWork$memoize2.id, onPostCommit = _finishedWork$memoize2.onPostCommit;
                "function" === typeof onPostCommit && onPostCommit(
                  id,
                  null === finishedWork.alternate ? "mount" : "update",
                  finishedRoot.passiveEffectDuration,
                  -0
                );
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            } else
              recursivelyTraversePassiveMountEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions
              );
            break;
          case 31:
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
            break;
          case 13:
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
            break;
          case 23:
            break;
          case 22:
            _finishedWork$memoize2 = finishedWork.stateNode;
            id = finishedWork.alternate;
            null !== finishedWork.memoizedState ? _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            ) : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork) : _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            ) : (_finishedWork$memoize2._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              0 !== (finishedWork.subtreeFlags & 10256) || false
            ));
            flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
            break;
          case 24:
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
            flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
            break;
          default:
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
        }
      }
      function recursivelyTraverseReconnectPassiveEffects(finishedRoot$jscomp$0, parentFiber, committedLanes$jscomp$0, committedTransitions$jscomp$0, includeWorkInProgressEffects) {
        includeWorkInProgressEffects = includeWorkInProgressEffects && (0 !== (parentFiber.subtreeFlags & 10256) || false);
        for (parentFiber = parentFiber.child; null !== parentFiber; ) {
          var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, committedLanes = committedLanes$jscomp$0, committedTransitions = committedTransitions$jscomp$0, flags = finishedWork.flags;
          switch (finishedWork.tag) {
            case 0:
            case 11:
            case 15:
              recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              );
              commitHookEffectListMount(8, finishedWork);
              break;
            case 23:
              break;
            case 22:
              var instance = finishedWork.stateNode;
              null !== finishedWork.memoizedState ? instance._visibility & 2 ? recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              ) : recursivelyTraverseAtomicPassiveEffects(
                finishedRoot,
                finishedWork
              ) : (instance._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              ));
              includeWorkInProgressEffects && flags & 2048 && commitOffscreenPassiveMountEffects(
                finishedWork.alternate,
                finishedWork
              );
              break;
            case 24:
              recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              );
              includeWorkInProgressEffects && flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
              break;
            default:
              recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              );
          }
          parentFiber = parentFiber.sibling;
        }
      }
      function recursivelyTraverseAtomicPassiveEffects(finishedRoot$jscomp$0, parentFiber) {
        if (parentFiber.subtreeFlags & 10256)
          for (parentFiber = parentFiber.child; null !== parentFiber; ) {
            var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
            switch (finishedWork.tag) {
              case 22:
                recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
                flags & 2048 && commitOffscreenPassiveMountEffects(
                  finishedWork.alternate,
                  finishedWork
                );
                break;
              case 24:
                recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
                flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
                break;
              default:
                recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
            }
            parentFiber = parentFiber.sibling;
          }
      }
      var suspenseyCommitFlag = 8192;
      function recursivelyAccumulateSuspenseyCommit(parentFiber, committedLanes, suspendedState) {
        if (parentFiber.subtreeFlags & suspenseyCommitFlag)
          for (parentFiber = parentFiber.child; null !== parentFiber; )
            accumulateSuspenseyCommitOnFiber(
              parentFiber,
              committedLanes,
              suspendedState
            ), parentFiber = parentFiber.sibling;
      }
      function accumulateSuspenseyCommitOnFiber(fiber, committedLanes, suspendedState) {
        switch (fiber.tag) {
          case 26:
            recursivelyAccumulateSuspenseyCommit(
              fiber,
              committedLanes,
              suspendedState
            );
            fiber.flags & suspenseyCommitFlag && null !== fiber.memoizedState && suspendResource(
              suspendedState,
              currentHoistableRoot,
              fiber.memoizedState,
              fiber.memoizedProps
            );
            break;
          case 5:
            recursivelyAccumulateSuspenseyCommit(
              fiber,
              committedLanes,
              suspendedState
            );
            break;
          case 3:
          case 4:
            var previousHoistableRoot = currentHoistableRoot;
            currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
            recursivelyAccumulateSuspenseyCommit(
              fiber,
              committedLanes,
              suspendedState
            );
            currentHoistableRoot = previousHoistableRoot;
            break;
          case 22:
            null === fiber.memoizedState && (previousHoistableRoot = fiber.alternate, null !== previousHoistableRoot && null !== previousHoistableRoot.memoizedState ? (previousHoistableRoot = suspenseyCommitFlag, suspenseyCommitFlag = 16777216, recursivelyAccumulateSuspenseyCommit(
              fiber,
              committedLanes,
              suspendedState
            ), suspenseyCommitFlag = previousHoistableRoot) : recursivelyAccumulateSuspenseyCommit(
              fiber,
              committedLanes,
              suspendedState
            ));
            break;
          default:
            recursivelyAccumulateSuspenseyCommit(
              fiber,
              committedLanes,
              suspendedState
            );
        }
      }
      function detachAlternateSiblings(parentFiber) {
        var previousFiber = parentFiber.alternate;
        if (null !== previousFiber && (parentFiber = previousFiber.child, null !== parentFiber)) {
          previousFiber.child = null;
          do
            previousFiber = parentFiber.sibling, parentFiber.sibling = null, parentFiber = previousFiber;
          while (null !== parentFiber);
        }
      }
      function recursivelyTraversePassiveUnmountEffects(parentFiber) {
        var deletions = parentFiber.deletions;
        if (0 !== (parentFiber.flags & 16)) {
          if (null !== deletions)
            for (var i = 0; i < deletions.length; i++) {
              var childToDelete = deletions[i];
              nextEffect = childToDelete;
              commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
                childToDelete,
                parentFiber
              );
            }
          detachAlternateSiblings(parentFiber);
        }
        if (parentFiber.subtreeFlags & 10256)
          for (parentFiber = parentFiber.child; null !== parentFiber; )
            commitPassiveUnmountOnFiber(parentFiber), parentFiber = parentFiber.sibling;
      }
      function commitPassiveUnmountOnFiber(finishedWork) {
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraversePassiveUnmountEffects(finishedWork);
            finishedWork.flags & 2048 && commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
            break;
          case 3:
            recursivelyTraversePassiveUnmountEffects(finishedWork);
            break;
          case 12:
            recursivelyTraversePassiveUnmountEffects(finishedWork);
            break;
          case 22:
            var instance = finishedWork.stateNode;
            null !== finishedWork.memoizedState && instance._visibility & 2 && (null === finishedWork.return || 13 !== finishedWork.return.tag) ? (instance._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(finishedWork)) : recursivelyTraversePassiveUnmountEffects(finishedWork);
            break;
          default:
            recursivelyTraversePassiveUnmountEffects(finishedWork);
        }
      }
      function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
        var deletions = parentFiber.deletions;
        if (0 !== (parentFiber.flags & 16)) {
          if (null !== deletions)
            for (var i = 0; i < deletions.length; i++) {
              var childToDelete = deletions[i];
              nextEffect = childToDelete;
              commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
                childToDelete,
                parentFiber
              );
            }
          detachAlternateSiblings(parentFiber);
        }
        for (parentFiber = parentFiber.child; null !== parentFiber; ) {
          deletions = parentFiber;
          switch (deletions.tag) {
            case 0:
            case 11:
            case 15:
              commitHookEffectListUnmount(8, deletions, deletions.return);
              recursivelyTraverseDisconnectPassiveEffects(deletions);
              break;
            case 22:
              i = deletions.stateNode;
              i._visibility & 2 && (i._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(deletions));
              break;
            default:
              recursivelyTraverseDisconnectPassiveEffects(deletions);
          }
          parentFiber = parentFiber.sibling;
        }
      }
      function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
        for (; null !== nextEffect; ) {
          var fiber = nextEffect;
          switch (fiber.tag) {
            case 0:
            case 11:
            case 15:
              commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
              break;
            case 23:
            case 22:
              if (null !== fiber.memoizedState && null !== fiber.memoizedState.cachePool) {
                var cache = fiber.memoizedState.cachePool.pool;
                null != cache && cache.refCount++;
              }
              break;
            case 24:
              releaseCache(fiber.memoizedState.cache);
          }
          cache = fiber.child;
          if (null !== cache) cache.return = fiber, nextEffect = cache;
          else
            a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
              cache = nextEffect;
              var sibling = cache.sibling, returnFiber = cache.return;
              detachFiberAfterEffects(cache);
              if (cache === fiber) {
                nextEffect = null;
                break a;
              }
              if (null !== sibling) {
                sibling.return = returnFiber;
                nextEffect = sibling;
                break a;
              }
              nextEffect = returnFiber;
            }
        }
      }
      var DefaultAsyncDispatcher = {
        getCacheForType: function(resourceType) {
          var cache = readContext(CacheContext), cacheForType = cache.data.get(resourceType);
          void 0 === cacheForType && (cacheForType = resourceType(), cache.data.set(resourceType, cacheForType));
          return cacheForType;
        },
        cacheSignal: function() {
          return readContext(CacheContext).controller.signal;
        }
      };
      var PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map;
      var executionContext = 0;
      var workInProgressRoot = null;
      var workInProgress = null;
      var workInProgressRootRenderLanes = 0;
      var workInProgressSuspendedReason = 0;
      var workInProgressThrownValue = null;
      var workInProgressRootDidSkipSuspendedSiblings = false;
      var workInProgressRootIsPrerendering = false;
      var workInProgressRootDidAttachPingListener = false;
      var entangledRenderLanes = 0;
      var workInProgressRootExitStatus = 0;
      var workInProgressRootSkippedLanes = 0;
      var workInProgressRootInterleavedUpdatedLanes = 0;
      var workInProgressRootPingedLanes = 0;
      var workInProgressDeferredLane = 0;
      var workInProgressSuspendedRetryLanes = 0;
      var workInProgressRootConcurrentErrors = null;
      var workInProgressRootRecoverableErrors = null;
      var workInProgressRootDidIncludeRecursiveRenderUpdate = false;
      var globalMostRecentFallbackTime = 0;
      var globalMostRecentTransitionTime = 0;
      var workInProgressRootRenderTargetTime = Infinity;
      var workInProgressTransitions = null;
      var legacyErrorBoundariesThatAlreadyFailed = null;
      var pendingEffectsStatus = 0;
      var pendingEffectsRoot = null;
      var pendingFinishedWork = null;
      var pendingEffectsLanes = 0;
      var pendingEffectsRemainingLanes = 0;
      var pendingPassiveTransitions = null;
      var pendingRecoverableErrors = null;
      var nestedUpdateCount = 0;
      var rootWithNestedUpdates = null;
      function requestUpdateLane() {
        return 0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes ? workInProgressRootRenderLanes & -workInProgressRootRenderLanes : null !== ReactSharedInternals.T ? requestTransitionLane() : resolveUpdatePriority();
      }
      function requestDeferredLane() {
        if (0 === workInProgressDeferredLane)
          if (0 === (workInProgressRootRenderLanes & 536870912) || isHydrating) {
            var lane = nextTransitionDeferredLane;
            nextTransitionDeferredLane <<= 1;
            0 === (nextTransitionDeferredLane & 3932160) && (nextTransitionDeferredLane = 262144);
            workInProgressDeferredLane = lane;
          } else workInProgressDeferredLane = 536870912;
        lane = suspenseHandlerStackCursor.current;
        null !== lane && (lane.flags |= 32);
        return workInProgressDeferredLane;
      }
      function scheduleUpdateOnFiber(root2, fiber, lane) {
        if (root2 === workInProgressRoot && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root2.cancelPendingCommit)
          prepareFreshStack(root2, 0), markRootSuspended(
            root2,
            workInProgressRootRenderLanes,
            workInProgressDeferredLane,
            false
          );
        markRootUpdated$1(root2, lane);
        if (0 === (executionContext & 2) || root2 !== workInProgressRoot)
          root2 === workInProgressRoot && (0 === (executionContext & 2) && (workInProgressRootInterleavedUpdatedLanes |= lane), 4 === workInProgressRootExitStatus && markRootSuspended(
            root2,
            workInProgressRootRenderLanes,
            workInProgressDeferredLane,
            false
          )), ensureRootIsScheduled(root2);
      }
      function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
        if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
        var shouldTimeSlice = !forceSync && 0 === (lanes & 127) && 0 === (lanes & root$jscomp$0.expiredLanes) || checkIfRootIsPrerendering(root$jscomp$0, lanes), exitStatus = shouldTimeSlice ? renderRootConcurrent(root$jscomp$0, lanes) : renderRootSync(root$jscomp$0, lanes, true), renderWasConcurrent = shouldTimeSlice;
        do {
          if (0 === exitStatus) {
            workInProgressRootIsPrerendering && !shouldTimeSlice && markRootSuspended(root$jscomp$0, lanes, 0, false);
            break;
          } else {
            forceSync = root$jscomp$0.current.alternate;
            if (renderWasConcurrent && !isRenderConsistentWithExternalStores(forceSync)) {
              exitStatus = renderRootSync(root$jscomp$0, lanes, false);
              renderWasConcurrent = false;
              continue;
            }
            if (2 === exitStatus) {
              renderWasConcurrent = lanes;
              if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
                var JSCompiler_inline_result = 0;
              else
                JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913, JSCompiler_inline_result = 0 !== JSCompiler_inline_result ? JSCompiler_inline_result : JSCompiler_inline_result & 536870912 ? 536870912 : 0;
              if (0 !== JSCompiler_inline_result) {
                lanes = JSCompiler_inline_result;
                a: {
                  var root2 = root$jscomp$0;
                  exitStatus = workInProgressRootConcurrentErrors;
                  var wasRootDehydrated = root2.current.memoizedState.isDehydrated;
                  wasRootDehydrated && (prepareFreshStack(root2, JSCompiler_inline_result).flags |= 256);
                  JSCompiler_inline_result = renderRootSync(
                    root2,
                    JSCompiler_inline_result,
                    false
                  );
                  if (2 !== JSCompiler_inline_result) {
                    if (workInProgressRootDidAttachPingListener && !wasRootDehydrated) {
                      root2.errorRecoveryDisabledLanes |= renderWasConcurrent;
                      workInProgressRootInterleavedUpdatedLanes |= renderWasConcurrent;
                      exitStatus = 4;
                      break a;
                    }
                    renderWasConcurrent = workInProgressRootRecoverableErrors;
                    workInProgressRootRecoverableErrors = exitStatus;
                    null !== renderWasConcurrent && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = renderWasConcurrent : workInProgressRootRecoverableErrors.push.apply(
                      workInProgressRootRecoverableErrors,
                      renderWasConcurrent
                    ));
                  }
                  exitStatus = JSCompiler_inline_result;
                }
                renderWasConcurrent = false;
                if (2 !== exitStatus) continue;
              }
            }
            if (1 === exitStatus) {
              prepareFreshStack(root$jscomp$0, 0);
              markRootSuspended(root$jscomp$0, lanes, 0, true);
              break;
            }
            a: {
              shouldTimeSlice = root$jscomp$0;
              renderWasConcurrent = exitStatus;
              switch (renderWasConcurrent) {
                case 0:
                case 1:
                  throw Error(formatProdErrorMessage(345));
                case 4:
                  if ((lanes & 4194048) !== lanes) break;
                case 6:
                  markRootSuspended(
                    shouldTimeSlice,
                    lanes,
                    workInProgressDeferredLane,
                    !workInProgressRootDidSkipSuspendedSiblings
                  );
                  break a;
                case 2:
                  workInProgressRootRecoverableErrors = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(formatProdErrorMessage(329));
              }
              if ((lanes & 62914560) === lanes && (exitStatus = globalMostRecentFallbackTime + 300 - now(), 10 < exitStatus)) {
                markRootSuspended(
                  shouldTimeSlice,
                  lanes,
                  workInProgressDeferredLane,
                  !workInProgressRootDidSkipSuspendedSiblings
                );
                if (0 !== getNextLanes(shouldTimeSlice, 0, true)) break a;
                pendingEffectsLanes = lanes;
                shouldTimeSlice.timeoutHandle = scheduleTimeout(
                  commitRootWhenReady.bind(
                    null,
                    shouldTimeSlice,
                    forceSync,
                    workInProgressRootRecoverableErrors,
                    workInProgressTransitions,
                    workInProgressRootDidIncludeRecursiveRenderUpdate,
                    lanes,
                    workInProgressDeferredLane,
                    workInProgressRootInterleavedUpdatedLanes,
                    workInProgressSuspendedRetryLanes,
                    workInProgressRootDidSkipSuspendedSiblings,
                    renderWasConcurrent,
                    "Throttled",
                    -0,
                    0
                  ),
                  exitStatus
                );
                break a;
              }
              commitRootWhenReady(
                shouldTimeSlice,
                forceSync,
                workInProgressRootRecoverableErrors,
                workInProgressTransitions,
                workInProgressRootDidIncludeRecursiveRenderUpdate,
                lanes,
                workInProgressDeferredLane,
                workInProgressRootInterleavedUpdatedLanes,
                workInProgressSuspendedRetryLanes,
                workInProgressRootDidSkipSuspendedSiblings,
                renderWasConcurrent,
                null,
                -0,
                0
              );
            }
          }
          break;
        } while (1);
        ensureRootIsScheduled(root$jscomp$0);
      }
      function commitRootWhenReady(root2, finishedWork, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, lanes, spawnedLane, updatedLanes, suspendedRetryLanes, didSkipSuspendedSiblings, exitStatus, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
        root2.timeoutHandle = -1;
        suspendedCommitReason = finishedWork.subtreeFlags;
        if (suspendedCommitReason & 8192 || 16785408 === (suspendedCommitReason & 16785408)) {
          suspendedCommitReason = {
            stylesheets: null,
            count: 0,
            imgCount: 0,
            imgBytes: 0,
            suspenseyImages: [],
            waitingForImages: true,
            waitingForViewTransition: false,
            unsuspend: noop$1
          };
          accumulateSuspenseyCommitOnFiber(
            finishedWork,
            lanes,
            suspendedCommitReason
          );
          var timeoutOffset = (lanes & 62914560) === lanes ? globalMostRecentFallbackTime - now() : (lanes & 4194048) === lanes ? globalMostRecentTransitionTime - now() : 0;
          timeoutOffset = waitForCommitToBeReady(
            suspendedCommitReason,
            timeoutOffset
          );
          if (null !== timeoutOffset) {
            pendingEffectsLanes = lanes;
            root2.cancelPendingCommit = timeoutOffset(
              commitRoot.bind(
                null,
                root2,
                finishedWork,
                lanes,
                recoverableErrors,
                transitions,
                didIncludeRenderPhaseUpdate,
                spawnedLane,
                updatedLanes,
                suspendedRetryLanes,
                exitStatus,
                suspendedCommitReason,
                null,
                completedRenderStartTime,
                completedRenderEndTime
              )
            );
            markRootSuspended(root2, lanes, spawnedLane, !didSkipSuspendedSiblings);
            return;
          }
        }
        commitRoot(
          root2,
          finishedWork,
          lanes,
          recoverableErrors,
          transitions,
          didIncludeRenderPhaseUpdate,
          spawnedLane,
          updatedLanes,
          suspendedRetryLanes
        );
      }
      function isRenderConsistentWithExternalStores(finishedWork) {
        for (var node2 = finishedWork; ; ) {
          var tag = node2.tag;
          if ((0 === tag || 11 === tag || 15 === tag) && node2.flags & 16384 && (tag = node2.updateQueue, null !== tag && (tag = tag.stores, null !== tag)))
            for (var i = 0; i < tag.length; i++) {
              var check = tag[i], getSnapshot = check.getSnapshot;
              check = check.value;
              try {
                if (!objectIs(getSnapshot(), check)) return false;
              } catch (error) {
                return false;
              }
            }
          tag = node2.child;
          if (node2.subtreeFlags & 16384 && null !== tag)
            tag.return = node2, node2 = tag;
          else {
            if (node2 === finishedWork) break;
            for (; null === node2.sibling; ) {
              if (null === node2.return || node2.return === finishedWork) return true;
              node2 = node2.return;
            }
            node2.sibling.return = node2.return;
            node2 = node2.sibling;
          }
        }
        return true;
      }
      function markRootSuspended(root2, suspendedLanes, spawnedLane, didAttemptEntireTree) {
        suspendedLanes &= ~workInProgressRootPingedLanes;
        suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
        root2.suspendedLanes |= suspendedLanes;
        root2.pingedLanes &= ~suspendedLanes;
        didAttemptEntireTree && (root2.warmLanes |= suspendedLanes);
        didAttemptEntireTree = root2.expirationTimes;
        for (var lanes = suspendedLanes; 0 < lanes; ) {
          var index$6 = 31 - clz32(lanes), lane = 1 << index$6;
          didAttemptEntireTree[index$6] = -1;
          lanes &= ~lane;
        }
        0 !== spawnedLane && markSpawnedDeferredLane(root2, spawnedLane, suspendedLanes);
      }
      function flushSyncWork$1() {
        return 0 === (executionContext & 6) ? (flushSyncWorkAcrossRoots_impl(0, false), false) : true;
      }
      function resetWorkInProgressStack() {
        if (null !== workInProgress) {
          if (0 === workInProgressSuspendedReason)
            var interruptedWork = workInProgress.return;
          else
            interruptedWork = workInProgress, lastContextDependency = currentlyRenderingFiber$1 = null, resetHooksOnUnwind(interruptedWork), thenableState$1 = null, thenableIndexCounter$1 = 0, interruptedWork = workInProgress;
          for (; null !== interruptedWork; )
            unwindInterruptedWork(interruptedWork.alternate, interruptedWork), interruptedWork = interruptedWork.return;
          workInProgress = null;
        }
      }
      function prepareFreshStack(root2, lanes) {
        var timeoutHandle = root2.timeoutHandle;
        -1 !== timeoutHandle && (root2.timeoutHandle = -1, cancelTimeout(timeoutHandle));
        timeoutHandle = root2.cancelPendingCommit;
        null !== timeoutHandle && (root2.cancelPendingCommit = null, timeoutHandle());
        pendingEffectsLanes = 0;
        resetWorkInProgressStack();
        workInProgressRoot = root2;
        workInProgress = timeoutHandle = createWorkInProgress(root2.current, null);
        workInProgressRootRenderLanes = lanes;
        workInProgressSuspendedReason = 0;
        workInProgressThrownValue = null;
        workInProgressRootDidSkipSuspendedSiblings = false;
        workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root2, lanes);
        workInProgressRootDidAttachPingListener = false;
        workInProgressSuspendedRetryLanes = workInProgressDeferredLane = workInProgressRootPingedLanes = workInProgressRootInterleavedUpdatedLanes = workInProgressRootSkippedLanes = workInProgressRootExitStatus = 0;
        workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors = null;
        workInProgressRootDidIncludeRecursiveRenderUpdate = false;
        0 !== (lanes & 8) && (lanes |= lanes & 32);
        var allEntangledLanes = root2.entangledLanes;
        if (0 !== allEntangledLanes)
          for (root2 = root2.entanglements, allEntangledLanes &= lanes; 0 < allEntangledLanes; ) {
            var index$4 = 31 - clz32(allEntangledLanes), lane = 1 << index$4;
            lanes |= root2[index$4];
            allEntangledLanes &= ~lane;
          }
        entangledRenderLanes = lanes;
        finishQueueingConcurrentUpdates();
        return timeoutHandle;
      }
      function handleThrow(root2, thrownValue) {
        currentlyRenderingFiber = null;
        ReactSharedInternals.H = ContextOnlyDispatcher;
        thrownValue === SuspenseException || thrownValue === SuspenseActionException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 3) : thrownValue === SuspenseyCommitException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 4) : workInProgressSuspendedReason = thrownValue === SelectiveHydrationException ? 8 : null !== thrownValue && "object" === typeof thrownValue && "function" === typeof thrownValue.then ? 6 : 1;
        workInProgressThrownValue = thrownValue;
        null === workInProgress && (workInProgressRootExitStatus = 1, logUncaughtError(
          root2,
          createCapturedValueAtFiber(thrownValue, root2.current)
        ));
      }
      function shouldRemainOnPreviousScreen() {
        var handler = suspenseHandlerStackCursor.current;
        return null === handler ? true : (workInProgressRootRenderLanes & 4194048) === workInProgressRootRenderLanes ? null === shellBoundary ? true : false : (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes || 0 !== (workInProgressRootRenderLanes & 536870912) ? handler === shellBoundary : false;
      }
      function pushDispatcher() {
        var prevDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = ContextOnlyDispatcher;
        return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
      }
      function pushAsyncDispatcher() {
        var prevAsyncDispatcher = ReactSharedInternals.A;
        ReactSharedInternals.A = DefaultAsyncDispatcher;
        return prevAsyncDispatcher;
      }
      function renderDidSuspendDelayIfPossible() {
        workInProgressRootExitStatus = 4;
        workInProgressRootDidSkipSuspendedSiblings || (workInProgressRootRenderLanes & 4194048) !== workInProgressRootRenderLanes && null !== suspenseHandlerStackCursor.current || (workInProgressRootIsPrerendering = true);
        0 === (workInProgressRootSkippedLanes & 134217727) && 0 === (workInProgressRootInterleavedUpdatedLanes & 134217727) || null === workInProgressRoot || markRootSuspended(
          workInProgressRoot,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          false
        );
      }
      function renderRootSync(root2, lanes, shouldYieldForPrerendering) {
        var prevExecutionContext = executionContext;
        executionContext |= 2;
        var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
        if (workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes)
          workInProgressTransitions = null, prepareFreshStack(root2, lanes);
        lanes = false;
        var exitStatus = workInProgressRootExitStatus;
        a: do
          try {
            if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
              var unitOfWork = workInProgress, thrownValue = workInProgressThrownValue;
              switch (workInProgressSuspendedReason) {
                case 8:
                  resetWorkInProgressStack();
                  exitStatus = 6;
                  break a;
                case 3:
                case 2:
                case 9:
                case 6:
                  null === suspenseHandlerStackCursor.current && (lanes = true);
                  var reason = workInProgressSuspendedReason;
                  workInProgressSuspendedReason = 0;
                  workInProgressThrownValue = null;
                  throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, reason);
                  if (shouldYieldForPrerendering && workInProgressRootIsPrerendering) {
                    exitStatus = 0;
                    break a;
                  }
                  break;
                default:
                  reason = workInProgressSuspendedReason, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, reason);
              }
            }
            workLoopSync();
            exitStatus = workInProgressRootExitStatus;
            break;
          } catch (thrownValue$165) {
            handleThrow(root2, thrownValue$165);
          }
        while (1);
        lanes && root2.shellSuspendCounter++;
        lastContextDependency = currentlyRenderingFiber$1 = null;
        executionContext = prevExecutionContext;
        ReactSharedInternals.H = prevDispatcher;
        ReactSharedInternals.A = prevAsyncDispatcher;
        null === workInProgress && (workInProgressRoot = null, workInProgressRootRenderLanes = 0, finishQueueingConcurrentUpdates());
        return exitStatus;
      }
      function workLoopSync() {
        for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
      }
      function renderRootConcurrent(root2, lanes) {
        var prevExecutionContext = executionContext;
        executionContext |= 2;
        var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
        workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes ? (workInProgressTransitions = null, workInProgressRootRenderTargetTime = now() + 500, prepareFreshStack(root2, lanes)) : workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
          root2,
          lanes
        );
        a: do
          try {
            if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
              lanes = workInProgress;
              var thrownValue = workInProgressThrownValue;
              b: switch (workInProgressSuspendedReason) {
                case 1:
                  workInProgressSuspendedReason = 0;
                  workInProgressThrownValue = null;
                  throwAndUnwindWorkLoop(root2, lanes, thrownValue, 1);
                  break;
                case 2:
                case 9:
                  if (isThenableResolved(thrownValue)) {
                    workInProgressSuspendedReason = 0;
                    workInProgressThrownValue = null;
                    replaySuspendedUnitOfWork(lanes);
                    break;
                  }
                  lanes = function() {
                    2 !== workInProgressSuspendedReason && 9 !== workInProgressSuspendedReason || workInProgressRoot !== root2 || (workInProgressSuspendedReason = 7);
                    ensureRootIsScheduled(root2);
                  };
                  thrownValue.then(lanes, lanes);
                  break a;
                case 3:
                  workInProgressSuspendedReason = 7;
                  break a;
                case 4:
                  workInProgressSuspendedReason = 5;
                  break a;
                case 7:
                  isThenableResolved(thrownValue) ? (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, replaySuspendedUnitOfWork(lanes)) : (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root2, lanes, thrownValue, 7));
                  break;
                case 5:
                  var resource = null;
                  switch (workInProgress.tag) {
                    case 26:
                      resource = workInProgress.memoizedState;
                    case 5:
                    case 27:
                      var hostFiber = workInProgress;
                      if (resource ? preloadResource(resource) : hostFiber.stateNode.complete) {
                        workInProgressSuspendedReason = 0;
                        workInProgressThrownValue = null;
                        var sibling = hostFiber.sibling;
                        if (null !== sibling) workInProgress = sibling;
                        else {
                          var returnFiber = hostFiber.return;
                          null !== returnFiber ? (workInProgress = returnFiber, completeUnitOfWork(returnFiber)) : workInProgress = null;
                        }
                        break b;
                      }
                  }
                  workInProgressSuspendedReason = 0;
                  workInProgressThrownValue = null;
                  throwAndUnwindWorkLoop(root2, lanes, thrownValue, 5);
                  break;
                case 6:
                  workInProgressSuspendedReason = 0;
                  workInProgressThrownValue = null;
                  throwAndUnwindWorkLoop(root2, lanes, thrownValue, 6);
                  break;
                case 8:
                  resetWorkInProgressStack();
                  workInProgressRootExitStatus = 6;
                  break a;
                default:
                  throw Error(formatProdErrorMessage(462));
              }
            }
            workLoopConcurrentByScheduler();
            break;
          } catch (thrownValue$167) {
            handleThrow(root2, thrownValue$167);
          }
        while (1);
        lastContextDependency = currentlyRenderingFiber$1 = null;
        ReactSharedInternals.H = prevDispatcher;
        ReactSharedInternals.A = prevAsyncDispatcher;
        executionContext = prevExecutionContext;
        if (null !== workInProgress) return 0;
        workInProgressRoot = null;
        workInProgressRootRenderLanes = 0;
        finishQueueingConcurrentUpdates();
        return workInProgressRootExitStatus;
      }
      function workLoopConcurrentByScheduler() {
        for (; null !== workInProgress && !shouldYield(); )
          performUnitOfWork(workInProgress);
      }
      function performUnitOfWork(unitOfWork) {
        var next2 = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
        unitOfWork.memoizedProps = unitOfWork.pendingProps;
        null === next2 ? completeUnitOfWork(unitOfWork) : workInProgress = next2;
      }
      function replaySuspendedUnitOfWork(unitOfWork) {
        var next2 = unitOfWork;
        var current = next2.alternate;
        switch (next2.tag) {
          case 15:
          case 0:
            next2 = replayFunctionComponent(
              current,
              next2,
              next2.pendingProps,
              next2.type,
              void 0,
              workInProgressRootRenderLanes
            );
            break;
          case 11:
            next2 = replayFunctionComponent(
              current,
              next2,
              next2.pendingProps,
              next2.type.render,
              next2.ref,
              workInProgressRootRenderLanes
            );
            break;
          case 5:
            resetHooksOnUnwind(next2);
          default:
            unwindInterruptedWork(current, next2), next2 = workInProgress = resetWorkInProgress(next2, entangledRenderLanes), next2 = beginWork(current, next2, entangledRenderLanes);
        }
        unitOfWork.memoizedProps = unitOfWork.pendingProps;
        null === next2 ? completeUnitOfWork(unitOfWork) : workInProgress = next2;
      }
      function throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, suspendedReason) {
        lastContextDependency = currentlyRenderingFiber$1 = null;
        resetHooksOnUnwind(unitOfWork);
        thenableState$1 = null;
        thenableIndexCounter$1 = 0;
        var returnFiber = unitOfWork.return;
        try {
          if (throwException(
            root2,
            returnFiber,
            unitOfWork,
            thrownValue,
            workInProgressRootRenderLanes
          )) {
            workInProgressRootExitStatus = 1;
            logUncaughtError(
              root2,
              createCapturedValueAtFiber(thrownValue, root2.current)
            );
            workInProgress = null;
            return;
          }
        } catch (error) {
          if (null !== returnFiber) throw workInProgress = returnFiber, error;
          workInProgressRootExitStatus = 1;
          logUncaughtError(
            root2,
            createCapturedValueAtFiber(thrownValue, root2.current)
          );
          workInProgress = null;
          return;
        }
        if (unitOfWork.flags & 32768) {
          if (isHydrating || 1 === suspendedReason) root2 = true;
          else if (workInProgressRootIsPrerendering || 0 !== (workInProgressRootRenderLanes & 536870912))
            root2 = false;
          else if (workInProgressRootDidSkipSuspendedSiblings = root2 = true, 2 === suspendedReason || 9 === suspendedReason || 3 === suspendedReason || 6 === suspendedReason)
            suspendedReason = suspenseHandlerStackCursor.current, null !== suspendedReason && 13 === suspendedReason.tag && (suspendedReason.flags |= 16384);
          unwindUnitOfWork(unitOfWork, root2);
        } else completeUnitOfWork(unitOfWork);
      }
      function completeUnitOfWork(unitOfWork) {
        var completedWork = unitOfWork;
        do {
          if (0 !== (completedWork.flags & 32768)) {
            unwindUnitOfWork(
              completedWork,
              workInProgressRootDidSkipSuspendedSiblings
            );
            return;
          }
          unitOfWork = completedWork.return;
          var next2 = completeWork(
            completedWork.alternate,
            completedWork,
            entangledRenderLanes
          );
          if (null !== next2) {
            workInProgress = next2;
            return;
          }
          completedWork = completedWork.sibling;
          if (null !== completedWork) {
            workInProgress = completedWork;
            return;
          }
          workInProgress = completedWork = unitOfWork;
        } while (null !== completedWork);
        0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
      }
      function unwindUnitOfWork(unitOfWork, skipSiblings) {
        do {
          var next2 = unwindWork(unitOfWork.alternate, unitOfWork);
          if (null !== next2) {
            next2.flags &= 32767;
            workInProgress = next2;
            return;
          }
          next2 = unitOfWork.return;
          null !== next2 && (next2.flags |= 32768, next2.subtreeFlags = 0, next2.deletions = null);
          if (!skipSiblings && (unitOfWork = unitOfWork.sibling, null !== unitOfWork)) {
            workInProgress = unitOfWork;
            return;
          }
          workInProgress = unitOfWork = next2;
        } while (null !== unitOfWork);
        workInProgressRootExitStatus = 6;
        workInProgress = null;
      }
      function commitRoot(root2, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes) {
        root2.cancelPendingCommit = null;
        do
          flushPendingEffects();
        while (0 !== pendingEffectsStatus);
        if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
        if (null !== finishedWork) {
          if (finishedWork === root2.current) throw Error(formatProdErrorMessage(177));
          didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
          didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
          markRootFinished(
            root2,
            lanes,
            didIncludeRenderPhaseUpdate,
            spawnedLane,
            updatedLanes,
            suspendedRetryLanes
          );
          root2 === workInProgressRoot && (workInProgress = workInProgressRoot = null, workInProgressRootRenderLanes = 0);
          pendingFinishedWork = finishedWork;
          pendingEffectsRoot = root2;
          pendingEffectsLanes = lanes;
          pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
          pendingPassiveTransitions = transitions;
          pendingRecoverableErrors = recoverableErrors;
          0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? (root2.callbackNode = null, root2.callbackPriority = 0, scheduleCallback$1(NormalPriority$1, function() {
            flushPassiveEffects();
            return null;
          })) : (root2.callbackNode = null, root2.callbackPriority = 0);
          recoverableErrors = 0 !== (finishedWork.flags & 13878);
          if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
            recoverableErrors = ReactSharedInternals.T;
            ReactSharedInternals.T = null;
            transitions = ReactDOMSharedInternals.p;
            ReactDOMSharedInternals.p = 2;
            spawnedLane = executionContext;
            executionContext |= 4;
            try {
              commitBeforeMutationEffects(root2, finishedWork, lanes);
            } finally {
              executionContext = spawnedLane, ReactDOMSharedInternals.p = transitions, ReactSharedInternals.T = recoverableErrors;
            }
          }
          pendingEffectsStatus = 1;
          flushMutationEffects();
          flushLayoutEffects();
          flushSpawnedWork();
        }
      }
      function flushMutationEffects() {
        if (1 === pendingEffectsStatus) {
          pendingEffectsStatus = 0;
          var root2 = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
          if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
            rootMutationHasEffect = ReactSharedInternals.T;
            ReactSharedInternals.T = null;
            var previousPriority = ReactDOMSharedInternals.p;
            ReactDOMSharedInternals.p = 2;
            var prevExecutionContext = executionContext;
            executionContext |= 4;
            try {
              commitMutationEffectsOnFiber(finishedWork, root2);
              var priorSelectionInformation = selectionInformation, curFocusedElem = getActiveElementDeep(root2.containerInfo), priorFocusedElem = priorSelectionInformation.focusedElem, priorSelectionRange = priorSelectionInformation.selectionRange;
              if (curFocusedElem !== priorFocusedElem && priorFocusedElem && priorFocusedElem.ownerDocument && containsNode(
                priorFocusedElem.ownerDocument.documentElement,
                priorFocusedElem
              )) {
                if (null !== priorSelectionRange && hasSelectionCapabilities(priorFocusedElem)) {
                  var start = priorSelectionRange.start, end = priorSelectionRange.end;
                  void 0 === end && (end = start);
                  if ("selectionStart" in priorFocusedElem)
                    priorFocusedElem.selectionStart = start, priorFocusedElem.selectionEnd = Math.min(
                      end,
                      priorFocusedElem.value.length
                    );
                  else {
                    var doc = priorFocusedElem.ownerDocument || document, win = doc && doc.defaultView || window;
                    if (win.getSelection) {
                      var selection = win.getSelection(), length2 = priorFocusedElem.textContent.length, start$jscomp$0 = Math.min(priorSelectionRange.start, length2), end$jscomp$0 = void 0 === priorSelectionRange.end ? start$jscomp$0 : Math.min(priorSelectionRange.end, length2);
                      !selection.extend && start$jscomp$0 > end$jscomp$0 && (curFocusedElem = end$jscomp$0, end$jscomp$0 = start$jscomp$0, start$jscomp$0 = curFocusedElem);
                      var startMarker = getNodeForCharacterOffset(
                        priorFocusedElem,
                        start$jscomp$0
                      ), endMarker = getNodeForCharacterOffset(
                        priorFocusedElem,
                        end$jscomp$0
                      );
                      if (startMarker && endMarker && (1 !== selection.rangeCount || selection.anchorNode !== startMarker.node || selection.anchorOffset !== startMarker.offset || selection.focusNode !== endMarker.node || selection.focusOffset !== endMarker.offset)) {
                        var range = doc.createRange();
                        range.setStart(startMarker.node, startMarker.offset);
                        selection.removeAllRanges();
                        start$jscomp$0 > end$jscomp$0 ? (selection.addRange(range), selection.extend(endMarker.node, endMarker.offset)) : (range.setEnd(endMarker.node, endMarker.offset), selection.addRange(range));
                      }
                    }
                  }
                }
                doc = [];
                for (selection = priorFocusedElem; selection = selection.parentNode; )
                  1 === selection.nodeType && doc.push({
                    element: selection,
                    left: selection.scrollLeft,
                    top: selection.scrollTop
                  });
                "function" === typeof priorFocusedElem.focus && priorFocusedElem.focus();
                for (priorFocusedElem = 0; priorFocusedElem < doc.length; priorFocusedElem++) {
                  var info = doc[priorFocusedElem];
                  info.element.scrollLeft = info.left;
                  info.element.scrollTop = info.top;
                }
              }
              _enabled = !!eventsEnabled;
              selectionInformation = eventsEnabled = null;
            } finally {
              executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootMutationHasEffect;
            }
          }
          root2.current = finishedWork;
          pendingEffectsStatus = 2;
        }
      }
      function flushLayoutEffects() {
        if (2 === pendingEffectsStatus) {
          pendingEffectsStatus = 0;
          var root2 = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
          if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
            rootHasLayoutEffect = ReactSharedInternals.T;
            ReactSharedInternals.T = null;
            var previousPriority = ReactDOMSharedInternals.p;
            ReactDOMSharedInternals.p = 2;
            var prevExecutionContext = executionContext;
            executionContext |= 4;
            try {
              commitLayoutEffectOnFiber(root2, finishedWork.alternate, finishedWork);
            } finally {
              executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootHasLayoutEffect;
            }
          }
          pendingEffectsStatus = 3;
        }
      }
      function flushSpawnedWork() {
        if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
          pendingEffectsStatus = 0;
          requestPaint();
          var root2 = pendingEffectsRoot, finishedWork = pendingFinishedWork, lanes = pendingEffectsLanes, recoverableErrors = pendingRecoverableErrors;
          0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? pendingEffectsStatus = 5 : (pendingEffectsStatus = 0, pendingFinishedWork = pendingEffectsRoot = null, releaseRootPooledCache(root2, root2.pendingLanes));
          var remainingLanes = root2.pendingLanes;
          0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
          lanesToEventPriority(lanes);
          finishedWork = finishedWork.stateNode;
          if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
            try {
              injectedHook.onCommitFiberRoot(
                rendererID,
                finishedWork,
                void 0,
                128 === (finishedWork.current.flags & 128)
              );
            } catch (err) {
            }
          if (null !== recoverableErrors) {
            finishedWork = ReactSharedInternals.T;
            remainingLanes = ReactDOMSharedInternals.p;
            ReactDOMSharedInternals.p = 2;
            ReactSharedInternals.T = null;
            try {
              for (var onRecoverableError = root2.onRecoverableError, i = 0; i < recoverableErrors.length; i++) {
                var recoverableError = recoverableErrors[i];
                onRecoverableError(recoverableError.value, {
                  componentStack: recoverableError.stack
                });
              }
            } finally {
              ReactSharedInternals.T = finishedWork, ReactDOMSharedInternals.p = remainingLanes;
            }
          }
          0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
          ensureRootIsScheduled(root2);
          remainingLanes = root2.pendingLanes;
          0 !== (lanes & 261930) && 0 !== (remainingLanes & 42) ? root2 === rootWithNestedUpdates ? nestedUpdateCount++ : (nestedUpdateCount = 0, rootWithNestedUpdates = root2) : nestedUpdateCount = 0;
          flushSyncWorkAcrossRoots_impl(0, false);
        }
      }
      function releaseRootPooledCache(root2, remainingLanes) {
        0 === (root2.pooledCacheLanes &= remainingLanes) && (remainingLanes = root2.pooledCache, null != remainingLanes && (root2.pooledCache = null, releaseCache(remainingLanes)));
      }
      function flushPendingEffects() {
        flushMutationEffects();
        flushLayoutEffects();
        flushSpawnedWork();
        return flushPassiveEffects();
      }
      function flushPassiveEffects() {
        if (5 !== pendingEffectsStatus) return false;
        var root2 = pendingEffectsRoot, remainingLanes = pendingEffectsRemainingLanes;
        pendingEffectsRemainingLanes = 0;
        var renderPriority = lanesToEventPriority(pendingEffectsLanes), prevTransition = ReactSharedInternals.T, previousPriority = ReactDOMSharedInternals.p;
        try {
          ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
          ReactSharedInternals.T = null;
          renderPriority = pendingPassiveTransitions;
          pendingPassiveTransitions = null;
          var root$jscomp$0 = pendingEffectsRoot, lanes = pendingEffectsLanes;
          pendingEffectsStatus = 0;
          pendingFinishedWork = pendingEffectsRoot = null;
          pendingEffectsLanes = 0;
          if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
          var prevExecutionContext = executionContext;
          executionContext |= 4;
          commitPassiveUnmountOnFiber(root$jscomp$0.current);
          commitPassiveMountOnFiber(
            root$jscomp$0,
            root$jscomp$0.current,
            lanes,
            renderPriority
          );
          executionContext = prevExecutionContext;
          flushSyncWorkAcrossRoots_impl(0, false);
          if (injectedHook && "function" === typeof injectedHook.onPostCommitFiberRoot)
            try {
              injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
            } catch (err) {
            }
          return true;
        } finally {
          ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition, releaseRootPooledCache(root2, remainingLanes);
        }
      }
      function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
        sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
        sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
        rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
        null !== rootFiber && (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
      }
      function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
        if (3 === sourceFiber.tag)
          captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
        else
          for (; null !== nearestMountedAncestor; ) {
            if (3 === nearestMountedAncestor.tag) {
              captureCommitPhaseErrorOnRoot(
                nearestMountedAncestor,
                sourceFiber,
                error
              );
              break;
            } else if (1 === nearestMountedAncestor.tag) {
              var instance = nearestMountedAncestor.stateNode;
              if ("function" === typeof nearestMountedAncestor.type.getDerivedStateFromError || "function" === typeof instance.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(instance))) {
                sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
                error = createClassErrorUpdate(2);
                instance = enqueueUpdate(nearestMountedAncestor, error, 2);
                null !== instance && (initializeClassErrorUpdate(
                  error,
                  instance,
                  nearestMountedAncestor,
                  sourceFiber
                ), markRootUpdated$1(instance, 2), ensureRootIsScheduled(instance));
                break;
              }
            }
            nearestMountedAncestor = nearestMountedAncestor.return;
          }
      }
      function attachPingListener(root2, wakeable, lanes) {
        var pingCache = root2.pingCache;
        if (null === pingCache) {
          pingCache = root2.pingCache = new PossiblyWeakMap();
          var threadIDs = /* @__PURE__ */ new Set();
          pingCache.set(wakeable, threadIDs);
        } else
          threadIDs = pingCache.get(wakeable), void 0 === threadIDs && (threadIDs = /* @__PURE__ */ new Set(), pingCache.set(wakeable, threadIDs));
        threadIDs.has(lanes) || (workInProgressRootDidAttachPingListener = true, threadIDs.add(lanes), root2 = pingSuspendedRoot.bind(null, root2, wakeable, lanes), wakeable.then(root2, root2));
      }
      function pingSuspendedRoot(root2, wakeable, pingedLanes) {
        var pingCache = root2.pingCache;
        null !== pingCache && pingCache.delete(wakeable);
        root2.pingedLanes |= root2.suspendedLanes & pingedLanes;
        root2.warmLanes &= ~pingedLanes;
        workInProgressRoot === root2 && (workInProgressRootRenderLanes & pingedLanes) === pingedLanes && (4 === workInProgressRootExitStatus || 3 === workInProgressRootExitStatus && (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes && 300 > now() - globalMostRecentFallbackTime ? 0 === (executionContext & 2) && prepareFreshStack(root2, 0) : workInProgressRootPingedLanes |= pingedLanes, workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes && (workInProgressSuspendedRetryLanes = 0));
        ensureRootIsScheduled(root2);
      }
      function retryTimedOutBoundary(boundaryFiber, retryLane) {
        0 === retryLane && (retryLane = claimNextRetryLane());
        boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
        null !== boundaryFiber && (markRootUpdated$1(boundaryFiber, retryLane), ensureRootIsScheduled(boundaryFiber));
      }
      function retryDehydratedSuspenseBoundary(boundaryFiber) {
        var suspenseState = boundaryFiber.memoizedState, retryLane = 0;
        null !== suspenseState && (retryLane = suspenseState.retryLane);
        retryTimedOutBoundary(boundaryFiber, retryLane);
      }
      function resolveRetryWakeable(boundaryFiber, wakeable) {
        var retryLane = 0;
        switch (boundaryFiber.tag) {
          case 31:
          case 13:
            var retryCache = boundaryFiber.stateNode;
            var suspenseState = boundaryFiber.memoizedState;
            null !== suspenseState && (retryLane = suspenseState.retryLane);
            break;
          case 19:
            retryCache = boundaryFiber.stateNode;
            break;
          case 22:
            retryCache = boundaryFiber.stateNode._retryCache;
            break;
          default:
            throw Error(formatProdErrorMessage(314));
        }
        null !== retryCache && retryCache.delete(wakeable);
        retryTimedOutBoundary(boundaryFiber, retryLane);
      }
      function scheduleCallback$1(priorityLevel, callback) {
        return scheduleCallback$3(priorityLevel, callback);
      }
      var firstScheduledRoot = null;
      var lastScheduledRoot = null;
      var didScheduleMicrotask = false;
      var mightHavePendingSyncWork = false;
      var isFlushingWork = false;
      var currentEventTransitionLane = 0;
      function ensureRootIsScheduled(root2) {
        root2 !== lastScheduledRoot && null === root2.next && (null === lastScheduledRoot ? firstScheduledRoot = lastScheduledRoot = root2 : lastScheduledRoot = lastScheduledRoot.next = root2);
        mightHavePendingSyncWork = true;
        didScheduleMicrotask || (didScheduleMicrotask = true, scheduleImmediateRootScheduleTask());
      }
      function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
        if (!isFlushingWork && mightHavePendingSyncWork) {
          isFlushingWork = true;
          do {
            var didPerformSomeWork = false;
            for (var root$170 = firstScheduledRoot; null !== root$170; ) {
              if (!onlyLegacy)
                if (0 !== syncTransitionLanes) {
                  var pendingLanes = root$170.pendingLanes;
                  if (0 === pendingLanes) var JSCompiler_inline_result = 0;
                  else {
                    var suspendedLanes = root$170.suspendedLanes, pingedLanes = root$170.pingedLanes;
                    JSCompiler_inline_result = (1 << 31 - clz32(42 | syncTransitionLanes) + 1) - 1;
                    JSCompiler_inline_result &= pendingLanes & ~(suspendedLanes & ~pingedLanes);
                    JSCompiler_inline_result = JSCompiler_inline_result & 201326741 ? JSCompiler_inline_result & 201326741 | 1 : JSCompiler_inline_result ? JSCompiler_inline_result | 2 : 0;
                  }
                  0 !== JSCompiler_inline_result && (didPerformSomeWork = true, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
                } else
                  JSCompiler_inline_result = workInProgressRootRenderLanes, JSCompiler_inline_result = getNextLanes(
                    root$170,
                    root$170 === workInProgressRoot ? JSCompiler_inline_result : 0,
                    null !== root$170.cancelPendingCommit || -1 !== root$170.timeoutHandle
                  ), 0 === (JSCompiler_inline_result & 3) || checkIfRootIsPrerendering(root$170, JSCompiler_inline_result) || (didPerformSomeWork = true, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
              root$170 = root$170.next;
            }
          } while (didPerformSomeWork);
          isFlushingWork = false;
        }
      }
      function processRootScheduleInImmediateTask() {
        processRootScheduleInMicrotask();
      }
      function processRootScheduleInMicrotask() {
        mightHavePendingSyncWork = didScheduleMicrotask = false;
        var syncTransitionLanes = 0;
        0 !== currentEventTransitionLane && shouldAttemptEagerTransition() && (syncTransitionLanes = currentEventTransitionLane);
        for (var currentTime = now(), prev2 = null, root2 = firstScheduledRoot; null !== root2; ) {
          var next2 = root2.next, nextLanes = scheduleTaskForRootDuringMicrotask(root2, currentTime);
          if (0 === nextLanes)
            root2.next = null, null === prev2 ? firstScheduledRoot = next2 : prev2.next = next2, null === next2 && (lastScheduledRoot = prev2);
          else if (prev2 = root2, 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
            mightHavePendingSyncWork = true;
          root2 = next2;
        }
        0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus || flushSyncWorkAcrossRoots_impl(syncTransitionLanes, false);
        0 !== currentEventTransitionLane && (currentEventTransitionLane = 0);
      }
      function scheduleTaskForRootDuringMicrotask(root2, currentTime) {
        for (var suspendedLanes = root2.suspendedLanes, pingedLanes = root2.pingedLanes, expirationTimes = root2.expirationTimes, lanes = root2.pendingLanes & -62914561; 0 < lanes; ) {
          var index$5 = 31 - clz32(lanes), lane = 1 << index$5, expirationTime = expirationTimes[index$5];
          if (-1 === expirationTime) {
            if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
              expirationTimes[index$5] = computeExpirationTime(lane, currentTime);
          } else expirationTime <= currentTime && (root2.expiredLanes |= lane);
          lanes &= ~lane;
        }
        currentTime = workInProgressRoot;
        suspendedLanes = workInProgressRootRenderLanes;
        suspendedLanes = getNextLanes(
          root2,
          root2 === currentTime ? suspendedLanes : 0,
          null !== root2.cancelPendingCommit || -1 !== root2.timeoutHandle
        );
        pingedLanes = root2.callbackNode;
        if (0 === suspendedLanes || root2 === currentTime && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root2.cancelPendingCommit)
          return null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes), root2.callbackNode = null, root2.callbackPriority = 0;
        if (0 === (suspendedLanes & 3) || checkIfRootIsPrerendering(root2, suspendedLanes)) {
          currentTime = suspendedLanes & -suspendedLanes;
          if (currentTime === root2.callbackPriority) return currentTime;
          null !== pingedLanes && cancelCallback$1(pingedLanes);
          switch (lanesToEventPriority(suspendedLanes)) {
            case 2:
            case 8:
              suspendedLanes = UserBlockingPriority;
              break;
            case 32:
              suspendedLanes = NormalPriority$1;
              break;
            case 268435456:
              suspendedLanes = IdlePriority;
              break;
            default:
              suspendedLanes = NormalPriority$1;
          }
          pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root2);
          suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
          root2.callbackPriority = currentTime;
          root2.callbackNode = suspendedLanes;
          return currentTime;
        }
        null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
        root2.callbackPriority = 2;
        root2.callbackNode = null;
        return 2;
      }
      function performWorkOnRootViaSchedulerTask(root2, didTimeout) {
        if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus)
          return root2.callbackNode = null, root2.callbackPriority = 0, null;
        var originalCallbackNode = root2.callbackNode;
        if (flushPendingEffects() && root2.callbackNode !== originalCallbackNode)
          return null;
        var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
        workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
          root2,
          root2 === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0,
          null !== root2.cancelPendingCommit || -1 !== root2.timeoutHandle
        );
        if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
        performWorkOnRoot(root2, workInProgressRootRenderLanes$jscomp$0, didTimeout);
        scheduleTaskForRootDuringMicrotask(root2, now());
        return null != root2.callbackNode && root2.callbackNode === originalCallbackNode ? performWorkOnRootViaSchedulerTask.bind(null, root2) : null;
      }
      function performSyncWorkOnRoot(root2, lanes) {
        if (flushPendingEffects()) return null;
        performWorkOnRoot(root2, lanes, true);
      }
      function scheduleImmediateRootScheduleTask() {
        scheduleMicrotask(function() {
          0 !== (executionContext & 6) ? scheduleCallback$3(
            ImmediatePriority,
            processRootScheduleInImmediateTask
          ) : processRootScheduleInMicrotask();
        });
      }
      function requestTransitionLane() {
        if (0 === currentEventTransitionLane) {
          var actionScopeLane = currentEntangledLane;
          0 === actionScopeLane && (actionScopeLane = nextTransitionUpdateLane, nextTransitionUpdateLane <<= 1, 0 === (nextTransitionUpdateLane & 261888) && (nextTransitionUpdateLane = 256));
          currentEventTransitionLane = actionScopeLane;
        }
        return currentEventTransitionLane;
      }
      function coerceFormActionProp(actionProp) {
        return null == actionProp || "symbol" === typeof actionProp || "boolean" === typeof actionProp ? null : "function" === typeof actionProp ? actionProp : sanitizeURL("" + actionProp);
      }
      function createFormDataWithSubmitter(form, submitter) {
        var temp = submitter.ownerDocument.createElement("input");
        temp.name = submitter.name;
        temp.value = submitter.value;
        form.id && temp.setAttribute("form", form.id);
        submitter.parentNode.insertBefore(temp, submitter);
        form = new FormData(form);
        temp.parentNode.removeChild(temp);
        return form;
      }
      function extractEvents$1(dispatchQueue, domEventName, maybeTargetInst, nativeEvent, nativeEventTarget) {
        if ("submit" === domEventName && maybeTargetInst && maybeTargetInst.stateNode === nativeEventTarget) {
          var action = coerceFormActionProp(
            (nativeEventTarget[internalPropsKey] || null).action
          ), submitter = nativeEvent.submitter;
          submitter && (domEventName = (domEventName = submitter[internalPropsKey] || null) ? coerceFormActionProp(domEventName.formAction) : submitter.getAttribute("formAction"), null !== domEventName && (action = domEventName, submitter = null));
          var event = new SyntheticEvent(
            "action",
            "action",
            null,
            nativeEvent,
            nativeEventTarget
          );
          dispatchQueue.push({
            event,
            listeners: [
              {
                instance: null,
                listener: function() {
                  if (nativeEvent.defaultPrevented) {
                    if (0 !== currentEventTransitionLane) {
                      var formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget);
                      startHostTransition(
                        maybeTargetInst,
                        {
                          pending: true,
                          data: formData,
                          method: nativeEventTarget.method,
                          action
                        },
                        null,
                        formData
                      );
                    }
                  } else
                    "function" === typeof action && (event.preventDefault(), formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget), startHostTransition(
                      maybeTargetInst,
                      {
                        pending: true,
                        data: formData,
                        method: nativeEventTarget.method,
                        action
                      },
                      action,
                      formData
                    ));
                },
                currentTarget: nativeEventTarget
              }
            ]
          });
        }
      }
      for (i$jscomp$inline_1577 = 0; i$jscomp$inline_1577 < simpleEventPluginEvents.length; i$jscomp$inline_1577++) {
        eventName$jscomp$inline_1578 = simpleEventPluginEvents[i$jscomp$inline_1577], domEventName$jscomp$inline_1579 = eventName$jscomp$inline_1578.toLowerCase(), capitalizedEvent$jscomp$inline_1580 = eventName$jscomp$inline_1578[0].toUpperCase() + eventName$jscomp$inline_1578.slice(1);
        registerSimpleEvent(
          domEventName$jscomp$inline_1579,
          "on" + capitalizedEvent$jscomp$inline_1580
        );
      }
      var eventName$jscomp$inline_1578;
      var domEventName$jscomp$inline_1579;
      var capitalizedEvent$jscomp$inline_1580;
      var i$jscomp$inline_1577;
      registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
      registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
      registerSimpleEvent(ANIMATION_START, "onAnimationStart");
      registerSimpleEvent("dblclick", "onDoubleClick");
      registerSimpleEvent("focusin", "onFocus");
      registerSimpleEvent("focusout", "onBlur");
      registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
      registerSimpleEvent(TRANSITION_START, "onTransitionStart");
      registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
      registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
      registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
      registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
      registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
      registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
      registerTwoPhaseEvent(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(" ")
      );
      registerTwoPhaseEvent(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
        )
      );
      registerTwoPhaseEvent("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
      ]);
      registerTwoPhaseEvent(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" ")
      );
      registerTwoPhaseEvent(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" ")
      );
      registerTwoPhaseEvent(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
      );
      var mediaEventTypes = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      );
      var nonDelegatedEvents = new Set(
        "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mediaEventTypes)
      );
      function processDispatchQueue(dispatchQueue, eventSystemFlags) {
        eventSystemFlags = 0 !== (eventSystemFlags & 4);
        for (var i = 0; i < dispatchQueue.length; i++) {
          var _dispatchQueue$i = dispatchQueue[i], event = _dispatchQueue$i.event;
          _dispatchQueue$i = _dispatchQueue$i.listeners;
          a: {
            var previousInstance = void 0;
            if (eventSystemFlags)
              for (var i$jscomp$0 = _dispatchQueue$i.length - 1; 0 <= i$jscomp$0; i$jscomp$0--) {
                var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0], instance = _dispatchListeners$i.instance, currentTarget = _dispatchListeners$i.currentTarget;
                _dispatchListeners$i = _dispatchListeners$i.listener;
                if (instance !== previousInstance && event.isPropagationStopped())
                  break a;
                previousInstance = _dispatchListeners$i;
                event.currentTarget = currentTarget;
                try {
                  previousInstance(event);
                } catch (error) {
                  reportGlobalError(error);
                }
                event.currentTarget = null;
                previousInstance = instance;
              }
            else
              for (i$jscomp$0 = 0; i$jscomp$0 < _dispatchQueue$i.length; i$jscomp$0++) {
                _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
                instance = _dispatchListeners$i.instance;
                currentTarget = _dispatchListeners$i.currentTarget;
                _dispatchListeners$i = _dispatchListeners$i.listener;
                if (instance !== previousInstance && event.isPropagationStopped())
                  break a;
                previousInstance = _dispatchListeners$i;
                event.currentTarget = currentTarget;
                try {
                  previousInstance(event);
                } catch (error) {
                  reportGlobalError(error);
                }
                event.currentTarget = null;
                previousInstance = instance;
              }
          }
        }
      }
      function listenToNonDelegatedEvent(domEventName, targetElement) {
        var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
        void 0 === JSCompiler_inline_result && (JSCompiler_inline_result = targetElement[internalEventHandlersKey] = /* @__PURE__ */ new Set());
        var listenerSetKey = domEventName + "__bubble";
        JSCompiler_inline_result.has(listenerSetKey) || (addTrappedEventListener(targetElement, domEventName, 2, false), JSCompiler_inline_result.add(listenerSetKey));
      }
      function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
        var eventSystemFlags = 0;
        isCapturePhaseListener && (eventSystemFlags |= 4);
        addTrappedEventListener(
          target,
          domEventName,
          eventSystemFlags,
          isCapturePhaseListener
        );
      }
      var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
      function listenToAllSupportedEvents(rootContainerElement) {
        if (!rootContainerElement[listeningMarker]) {
          rootContainerElement[listeningMarker] = true;
          allNativeEvents.forEach(function(domEventName) {
            "selectionchange" !== domEventName && (nonDelegatedEvents.has(domEventName) || listenToNativeEvent(domEventName, false, rootContainerElement), listenToNativeEvent(domEventName, true, rootContainerElement));
          });
          var ownerDocument = 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
          null === ownerDocument || ownerDocument[listeningMarker] || (ownerDocument[listeningMarker] = true, listenToNativeEvent("selectionchange", false, ownerDocument));
        }
      }
      function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener) {
        switch (getEventPriority(domEventName)) {
          case 2:
            var listenerWrapper = dispatchDiscreteEvent;
            break;
          case 8:
            listenerWrapper = dispatchContinuousEvent;
            break;
          default:
            listenerWrapper = dispatchEvent;
        }
        eventSystemFlags = listenerWrapper.bind(
          null,
          domEventName,
          eventSystemFlags,
          targetContainer
        );
        listenerWrapper = void 0;
        !passiveBrowserEventsSupported || "touchstart" !== domEventName && "touchmove" !== domEventName && "wheel" !== domEventName || (listenerWrapper = true);
        isCapturePhaseListener ? void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
          capture: true,
          passive: listenerWrapper
        }) : targetContainer.addEventListener(domEventName, eventSystemFlags, true) : void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
          passive: listenerWrapper
        }) : targetContainer.addEventListener(domEventName, eventSystemFlags, false);
      }
      function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst$jscomp$0, targetContainer) {
        var ancestorInst = targetInst$jscomp$0;
        if (0 === (eventSystemFlags & 1) && 0 === (eventSystemFlags & 2) && null !== targetInst$jscomp$0)
          a: for (; ; ) {
            if (null === targetInst$jscomp$0) return;
            var nodeTag = targetInst$jscomp$0.tag;
            if (3 === nodeTag || 4 === nodeTag) {
              var container2 = targetInst$jscomp$0.stateNode.containerInfo;
              if (container2 === targetContainer) break;
              if (4 === nodeTag)
                for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
                  var grandTag = nodeTag.tag;
                  if ((3 === grandTag || 4 === grandTag) && nodeTag.stateNode.containerInfo === targetContainer)
                    return;
                  nodeTag = nodeTag.return;
                }
              for (; null !== container2; ) {
                nodeTag = getClosestInstanceFromNode(container2);
                if (null === nodeTag) return;
                grandTag = nodeTag.tag;
                if (5 === grandTag || 6 === grandTag || 26 === grandTag || 27 === grandTag) {
                  targetInst$jscomp$0 = ancestorInst = nodeTag;
                  continue a;
                }
                container2 = container2.parentNode;
              }
            }
            targetInst$jscomp$0 = targetInst$jscomp$0.return;
          }
        batchedUpdates$1(function() {
          var targetInst = ancestorInst, nativeEventTarget = getEventTarget(nativeEvent), dispatchQueue = [];
          a: {
            var reactName = topLevelEventsToReactNames.get(domEventName);
            if (void 0 !== reactName) {
              var SyntheticEventCtor = SyntheticEvent, reactEventType = domEventName;
              switch (domEventName) {
                case "keypress":
                  if (0 === getEventCharCode(nativeEvent)) break a;
                case "keydown":
                case "keyup":
                  SyntheticEventCtor = SyntheticKeyboardEvent;
                  break;
                case "focusin":
                  reactEventType = "focus";
                  SyntheticEventCtor = SyntheticFocusEvent;
                  break;
                case "focusout":
                  reactEventType = "blur";
                  SyntheticEventCtor = SyntheticFocusEvent;
                  break;
                case "beforeblur":
                case "afterblur":
                  SyntheticEventCtor = SyntheticFocusEvent;
                  break;
                case "click":
                  if (2 === nativeEvent.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  SyntheticEventCtor = SyntheticMouseEvent;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  SyntheticEventCtor = SyntheticDragEvent;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  SyntheticEventCtor = SyntheticTouchEvent;
                  break;
                case ANIMATION_END:
                case ANIMATION_ITERATION:
                case ANIMATION_START:
                  SyntheticEventCtor = SyntheticAnimationEvent;
                  break;
                case TRANSITION_END:
                  SyntheticEventCtor = SyntheticTransitionEvent;
                  break;
                case "scroll":
                case "scrollend":
                  SyntheticEventCtor = SyntheticUIEvent;
                  break;
                case "wheel":
                  SyntheticEventCtor = SyntheticWheelEvent;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  SyntheticEventCtor = SyntheticClipboardEvent;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  SyntheticEventCtor = SyntheticPointerEvent;
                  break;
                case "toggle":
                case "beforetoggle":
                  SyntheticEventCtor = SyntheticToggleEvent;
              }
              var inCapturePhase = 0 !== (eventSystemFlags & 4), accumulateTargetOnly = !inCapturePhase && ("scroll" === domEventName || "scrollend" === domEventName), reactEventName = inCapturePhase ? null !== reactName ? reactName + "Capture" : null : reactName;
              inCapturePhase = [];
              for (var instance = targetInst, lastHostComponent; null !== instance; ) {
                var _instance = instance;
                lastHostComponent = _instance.stateNode;
                _instance = _instance.tag;
                5 !== _instance && 26 !== _instance && 27 !== _instance || null === lastHostComponent || null === reactEventName || (_instance = getListener(instance, reactEventName), null != _instance && inCapturePhase.push(
                  createDispatchListener(instance, _instance, lastHostComponent)
                ));
                if (accumulateTargetOnly) break;
                instance = instance.return;
              }
              0 < inCapturePhase.length && (reactName = new SyntheticEventCtor(
                reactName,
                reactEventType,
                null,
                nativeEvent,
                nativeEventTarget
              ), dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
            }
          }
          if (0 === (eventSystemFlags & 7)) {
            a: {
              reactName = "mouseover" === domEventName || "pointerover" === domEventName;
              SyntheticEventCtor = "mouseout" === domEventName || "pointerout" === domEventName;
              if (reactName && nativeEvent !== currentReplayingEvent && (reactEventType = nativeEvent.relatedTarget || nativeEvent.fromElement) && (getClosestInstanceFromNode(reactEventType) || reactEventType[internalContainerInstanceKey]))
                break a;
              if (SyntheticEventCtor || reactName) {
                reactName = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget : (reactName = nativeEventTarget.ownerDocument) ? reactName.defaultView || reactName.parentWindow : window;
                if (SyntheticEventCtor) {
                  if (reactEventType = nativeEvent.relatedTarget || nativeEvent.toElement, SyntheticEventCtor = targetInst, reactEventType = reactEventType ? getClosestInstanceFromNode(reactEventType) : null, null !== reactEventType && (accumulateTargetOnly = getNearestMountedFiber(reactEventType), inCapturePhase = reactEventType.tag, reactEventType !== accumulateTargetOnly || 5 !== inCapturePhase && 27 !== inCapturePhase && 6 !== inCapturePhase))
                    reactEventType = null;
                } else SyntheticEventCtor = null, reactEventType = targetInst;
                if (SyntheticEventCtor !== reactEventType) {
                  inCapturePhase = SyntheticMouseEvent;
                  _instance = "onMouseLeave";
                  reactEventName = "onMouseEnter";
                  instance = "mouse";
                  if ("pointerout" === domEventName || "pointerover" === domEventName)
                    inCapturePhase = SyntheticPointerEvent, _instance = "onPointerLeave", reactEventName = "onPointerEnter", instance = "pointer";
                  accumulateTargetOnly = null == SyntheticEventCtor ? reactName : getNodeFromInstance(SyntheticEventCtor);
                  lastHostComponent = null == reactEventType ? reactName : getNodeFromInstance(reactEventType);
                  reactName = new inCapturePhase(
                    _instance,
                    instance + "leave",
                    SyntheticEventCtor,
                    nativeEvent,
                    nativeEventTarget
                  );
                  reactName.target = accumulateTargetOnly;
                  reactName.relatedTarget = lastHostComponent;
                  _instance = null;
                  getClosestInstanceFromNode(nativeEventTarget) === targetInst && (inCapturePhase = new inCapturePhase(
                    reactEventName,
                    instance + "enter",
                    reactEventType,
                    nativeEvent,
                    nativeEventTarget
                  ), inCapturePhase.target = lastHostComponent, inCapturePhase.relatedTarget = accumulateTargetOnly, _instance = inCapturePhase);
                  accumulateTargetOnly = _instance;
                  if (SyntheticEventCtor && reactEventType)
                    b: {
                      inCapturePhase = getParent;
                      reactEventName = SyntheticEventCtor;
                      instance = reactEventType;
                      lastHostComponent = 0;
                      for (_instance = reactEventName; _instance; _instance = inCapturePhase(_instance))
                        lastHostComponent++;
                      _instance = 0;
                      for (var tempB = instance; tempB; tempB = inCapturePhase(tempB))
                        _instance++;
                      for (; 0 < lastHostComponent - _instance; )
                        reactEventName = inCapturePhase(reactEventName), lastHostComponent--;
                      for (; 0 < _instance - lastHostComponent; )
                        instance = inCapturePhase(instance), _instance--;
                      for (; lastHostComponent--; ) {
                        if (reactEventName === instance || null !== instance && reactEventName === instance.alternate) {
                          inCapturePhase = reactEventName;
                          break b;
                        }
                        reactEventName = inCapturePhase(reactEventName);
                        instance = inCapturePhase(instance);
                      }
                      inCapturePhase = null;
                    }
                  else inCapturePhase = null;
                  null !== SyntheticEventCtor && accumulateEnterLeaveListenersForEvent(
                    dispatchQueue,
                    reactName,
                    SyntheticEventCtor,
                    inCapturePhase,
                    false
                  );
                  null !== reactEventType && null !== accumulateTargetOnly && accumulateEnterLeaveListenersForEvent(
                    dispatchQueue,
                    accumulateTargetOnly,
                    reactEventType,
                    inCapturePhase,
                    true
                  );
                }
              }
            }
            a: {
              reactName = targetInst ? getNodeFromInstance(targetInst) : window;
              SyntheticEventCtor = reactName.nodeName && reactName.nodeName.toLowerCase();
              if ("select" === SyntheticEventCtor || "input" === SyntheticEventCtor && "file" === reactName.type)
                var getTargetInstFunc = getTargetInstForChangeEvent;
              else if (isTextInputElement(reactName))
                if (isInputEventSupported)
                  getTargetInstFunc = getTargetInstForInputOrChangeEvent;
                else {
                  getTargetInstFunc = getTargetInstForInputEventPolyfill;
                  var handleEventFunc = handleEventsForInputEventPolyfill;
                }
              else
                SyntheticEventCtor = reactName.nodeName, !SyntheticEventCtor || "input" !== SyntheticEventCtor.toLowerCase() || "checkbox" !== reactName.type && "radio" !== reactName.type ? targetInst && isCustomElement(targetInst.elementType) && (getTargetInstFunc = getTargetInstForChangeEvent) : getTargetInstFunc = getTargetInstForClickEvent;
              if (getTargetInstFunc && (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))) {
                createAndAccumulateChangeEvent(
                  dispatchQueue,
                  getTargetInstFunc,
                  nativeEvent,
                  nativeEventTarget
                );
                break a;
              }
              handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
              "focusout" === domEventName && targetInst && "number" === reactName.type && null != targetInst.memoizedProps.value && setDefaultValue(reactName, "number", reactName.value);
            }
            handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
            switch (domEventName) {
              case "focusin":
                if (isTextInputElement(handleEventFunc) || "true" === handleEventFunc.contentEditable)
                  activeElement = handleEventFunc, activeElementInst = targetInst, lastSelection = null;
                break;
              case "focusout":
                lastSelection = activeElementInst = activeElement = null;
                break;
              case "mousedown":
                mouseDown = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                mouseDown = false;
                constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
                break;
              case "selectionchange":
                if (skipSelectionChangeEvent) break;
              case "keydown":
              case "keyup":
                constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
            }
            var fallbackData;
            if (canUseCompositionEvent)
              b: {
                switch (domEventName) {
                  case "compositionstart":
                    var eventType = "onCompositionStart";
                    break b;
                  case "compositionend":
                    eventType = "onCompositionEnd";
                    break b;
                  case "compositionupdate":
                    eventType = "onCompositionUpdate";
                    break b;
                }
                eventType = void 0;
              }
            else
              isComposing ? isFallbackCompositionEnd(domEventName, nativeEvent) && (eventType = "onCompositionEnd") : "keydown" === domEventName && 229 === nativeEvent.keyCode && (eventType = "onCompositionStart");
            eventType && (useFallbackCompositionData && "ko" !== nativeEvent.locale && (isComposing || "onCompositionStart" !== eventType ? "onCompositionEnd" === eventType && isComposing && (fallbackData = getData()) : (root = nativeEventTarget, startText = "value" in root ? root.value : root.textContent, isComposing = true)), handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType), 0 < handleEventFunc.length && (eventType = new SyntheticCompositionEvent(
              eventType,
              domEventName,
              null,
              nativeEvent,
              nativeEventTarget
            ), dispatchQueue.push({ event: eventType, listeners: handleEventFunc }), fallbackData ? eventType.data = fallbackData : (fallbackData = getDataFromCustomEvent(nativeEvent), null !== fallbackData && (eventType.data = fallbackData))));
            if (fallbackData = canUseTextInputEvent ? getNativeBeforeInputChars(domEventName, nativeEvent) : getFallbackBeforeInputChars(domEventName, nativeEvent))
              eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput"), 0 < eventType.length && (handleEventFunc = new SyntheticCompositionEvent(
                "onBeforeInput",
                "beforeinput",
                null,
                nativeEvent,
                nativeEventTarget
              ), dispatchQueue.push({
                event: handleEventFunc,
                listeners: eventType
              }), handleEventFunc.data = fallbackData);
            extractEvents$1(
              dispatchQueue,
              domEventName,
              targetInst,
              nativeEvent,
              nativeEventTarget
            );
          }
          processDispatchQueue(dispatchQueue, eventSystemFlags);
        });
      }
      function createDispatchListener(instance, listener, currentTarget) {
        return {
          instance,
          listener,
          currentTarget
        };
      }
      function accumulateTwoPhaseListeners(targetFiber, reactName) {
        for (var captureName = reactName + "Capture", listeners = []; null !== targetFiber; ) {
          var _instance2 = targetFiber, stateNode = _instance2.stateNode;
          _instance2 = _instance2.tag;
          5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2 || null === stateNode || (_instance2 = getListener(targetFiber, captureName), null != _instance2 && listeners.unshift(
            createDispatchListener(targetFiber, _instance2, stateNode)
          ), _instance2 = getListener(targetFiber, reactName), null != _instance2 && listeners.push(
            createDispatchListener(targetFiber, _instance2, stateNode)
          ));
          if (3 === targetFiber.tag) return listeners;
          targetFiber = targetFiber.return;
        }
        return [];
      }
      function getParent(inst) {
        if (null === inst) return null;
        do
          inst = inst.return;
        while (inst && 5 !== inst.tag && 27 !== inst.tag);
        return inst ? inst : null;
      }
      function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common2, inCapturePhase) {
        for (var registrationName = event._reactName, listeners = []; null !== target && target !== common2; ) {
          var _instance3 = target, alternate = _instance3.alternate, stateNode = _instance3.stateNode;
          _instance3 = _instance3.tag;
          if (null !== alternate && alternate === common2) break;
          5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3 || null === stateNode || (alternate = stateNode, inCapturePhase ? (stateNode = getListener(target, registrationName), null != stateNode && listeners.unshift(
            createDispatchListener(target, stateNode, alternate)
          )) : inCapturePhase || (stateNode = getListener(target, registrationName), null != stateNode && listeners.push(
            createDispatchListener(target, stateNode, alternate)
          )));
          target = target.return;
        }
        0 !== listeners.length && dispatchQueue.push({ event, listeners });
      }
      var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
      var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
      function normalizeMarkupForTextOrAttribute(markup) {
        return ("string" === typeof markup ? markup : "" + markup).replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
      }
      function checkForUnmatchedText(serverText, clientText) {
        clientText = normalizeMarkupForTextOrAttribute(clientText);
        return normalizeMarkupForTextOrAttribute(serverText) === clientText ? true : false;
      }
      function setProp(domElement, tag, key, value, props, prevValue) {
        switch (key) {
          case "children":
            "string" === typeof value ? "body" === tag || "textarea" === tag && "" === value || setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && "body" !== tag && setTextContent(domElement, "" + value);
            break;
          case "className":
            setValueForKnownAttribute(domElement, "class", value);
            break;
          case "tabIndex":
            setValueForKnownAttribute(domElement, "tabindex", value);
            break;
          case "dir":
          case "role":
          case "viewBox":
          case "width":
          case "height":
            setValueForKnownAttribute(domElement, key, value);
            break;
          case "style":
            setValueForStyles(domElement, value, prevValue);
            break;
          case "data":
            if ("object" !== tag) {
              setValueForKnownAttribute(domElement, "data", value);
              break;
            }
          case "src":
          case "href":
            if ("" === value && ("a" !== tag || "href" !== key)) {
              domElement.removeAttribute(key);
              break;
            }
            if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) {
              domElement.removeAttribute(key);
              break;
            }
            value = sanitizeURL("" + value);
            domElement.setAttribute(key, value);
            break;
          case "action":
          case "formAction":
            if ("function" === typeof value) {
              domElement.setAttribute(
                key,
                "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
              );
              break;
            } else
              "function" === typeof prevValue && ("formAction" === key ? ("input" !== tag && setProp(domElement, tag, "name", props.name, props, null), setProp(
                domElement,
                tag,
                "formEncType",
                props.formEncType,
                props,
                null
              ), setProp(
                domElement,
                tag,
                "formMethod",
                props.formMethod,
                props,
                null
              ), setProp(
                domElement,
                tag,
                "formTarget",
                props.formTarget,
                props,
                null
              )) : (setProp(domElement, tag, "encType", props.encType, props, null), setProp(domElement, tag, "method", props.method, props, null), setProp(domElement, tag, "target", props.target, props, null)));
            if (null == value || "symbol" === typeof value || "boolean" === typeof value) {
              domElement.removeAttribute(key);
              break;
            }
            value = sanitizeURL("" + value);
            domElement.setAttribute(key, value);
            break;
          case "onClick":
            null != value && (domElement.onclick = noop$1);
            break;
          case "onScroll":
            null != value && listenToNonDelegatedEvent("scroll", domElement);
            break;
          case "onScrollEnd":
            null != value && listenToNonDelegatedEvent("scrollend", domElement);
            break;
          case "dangerouslySetInnerHTML":
            if (null != value) {
              if ("object" !== typeof value || !("__html" in value))
                throw Error(formatProdErrorMessage(61));
              key = value.__html;
              if (null != key) {
                if (null != props.children) throw Error(formatProdErrorMessage(60));
                domElement.innerHTML = key;
              }
            }
            break;
          case "multiple":
            domElement.multiple = value && "function" !== typeof value && "symbol" !== typeof value;
            break;
          case "muted":
            domElement.muted = value && "function" !== typeof value && "symbol" !== typeof value;
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "ref":
            break;
          case "autoFocus":
            break;
          case "xlinkHref":
            if (null == value || "function" === typeof value || "boolean" === typeof value || "symbol" === typeof value) {
              domElement.removeAttribute("xlink:href");
              break;
            }
            key = sanitizeURL("" + value);
            domElement.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              key
            );
            break;
          case "contentEditable":
          case "spellCheck":
          case "draggable":
          case "value":
          case "autoReverse":
          case "externalResourcesRequired":
          case "focusable":
          case "preserveAlpha":
            null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "" + value) : domElement.removeAttribute(key);
            break;
          case "inert":
          case "allowFullScreen":
          case "async":
          case "autoPlay":
          case "controls":
          case "default":
          case "defer":
          case "disabled":
          case "disablePictureInPicture":
          case "disableRemotePlayback":
          case "formNoValidate":
          case "hidden":
          case "loop":
          case "noModule":
          case "noValidate":
          case "open":
          case "playsInline":
          case "readOnly":
          case "required":
          case "reversed":
          case "scoped":
          case "seamless":
          case "itemScope":
            value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "") : domElement.removeAttribute(key);
            break;
          case "capture":
          case "download":
            true === value ? domElement.setAttribute(key, "") : false !== value && null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
            break;
          case "cols":
          case "rows":
          case "size":
          case "span":
            null != value && "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
            break;
          case "rowSpan":
          case "start":
            null == value || "function" === typeof value || "symbol" === typeof value || isNaN(value) ? domElement.removeAttribute(key) : domElement.setAttribute(key, value);
            break;
          case "popover":
            listenToNonDelegatedEvent("beforetoggle", domElement);
            listenToNonDelegatedEvent("toggle", domElement);
            setValueForAttribute(domElement, "popover", value);
            break;
          case "xlinkActuate":
            setValueForNamespacedAttribute(
              domElement,
              "http://www.w3.org/1999/xlink",
              "xlink:actuate",
              value
            );
            break;
          case "xlinkArcrole":
            setValueForNamespacedAttribute(
              domElement,
              "http://www.w3.org/1999/xlink",
              "xlink:arcrole",
              value
            );
            break;
          case "xlinkRole":
            setValueForNamespacedAttribute(
              domElement,
              "http://www.w3.org/1999/xlink",
              "xlink:role",
              value
            );
            break;
          case "xlinkShow":
            setValueForNamespacedAttribute(
              domElement,
              "http://www.w3.org/1999/xlink",
              "xlink:show",
              value
            );
            break;
          case "xlinkTitle":
            setValueForNamespacedAttribute(
              domElement,
              "http://www.w3.org/1999/xlink",
              "xlink:title",
              value
            );
            break;
          case "xlinkType":
            setValueForNamespacedAttribute(
              domElement,
              "http://www.w3.org/1999/xlink",
              "xlink:type",
              value
            );
            break;
          case "xmlBase":
            setValueForNamespacedAttribute(
              domElement,
              "http://www.w3.org/XML/1998/namespace",
              "xml:base",
              value
            );
            break;
          case "xmlLang":
            setValueForNamespacedAttribute(
              domElement,
              "http://www.w3.org/XML/1998/namespace",
              "xml:lang",
              value
            );
            break;
          case "xmlSpace":
            setValueForNamespacedAttribute(
              domElement,
              "http://www.w3.org/XML/1998/namespace",
              "xml:space",
              value
            );
            break;
          case "is":
            setValueForAttribute(domElement, "is", value);
            break;
          case "innerText":
          case "textContent":
            break;
          default:
            if (!(2 < key.length) || "o" !== key[0] && "O" !== key[0] || "n" !== key[1] && "N" !== key[1])
              key = aliases2.get(key) || key, setValueForAttribute(domElement, key, value);
        }
      }
      function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
        switch (key) {
          case "style":
            setValueForStyles(domElement, value, prevValue);
            break;
          case "dangerouslySetInnerHTML":
            if (null != value) {
              if ("object" !== typeof value || !("__html" in value))
                throw Error(formatProdErrorMessage(61));
              key = value.__html;
              if (null != key) {
                if (null != props.children) throw Error(formatProdErrorMessage(60));
                domElement.innerHTML = key;
              }
            }
            break;
          case "children":
            "string" === typeof value ? setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && setTextContent(domElement, "" + value);
            break;
          case "onScroll":
            null != value && listenToNonDelegatedEvent("scroll", domElement);
            break;
          case "onScrollEnd":
            null != value && listenToNonDelegatedEvent("scrollend", domElement);
            break;
          case "onClick":
            null != value && (domElement.onclick = noop$1);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
          case "innerHTML":
          case "ref":
            break;
          case "innerText":
          case "textContent":
            break;
          default:
            if (!registrationNameDependencies.hasOwnProperty(key))
              a: {
                if ("o" === key[0] && "n" === key[1] && (props = key.endsWith("Capture"), tag = key.slice(2, props ? key.length - 7 : void 0), prevValue = domElement[internalPropsKey] || null, prevValue = null != prevValue ? prevValue[key] : null, "function" === typeof prevValue && domElement.removeEventListener(tag, prevValue, props), "function" === typeof value)) {
                  "function" !== typeof prevValue && null !== prevValue && (key in domElement ? domElement[key] = null : domElement.hasAttribute(key) && domElement.removeAttribute(key));
                  domElement.addEventListener(tag, value, props);
                  break a;
                }
                key in domElement ? domElement[key] = value : true === value ? domElement.setAttribute(key, "") : setValueForAttribute(domElement, key, value);
              }
        }
      }
      function setInitialProperties(domElement, tag, props) {
        switch (tag) {
          case "div":
          case "span":
          case "svg":
          case "path":
          case "a":
          case "g":
          case "p":
          case "li":
            break;
          case "img":
            listenToNonDelegatedEvent("error", domElement);
            listenToNonDelegatedEvent("load", domElement);
            var hasSrc = false, hasSrcSet = false, propKey;
            for (propKey in props)
              if (props.hasOwnProperty(propKey)) {
                var propValue = props[propKey];
                if (null != propValue)
                  switch (propKey) {
                    case "src":
                      hasSrc = true;
                      break;
                    case "srcSet":
                      hasSrcSet = true;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(formatProdErrorMessage(137, tag));
                    default:
                      setProp(domElement, tag, propKey, propValue, props, null);
                  }
              }
            hasSrcSet && setProp(domElement, tag, "srcSet", props.srcSet, props, null);
            hasSrc && setProp(domElement, tag, "src", props.src, props, null);
            return;
          case "input":
            listenToNonDelegatedEvent("invalid", domElement);
            var defaultValue = propKey = propValue = hasSrcSet = null, checked = null, defaultChecked = null;
            for (hasSrc in props)
              if (props.hasOwnProperty(hasSrc)) {
                var propValue$184 = props[hasSrc];
                if (null != propValue$184)
                  switch (hasSrc) {
                    case "name":
                      hasSrcSet = propValue$184;
                      break;
                    case "type":
                      propValue = propValue$184;
                      break;
                    case "checked":
                      checked = propValue$184;
                      break;
                    case "defaultChecked":
                      defaultChecked = propValue$184;
                      break;
                    case "value":
                      propKey = propValue$184;
                      break;
                    case "defaultValue":
                      defaultValue = propValue$184;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (null != propValue$184)
                        throw Error(formatProdErrorMessage(137, tag));
                      break;
                    default:
                      setProp(domElement, tag, hasSrc, propValue$184, props, null);
                  }
              }
            initInput(
              domElement,
              propKey,
              defaultValue,
              checked,
              defaultChecked,
              propValue,
              hasSrcSet,
              false
            );
            return;
          case "select":
            listenToNonDelegatedEvent("invalid", domElement);
            hasSrc = propValue = propKey = null;
            for (hasSrcSet in props)
              if (props.hasOwnProperty(hasSrcSet) && (defaultValue = props[hasSrcSet], null != defaultValue))
                switch (hasSrcSet) {
                  case "value":
                    propKey = defaultValue;
                    break;
                  case "defaultValue":
                    propValue = defaultValue;
                    break;
                  case "multiple":
                    hasSrc = defaultValue;
                  default:
                    setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
                }
            tag = propKey;
            props = propValue;
            domElement.multiple = !!hasSrc;
            null != tag ? updateOptions(domElement, !!hasSrc, tag, false) : null != props && updateOptions(domElement, !!hasSrc, props, true);
            return;
          case "textarea":
            listenToNonDelegatedEvent("invalid", domElement);
            propKey = hasSrcSet = hasSrc = null;
            for (propValue in props)
              if (props.hasOwnProperty(propValue) && (defaultValue = props[propValue], null != defaultValue))
                switch (propValue) {
                  case "value":
                    hasSrc = defaultValue;
                    break;
                  case "defaultValue":
                    hasSrcSet = defaultValue;
                    break;
                  case "children":
                    propKey = defaultValue;
                    break;
                  case "dangerouslySetInnerHTML":
                    if (null != defaultValue) throw Error(formatProdErrorMessage(91));
                    break;
                  default:
                    setProp(domElement, tag, propValue, defaultValue, props, null);
                }
            initTextarea(domElement, hasSrc, hasSrcSet, propKey);
            return;
          case "option":
            for (checked in props)
              if (props.hasOwnProperty(checked) && (hasSrc = props[checked], null != hasSrc))
                switch (checked) {
                  case "selected":
                    domElement.selected = hasSrc && "function" !== typeof hasSrc && "symbol" !== typeof hasSrc;
                    break;
                  default:
                    setProp(domElement, tag, checked, hasSrc, props, null);
                }
            return;
          case "dialog":
            listenToNonDelegatedEvent("beforetoggle", domElement);
            listenToNonDelegatedEvent("toggle", domElement);
            listenToNonDelegatedEvent("cancel", domElement);
            listenToNonDelegatedEvent("close", domElement);
            break;
          case "iframe":
          case "object":
            listenToNonDelegatedEvent("load", domElement);
            break;
          case "video":
          case "audio":
            for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
              listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
            break;
          case "image":
            listenToNonDelegatedEvent("error", domElement);
            listenToNonDelegatedEvent("load", domElement);
            break;
          case "details":
            listenToNonDelegatedEvent("toggle", domElement);
            break;
          case "embed":
          case "source":
          case "link":
            listenToNonDelegatedEvent("error", domElement), listenToNonDelegatedEvent("load", domElement);
          case "area":
          case "base":
          case "br":
          case "col":
          case "hr":
          case "keygen":
          case "meta":
          case "param":
          case "track":
          case "wbr":
          case "menuitem":
            for (defaultChecked in props)
              if (props.hasOwnProperty(defaultChecked) && (hasSrc = props[defaultChecked], null != hasSrc))
                switch (defaultChecked) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(formatProdErrorMessage(137, tag));
                  default:
                    setProp(domElement, tag, defaultChecked, hasSrc, props, null);
                }
            return;
          default:
            if (isCustomElement(tag)) {
              for (propValue$184 in props)
                props.hasOwnProperty(propValue$184) && (hasSrc = props[propValue$184], void 0 !== hasSrc && setPropOnCustomElement(
                  domElement,
                  tag,
                  propValue$184,
                  hasSrc,
                  props,
                  void 0
                ));
              return;
            }
        }
        for (defaultValue in props)
          props.hasOwnProperty(defaultValue) && (hasSrc = props[defaultValue], null != hasSrc && setProp(domElement, tag, defaultValue, hasSrc, props, null));
      }
      function updateProperties(domElement, tag, lastProps, nextProps) {
        switch (tag) {
          case "div":
          case "span":
          case "svg":
          case "path":
          case "a":
          case "g":
          case "p":
          case "li":
            break;
          case "input":
            var name = null, type = null, value = null, defaultValue = null, lastDefaultValue = null, checked = null, defaultChecked = null;
            for (propKey in lastProps) {
              var lastProp = lastProps[propKey];
              if (lastProps.hasOwnProperty(propKey) && null != lastProp)
                switch (propKey) {
                  case "checked":
                    break;
                  case "value":
                    break;
                  case "defaultValue":
                    lastDefaultValue = lastProp;
                  default:
                    nextProps.hasOwnProperty(propKey) || setProp(domElement, tag, propKey, null, nextProps, lastProp);
                }
            }
            for (var propKey$201 in nextProps) {
              var propKey = nextProps[propKey$201];
              lastProp = lastProps[propKey$201];
              if (nextProps.hasOwnProperty(propKey$201) && (null != propKey || null != lastProp))
                switch (propKey$201) {
                  case "type":
                    type = propKey;
                    break;
                  case "name":
                    name = propKey;
                    break;
                  case "checked":
                    checked = propKey;
                    break;
                  case "defaultChecked":
                    defaultChecked = propKey;
                    break;
                  case "value":
                    value = propKey;
                    break;
                  case "defaultValue":
                    defaultValue = propKey;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (null != propKey)
                      throw Error(formatProdErrorMessage(137, tag));
                    break;
                  default:
                    propKey !== lastProp && setProp(
                      domElement,
                      tag,
                      propKey$201,
                      propKey,
                      nextProps,
                      lastProp
                    );
                }
            }
            updateInput(
              domElement,
              value,
              defaultValue,
              lastDefaultValue,
              checked,
              defaultChecked,
              type,
              name
            );
            return;
          case "select":
            propKey = value = defaultValue = propKey$201 = null;
            for (type in lastProps)
              if (lastDefaultValue = lastProps[type], lastProps.hasOwnProperty(type) && null != lastDefaultValue)
                switch (type) {
                  case "value":
                    break;
                  case "multiple":
                    propKey = lastDefaultValue;
                  default:
                    nextProps.hasOwnProperty(type) || setProp(
                      domElement,
                      tag,
                      type,
                      null,
                      nextProps,
                      lastDefaultValue
                    );
                }
            for (name in nextProps)
              if (type = nextProps[name], lastDefaultValue = lastProps[name], nextProps.hasOwnProperty(name) && (null != type || null != lastDefaultValue))
                switch (name) {
                  case "value":
                    propKey$201 = type;
                    break;
                  case "defaultValue":
                    defaultValue = type;
                    break;
                  case "multiple":
                    value = type;
                  default:
                    type !== lastDefaultValue && setProp(
                      domElement,
                      tag,
                      name,
                      type,
                      nextProps,
                      lastDefaultValue
                    );
                }
            tag = defaultValue;
            lastProps = value;
            nextProps = propKey;
            null != propKey$201 ? updateOptions(domElement, !!lastProps, propKey$201, false) : !!nextProps !== !!lastProps && (null != tag ? updateOptions(domElement, !!lastProps, tag, true) : updateOptions(domElement, !!lastProps, lastProps ? [] : "", false));
            return;
          case "textarea":
            propKey = propKey$201 = null;
            for (defaultValue in lastProps)
              if (name = lastProps[defaultValue], lastProps.hasOwnProperty(defaultValue) && null != name && !nextProps.hasOwnProperty(defaultValue))
                switch (defaultValue) {
                  case "value":
                    break;
                  case "children":
                    break;
                  default:
                    setProp(domElement, tag, defaultValue, null, nextProps, name);
                }
            for (value in nextProps)
              if (name = nextProps[value], type = lastProps[value], nextProps.hasOwnProperty(value) && (null != name || null != type))
                switch (value) {
                  case "value":
                    propKey$201 = name;
                    break;
                  case "defaultValue":
                    propKey = name;
                    break;
                  case "children":
                    break;
                  case "dangerouslySetInnerHTML":
                    if (null != name) throw Error(formatProdErrorMessage(91));
                    break;
                  default:
                    name !== type && setProp(domElement, tag, value, name, nextProps, type);
                }
            updateTextarea(domElement, propKey$201, propKey);
            return;
          case "option":
            for (var propKey$217 in lastProps)
              if (propKey$201 = lastProps[propKey$217], lastProps.hasOwnProperty(propKey$217) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$217))
                switch (propKey$217) {
                  case "selected":
                    domElement.selected = false;
                    break;
                  default:
                    setProp(
                      domElement,
                      tag,
                      propKey$217,
                      null,
                      nextProps,
                      propKey$201
                    );
                }
            for (lastDefaultValue in nextProps)
              if (propKey$201 = nextProps[lastDefaultValue], propKey = lastProps[lastDefaultValue], nextProps.hasOwnProperty(lastDefaultValue) && propKey$201 !== propKey && (null != propKey$201 || null != propKey))
                switch (lastDefaultValue) {
                  case "selected":
                    domElement.selected = propKey$201 && "function" !== typeof propKey$201 && "symbol" !== typeof propKey$201;
                    break;
                  default:
                    setProp(
                      domElement,
                      tag,
                      lastDefaultValue,
                      propKey$201,
                      nextProps,
                      propKey
                    );
                }
            return;
          case "img":
          case "link":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "keygen":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
          case "menuitem":
            for (var propKey$222 in lastProps)
              propKey$201 = lastProps[propKey$222], lastProps.hasOwnProperty(propKey$222) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$222) && setProp(domElement, tag, propKey$222, null, nextProps, propKey$201);
            for (checked in nextProps)
              if (propKey$201 = nextProps[checked], propKey = lastProps[checked], nextProps.hasOwnProperty(checked) && propKey$201 !== propKey && (null != propKey$201 || null != propKey))
                switch (checked) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (null != propKey$201)
                      throw Error(formatProdErrorMessage(137, tag));
                    break;
                  default:
                    setProp(
                      domElement,
                      tag,
                      checked,
                      propKey$201,
                      nextProps,
                      propKey
                    );
                }
            return;
          default:
            if (isCustomElement(tag)) {
              for (var propKey$227 in lastProps)
                propKey$201 = lastProps[propKey$227], lastProps.hasOwnProperty(propKey$227) && void 0 !== propKey$201 && !nextProps.hasOwnProperty(propKey$227) && setPropOnCustomElement(
                  domElement,
                  tag,
                  propKey$227,
                  void 0,
                  nextProps,
                  propKey$201
                );
              for (defaultChecked in nextProps)
                propKey$201 = nextProps[defaultChecked], propKey = lastProps[defaultChecked], !nextProps.hasOwnProperty(defaultChecked) || propKey$201 === propKey || void 0 === propKey$201 && void 0 === propKey || setPropOnCustomElement(
                  domElement,
                  tag,
                  defaultChecked,
                  propKey$201,
                  nextProps,
                  propKey
                );
              return;
            }
        }
        for (var propKey$232 in lastProps)
          propKey$201 = lastProps[propKey$232], lastProps.hasOwnProperty(propKey$232) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$232) && setProp(domElement, tag, propKey$232, null, nextProps, propKey$201);
        for (lastProp in nextProps)
          propKey$201 = nextProps[lastProp], propKey = lastProps[lastProp], !nextProps.hasOwnProperty(lastProp) || propKey$201 === propKey || null == propKey$201 && null == propKey || setProp(domElement, tag, lastProp, propKey$201, nextProps, propKey);
      }
      function isLikelyStaticResource(initiatorType) {
        switch (initiatorType) {
          case "css":
          case "script":
          case "font":
          case "img":
          case "image":
          case "input":
          case "link":
            return true;
          default:
            return false;
        }
      }
      function estimateBandwidth() {
        if ("function" === typeof performance.getEntriesByType) {
          for (var count = 0, bits = 0, resourceEntries = performance.getEntriesByType("resource"), i = 0; i < resourceEntries.length; i++) {
            var entry = resourceEntries[i], transferSize = entry.transferSize, initiatorType = entry.initiatorType, duration2 = entry.duration;
            if (transferSize && duration2 && isLikelyStaticResource(initiatorType)) {
              initiatorType = 0;
              duration2 = entry.responseEnd;
              for (i += 1; i < resourceEntries.length; i++) {
                var overlapEntry = resourceEntries[i], overlapStartTime = overlapEntry.startTime;
                if (overlapStartTime > duration2) break;
                var overlapTransferSize = overlapEntry.transferSize, overlapInitiatorType = overlapEntry.initiatorType;
                overlapTransferSize && isLikelyStaticResource(overlapInitiatorType) && (overlapEntry = overlapEntry.responseEnd, initiatorType += overlapTransferSize * (overlapEntry < duration2 ? 1 : (duration2 - overlapStartTime) / (overlapEntry - overlapStartTime)));
              }
              --i;
              bits += 8 * (transferSize + initiatorType) / (entry.duration / 1e3);
              count++;
              if (10 < count) break;
            }
          }
          if (0 < count) return bits / count / 1e6;
        }
        return navigator.connection && (count = navigator.connection.downlink, "number" === typeof count) ? count : 5;
      }
      var eventsEnabled = null;
      var selectionInformation = null;
      function getOwnerDocumentFromRootContainer(rootContainerElement) {
        return 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
      }
      function getOwnHostContext(namespaceURI) {
        switch (namespaceURI) {
          case "http://www.w3.org/2000/svg":
            return 1;
          case "http://www.w3.org/1998/Math/MathML":
            return 2;
          default:
            return 0;
        }
      }
      function getChildHostContextProd(parentNamespace, type) {
        if (0 === parentNamespace)
          switch (type) {
            case "svg":
              return 1;
            case "math":
              return 2;
            default:
              return 0;
          }
        return 1 === parentNamespace && "foreignObject" === type ? 0 : parentNamespace;
      }
      function shouldSetTextContent(type, props) {
        return "textarea" === type || "noscript" === type || "string" === typeof props.children || "number" === typeof props.children || "bigint" === typeof props.children || "object" === typeof props.dangerouslySetInnerHTML && null !== props.dangerouslySetInnerHTML && null != props.dangerouslySetInnerHTML.__html;
      }
      var currentPopstateTransitionEvent = null;
      function shouldAttemptEagerTransition() {
        var event = window.event;
        if (event && "popstate" === event.type) {
          if (event === currentPopstateTransitionEvent) return false;
          currentPopstateTransitionEvent = event;
          return true;
        }
        currentPopstateTransitionEvent = null;
        return false;
      }
      var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0;
      var cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var localPromise = "function" === typeof Promise ? Promise : void 0;
      var scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof localPromise ? function(callback) {
        return localPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
      } : scheduleTimeout;
      function handleErrorInNextTick(error) {
        setTimeout(function() {
          throw error;
        });
      }
      function isSingletonScope(type) {
        return "head" === type;
      }
      function clearHydrationBoundary(parentInstance, hydrationInstance) {
        var node2 = hydrationInstance, depth = 0;
        do {
          var nextNode = node2.nextSibling;
          parentInstance.removeChild(node2);
          if (nextNode && 8 === nextNode.nodeType)
            if (node2 = nextNode.data, "/$" === node2 || "/&" === node2) {
              if (0 === depth) {
                parentInstance.removeChild(nextNode);
                retryIfBlockedOn(hydrationInstance);
                return;
              }
              depth--;
            } else if ("$" === node2 || "$?" === node2 || "$~" === node2 || "$!" === node2 || "&" === node2)
              depth++;
            else if ("html" === node2)
              releaseSingletonInstance(parentInstance.ownerDocument.documentElement);
            else if ("head" === node2) {
              node2 = parentInstance.ownerDocument.head;
              releaseSingletonInstance(node2);
              for (var node$jscomp$0 = node2.firstChild; node$jscomp$0; ) {
                var nextNode$jscomp$0 = node$jscomp$0.nextSibling, nodeName = node$jscomp$0.nodeName;
                node$jscomp$0[internalHoistableMarker] || "SCRIPT" === nodeName || "STYLE" === nodeName || "LINK" === nodeName && "stylesheet" === node$jscomp$0.rel.toLowerCase() || node2.removeChild(node$jscomp$0);
                node$jscomp$0 = nextNode$jscomp$0;
              }
            } else
              "body" === node2 && releaseSingletonInstance(parentInstance.ownerDocument.body);
          node2 = nextNode;
        } while (node2);
        retryIfBlockedOn(hydrationInstance);
      }
      function hideOrUnhideDehydratedBoundary(suspenseInstance, isHidden) {
        var node2 = suspenseInstance;
        suspenseInstance = 0;
        do {
          var nextNode = node2.nextSibling;
          1 === node2.nodeType ? isHidden ? (node2._stashedDisplay = node2.style.display, node2.style.display = "none") : (node2.style.display = node2._stashedDisplay || "", "" === node2.getAttribute("style") && node2.removeAttribute("style")) : 3 === node2.nodeType && (isHidden ? (node2._stashedText = node2.nodeValue, node2.nodeValue = "") : node2.nodeValue = node2._stashedText || "");
          if (nextNode && 8 === nextNode.nodeType)
            if (node2 = nextNode.data, "/$" === node2)
              if (0 === suspenseInstance) break;
              else suspenseInstance--;
            else
              "$" !== node2 && "$?" !== node2 && "$~" !== node2 && "$!" !== node2 || suspenseInstance++;
          node2 = nextNode;
        } while (node2);
      }
      function clearContainerSparingly(container2) {
        var nextNode = container2.firstChild;
        nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
        for (; nextNode; ) {
          var node2 = nextNode;
          nextNode = nextNode.nextSibling;
          switch (node2.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
              clearContainerSparingly(node2);
              detachDeletedInstance(node2);
              continue;
            case "SCRIPT":
            case "STYLE":
              continue;
            case "LINK":
              if ("stylesheet" === node2.rel.toLowerCase()) continue;
          }
          container2.removeChild(node2);
        }
      }
      function canHydrateInstance(instance, type, props, inRootOrSingleton) {
        for (; 1 === instance.nodeType; ) {
          var anyProps = props;
          if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
            if (!inRootOrSingleton && ("INPUT" !== instance.nodeName || "hidden" !== instance.type))
              break;
          } else if (!inRootOrSingleton)
            if ("input" === type && "hidden" === instance.type) {
              var name = null == anyProps.name ? null : "" + anyProps.name;
              if ("hidden" === anyProps.type && instance.getAttribute("name") === name)
                return instance;
            } else return instance;
          else if (!instance[internalHoistableMarker])
            switch (type) {
              case "meta":
                if (!instance.hasAttribute("itemprop")) break;
                return instance;
              case "link":
                name = instance.getAttribute("rel");
                if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
                  break;
                else if (name !== anyProps.rel || instance.getAttribute("href") !== (null == anyProps.href || "" === anyProps.href ? null : anyProps.href) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) || instance.getAttribute("title") !== (null == anyProps.title ? null : anyProps.title))
                  break;
                return instance;
              case "style":
                if (instance.hasAttribute("data-precedence")) break;
                return instance;
              case "script":
                name = instance.getAttribute("src");
                if ((name !== (null == anyProps.src ? null : anyProps.src) || instance.getAttribute("type") !== (null == anyProps.type ? null : anyProps.type) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) && name && instance.hasAttribute("async") && !instance.hasAttribute("itemprop"))
                  break;
                return instance;
              default:
                return instance;
            }
          instance = getNextHydratable(instance.nextSibling);
          if (null === instance) break;
        }
        return null;
      }
      function canHydrateTextInstance(instance, text, inRootOrSingleton) {
        if ("" === text) return null;
        for (; 3 !== instance.nodeType; ) {
          if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton)
            return null;
          instance = getNextHydratable(instance.nextSibling);
          if (null === instance) return null;
        }
        return instance;
      }
      function canHydrateHydrationBoundary(instance, inRootOrSingleton) {
        for (; 8 !== instance.nodeType; ) {
          if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton)
            return null;
          instance = getNextHydratable(instance.nextSibling);
          if (null === instance) return null;
        }
        return instance;
      }
      function isSuspenseInstancePending(instance) {
        return "$?" === instance.data || "$~" === instance.data;
      }
      function isSuspenseInstanceFallback(instance) {
        return "$!" === instance.data || "$?" === instance.data && "loading" !== instance.ownerDocument.readyState;
      }
      function registerSuspenseInstanceRetry(instance, callback) {
        var ownerDocument = instance.ownerDocument;
        if ("$~" === instance.data) instance._reactRetry = callback;
        else if ("$?" !== instance.data || "loading" !== ownerDocument.readyState)
          callback();
        else {
          var listener = function() {
            callback();
            ownerDocument.removeEventListener("DOMContentLoaded", listener);
          };
          ownerDocument.addEventListener("DOMContentLoaded", listener);
          instance._reactRetry = listener;
        }
      }
      function getNextHydratable(node2) {
        for (; null != node2; node2 = node2.nextSibling) {
          var nodeType = node2.nodeType;
          if (1 === nodeType || 3 === nodeType) break;
          if (8 === nodeType) {
            nodeType = node2.data;
            if ("$" === nodeType || "$!" === nodeType || "$?" === nodeType || "$~" === nodeType || "&" === nodeType || "F!" === nodeType || "F" === nodeType)
              break;
            if ("/$" === nodeType || "/&" === nodeType) return null;
          }
        }
        return node2;
      }
      var previousHydratableOnEnteringScopedSingleton = null;
      function getNextHydratableInstanceAfterHydrationBoundary(hydrationInstance) {
        hydrationInstance = hydrationInstance.nextSibling;
        for (var depth = 0; hydrationInstance; ) {
          if (8 === hydrationInstance.nodeType) {
            var data = hydrationInstance.data;
            if ("/$" === data || "/&" === data) {
              if (0 === depth)
                return getNextHydratable(hydrationInstance.nextSibling);
              depth--;
            } else
              "$" !== data && "$!" !== data && "$?" !== data && "$~" !== data && "&" !== data || depth++;
          }
          hydrationInstance = hydrationInstance.nextSibling;
        }
        return null;
      }
      function getParentHydrationBoundary(targetInstance) {
        targetInstance = targetInstance.previousSibling;
        for (var depth = 0; targetInstance; ) {
          if (8 === targetInstance.nodeType) {
            var data = targetInstance.data;
            if ("$" === data || "$!" === data || "$?" === data || "$~" === data || "&" === data) {
              if (0 === depth) return targetInstance;
              depth--;
            } else "/$" !== data && "/&" !== data || depth++;
          }
          targetInstance = targetInstance.previousSibling;
        }
        return null;
      }
      function resolveSingletonInstance(type, props, rootContainerInstance) {
        props = getOwnerDocumentFromRootContainer(rootContainerInstance);
        switch (type) {
          case "html":
            type = props.documentElement;
            if (!type) throw Error(formatProdErrorMessage(452));
            return type;
          case "head":
            type = props.head;
            if (!type) throw Error(formatProdErrorMessage(453));
            return type;
          case "body":
            type = props.body;
            if (!type) throw Error(formatProdErrorMessage(454));
            return type;
          default:
            throw Error(formatProdErrorMessage(451));
        }
      }
      function releaseSingletonInstance(instance) {
        for (var attributes = instance.attributes; attributes.length; )
          instance.removeAttributeNode(attributes[0]);
        detachDeletedInstance(instance);
      }
      var preloadPropsMap = /* @__PURE__ */ new Map();
      var preconnectsSet = /* @__PURE__ */ new Set();
      function getHoistableRoot(container2) {
        return "function" === typeof container2.getRootNode ? container2.getRootNode() : 9 === container2.nodeType ? container2 : container2.ownerDocument;
      }
      var previousDispatcher = ReactDOMSharedInternals.d;
      ReactDOMSharedInternals.d = {
        f: flushSyncWork,
        r: requestFormReset,
        D: prefetchDNS,
        C: preconnect,
        L: preload,
        m: preloadModule,
        X: preinitScript,
        S: preinitStyle,
        M: preinitModuleScript
      };
      function flushSyncWork() {
        var previousWasRendering = previousDispatcher.f(), wasRendering = flushSyncWork$1();
        return previousWasRendering || wasRendering;
      }
      function requestFormReset(form) {
        var formInst = getInstanceFromNode(form);
        null !== formInst && 5 === formInst.tag && "form" === formInst.type ? requestFormReset$1(formInst) : previousDispatcher.r(form);
      }
      var globalDocument = "undefined" === typeof document ? null : document;
      function preconnectAs(rel, href, crossOrigin) {
        var ownerDocument = globalDocument;
        if (ownerDocument && "string" === typeof href && href) {
          var limitedEscapedHref = escapeSelectorAttributeValueInsideDoubleQuotes(href);
          limitedEscapedHref = 'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
          "string" === typeof crossOrigin && (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
          preconnectsSet.has(limitedEscapedHref) || (preconnectsSet.add(limitedEscapedHref), rel = { rel, crossOrigin, href }, null === ownerDocument.querySelector(limitedEscapedHref) && (href = ownerDocument.createElement("link"), setInitialProperties(href, "link", rel), markNodeAsHoistable(href), ownerDocument.head.appendChild(href)));
        }
      }
      function prefetchDNS(href) {
        previousDispatcher.D(href);
        preconnectAs("dns-prefetch", href, null);
      }
      function preconnect(href, crossOrigin) {
        previousDispatcher.C(href, crossOrigin);
        preconnectAs("preconnect", href, crossOrigin);
      }
      function preload(href, as, options2) {
        previousDispatcher.L(href, as, options2);
        var ownerDocument = globalDocument;
        if (ownerDocument && href && as) {
          var preloadSelector = 'link[rel="preload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"]';
          "image" === as ? options2 && options2.imageSrcSet ? (preloadSelector += '[imagesrcset="' + escapeSelectorAttributeValueInsideDoubleQuotes(
            options2.imageSrcSet
          ) + '"]', "string" === typeof options2.imageSizes && (preloadSelector += '[imagesizes="' + escapeSelectorAttributeValueInsideDoubleQuotes(
            options2.imageSizes
          ) + '"]')) : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]' : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]';
          var key = preloadSelector;
          switch (as) {
            case "style":
              key = getStyleKey(href);
              break;
            case "script":
              key = getScriptKey(href);
          }
          preloadPropsMap.has(key) || (href = assign2(
            {
              rel: "preload",
              href: "image" === as && options2 && options2.imageSrcSet ? void 0 : href,
              as
            },
            options2
          ), preloadPropsMap.set(key, href), null !== ownerDocument.querySelector(preloadSelector) || "style" === as && ownerDocument.querySelector(getStylesheetSelectorFromKey(key)) || "script" === as && ownerDocument.querySelector(getScriptSelectorFromKey(key)) || (as = ownerDocument.createElement("link"), setInitialProperties(as, "link", href), markNodeAsHoistable(as), ownerDocument.head.appendChild(as)));
        }
      }
      function preloadModule(href, options2) {
        previousDispatcher.m(href, options2);
        var ownerDocument = globalDocument;
        if (ownerDocument && href) {
          var as = options2 && "string" === typeof options2.as ? options2.as : "script", preloadSelector = 'link[rel="modulepreload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"][href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]', key = preloadSelector;
          switch (as) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              key = getScriptKey(href);
          }
          if (!preloadPropsMap.has(key) && (href = assign2({ rel: "modulepreload", href }, options2), preloadPropsMap.set(key, href), null === ownerDocument.querySelector(preloadSelector))) {
            switch (as) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
                  return;
            }
            as = ownerDocument.createElement("link");
            setInitialProperties(as, "link", href);
            markNodeAsHoistable(as);
            ownerDocument.head.appendChild(as);
          }
        }
      }
      function preinitStyle(href, precedence, options2) {
        previousDispatcher.S(href, precedence, options2);
        var ownerDocument = globalDocument;
        if (ownerDocument && href) {
          var styles = getResourcesFromRoot(ownerDocument).hoistableStyles, key = getStyleKey(href);
          precedence = precedence || "default";
          var resource = styles.get(key);
          if (!resource) {
            var state = { loading: 0, preload: null };
            if (resource = ownerDocument.querySelector(
              getStylesheetSelectorFromKey(key)
            ))
              state.loading = 5;
            else {
              href = assign2(
                { rel: "stylesheet", href, "data-precedence": precedence },
                options2
              );
              (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(href, options2);
              var link = resource = ownerDocument.createElement("link");
              markNodeAsHoistable(link);
              setInitialProperties(link, "link", href);
              link._p = new Promise(function(resolve, reject) {
                link.onload = resolve;
                link.onerror = reject;
              });
              link.addEventListener("load", function() {
                state.loading |= 1;
              });
              link.addEventListener("error", function() {
                state.loading |= 2;
              });
              state.loading |= 4;
              insertStylesheet(resource, precedence, ownerDocument);
            }
            resource = {
              type: "stylesheet",
              instance: resource,
              count: 1,
              state
            };
            styles.set(key, resource);
          }
        }
      }
      function preinitScript(src, options2) {
        previousDispatcher.X(src, options2);
        var ownerDocument = globalDocument;
        if (ownerDocument && src) {
          var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
          resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign2({ src, async: true }, options2), (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options2), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
            type: "script",
            instance: resource,
            count: 1,
            state: null
          }, scripts.set(key, resource));
        }
      }
      function preinitModuleScript(src, options2) {
        previousDispatcher.M(src, options2);
        var ownerDocument = globalDocument;
        if (ownerDocument && src) {
          var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
          resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign2({ src, async: true, type: "module" }, options2), (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options2), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
            type: "script",
            instance: resource,
            count: 1,
            state: null
          }, scripts.set(key, resource));
        }
      }
      function getResource(type, currentProps, pendingProps, currentResource) {
        var JSCompiler_inline_result = (JSCompiler_inline_result = rootInstanceStackCursor.current) ? getHoistableRoot(JSCompiler_inline_result) : null;
        if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
        switch (type) {
          case "meta":
          case "title":
            return null;
          case "style":
            return "string" === typeof pendingProps.precedence && "string" === typeof pendingProps.href ? (currentProps = getStyleKey(pendingProps.href), pendingProps = getResourcesFromRoot(
              JSCompiler_inline_result
            ).hoistableStyles, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
              type: "style",
              instance: null,
              count: 0,
              state: null
            }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
          case "link":
            if ("stylesheet" === pendingProps.rel && "string" === typeof pendingProps.href && "string" === typeof pendingProps.precedence) {
              type = getStyleKey(pendingProps.href);
              var styles$243 = getResourcesFromRoot(
                JSCompiler_inline_result
              ).hoistableStyles, resource$244 = styles$243.get(type);
              resource$244 || (JSCompiler_inline_result = JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result, resource$244 = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null }
              }, styles$243.set(type, resource$244), (styles$243 = JSCompiler_inline_result.querySelector(
                getStylesheetSelectorFromKey(type)
              )) && !styles$243._p && (resource$244.instance = styles$243, resource$244.state.loading = 5), preloadPropsMap.has(type) || (pendingProps = {
                rel: "preload",
                as: "style",
                href: pendingProps.href,
                crossOrigin: pendingProps.crossOrigin,
                integrity: pendingProps.integrity,
                media: pendingProps.media,
                hrefLang: pendingProps.hrefLang,
                referrerPolicy: pendingProps.referrerPolicy
              }, preloadPropsMap.set(type, pendingProps), styles$243 || preloadStylesheet(
                JSCompiler_inline_result,
                type,
                pendingProps,
                resource$244.state
              )));
              if (currentProps && null === currentResource)
                throw Error(formatProdErrorMessage(528, ""));
              return resource$244;
            }
            if (currentProps && null !== currentResource)
              throw Error(formatProdErrorMessage(529, ""));
            return null;
          case "script":
            return currentProps = pendingProps.async, pendingProps = pendingProps.src, "string" === typeof pendingProps && currentProps && "function" !== typeof currentProps && "symbol" !== typeof currentProps ? (currentProps = getScriptKey(pendingProps), pendingProps = getResourcesFromRoot(
              JSCompiler_inline_result
            ).hoistableScripts, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
              type: "script",
              instance: null,
              count: 0,
              state: null
            }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
          default:
            throw Error(formatProdErrorMessage(444, type));
        }
      }
      function getStyleKey(href) {
        return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
      }
      function getStylesheetSelectorFromKey(key) {
        return 'link[rel="stylesheet"][' + key + "]";
      }
      function stylesheetPropsFromRawProps(rawProps) {
        return assign2({}, rawProps, {
          "data-precedence": rawProps.precedence,
          precedence: null
        });
      }
      function preloadStylesheet(ownerDocument, key, preloadProps, state) {
        ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]") ? state.loading = 1 : (key = ownerDocument.createElement("link"), state.preload = key, key.addEventListener("load", function() {
          return state.loading |= 1;
        }), key.addEventListener("error", function() {
          return state.loading |= 2;
        }), setInitialProperties(key, "link", preloadProps), markNodeAsHoistable(key), ownerDocument.head.appendChild(key));
      }
      function getScriptKey(src) {
        return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
      }
      function getScriptSelectorFromKey(key) {
        return "script[async]" + key;
      }
      function acquireResource(hoistableRoot, resource, props) {
        resource.count++;
        if (null === resource.instance)
          switch (resource.type) {
            case "style":
              var instance = hoistableRoot.querySelector(
                'style[data-href~="' + escapeSelectorAttributeValueInsideDoubleQuotes(props.href) + '"]'
              );
              if (instance)
                return resource.instance = instance, markNodeAsHoistable(instance), instance;
              var styleProps = assign2({}, props, {
                "data-href": props.href,
                "data-precedence": props.precedence,
                href: null,
                precedence: null
              });
              instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
                "style"
              );
              markNodeAsHoistable(instance);
              setInitialProperties(instance, "style", styleProps);
              insertStylesheet(instance, props.precedence, hoistableRoot);
              return resource.instance = instance;
            case "stylesheet":
              styleProps = getStyleKey(props.href);
              var instance$249 = hoistableRoot.querySelector(
                getStylesheetSelectorFromKey(styleProps)
              );
              if (instance$249)
                return resource.state.loading |= 4, resource.instance = instance$249, markNodeAsHoistable(instance$249), instance$249;
              instance = stylesheetPropsFromRawProps(props);
              (styleProps = preloadPropsMap.get(styleProps)) && adoptPreloadPropsForStylesheet(instance, styleProps);
              instance$249 = (hoistableRoot.ownerDocument || hoistableRoot).createElement("link");
              markNodeAsHoistable(instance$249);
              var linkInstance = instance$249;
              linkInstance._p = new Promise(function(resolve, reject) {
                linkInstance.onload = resolve;
                linkInstance.onerror = reject;
              });
              setInitialProperties(instance$249, "link", instance);
              resource.state.loading |= 4;
              insertStylesheet(instance$249, props.precedence, hoistableRoot);
              return resource.instance = instance$249;
            case "script":
              instance$249 = getScriptKey(props.src);
              if (styleProps = hoistableRoot.querySelector(
                getScriptSelectorFromKey(instance$249)
              ))
                return resource.instance = styleProps, markNodeAsHoistable(styleProps), styleProps;
              instance = props;
              if (styleProps = preloadPropsMap.get(instance$249))
                instance = assign2({}, props), adoptPreloadPropsForScript(instance, styleProps);
              hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
              styleProps = hoistableRoot.createElement("script");
              markNodeAsHoistable(styleProps);
              setInitialProperties(styleProps, "link", instance);
              hoistableRoot.head.appendChild(styleProps);
              return resource.instance = styleProps;
            case "void":
              return null;
            default:
              throw Error(formatProdErrorMessage(443, resource.type));
          }
        else
          "stylesheet" === resource.type && 0 === (resource.state.loading & 4) && (instance = resource.instance, resource.state.loading |= 4, insertStylesheet(instance, props.precedence, hoistableRoot));
        return resource.instance;
      }
      function insertStylesheet(instance, precedence, root2) {
        for (var nodes = root2.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ), last = nodes.length ? nodes[nodes.length - 1] : null, prior = last, i = 0; i < nodes.length; i++) {
          var node2 = nodes[i];
          if (node2.dataset.precedence === precedence) prior = node2;
          else if (prior !== last) break;
        }
        prior ? prior.parentNode.insertBefore(instance, prior.nextSibling) : (precedence = 9 === root2.nodeType ? root2.head : root2, precedence.insertBefore(instance, precedence.firstChild));
      }
      function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
        null == stylesheetProps.crossOrigin && (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
        null == stylesheetProps.referrerPolicy && (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
        null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
      }
      function adoptPreloadPropsForScript(scriptProps, preloadProps) {
        null == scriptProps.crossOrigin && (scriptProps.crossOrigin = preloadProps.crossOrigin);
        null == scriptProps.referrerPolicy && (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
        null == scriptProps.integrity && (scriptProps.integrity = preloadProps.integrity);
      }
      var tagCaches = null;
      function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
        if (null === tagCaches) {
          var cache = /* @__PURE__ */ new Map();
          var caches = tagCaches = /* @__PURE__ */ new Map();
          caches.set(ownerDocument, cache);
        } else
          caches = tagCaches, cache = caches.get(ownerDocument), cache || (cache = /* @__PURE__ */ new Map(), caches.set(ownerDocument, cache));
        if (cache.has(type)) return cache;
        cache.set(type, null);
        ownerDocument = ownerDocument.getElementsByTagName(type);
        for (caches = 0; caches < ownerDocument.length; caches++) {
          var node2 = ownerDocument[caches];
          if (!(node2[internalHoistableMarker] || node2[internalInstanceKey] || "link" === type && "stylesheet" === node2.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== node2.namespaceURI) {
            var nodeKey = node2.getAttribute(keyAttribute) || "";
            nodeKey = type + nodeKey;
            var existing = cache.get(nodeKey);
            existing ? existing.push(node2) : cache.set(nodeKey, [node2]);
          }
        }
        return cache;
      }
      function mountHoistable(hoistableRoot, type, instance) {
        hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
        hoistableRoot.head.insertBefore(
          instance,
          "title" === type ? hoistableRoot.querySelector("head > title") : null
        );
      }
      function isHostHoistableType(type, props, hostContext) {
        if (1 === hostContext || null != props.itemProp) return false;
        switch (type) {
          case "meta":
          case "title":
            return true;
          case "style":
            if ("string" !== typeof props.precedence || "string" !== typeof props.href || "" === props.href)
              break;
            return true;
          case "link":
            if ("string" !== typeof props.rel || "string" !== typeof props.href || "" === props.href || props.onLoad || props.onError)
              break;
            switch (props.rel) {
              case "stylesheet":
                return type = props.disabled, "string" === typeof props.precedence && null == type;
              default:
                return true;
            }
          case "script":
            if (props.async && "function" !== typeof props.async && "symbol" !== typeof props.async && !props.onLoad && !props.onError && props.src && "string" === typeof props.src)
              return true;
        }
        return false;
      }
      function preloadResource(resource) {
        return "stylesheet" === resource.type && 0 === (resource.state.loading & 3) ? false : true;
      }
      function suspendResource(state, hoistableRoot, resource, props) {
        if ("stylesheet" === resource.type && ("string" !== typeof props.media || false !== matchMedia(props.media).matches) && 0 === (resource.state.loading & 4)) {
          if (null === resource.instance) {
            var key = getStyleKey(props.href), instance = hoistableRoot.querySelector(
              getStylesheetSelectorFromKey(key)
            );
            if (instance) {
              hoistableRoot = instance._p;
              null !== hoistableRoot && "object" === typeof hoistableRoot && "function" === typeof hoistableRoot.then && (state.count++, state = onUnsuspend.bind(state), hoistableRoot.then(state, state));
              resource.state.loading |= 4;
              resource.instance = instance;
              markNodeAsHoistable(instance);
              return;
            }
            instance = hoistableRoot.ownerDocument || hoistableRoot;
            props = stylesheetPropsFromRawProps(props);
            (key = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(props, key);
            instance = instance.createElement("link");
            markNodeAsHoistable(instance);
            var linkInstance = instance;
            linkInstance._p = new Promise(function(resolve, reject) {
              linkInstance.onload = resolve;
              linkInstance.onerror = reject;
            });
            setInitialProperties(instance, "link", props);
            resource.instance = instance;
          }
          null === state.stylesheets && (state.stylesheets = /* @__PURE__ */ new Map());
          state.stylesheets.set(resource, hoistableRoot);
          (hoistableRoot = resource.state.preload) && 0 === (resource.state.loading & 3) && (state.count++, resource = onUnsuspend.bind(state), hoistableRoot.addEventListener("load", resource), hoistableRoot.addEventListener("error", resource));
        }
      }
      var estimatedBytesWithinLimit = 0;
      function waitForCommitToBeReady(state, timeoutOffset) {
        state.stylesheets && 0 === state.count && insertSuspendedStylesheets(state, state.stylesheets);
        return 0 < state.count || 0 < state.imgCount ? function(commit) {
          var stylesheetTimer = setTimeout(function() {
            state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets);
            if (state.unsuspend) {
              var unsuspend = state.unsuspend;
              state.unsuspend = null;
              unsuspend();
            }
          }, 6e4 + timeoutOffset);
          0 < state.imgBytes && 0 === estimatedBytesWithinLimit && (estimatedBytesWithinLimit = 62500 * estimateBandwidth());
          var imgTimer = setTimeout(
            function() {
              state.waitingForImages = false;
              if (0 === state.count && (state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets), state.unsuspend)) {
                var unsuspend = state.unsuspend;
                state.unsuspend = null;
                unsuspend();
              }
            },
            (state.imgBytes > estimatedBytesWithinLimit ? 50 : 800) + timeoutOffset
          );
          state.unsuspend = commit;
          return function() {
            state.unsuspend = null;
            clearTimeout(stylesheetTimer);
            clearTimeout(imgTimer);
          };
        } : null;
      }
      function onUnsuspend() {
        this.count--;
        if (0 === this.count && (0 === this.imgCount || !this.waitingForImages)) {
          if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
          else if (this.unsuspend) {
            var unsuspend = this.unsuspend;
            this.unsuspend = null;
            unsuspend();
          }
        }
      }
      var precedencesByRoot = null;
      function insertSuspendedStylesheets(state, resources) {
        state.stylesheets = null;
        null !== state.unsuspend && (state.count++, precedencesByRoot = /* @__PURE__ */ new Map(), resources.forEach(insertStylesheetIntoRoot, state), precedencesByRoot = null, onUnsuspend.call(state));
      }
      function insertStylesheetIntoRoot(root2, resource) {
        if (!(resource.state.loading & 4)) {
          var precedences = precedencesByRoot.get(root2);
          if (precedences) var last = precedences.get(null);
          else {
            precedences = /* @__PURE__ */ new Map();
            precedencesByRoot.set(root2, precedences);
            for (var nodes = root2.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ), i = 0; i < nodes.length; i++) {
              var node2 = nodes[i];
              if ("LINK" === node2.nodeName || "not all" !== node2.getAttribute("media"))
                precedences.set(node2.dataset.precedence, node2), last = node2;
            }
            last && precedences.set(null, last);
          }
          nodes = resource.instance;
          node2 = nodes.getAttribute("data-precedence");
          i = precedences.get(node2) || last;
          i === last && precedences.set(null, nodes);
          precedences.set(node2, nodes);
          this.count++;
          last = onUnsuspend.bind(this);
          nodes.addEventListener("load", last);
          nodes.addEventListener("error", last);
          i ? i.parentNode.insertBefore(nodes, i.nextSibling) : (root2 = 9 === root2.nodeType ? root2.head : root2, root2.insertBefore(nodes, root2.firstChild));
          resource.state.loading |= 4;
        }
      }
      var HostTransitionContext = {
        $$typeof: REACT_CONTEXT_TYPE,
        Provider: null,
        Consumer: null,
        _currentValue: sharedNotPendingObject,
        _currentValue2: sharedNotPendingObject,
        _threadCount: 0
      };
      function FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator, formState) {
        this.tag = 1;
        this.containerInfo = containerInfo;
        this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
        this.callbackPriority = 0;
        this.expirationTimes = createLaneMap(-1);
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = createLaneMap(0);
        this.hiddenUpdates = createLaneMap(null);
        this.identifierPrefix = identifierPrefix;
        this.onUncaughtError = onUncaughtError;
        this.onCaughtError = onCaughtError;
        this.onRecoverableError = onRecoverableError;
        this.pooledCache = null;
        this.pooledCacheLanes = 0;
        this.formState = formState;
        this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, identifierPrefix, formState, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator) {
        containerInfo = new FiberRootNode(
          containerInfo,
          tag,
          hydrate,
          identifierPrefix,
          onUncaughtError,
          onCaughtError,
          onRecoverableError,
          onDefaultTransitionIndicator,
          formState
        );
        tag = 1;
        true === isStrictMode && (tag |= 24);
        isStrictMode = createFiberImplClass(3, null, null, tag);
        containerInfo.current = isStrictMode;
        isStrictMode.stateNode = containerInfo;
        tag = createCache3();
        tag.refCount++;
        containerInfo.pooledCache = tag;
        tag.refCount++;
        isStrictMode.memoizedState = {
          element: initialChildren,
          isDehydrated: hydrate,
          cache: tag
        };
        initializeUpdateQueue(isStrictMode);
        return containerInfo;
      }
      function getContextForSubtree(parentComponent) {
        if (!parentComponent) return emptyContextObject;
        parentComponent = emptyContextObject;
        return parentComponent;
      }
      function updateContainerImpl(rootFiber, lane, element, container2, parentComponent, callback) {
        parentComponent = getContextForSubtree(parentComponent);
        null === container2.context ? container2.context = parentComponent : container2.pendingContext = parentComponent;
        container2 = createUpdate(lane);
        container2.payload = { element };
        callback = void 0 === callback ? null : callback;
        null !== callback && (container2.callback = callback);
        element = enqueueUpdate(rootFiber, container2, lane);
        null !== element && (scheduleUpdateOnFiber(element, rootFiber, lane), entangleTransitions(element, rootFiber, lane));
      }
      function markRetryLaneImpl(fiber, retryLane) {
        fiber = fiber.memoizedState;
        if (null !== fiber && null !== fiber.dehydrated) {
          var a = fiber.retryLane;
          fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
        }
      }
      function markRetryLaneIfNotHydrated(fiber, retryLane) {
        markRetryLaneImpl(fiber, retryLane);
        (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
      }
      function attemptContinuousHydration(fiber) {
        if (13 === fiber.tag || 31 === fiber.tag) {
          var root2 = enqueueConcurrentRenderForLane(fiber, 67108864);
          null !== root2 && scheduleUpdateOnFiber(root2, fiber, 67108864);
          markRetryLaneIfNotHydrated(fiber, 67108864);
        }
      }
      function attemptHydrationAtCurrentPriority(fiber) {
        if (13 === fiber.tag || 31 === fiber.tag) {
          var lane = requestUpdateLane();
          lane = getBumpedLaneForHydrationByLane(lane);
          var root2 = enqueueConcurrentRenderForLane(fiber, lane);
          null !== root2 && scheduleUpdateOnFiber(root2, fiber, lane);
          markRetryLaneIfNotHydrated(fiber, lane);
        }
      }
      var _enabled = true;
      function dispatchDiscreteEvent(domEventName, eventSystemFlags, container2, nativeEvent) {
        var prevTransition = ReactSharedInternals.T;
        ReactSharedInternals.T = null;
        var previousPriority = ReactDOMSharedInternals.p;
        try {
          ReactDOMSharedInternals.p = 2, dispatchEvent(domEventName, eventSystemFlags, container2, nativeEvent);
        } finally {
          ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
        }
      }
      function dispatchContinuousEvent(domEventName, eventSystemFlags, container2, nativeEvent) {
        var prevTransition = ReactSharedInternals.T;
        ReactSharedInternals.T = null;
        var previousPriority = ReactDOMSharedInternals.p;
        try {
          ReactDOMSharedInternals.p = 8, dispatchEvent(domEventName, eventSystemFlags, container2, nativeEvent);
        } finally {
          ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
        }
      }
      function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
        if (_enabled) {
          var blockedOn = findInstanceBlockingEvent(nativeEvent);
          if (null === blockedOn)
            dispatchEventForPluginEventSystem(
              domEventName,
              eventSystemFlags,
              nativeEvent,
              return_targetInst,
              targetContainer
            ), clearIfContinuousEvent(domEventName, nativeEvent);
          else if (queueIfContinuousEvent(
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          ))
            nativeEvent.stopPropagation();
          else if (clearIfContinuousEvent(domEventName, nativeEvent), eventSystemFlags & 4 && -1 < discreteReplayableEvents.indexOf(domEventName)) {
            for (; null !== blockedOn; ) {
              var fiber = getInstanceFromNode(blockedOn);
              if (null !== fiber)
                switch (fiber.tag) {
                  case 3:
                    fiber = fiber.stateNode;
                    if (fiber.current.memoizedState.isDehydrated) {
                      var lanes = getHighestPriorityLanes(fiber.pendingLanes);
                      if (0 !== lanes) {
                        var root2 = fiber;
                        root2.pendingLanes |= 2;
                        for (root2.entangledLanes |= 2; lanes; ) {
                          var lane = 1 << 31 - clz32(lanes);
                          root2.entanglements[1] |= lane;
                          lanes &= ~lane;
                        }
                        ensureRootIsScheduled(fiber);
                        0 === (executionContext & 6) && (workInProgressRootRenderTargetTime = now() + 500, flushSyncWorkAcrossRoots_impl(0, false));
                      }
                    }
                    break;
                  case 31:
                  case 13:
                    root2 = enqueueConcurrentRenderForLane(fiber, 2), null !== root2 && scheduleUpdateOnFiber(root2, fiber, 2), flushSyncWork$1(), markRetryLaneIfNotHydrated(fiber, 2);
                }
              fiber = findInstanceBlockingEvent(nativeEvent);
              null === fiber && dispatchEventForPluginEventSystem(
                domEventName,
                eventSystemFlags,
                nativeEvent,
                return_targetInst,
                targetContainer
              );
              if (fiber === blockedOn) break;
              blockedOn = fiber;
            }
            null !== blockedOn && nativeEvent.stopPropagation();
          } else
            dispatchEventForPluginEventSystem(
              domEventName,
              eventSystemFlags,
              nativeEvent,
              null,
              targetContainer
            );
        }
      }
      function findInstanceBlockingEvent(nativeEvent) {
        nativeEvent = getEventTarget(nativeEvent);
        return findInstanceBlockingTarget(nativeEvent);
      }
      var return_targetInst = null;
      function findInstanceBlockingTarget(targetNode) {
        return_targetInst = null;
        targetNode = getClosestInstanceFromNode(targetNode);
        if (null !== targetNode) {
          var nearestMounted = getNearestMountedFiber(targetNode);
          if (null === nearestMounted) targetNode = null;
          else {
            var tag = nearestMounted.tag;
            if (13 === tag) {
              targetNode = getSuspenseInstanceFromFiber(nearestMounted);
              if (null !== targetNode) return targetNode;
              targetNode = null;
            } else if (31 === tag) {
              targetNode = getActivityInstanceFromFiber(nearestMounted);
              if (null !== targetNode) return targetNode;
              targetNode = null;
            } else if (3 === tag) {
              if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
                return 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
              targetNode = null;
            } else nearestMounted !== targetNode && (targetNode = null);
          }
        }
        return_targetInst = targetNode;
        return null;
      }
      function getEventPriority(domEventName) {
        switch (domEventName) {
          case "beforetoggle":
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "toggle":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 2;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 8;
          case "message":
            switch (getCurrentPriorityLevel()) {
              case ImmediatePriority:
                return 2;
              case UserBlockingPriority:
                return 8;
              case NormalPriority$1:
              case LowPriority:
                return 32;
              case IdlePriority:
                return 268435456;
              default:
                return 32;
            }
          default:
            return 32;
        }
      }
      var hasScheduledReplayAttempt = false;
      var queuedFocus = null;
      var queuedDrag = null;
      var queuedMouse = null;
      var queuedPointers = /* @__PURE__ */ new Map();
      var queuedPointerCaptures = /* @__PURE__ */ new Map();
      var queuedExplicitHydrationTargets = [];
      var discreteReplayableEvents = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
      function clearIfContinuousEvent(domEventName, nativeEvent) {
        switch (domEventName) {
          case "focusin":
          case "focusout":
            queuedFocus = null;
            break;
          case "dragenter":
          case "dragleave":
            queuedDrag = null;
            break;
          case "mouseover":
          case "mouseout":
            queuedMouse = null;
            break;
          case "pointerover":
          case "pointerout":
            queuedPointers.delete(nativeEvent.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            queuedPointerCaptures.delete(nativeEvent.pointerId);
        }
      }
      function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
        if (null === existingQueuedEvent || existingQueuedEvent.nativeEvent !== nativeEvent)
          return existingQueuedEvent = {
            blockedOn,
            domEventName,
            eventSystemFlags,
            nativeEvent,
            targetContainers: [targetContainer]
          }, null !== blockedOn && (blockedOn = getInstanceFromNode(blockedOn), null !== blockedOn && attemptContinuousHydration(blockedOn)), existingQueuedEvent;
        existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
        blockedOn = existingQueuedEvent.targetContainers;
        null !== targetContainer && -1 === blockedOn.indexOf(targetContainer) && blockedOn.push(targetContainer);
        return existingQueuedEvent;
      }
      function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
        switch (domEventName) {
          case "focusin":
            return queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
              queuedFocus,
              blockedOn,
              domEventName,
              eventSystemFlags,
              targetContainer,
              nativeEvent
            ), true;
          case "dragenter":
            return queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
              queuedDrag,
              blockedOn,
              domEventName,
              eventSystemFlags,
              targetContainer,
              nativeEvent
            ), true;
          case "mouseover":
            return queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
              queuedMouse,
              blockedOn,
              domEventName,
              eventSystemFlags,
              targetContainer,
              nativeEvent
            ), true;
          case "pointerover":
            var pointerId = nativeEvent.pointerId;
            queuedPointers.set(
              pointerId,
              accumulateOrCreateContinuousQueuedReplayableEvent(
                queuedPointers.get(pointerId) || null,
                blockedOn,
                domEventName,
                eventSystemFlags,
                targetContainer,
                nativeEvent
              )
            );
            return true;
          case "gotpointercapture":
            return pointerId = nativeEvent.pointerId, queuedPointerCaptures.set(
              pointerId,
              accumulateOrCreateContinuousQueuedReplayableEvent(
                queuedPointerCaptures.get(pointerId) || null,
                blockedOn,
                domEventName,
                eventSystemFlags,
                targetContainer,
                nativeEvent
              )
            ), true;
        }
        return false;
      }
      function attemptExplicitHydrationTarget(queuedTarget) {
        var targetInst = getClosestInstanceFromNode(queuedTarget.target);
        if (null !== targetInst) {
          var nearestMounted = getNearestMountedFiber(targetInst);
          if (null !== nearestMounted) {
            if (targetInst = nearestMounted.tag, 13 === targetInst) {
              if (targetInst = getSuspenseInstanceFromFiber(nearestMounted), null !== targetInst) {
                queuedTarget.blockedOn = targetInst;
                runWithPriority(queuedTarget.priority, function() {
                  attemptHydrationAtCurrentPriority(nearestMounted);
                });
                return;
              }
            } else if (31 === targetInst) {
              if (targetInst = getActivityInstanceFromFiber(nearestMounted), null !== targetInst) {
                queuedTarget.blockedOn = targetInst;
                runWithPriority(queuedTarget.priority, function() {
                  attemptHydrationAtCurrentPriority(nearestMounted);
                });
                return;
              }
            } else if (3 === targetInst && nearestMounted.stateNode.current.memoizedState.isDehydrated) {
              queuedTarget.blockedOn = 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
              return;
            }
          }
        }
        queuedTarget.blockedOn = null;
      }
      function attemptReplayContinuousQueuedEvent(queuedEvent) {
        if (null !== queuedEvent.blockedOn) return false;
        for (var targetContainers = queuedEvent.targetContainers; 0 < targetContainers.length; ) {
          var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
          if (null === nextBlockedOn) {
            nextBlockedOn = queuedEvent.nativeEvent;
            var nativeEventClone = new nextBlockedOn.constructor(
              nextBlockedOn.type,
              nextBlockedOn
            );
            currentReplayingEvent = nativeEventClone;
            nextBlockedOn.target.dispatchEvent(nativeEventClone);
            currentReplayingEvent = null;
          } else
            return targetContainers = getInstanceFromNode(nextBlockedOn), null !== targetContainers && attemptContinuousHydration(targetContainers), queuedEvent.blockedOn = nextBlockedOn, false;
          targetContainers.shift();
        }
        return true;
      }
      function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
        attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
      }
      function replayUnblockedEvents() {
        hasScheduledReplayAttempt = false;
        null !== queuedFocus && attemptReplayContinuousQueuedEvent(queuedFocus) && (queuedFocus = null);
        null !== queuedDrag && attemptReplayContinuousQueuedEvent(queuedDrag) && (queuedDrag = null);
        null !== queuedMouse && attemptReplayContinuousQueuedEvent(queuedMouse) && (queuedMouse = null);
        queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
        queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
      }
      function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
        queuedEvent.blockedOn === unblocked && (queuedEvent.blockedOn = null, hasScheduledReplayAttempt || (hasScheduledReplayAttempt = true, Scheduler.unstable_scheduleCallback(
          Scheduler.unstable_NormalPriority,
          replayUnblockedEvents
        )));
      }
      var lastScheduledReplayQueue = null;
      function scheduleReplayQueueIfNeeded(formReplayingQueue) {
        lastScheduledReplayQueue !== formReplayingQueue && (lastScheduledReplayQueue = formReplayingQueue, Scheduler.unstable_scheduleCallback(
          Scheduler.unstable_NormalPriority,
          function() {
            lastScheduledReplayQueue === formReplayingQueue && (lastScheduledReplayQueue = null);
            for (var i = 0; i < formReplayingQueue.length; i += 3) {
              var form = formReplayingQueue[i], submitterOrAction = formReplayingQueue[i + 1], formData = formReplayingQueue[i + 2];
              if ("function" !== typeof submitterOrAction)
                if (null === findInstanceBlockingTarget(submitterOrAction || form))
                  continue;
                else break;
              var formInst = getInstanceFromNode(form);
              null !== formInst && (formReplayingQueue.splice(i, 3), i -= 3, startHostTransition(
                formInst,
                {
                  pending: true,
                  data: formData,
                  method: form.method,
                  action: submitterOrAction
                },
                submitterOrAction,
                formData
              ));
            }
          }
        ));
      }
      function retryIfBlockedOn(unblocked) {
        function unblock(queuedEvent) {
          return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
        }
        null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
        null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
        null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
        queuedPointers.forEach(unblock);
        queuedPointerCaptures.forEach(unblock);
        for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
          var queuedTarget = queuedExplicitHydrationTargets[i];
          queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
        }
        for (; 0 < queuedExplicitHydrationTargets.length && (i = queuedExplicitHydrationTargets[0], null === i.blockedOn); )
          attemptExplicitHydrationTarget(i), null === i.blockedOn && queuedExplicitHydrationTargets.shift();
        i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
        if (null != i)
          for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
            var form = i[queuedTarget], submitterOrAction = i[queuedTarget + 1], formProps = form[internalPropsKey] || null;
            if ("function" === typeof submitterOrAction)
              formProps || scheduleReplayQueueIfNeeded(i);
            else if (formProps) {
              var action = null;
              if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
                if (form = submitterOrAction, formProps = submitterOrAction[internalPropsKey] || null)
                  action = formProps.formAction;
                else {
                  if (null !== findInstanceBlockingTarget(form)) continue;
                }
              else action = formProps.action;
              "function" === typeof action ? i[queuedTarget + 1] = action : (i.splice(queuedTarget, 3), queuedTarget -= 3);
              scheduleReplayQueueIfNeeded(i);
            }
          }
      }
      function defaultOnDefaultTransitionIndicator() {
        function handleNavigate(event) {
          event.canIntercept && "react-transition" === event.info && event.intercept({
            handler: function() {
              return new Promise(function(resolve) {
                return pendingResolve = resolve;
              });
            },
            focusReset: "manual",
            scroll: "manual"
          });
        }
        function handleNavigateComplete() {
          null !== pendingResolve && (pendingResolve(), pendingResolve = null);
          isCancelled || setTimeout(startFakeNavigation, 20);
        }
        function startFakeNavigation() {
          if (!isCancelled && !navigation.transition) {
            var currentEntry = navigation.currentEntry;
            currentEntry && null != currentEntry.url && navigation.navigate(currentEntry.url, {
              state: currentEntry.getState(),
              info: "react-transition",
              history: "replace"
            });
          }
        }
        if ("object" === typeof navigation) {
          var isCancelled = false, pendingResolve = null;
          navigation.addEventListener("navigate", handleNavigate);
          navigation.addEventListener("navigatesuccess", handleNavigateComplete);
          navigation.addEventListener("navigateerror", handleNavigateComplete);
          setTimeout(startFakeNavigation, 100);
          return function() {
            isCancelled = true;
            navigation.removeEventListener("navigate", handleNavigate);
            navigation.removeEventListener("navigatesuccess", handleNavigateComplete);
            navigation.removeEventListener("navigateerror", handleNavigateComplete);
            null !== pendingResolve && (pendingResolve(), pendingResolve = null);
          };
        }
      }
      function ReactDOMRoot(internalRoot) {
        this._internalRoot = internalRoot;
      }
      ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render = function(children) {
        var root2 = this._internalRoot;
        if (null === root2) throw Error(formatProdErrorMessage(409));
        var current = root2.current, lane = requestUpdateLane();
        updateContainerImpl(current, lane, children, root2, null, null);
      };
      ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount = function() {
        var root2 = this._internalRoot;
        if (null !== root2) {
          this._internalRoot = null;
          var container2 = root2.containerInfo;
          updateContainerImpl(root2.current, 2, null, root2, null, null);
          flushSyncWork$1();
          container2[internalContainerInstanceKey] = null;
        }
      };
      function ReactDOMHydrationRoot(internalRoot) {
        this._internalRoot = internalRoot;
      }
      ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function(target) {
        if (target) {
          var updatePriority = resolveUpdatePriority();
          target = { blockedOn: null, target, priority: updatePriority };
          for (var i = 0; i < queuedExplicitHydrationTargets.length && 0 !== updatePriority && updatePriority < queuedExplicitHydrationTargets[i].priority; i++) ;
          queuedExplicitHydrationTargets.splice(i, 0, target);
          0 === i && attemptExplicitHydrationTarget(target);
        }
      };
      var isomorphicReactPackageVersion$jscomp$inline_1840 = React10.version;
      if ("19.2.4" !== isomorphicReactPackageVersion$jscomp$inline_1840)
        throw Error(
          formatProdErrorMessage(
            527,
            isomorphicReactPackageVersion$jscomp$inline_1840,
            "19.2.4"
          )
        );
      ReactDOMSharedInternals.findDOMNode = function(componentOrElement) {
        var fiber = componentOrElement._reactInternals;
        if (void 0 === fiber) {
          if ("function" === typeof componentOrElement.render)
            throw Error(formatProdErrorMessage(188));
          componentOrElement = Object.keys(componentOrElement).join(",");
          throw Error(formatProdErrorMessage(268, componentOrElement));
        }
        componentOrElement = findCurrentFiberUsingSlowPath(fiber);
        componentOrElement = null !== componentOrElement ? findCurrentHostFiberImpl(componentOrElement) : null;
        componentOrElement = null === componentOrElement ? null : componentOrElement.stateNode;
        return componentOrElement;
      };
      var internals$jscomp$inline_2347 = {
        bundleType: 0,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: ReactSharedInternals,
        reconcilerVersion: "19.2.4"
      };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        hook$jscomp$inline_2348 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!hook$jscomp$inline_2348.isDisabled && hook$jscomp$inline_2348.supportsFiber)
          try {
            rendererID = hook$jscomp$inline_2348.inject(
              internals$jscomp$inline_2347
            ), injectedHook = hook$jscomp$inline_2348;
          } catch (err) {
          }
      }
      var hook$jscomp$inline_2348;
      exports.createRoot = function(container2, options2) {
        if (!isValidContainer(container2)) throw Error(formatProdErrorMessage(299));
        var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError;
        null !== options2 && void 0 !== options2 && (true === options2.unstable_strictMode && (isStrictMode = true), void 0 !== options2.identifierPrefix && (identifierPrefix = options2.identifierPrefix), void 0 !== options2.onUncaughtError && (onUncaughtError = options2.onUncaughtError), void 0 !== options2.onCaughtError && (onCaughtError = options2.onCaughtError), void 0 !== options2.onRecoverableError && (onRecoverableError = options2.onRecoverableError));
        options2 = createFiberRoot(
          container2,
          1,
          false,
          null,
          null,
          isStrictMode,
          identifierPrefix,
          null,
          onUncaughtError,
          onCaughtError,
          onRecoverableError,
          defaultOnDefaultTransitionIndicator
        );
        container2[internalContainerInstanceKey] = options2.current;
        listenToAllSupportedEvents(container2);
        return new ReactDOMRoot(options2);
      };
      exports.hydrateRoot = function(container2, initialChildren, options2) {
        if (!isValidContainer(container2)) throw Error(formatProdErrorMessage(299));
        var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError, formState = null;
        null !== options2 && void 0 !== options2 && (true === options2.unstable_strictMode && (isStrictMode = true), void 0 !== options2.identifierPrefix && (identifierPrefix = options2.identifierPrefix), void 0 !== options2.onUncaughtError && (onUncaughtError = options2.onUncaughtError), void 0 !== options2.onCaughtError && (onCaughtError = options2.onCaughtError), void 0 !== options2.onRecoverableError && (onRecoverableError = options2.onRecoverableError), void 0 !== options2.formState && (formState = options2.formState));
        initialChildren = createFiberRoot(
          container2,
          1,
          true,
          initialChildren,
          null != options2 ? options2 : null,
          isStrictMode,
          identifierPrefix,
          formState,
          onUncaughtError,
          onCaughtError,
          onRecoverableError,
          defaultOnDefaultTransitionIndicator
        );
        initialChildren.context = getContextForSubtree(null);
        options2 = initialChildren.current;
        isStrictMode = requestUpdateLane();
        isStrictMode = getBumpedLaneForHydrationByLane(isStrictMode);
        identifierPrefix = createUpdate(isStrictMode);
        identifierPrefix.callback = null;
        enqueueUpdate(options2, identifierPrefix, isStrictMode);
        options2 = isStrictMode;
        initialChildren.current.lanes = options2;
        markRootUpdated$1(initialChildren, options2);
        ensureRootIsScheduled(initialChildren);
        container2[internalContainerInstanceKey] = initialChildren.current;
        listenToAllSupportedEvents(container2);
        return new ReactDOMHydrationRoot(initialChildren);
      };
      exports.version = "19.2.4";
    }
  });

  // node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/client.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_client_production();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/.pnpm/react@19.2.4/node_modules/react/cjs/react-jsx-runtime.production.js
  var require_react_jsx_runtime_production = __commonJS({
    "node_modules/.pnpm/react@19.2.4/node_modules/react/cjs/react-jsx-runtime.production.js"(exports) {
      "use strict";
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
      var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
      function jsxProd(type, config, maybeKey) {
        var key = null;
        void 0 !== maybeKey && (key = "" + maybeKey);
        void 0 !== config.key && (key = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        config = maybeKey.ref;
        return {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref: void 0 !== config ? config : null,
          props: maybeKey
        };
      }
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsx = jsxProd;
      exports.jsxs = jsxProd;
    }
  });

  // node_modules/.pnpm/react@19.2.4/node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/.pnpm/react@19.2.4/node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/.pnpm/react-is@19.2.7/node_modules/react-is/cjs/react-is.production.js
  var require_react_is_production = __commonJS({
    "node_modules/.pnpm/react-is@19.2.7/node_modules/react-is/cjs/react-is.production.js"(exports) {
      "use strict";
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
      var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
      var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
      var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
      var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
      var REACT_VIEW_TRANSITION_TYPE = /* @__PURE__ */ Symbol.for("react.view_transition");
      var REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference");
      function typeOf(object) {
        if ("object" === typeof object && null !== object) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              switch (object = object.type, object) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                case REACT_VIEW_TRANSITION_TYPE:
                  return object;
                default:
                  switch (object = object && object.$$typeof, object) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                      return object;
                    case REACT_CONSUMER_TYPE:
                      return object;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      exports.ContextConsumer = REACT_CONSUMER_TYPE;
      exports.ContextProvider = REACT_CONTEXT_TYPE;
      exports.Element = REACT_ELEMENT_TYPE;
      exports.ForwardRef = REACT_FORWARD_REF_TYPE;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Lazy = REACT_LAZY_TYPE;
      exports.Memo = REACT_MEMO_TYPE;
      exports.Portal = REACT_PORTAL_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
      exports.isContextConsumer = function(object) {
        return typeOf(object) === REACT_CONSUMER_TYPE;
      };
      exports.isContextProvider = function(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      };
      exports.isElement = function(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      };
      exports.isForwardRef = function(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      };
      exports.isFragment = function(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      };
      exports.isLazy = function(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      };
      exports.isMemo = function(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      };
      exports.isPortal = function(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      };
      exports.isProfiler = function(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      };
      exports.isStrictMode = function(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      };
      exports.isSuspense = function(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      };
      exports.isSuspenseList = function(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
      };
      exports.isValidElementType = function(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
      };
      exports.typeOf = typeOf;
    }
  });

  // node_modules/.pnpm/react-is@19.2.7/node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/.pnpm/react-is@19.2.7/node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_is_production();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js
  var require_react_is_production_min = __commonJS({
    "node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js"(exports) {
      "use strict";
      var b = "function" === typeof Symbol && Symbol.for;
      var c = b ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
      var d = b ? /* @__PURE__ */ Symbol.for("react.portal") : 60106;
      var e = b ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107;
      var f = b ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108;
      var g = b ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114;
      var h = b ? /* @__PURE__ */ Symbol.for("react.provider") : 60109;
      var k = b ? /* @__PURE__ */ Symbol.for("react.context") : 60110;
      var l = b ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111;
      var m = b ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111;
      var n = b ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112;
      var p = b ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113;
      var q = b ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120;
      var r2 = b ? /* @__PURE__ */ Symbol.for("react.memo") : 60115;
      var t = b ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116;
      var v = b ? /* @__PURE__ */ Symbol.for("react.block") : 60121;
      var w = b ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117;
      var x = b ? /* @__PURE__ */ Symbol.for("react.responder") : 60118;
      var y = b ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
      function z(a) {
        if ("object" === typeof a && null !== a) {
          var u = a.$$typeof;
          switch (u) {
            case c:
              switch (a = a.type, a) {
                case l:
                case m:
                case e:
                case g:
                case f:
                case p:
                  return a;
                default:
                  switch (a = a && a.$$typeof, a) {
                    case k:
                    case n:
                    case t:
                    case r2:
                    case h:
                      return a;
                    default:
                      return u;
                  }
              }
            case d:
              return u;
          }
        }
      }
      function A(a) {
        return z(a) === m;
      }
      exports.AsyncMode = l;
      exports.ConcurrentMode = m;
      exports.ContextConsumer = k;
      exports.ContextProvider = h;
      exports.Element = c;
      exports.ForwardRef = n;
      exports.Fragment = e;
      exports.Lazy = t;
      exports.Memo = r2;
      exports.Portal = d;
      exports.Profiler = g;
      exports.StrictMode = f;
      exports.Suspense = p;
      exports.isAsyncMode = function(a) {
        return A(a) || z(a) === l;
      };
      exports.isConcurrentMode = A;
      exports.isContextConsumer = function(a) {
        return z(a) === k;
      };
      exports.isContextProvider = function(a) {
        return z(a) === h;
      };
      exports.isElement = function(a) {
        return "object" === typeof a && null !== a && a.$$typeof === c;
      };
      exports.isForwardRef = function(a) {
        return z(a) === n;
      };
      exports.isFragment = function(a) {
        return z(a) === e;
      };
      exports.isLazy = function(a) {
        return z(a) === t;
      };
      exports.isMemo = function(a) {
        return z(a) === r2;
      };
      exports.isPortal = function(a) {
        return z(a) === d;
      };
      exports.isProfiler = function(a) {
        return z(a) === g;
      };
      exports.isStrictMode = function(a) {
        return z(a) === f;
      };
      exports.isSuspense = function(a) {
        return z(a) === p;
      };
      exports.isValidElementType = function(a) {
        return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r2 || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
      };
      exports.typeOf = z;
    }
  });

  // node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js
  var require_react_is2 = __commonJS({
    "node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_is_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
  var require_hoist_non_react_statics_cjs = __commonJS({
    "node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
      "use strict";
      var reactIs = require_react_is2();
      var REACT_STATICS = {
        childContextTypes: true,
        contextType: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromError: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
      };
      var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
      };
      var FORWARD_REF_STATICS = {
        "$$typeof": true,
        render: true,
        defaultProps: true,
        displayName: true,
        propTypes: true
      };
      var MEMO_STATICS = {
        "$$typeof": true,
        compare: true,
        defaultProps: true,
        displayName: true,
        propTypes: true,
        type: true
      };
      var TYPE_STATICS = {};
      TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
      TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
      function getStatics(component) {
        if (reactIs.isMemo(component)) {
          return MEMO_STATICS;
        }
        return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
      }
      var defineProperty = Object.defineProperty;
      var getOwnPropertyNames = Object.getOwnPropertyNames;
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var getPrototypeOf = Object.getPrototypeOf;
      var objectPrototype = Object.prototype;
      function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== "string") {
          if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
              hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
          }
          var keys = getOwnPropertyNames(sourceComponent);
          if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
          }
          var targetStatics = getStatics(targetComponent);
          var sourceStatics = getStatics(sourceComponent);
          for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
              var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
              try {
                defineProperty(targetComponent, key, descriptor);
              } catch (e) {
              }
            }
          }
        }
        return targetComponent;
      }
      module.exports = hoistNonReactStatics;
    }
  });

  // extension/content-entry.tsx
  var import_client = __toESM(require_client());
  var import_react8 = __toESM(require_react());

  // lib/utils.ts
  function cn(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // components/ui/avatar.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime());
  function Avatar({ className, ...props }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: cn(
          "relative flex size-12 shrink-0 overflow-hidden rounded-full",
          className
        ),
        ...props
      }
    );
  }
  function AvatarFallback({
    className,
    ...props
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: cn(
          "flex size-full items-center justify-center rounded-full bg-zinc-800 text-zinc-400",
          className
        ),
        ...props
      }
    );
  }

  // components/ui/button.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
  var variants = {
    default: "bg-white text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] hover:bg-zinc-100",
    secondary: "border border-white/10 bg-zinc-900/95 text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:bg-zinc-800"
  };
  function Button({
    className,
    variant = "default",
    ...props
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        className: cn(
          "inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/70 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          className
        ),
        ...props
      }
    );
  }

  // components/ui/card.tsx
  var import_jsx_runtime3 = __toESM(require_jsx_runtime());
  function Card({ className, ...props }) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        className: cn(
          "rounded-[1.25rem] border border-white/10 bg-[#111111] text-zinc-50 shadow-2xl shadow-black/40",
          className
        ),
        ...props
      }
    );
  }
  function CardContent({
    className,
    ...props
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: cn("p-6", className), ...props });
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/SvgIcon/SvgIcon.mjs
  var React8 = __toESM(require_react(), 1);

  // node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  var clsx_default = clsx;

  // node_modules/.pnpm/@mui+utils@9.1.1_@types+react@19.2.17_react@19.2.4/node_modules/@mui/utils/composeClasses/composeClasses.mjs
  function composeClasses(slots, getUtilityClass, classes = void 0) {
    const output = {};
    for (const slotName in slots) {
      const slot = slots[slotName];
      let buffer = "";
      let start = true;
      for (let i = 0; i < slot.length; i += 1) {
        const value = slot[i];
        if (value) {
          buffer += (start === true ? "" : " ") + getUtilityClass(value);
          start = false;
          if (classes && classes[value]) {
            buffer += " " + classes[value];
          }
        }
      }
      output[slotName] = buffer;
    }
    return output;
  }

  // node_modules/.pnpm/@mui+utils@9.1.1_@types+react@19.2.17_react@19.2.4/node_modules/@mui/utils/formatMuiErrorMessage/formatMuiErrorMessage.mjs
  function formatMuiErrorMessage(code, ...args) {
    const url = new URL(`https://mui.com/production-error/?code=${code}`);
    args.forEach((arg2) => url.searchParams.append("args[]", arg2));
    return `Minified MUI error #${code}; visit ${url} for the full message.`;
  }

  // node_modules/.pnpm/@mui+utils@9.1.1_@types+react@19.2.17_react@19.2.4/node_modules/@mui/utils/capitalize/capitalize.mjs
  function capitalize(string) {
    if (typeof string !== "string") {
      throw new Error(false ? "MUI: `capitalize(string)` expects a string argument." : formatMuiErrorMessage(7));
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/utils/capitalize.mjs
  var capitalize_default = capitalize;

  // node_modules/.pnpm/@mui+utils@9.1.1_@types+react@19.2.17_react@19.2.4/node_modules/@mui/utils/fastDeepAssign/fastDeepAssign.mjs
  function fastDeepAssign(target, source) {
    const sourceIsArray = Array.isArray(source);
    const targetIsArray = Array.isArray(target);
    if (isPrimitive(source)) {
      return source;
    } else if (isPrimitiveOrBuiltIn(target)) {
      return clone(source);
    } else if (sourceIsArray && targetIsArray) {
      return mergeArray(target, source);
    } else if (sourceIsArray !== targetIsArray) {
      return clone(source);
    } else {
      return mergeObject(target, source);
    }
  }
  function cloneArray(value) {
    let i = 0;
    const il = value.length;
    const result = new Array(il);
    for (i = 0; i < il; i += 1) {
      result[i] = clone(value[i]);
    }
    return result;
  }
  function cloneObject(target) {
    const result = {};
    for (const key in target) {
      if (key === "__proto__" || key === "constructor" || key === "prototype") {
        continue;
      }
      result[key] = clone(target[key]);
    }
    return result;
  }
  function mergeArray(target, source) {
    const tl = target.length;
    for (let i = 0; i < source.length; i += 1) {
      target[tl + i] = clone(source[i]);
    }
    return target;
  }
  function isMergeableObject(value) {
    return typeof value === "object" && value !== null && !(value instanceof RegExp) && !(value instanceof Date);
  }
  function isPrimitive(value) {
    return typeof value !== "object" || value === null;
  }
  function isPrimitiveOrBuiltIn(value) {
    return typeof value !== "object" || value === null || value instanceof RegExp || value instanceof Date;
  }
  function clone(entry) {
    return isMergeableObject(entry) ? Array.isArray(entry) ? cloneArray(entry) : cloneObject(entry) : entry;
  }
  function mergeObject(target, source) {
    for (const key in source) {
      if (key === "__proto__" || key === "constructor" || key === "prototype") {
        continue;
      }
      if (key in target) {
        target[key] = fastDeepAssign(target[key], source[key]);
      } else {
        target[key] = clone(source[key]);
      }
    }
    return target;
  }

  // node_modules/.pnpm/@mui+utils@9.1.1_@types+react@19.2.17_react@19.2.4/node_modules/@mui/utils/isObjectEmpty/isObjectEmpty.mjs
  function isObjectEmpty(object) {
    if (object == null) {
      return true;
    }
    for (const _ in object) {
      return false;
    }
    return true;
  }

  // node_modules/.pnpm/@mui+utils@9.1.1_@types+react@19.2.17_react@19.2.4/node_modules/@mui/utils/deepmerge/deepmerge.mjs
  var React = __toESM(require_react(), 1);
  var import_react_is = __toESM(require_react_is(), 1);
  function isPlainObject(item) {
    if (typeof item !== "object" || item === null) {
      return false;
    }
    const prototype = Object.getPrototypeOf(item);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
  }
  function deepClone(source) {
    if (/* @__PURE__ */ React.isValidElement(source) || (0, import_react_is.isValidElementType)(source) || !isPlainObject(source)) {
      return source;
    }
    const output = {};
    Object.keys(source).forEach((key) => {
      output[key] = deepClone(source[key]);
    });
    return output;
  }
  function deepmerge(target, source, options = {
    clone: true
  }) {
    const output = options.clone ? {
      ...target
    } : target;
    if (isPlainObject(target) && isPlainObject(source)) {
      Object.keys(source).forEach((key) => {
        if (/* @__PURE__ */ React.isValidElement(source[key]) || (0, import_react_is.isValidElementType)(source[key])) {
          output[key] = source[key];
        } else if (isPlainObject(source[key]) && // Avoid prototype pollution
        Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
          output[key] = deepmerge(target[key], source[key], options);
        } else if (options.clone) {
          output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
        } else {
          output[key] = source[key];
        }
      });
    }
    return output;
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/cssContainerQueries/cssContainerQueries.mjs
  var MIN_WIDTH_PATTERN = /min-width:\s*([0-9.]+)/;
  function sortContainerQueries(theme, css) {
    if (!theme.containerQueries || !hasContainerQuery(css)) {
      return css;
    }
    const keys = [];
    for (const key in css) {
      if (key.startsWith("@container")) {
        keys.push(key);
      }
    }
    keys.sort((a, b) => {
      return +(a.match(MIN_WIDTH_PATTERN)?.[1] || 0) - +(b.match(MIN_WIDTH_PATTERN)?.[1] || 0);
    });
    const result = css;
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const value = result[key];
      delete result[key];
      result[key] = value;
    }
    return result;
  }
  function hasContainerQuery(css) {
    for (const key in css) {
      if (key.startsWith("@container")) {
        return true;
      }
    }
    return false;
  }
  function isCqShorthand(breakpointKeys, value) {
    return value === "@" || value.startsWith("@") && (breakpointKeys.some((key) => value.startsWith(`@${key}`)) || !!value.match(/^@\d/));
  }
  function getContainerQuery(theme, shorthand) {
    const matches = shorthand.match(/^@([^/]+)?\/?(.+)?$/);
    if (!matches) {
      if (false) {
        throw (
          /* minify-error */
          new Error(`MUI: The provided shorthand ${`(${shorthand})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`)
        );
      }
      return null;
    }
    const [, containerQuery, containerName] = matches;
    const value = Number.isNaN(+containerQuery) ? containerQuery || 0 : +containerQuery;
    return theme.containerQueries(containerName).up(value);
  }
  function cssContainerQueries(themeInput) {
    const toContainerQuery = (mediaQuery, name) => mediaQuery.replace("@media", name ? `@container ${name}` : "@container");
    function attachCq(node3, name) {
      node3.up = (...args) => toContainerQuery(themeInput.breakpoints.up(...args), name);
      node3.down = (...args) => toContainerQuery(themeInput.breakpoints.down(...args), name);
      node3.between = (...args) => toContainerQuery(themeInput.breakpoints.between(...args), name);
      node3.only = (...args) => toContainerQuery(themeInput.breakpoints.only(...args), name);
      node3.not = (...args) => {
        const result = toContainerQuery(themeInput.breakpoints.not(...args), name);
        if (result.includes("not all and")) {
          return result.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or");
        }
        return result;
      };
    }
    const node2 = {};
    const containerQueries = (name) => {
      attachCq(node2, name);
      return node2;
    };
    attachCq(containerQueries);
    return {
      ...themeInput,
      containerQueries
    };
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/createBreakpoints/createBreakpoints.mjs
  var sortBreakpointsValues = (values2) => {
    const breakpointsAsArray = Object.keys(values2).map((key) => ({
      key,
      val: values2[key]
    })) || [];
    breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
    return breakpointsAsArray.reduce((acc, obj) => {
      return {
        ...acc,
        [obj.key]: obj.val
      };
    }, {});
  };
  function createBreakpoints(breakpoints) {
    const {
      values: values2 = {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      },
      unit = "px",
      step = 5,
      ...other
    } = breakpoints;
    const sortedValues = sortBreakpointsValues(values2);
    const keys = Object.keys(sortedValues);
    function up(key) {
      const value = typeof values2[key] === "number" ? values2[key] : key;
      return `@media (min-width:${value}${unit})`;
    }
    function down(key) {
      const value = typeof values2[key] === "number" ? values2[key] : key;
      return `@media (max-width:${value - step / 100}${unit})`;
    }
    function between(start, end) {
      const endIndex = keys.indexOf(end);
      return `@media (min-width:${typeof values2[start] === "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys[endIndex]] === "number" ? values2[keys[endIndex]] : end) - step / 100}${unit})`;
    }
    function only(key) {
      if (keys.indexOf(key) + 1 < keys.length) {
        return between(key, keys[keys.indexOf(key) + 1]);
      }
      return up(key);
    }
    function not(key) {
      const keyIndex = keys.indexOf(key);
      if (keyIndex === 0) {
        return up(keys[1]);
      }
      if (keyIndex === keys.length - 1) {
        return down(keys[keyIndex]);
      }
      return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
    }
    const mediaKeys = [];
    for (let i = 0; i < keys.length; i += 1) {
      mediaKeys.push(up(keys[i]));
    }
    return {
      keys,
      values: sortedValues,
      up,
      down,
      between,
      only,
      not,
      unit,
      internal_mediaKeys: mediaKeys,
      ...other
    };
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/breakpoints/breakpoints.mjs
  var EMPTY_THEME = {};
  var values = {
    xs: 0,
    // phone
    sm: 600,
    // tablet
    md: 900,
    // small laptop
    lg: 1200,
    // desktop
    xl: 1536
    // large screen
  };
  var DEFAULT_BREAKPOINTS = createBreakpoints({
    values
  });
  var defaultContainerQueries = {
    containerQueries: (containerName) => ({
      up: (key) => {
        let result = typeof key === "number" ? key : values[key] || key;
        if (typeof result === "number") {
          result = `${result}px`;
        }
        return containerName ? `@container ${containerName} (min-width:${result})` : `@container (min-width:${result})`;
      }
    })
  };
  function handleBreakpoints(props, propValue, styleFromPropValue) {
    const result = {};
    return iterateBreakpoints(result, props.theme, propValue, (mediaKey, value, initialKey) => {
      const finalValue = styleFromPropValue(value, initialKey);
      if (mediaKey) {
        result[mediaKey] = finalValue;
      } else {
        fastDeepAssign(result, finalValue);
      }
    });
  }
  function iterateBreakpoints(target, theme, propValue, callback) {
    theme ??= EMPTY_THEME;
    if (Array.isArray(propValue)) {
      const breakpoints = theme.breakpoints ?? DEFAULT_BREAKPOINTS;
      for (let i = 0; i < propValue.length; i += 1) {
        buildBreakpoint(target, breakpoints.up(breakpoints.keys[i]), propValue[i], void 0, callback);
      }
      return target;
    }
    if (typeof propValue === "object") {
      const breakpoints = theme.breakpoints ?? DEFAULT_BREAKPOINTS;
      const breakpointValues = breakpoints.values ?? values;
      for (const key in propValue) {
        if (isCqShorthand(breakpoints.keys, key)) {
          const containerKey = getContainerQuery(theme.containerQueries ? theme : defaultContainerQueries, key);
          if (containerKey) {
            buildBreakpoint(target, containerKey, propValue[key], key, callback);
          }
        } else if (key in breakpointValues) {
          const mediaKey = breakpoints.up(key);
          buildBreakpoint(target, mediaKey, propValue[key], key, callback);
        } else {
          const cssKey = key;
          target[cssKey] = propValue[cssKey];
        }
      }
      return target;
    }
    callback(void 0, propValue);
    return target;
  }
  function buildBreakpoint(target, mediaKey, value, initialKey, callback) {
    target[mediaKey] ??= {};
    callback(mediaKey, value, initialKey);
  }
  function createEmptyBreakpointObject(breakpoints = DEFAULT_BREAKPOINTS) {
    const {
      internal_mediaKeys: mediaKeys
    } = breakpoints;
    const result = {};
    for (let i = 0; i < mediaKeys.length; i += 1) {
      result[mediaKeys[i]] = {};
    }
    return result;
  }
  function removeUnusedBreakpoints(breakpoints, style3) {
    const breakpointKeys = breakpoints.internal_mediaKeys;
    for (let i = 0; i < breakpointKeys.length; i += 1) {
      const key = breakpointKeys[i];
      if (isObjectEmpty(style3[key])) {
        delete style3[key];
      }
    }
    return style3;
  }
  function hasBreakpoint(breakpoints, value) {
    if (Array.isArray(value)) {
      return true;
    }
    if (typeof value === "object" && value !== null) {
      for (let i = 0; i < breakpoints.keys.length; i += 1) {
        if (breakpoints.keys[i] in value) {
          return true;
        }
      }
      const valueKeys = Object.keys(value);
      for (let i = 0; i < valueKeys.length; i += 1) {
        if (isCqShorthand(breakpoints.keys, valueKeys[i])) {
          return true;
        }
      }
    }
    return false;
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/style/style.mjs
  function getStyleValue2(themeMapping, transform, userValue, alternateProp) {
    let value;
    if (typeof themeMapping === "function") {
      value = themeMapping(userValue);
    } else if (Array.isArray(themeMapping)) {
      value = themeMapping[userValue] || userValue;
    } else if (typeof userValue === "string") {
      value = getPath(themeMapping, userValue, true, alternateProp) || userValue;
    } else {
      value = userValue;
    }
    if (transform) {
      value = transform(value, userValue, themeMapping);
    }
    return value;
  }
  function getPath(obj, pathInput, checkVars = true, alternateProp = void 0) {
    if (!obj || !pathInput) {
      return null;
    }
    const path = pathInput.split(".");
    if (obj.vars && checkVars) {
      const val = getPathImpl(obj.vars, path, alternateProp);
      if (val != null) {
        return val;
      }
    }
    return getPathImpl(obj, path, alternateProp);
  }
  function getPathImpl(object, path, alternateProp = void 0) {
    let lastResult = void 0;
    let result = object;
    let index = 0;
    while (index < path.length) {
      if (result === null || result === void 0) {
        return result;
      }
      lastResult = result;
      result = result[path[index]];
      index += 1;
    }
    if (alternateProp && result === void 0) {
      const lastKey = path[path.length - 1];
      const alternateKey = `${alternateProp}${lastKey === "default" ? "" : capitalize(lastKey)}`;
      return lastResult?.[alternateKey];
    }
    return result;
  }
  function style(options) {
    const {
      prop,
      cssProperty = options.prop,
      themeKey,
      transform
    } = options;
    const fn = (props) => {
      if (props[prop] == null) {
        return null;
      }
      const propValue = props[prop];
      const theme = props.theme;
      const themeMapping = getPath(theme, themeKey) || {};
      const styleFromPropValue = (valueFinal) => {
        const value = getStyleValue2(themeMapping, transform, valueFinal, prop);
        return cssProperty === false ? value : {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, propValue, styleFromPropValue);
    };
    fn.propTypes = false ? {
      [prop]: responsivePropType_default
    } : {};
    fn.filterProps = [prop];
    return fn;
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/spacing/spacing.mjs
  var EMPTY_THEME2 = {
    internal_cache: {}
  };
  var properties = {
    m: "margin",
    p: "padding"
  };
  var directions = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
  };
  var aliases = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  };
  var CSS_PROPERTIES = {};
  for (const key in properties) {
    CSS_PROPERTIES[key] = [properties[key]];
  }
  for (const keyProperty in properties) {
    for (const keyDirection in directions) {
      const property = properties[keyProperty];
      const direction = directions[keyDirection];
      const value = Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
      CSS_PROPERTIES[keyProperty + keyDirection] = value;
    }
  }
  for (const key in aliases) {
    CSS_PROPERTIES[key] = CSS_PROPERTIES[aliases[key]];
  }
  var marginKeys = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]);
  var paddingKeys = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
  var spacingKeys = /* @__PURE__ */ new Set([...marginKeys, ...paddingKeys]);
  function createUnaryUnit(theme, themeKey, defaultValue, propName) {
    const themeSpacing = getPath(theme, themeKey, true) ?? defaultValue;
    if (typeof themeSpacing === "number" || typeof themeSpacing === "string") {
      return (val) => {
        if (typeof val === "string") {
          return val;
        }
        if (false) {
          if (typeof val !== "number") {
            console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${val}.`);
          }
        }
        if (typeof themeSpacing === "string") {
          if (themeSpacing.startsWith("var(") && val === 0) {
            return 0;
          }
          if (themeSpacing.startsWith("var(") && val === 1) {
            return themeSpacing;
          }
          return `calc(${val} * ${themeSpacing})`;
        }
        return themeSpacing * val;
      };
    }
    if (Array.isArray(themeSpacing)) {
      return (val) => {
        if (typeof val === "string") {
          return val;
        }
        const abs2 = Math.abs(val);
        if (false) {
          if (!Number.isInteger(abs2)) {
            console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join("\n"));
          } else if (abs2 > themeSpacing.length - 1) {
            console.error([`MUI: The value provided (${abs2}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs2} > ${themeSpacing.length - 1}, you need to add the missing values.`].join("\n"));
          }
        }
        const transformed = themeSpacing[abs2];
        if (val >= 0) {
          return transformed;
        }
        if (typeof transformed === "number") {
          return -transformed;
        }
        if (typeof transformed === "string" && transformed.startsWith("var(")) {
          return `calc(-1 * ${transformed})`;
        }
        return `-${transformed}`;
      };
    }
    if (typeof themeSpacing === "function") {
      return themeSpacing;
    }
    if (false) {
      console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, "It should be a number, an array or a function."].join("\n"));
    }
    return () => void 0;
  }
  function createUnarySpacing(theme) {
    return createUnaryUnit(theme, "spacing", 8, "spacing");
  }
  function getValue(transformer, propValue) {
    if (typeof propValue === "string" || propValue == null) {
      return propValue;
    }
    return transformer(propValue);
  }
  var container = [""];
  function style2(props, keys) {
    const theme = props.theme ?? EMPTY_THEME2;
    const transformer = theme?.internal_cache?.unarySpacing ?? createUnarySpacing(theme);
    const result = {};
    for (const prop in props) {
      if (!keys.has(prop)) {
        continue;
      }
      const cssProperties = CSS_PROPERTIES[prop] ?? (container[0] = prop, container);
      const propValue = props[prop];
      iterateBreakpoints(result, props.theme, propValue, (mediaKey, value) => {
        const target = mediaKey ? result[mediaKey] : result;
        for (let i = 0; i < cssProperties.length; i += 1) {
          target[cssProperties[i]] = getValue(transformer, value);
        }
      });
    }
    return result;
  }
  function marginFn(props) {
    return style2(props, marginKeys);
  }
  marginFn.propTypes = false ? Array.from(marginKeys).reduce((obj, key) => {
    obj[key] = responsivePropType_default;
    return obj;
  }, {}) : {};
  marginFn.filterProps = marginKeys;
  var margin = marginFn;
  function paddingFn(props) {
    return style2(props, paddingKeys);
  }
  paddingFn.propTypes = false ? Array.from(paddingKeys).reduce((obj, key) => {
    obj[key] = responsivePropType_default;
    return obj;
  }, {}) : {};
  paddingFn.filterProps = paddingKeys;
  var padding = paddingFn;
  function spacingFn(props) {
    return style2(props, spacingKeys);
  }
  spacingFn.propTypes = false ? Array.from(spacingKeys).reduce((obj, key) => {
    obj[key] = responsivePropType_default;
    return obj;
  }, {}) : {};
  spacingFn.filterProps = spacingKeys;

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/compose/compose.mjs
  function compose(...styles) {
    const handlers = styles.reduce((acc, style3) => {
      style3.filterProps.forEach((prop) => {
        acc[prop] = style3;
      });
      return acc;
    }, {});
    const fn = (props) => {
      const result = {};
      for (const prop in props) {
        if (handlers[prop]) {
          fastDeepAssign(result, handlers[prop](props));
        }
      }
      return result;
    };
    fn.propTypes = false ? styles.reduce((acc, style3) => Object.assign(acc, style3.propTypes), {}) : {};
    fn.filterProps = styles.reduce((acc, style3) => acc.concat(style3.filterProps), []);
    return fn;
  }
  var compose_default = compose;

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/borders/borders.mjs
  function borderTransform(value) {
    if (typeof value !== "number") {
      return value;
    }
    return `${value}px solid`;
  }
  function createBorderStyle(prop, transform) {
    return style({
      prop,
      themeKey: "borders",
      transform
    });
  }
  var border = createBorderStyle("border", borderTransform);
  var borderTop = createBorderStyle("borderTop", borderTransform);
  var borderRight = createBorderStyle("borderRight", borderTransform);
  var borderBottom = createBorderStyle("borderBottom", borderTransform);
  var borderLeft = createBorderStyle("borderLeft", borderTransform);
  var borderColor = createBorderStyle("borderColor");
  var borderTopColor = createBorderStyle("borderTopColor");
  var borderRightColor = createBorderStyle("borderRightColor");
  var borderBottomColor = createBorderStyle("borderBottomColor");
  var borderLeftColor = createBorderStyle("borderLeftColor");
  var outline = createBorderStyle("outline", borderTransform);
  var outlineColor = createBorderStyle("outlineColor");
  var borderRadius = (props) => {
    if (props.borderRadius !== void 0 && props.borderRadius !== null) {
      const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius");
      const styleFromPropValue = (propValue) => ({
        borderRadius: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
    }
    return null;
  };
  borderRadius.propTypes = false ? {
    borderRadius: responsivePropType_default
  } : {};
  borderRadius.filterProps = ["borderRadius"];
  var borders = compose_default(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/cssGrid/cssGrid.mjs
  var gap = (props) => {
    if (props.gap !== void 0 && props.gap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8, "gap");
      const styleFromPropValue = (propValue) => ({
        gap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.gap, styleFromPropValue);
    }
    return null;
  };
  gap.propTypes = false ? {
    gap: responsivePropType_default
  } : {};
  gap.filterProps = ["gap"];
  var columnGap = (props) => {
    if (props.columnGap !== void 0 && props.columnGap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8, "columnGap");
      const styleFromPropValue = (propValue) => ({
        columnGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.columnGap, styleFromPropValue);
    }
    return null;
  };
  columnGap.propTypes = false ? {
    columnGap: responsivePropType_default
  } : {};
  columnGap.filterProps = ["columnGap"];
  var rowGap = (props) => {
    if (props.rowGap !== void 0 && props.rowGap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8, "rowGap");
      const styleFromPropValue = (propValue) => ({
        rowGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.rowGap, styleFromPropValue);
    }
    return null;
  };
  rowGap.propTypes = false ? {
    rowGap: responsivePropType_default
  } : {};
  rowGap.filterProps = ["rowGap"];
  var gridColumn = style({
    prop: "gridColumn"
  });
  var gridRow = style({
    prop: "gridRow"
  });
  var gridAutoFlow = style({
    prop: "gridAutoFlow"
  });
  var gridAutoColumns = style({
    prop: "gridAutoColumns"
  });
  var gridAutoRows = style({
    prop: "gridAutoRows"
  });
  var gridTemplateColumns = style({
    prop: "gridTemplateColumns"
  });
  var gridTemplateRows = style({
    prop: "gridTemplateRows"
  });
  var gridTemplateAreas = style({
    prop: "gridTemplateAreas"
  });
  var gridArea = style({
    prop: "gridArea"
  });
  var grid = compose_default(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/palette/palette.mjs
  function paletteTransform(value, userValue) {
    if (userValue === "grey") {
      return userValue;
    }
    return value;
  }
  var color = style({
    prop: "color",
    themeKey: "palette",
    transform: paletteTransform
  });
  var bgcolor = style({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: paletteTransform
  });
  var backgroundColor = style({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: paletteTransform
  });
  var palette = compose_default(color, bgcolor, backgroundColor);

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/sizing/sizing.mjs
  var breakpointsValues = values;
  function sizingTransform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }
  var width = style({
    prop: "width",
    transform: sizingTransform
  });
  var maxWidth = (props) => {
    if (props.maxWidth !== void 0 && props.maxWidth !== null) {
      const styleFromPropValue = (propValue) => {
        const breakpoint = props.theme?.breakpoints?.values?.[propValue] || breakpointsValues[propValue];
        if (!breakpoint) {
          return {
            maxWidth: sizingTransform(propValue)
          };
        }
        if (props.theme?.breakpoints?.unit !== "px") {
          return {
            maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
          };
        }
        return {
          maxWidth: breakpoint
        };
      };
      return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
    }
    return null;
  };
  maxWidth.filterProps = ["maxWidth"];
  var minWidth = style({
    prop: "minWidth",
    transform: sizingTransform
  });
  var height = style({
    prop: "height",
    transform: sizingTransform
  });
  var maxHeight = style({
    prop: "maxHeight",
    transform: sizingTransform
  });
  var minHeight = style({
    prop: "minHeight",
    transform: sizingTransform
  });
  var sizeWidth = style({
    prop: "size",
    cssProperty: "width",
    transform: sizingTransform
  });
  var sizeHeight = style({
    prop: "size",
    cssProperty: "height",
    transform: sizingTransform
  });
  var boxSizing = style({
    prop: "boxSizing"
  });
  var sizing = compose_default(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/styleFunctionSx/defaultSxConfig.mjs
  var defaultSxConfig = {
    // borders
    border: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderTop: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderRight: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderBottom: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderLeft: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderColor: {
      themeKey: "palette"
    },
    borderTopColor: {
      themeKey: "palette"
    },
    borderRightColor: {
      themeKey: "palette"
    },
    borderBottomColor: {
      themeKey: "palette"
    },
    borderLeftColor: {
      themeKey: "palette"
    },
    outline: {
      themeKey: "borders",
      transform: borderTransform
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: borderRadius
    },
    // palette
    color: {
      themeKey: "palette",
      transform: paletteTransform
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: paletteTransform
    },
    backgroundColor: {
      themeKey: "palette",
      transform: paletteTransform
    },
    // spacing
    p: {
      style: padding
    },
    pt: {
      style: padding
    },
    pr: {
      style: padding
    },
    pb: {
      style: padding
    },
    pl: {
      style: padding
    },
    px: {
      style: padding
    },
    py: {
      style: padding
    },
    padding: {
      style: padding
    },
    paddingTop: {
      style: padding
    },
    paddingRight: {
      style: padding
    },
    paddingBottom: {
      style: padding
    },
    paddingLeft: {
      style: padding
    },
    paddingX: {
      style: padding
    },
    paddingY: {
      style: padding
    },
    paddingInline: {
      style: padding
    },
    paddingInlineStart: {
      style: padding
    },
    paddingInlineEnd: {
      style: padding
    },
    paddingBlock: {
      style: padding
    },
    paddingBlockStart: {
      style: padding
    },
    paddingBlockEnd: {
      style: padding
    },
    m: {
      style: margin
    },
    mt: {
      style: margin
    },
    mr: {
      style: margin
    },
    mb: {
      style: margin
    },
    ml: {
      style: margin
    },
    mx: {
      style: margin
    },
    my: {
      style: margin
    },
    margin: {
      style: margin
    },
    marginTop: {
      style: margin
    },
    marginRight: {
      style: margin
    },
    marginBottom: {
      style: margin
    },
    marginLeft: {
      style: margin
    },
    marginX: {
      style: margin
    },
    marginY: {
      style: margin
    },
    marginInline: {
      style: margin
    },
    marginInlineStart: {
      style: margin
    },
    marginInlineEnd: {
      style: margin
    },
    marginBlock: {
      style: margin
    },
    marginBlockStart: {
      style: margin
    },
    marginBlockEnd: {
      style: margin
    },
    // display
    displayPrint: {
      cssProperty: false,
      transform: (value) => ({
        "@media print": {
          display: value
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    // flexbox
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    // grid
    gap: {
      style: gap
    },
    rowGap: {
      style: rowGap
    },
    columnGap: {
      style: columnGap
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    // positions
    position: {},
    zIndex: {
      themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    // shadows
    boxShadow: {
      themeKey: "shadows"
    },
    // sizing
    width: {
      transform: sizingTransform
    },
    maxWidth: {
      style: maxWidth
    },
    minWidth: {
      transform: sizingTransform
    },
    height: {
      transform: sizingTransform
    },
    maxHeight: {
      transform: sizingTransform
    },
    minHeight: {
      transform: sizingTransform
    },
    boxSizing: {},
    // typography
    font: {
      themeKey: "font"
    },
    fontFamily: {
      themeKey: "typography"
    },
    fontSize: {
      themeKey: "typography"
    },
    fontStyle: {
      themeKey: "typography"
    },
    fontWeight: {
      themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: "typography"
    }
  };
  var defaultSxConfig_default = defaultSxConfig;

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/styleFunctionSx/styleFunctionSx.mjs
  var EMPTY_THEME3 = {};
  function unstable_createStyleFunctionSx() {
    function styleFunctionSx(props) {
      if (!props.sx) {
        return null;
      }
      const {
        sx,
        theme = EMPTY_THEME3,
        nested
      } = props;
      const config = theme.unstable_sxConfig ?? defaultSxConfig_default;
      const wrapper2 = {
        sx: null,
        theme,
        nested: true
      };
      function process2(sxInput) {
        let sxObject = sxInput;
        if (typeof sxInput === "function") {
          sxObject = sxInput(theme);
        } else if (typeof sxInput !== "object") {
          return sxInput;
        }
        if (!sxObject) {
          return null;
        }
        const breakpoints = theme.breakpoints ?? DEFAULT_BREAKPOINTS;
        const css = createEmptyBreakpointObject(breakpoints);
        for (const styleKey in sxObject) {
          const value = callIfFn(sxObject[styleKey], theme);
          if (value === null || value === void 0) {
            continue;
          }
          if (typeof value !== "object") {
            setThemeValue(css, styleKey, value, theme, config);
            continue;
          }
          if (config[styleKey]) {
            setThemeValue(css, styleKey, value, theme, config);
            continue;
          }
          if (hasBreakpoint(breakpoints, value)) {
            iterateBreakpoints(css, props.theme, value, (mediaKey, finalValue) => {
              css[mediaKey][styleKey] = finalValue;
            });
          } else {
            wrapper2.sx = value;
            css[styleKey] = styleFunctionSx(wrapper2);
          }
        }
        if (!nested && theme.modularCssLayers) {
          return {
            "@layer sx": sortContainerQueries(theme, removeUnusedBreakpoints(breakpoints, css))
          };
        }
        return sortContainerQueries(theme, removeUnusedBreakpoints(breakpoints, css));
      }
      return Array.isArray(sx) ? sx.map(process2) : process2(sx);
    }
    styleFunctionSx.filterProps = ["sx"];
    return styleFunctionSx;
  }
  var styleFunctionSx_default = unstable_createStyleFunctionSx();
  function setThemeValue(css, prop, value, theme, config) {
    const options = config[prop];
    if (!options) {
      css[prop] = value;
      return;
    }
    if (value == null) {
      return;
    }
    const {
      themeKey
    } = options;
    if (themeKey === "typography" && value === "inherit") {
      css[prop] = value;
      return;
    }
    const {
      style: style3
    } = options;
    if (style3) {
      fastDeepAssign(css, style3({
        [prop]: value,
        theme
      }));
      return;
    }
    const {
      cssProperty = prop,
      transform
    } = options;
    const themeMapping = getPath(theme, themeKey);
    iterateBreakpoints(css, theme, value, (mediaKey, valueFinal) => {
      const finalValue = getStyleValue2(themeMapping, transform, valueFinal, prop);
      if (cssProperty === false) {
        if (mediaKey) {
          fastDeepAssign(css[mediaKey], finalValue);
        } else {
          fastDeepAssign(css, finalValue);
        }
      } else {
        if (mediaKey) {
          css[mediaKey][cssProperty] = finalValue;
        } else {
          css[cssProperty] = finalValue;
        }
      }
    });
  }
  function callIfFn(maybeFn, arg2) {
    return typeof maybeFn === "function" ? maybeFn(arg2) : maybeFn;
  }

  // node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }

  // node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
  var React3 = __toESM(require_react());
  var import_react = __toESM(require_react());

  // node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
  var isDevelopment = false;
  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    }
    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
    return void 0;
  }
  function createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== void 0) {
      tag.setAttribute("nonce", options.nonce);
    }
    tag.appendChild(document.createTextNode(""));
    tag.setAttribute("data-s", "");
    return tag;
  }
  var StyleSheet = /* @__PURE__ */ (function() {
    function StyleSheet2(options) {
      var _this = this;
      this._insertTag = function(tag) {
        var before;
        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }
        _this.container.insertBefore(tag, before);
        _this.tags.push(tag);
      };
      this.isSpeedy = options.speedy === void 0 ? !isDevelopment : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce;
      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }
    var _proto = StyleSheet2.prototype;
    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }
      var tag = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);
        try {
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }
      this.ctr++;
    };
    _proto.flush = function flush() {
      this.tags.forEach(function(tag) {
        var _tag$parentNode;
        return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };
    return StyleSheet2;
  })();

  // node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js
  var MS = "-ms-";
  var MOZ = "-moz-";
  var WEBKIT = "-webkit-";
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var LAYER = "@layer";

  // node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js
  var abs = Math.abs;
  var from = String.fromCharCode;
  var assign = Object.assign;
  function hash(value, length2) {
    return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
  }
  function trim(value) {
    return value.trim();
  }
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search) {
    return value.indexOf(search);
  }
  function charat(value, index) {
    return value.charCodeAt(index) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array) {
    return array.push(value), value;
  }
  function combine(array, callback) {
    return array.map(callback).join("");
  }

  // node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root, parent, type, props, children, length2) {
    return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
  }
  function copy(root, props) {
    return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type) {
    switch (type) {
      // \0 \t \n \r \s whitespace token
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      // ! + , / > @ ~ isolate token
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      // ; { } breakpoint token
      case 59:
      case 123:
      case 125:
        return 4;
      // : accompanied token
      case 58:
        return 3;
      // " ' ( [ opening delimit token
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      // ) ] closing delimit token
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }
  function whitespace(type) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type) {
    while (next())
      switch (character) {
        // ] ) " '
        case type:
          return position;
        // " '
        case 34:
        case 39:
          if (type !== 34 && type !== 39)
            delimiter(character);
          break;
        // (
        case 40:
          if (type === 41)
            delimiter(type);
          break;
        // \
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type, index) {
    while (next())
      if (type + character === 47 + 10)
        break;
      else if (type + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
  }
  function identifier(index) {
    while (!token(peek()))
      next();
    return slice(index, position);
  }

  // node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters2 = type;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        // (
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
              ampersand = -1;
            break;
          }
        // " ' [
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        // \
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        // /
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root, parent), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        // {
        case 123 * variable:
          points[index++] = strlen(characters2) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            // \0 }
            case 0:
            case 125:
              scanning = 0;
            // ;
            case 59 + offset:
              if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
              break;
            // @ ;
            case 59:
              characters2 += ";";
            // { rule/at-rule
            default:
              append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    // d l m s
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
          break;
        // :
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            // &
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            // ,
            case 44:
              points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            // @
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
              break;
            // -
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i = 0, j = 0, k = 0; i < index; ++i)
      for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
        if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
          props[k++] = z;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
  }
  function comment(value, root, parent) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
  }
  function declaration(value, root, parent, length2) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
  }

  // node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js
  function serialize(children, callback) {
    var output = "";
    var length2 = sizeof(children);
    for (var i = 0; i < length2; i++)
      output += callback(children[i], i, children, callback) || "";
    return output;
  }
  function stringify(element, index, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length) break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        element.value = element.props.join(",");
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }

  // node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js
  function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index, children, callback) {
      var output = "";
      for (var i = 0; i < length2; i++)
        output += collection[i](element, index, children, callback) || "";
      return output;
    };
  }
  function rulesheet(callback) {
    return function(element) {
      if (!element.root) {
        if (element = element.return)
          callback(element);
      }
    };
  }

  // node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
  function memoize(fn) {
    var cache = /* @__PURE__ */ Object.create(null);
    return function(arg2) {
      if (cache[arg2] === void 0) cache[arg2] = fn(arg2);
      return cache[arg2];
    };
  }

  // node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
  var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
    var previous = 0;
    var character2 = 0;
    while (true) {
      previous = character2;
      character2 = peek();
      if (previous === 38 && character2 === 12) {
        points[index] = 1;
      }
      if (token(character2)) {
        break;
      }
      next();
    }
    return slice(begin, position);
  };
  var toRules = function toRules2(parsed, points) {
    var index = -1;
    var character2 = 44;
    do {
      switch (token(character2)) {
        case 0:
          if (character2 === 38 && peek() === 12) {
            points[index] = 1;
          }
          parsed[index] += identifierWithPointTracking(position - 1, points, index);
          break;
        case 2:
          parsed[index] += delimit(character2);
          break;
        case 4:
          if (character2 === 44) {
            parsed[++index] = peek() === 58 ? "&\f" : "";
            points[index] = parsed[index].length;
            break;
          }
        // fallthrough
        default:
          parsed[index] += from(character2);
      }
    } while (character2 = next());
    return parsed;
  };
  var getRules = function getRules2(value, points) {
    return dealloc(toRules(alloc(value), points));
  };
  var fixedElements = /* @__PURE__ */ new WeakMap();
  var compat = function compat2(element) {
    if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }
    var value = element.value;
    var parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while (parent.type !== "rule") {
      parent = parent.parent;
      if (!parent) return;
    }
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
      return;
    }
    if (isImplicitRule) {
      return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel2(element) {
    if (element.type === "decl") {
      var value = element.value;
      if (
        // charcode for l
        value.charCodeAt(0) === 108 && // charcode for b
        value.charCodeAt(2) === 98
      ) {
        element["return"] = "";
        element.value = "";
      }
    }
  };
  function prefix(value, length2) {
    switch (hash(value, length2)) {
      // color-adjust
      case 5103:
        return WEBKIT + "print-" + value + value;
      // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      // appearance, user-select, transform, hyphens, text-size-adjust
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      // flex, flex-direction
      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      // order
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      // align-items
      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      // align-self
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
      // align-content
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
      // flex-shrink
      case 5548:
        return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
      // flex-basis
      case 5292:
        return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
      // flex-grow
      case 6060:
        return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
      // transition
      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      // cursor
      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      // background, background-image
      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      // justify-content
      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      // (margin|padding)-inline-(start|end)
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
      // (min|max)?(width|height|inline-size|block-size)
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (strlen(value) - 1 - length2 > 6) switch (charat(value, length2 + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (charat(value, length2 + 4) !== 45) break;
          // (f)ill-available, (f)it-content
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          // (s)tretch
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
        break;
      // position: sticky
      case 4949:
        if (charat(value, length2 + 1) !== 115) break;
      // display: (flex|inline-flex)
      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
          // stic(k)y
          case 107:
            return replace(value, ":", ":" + WEBKIT) + value;
          // (inline-)?fl(e)x
          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        }
        break;
      // writing-mode
      case 5936:
        switch (charat(value, length2 + 11)) {
          // vertical-l(r)
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          // vertical-r(l)
          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          // horizontal(-)tb
          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
        return WEBKIT + value + MS + value + value;
    }
    return value;
  }
  var prefixer = function prefixer2(element, index, children, callback) {
    if (element.length > -1) {
      if (!element["return"]) switch (element.type) {
        case DECLARATION:
          element["return"] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length) return combine(element.props, function(value) {
            switch (match(value, /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                return serialize([copy(element, {
                  props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                })], callback);
              // :placeholder
              case "::placeholder":
                return serialize([copy(element, {
                  props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                }), copy(element, {
                  props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                }), copy(element, {
                  props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                })], callback);
            }
            return "";
          });
      }
    }
  };
  var defaultStylisPlugins = [prefixer];
  var createCache = function createCache2(options) {
    var key = options.key;
    if (key === "css") {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(ssrStyles, function(node2) {
        var dataEmotionAttribute = node2.getAttribute("data-emotion");
        if (dataEmotionAttribute.indexOf(" ") === -1) {
          return;
        }
        document.head.appendChild(node2);
        node2.setAttribute("data-s", "");
      });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    var inserted = {};
    var container2;
    var nodesToHydrate = [];
    {
      container2 = options.container || document.head;
      Array.prototype.forEach.call(
        // this means we will ignore elements which don't have a space in them which
        // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
        document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
        function(node2) {
          var attrib = node2.getAttribute("data-emotion").split(" ");
          for (var i = 1; i < attrib.length; i++) {
            inserted[attrib[i]] = true;
          }
          nodesToHydrate.push(node2);
        }
      );
    }
    var _insert;
    var omnipresentPlugins = [compat, removeLabel];
    {
      var currentSheet;
      var finalizingPlugins = [stringify, rulesheet(function(rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
      var stylis = function stylis2(styles) {
        return serialize(compile(styles), serializer);
      };
      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    }
    var cache = {
      key,
      sheet: new StyleSheet({
        key,
        container: container2,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };

  // node_modules/.pnpm/@emotion+utils@1.4.2/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
  var isBrowser = true;
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = "";
    classNames.split(" ").forEach(function(className) {
      if (registered[className] !== void 0) {
        registeredStyles.push(registered[className] + ";");
      } else if (className) {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles2(cache, serialized, isStringTag2) {
    var className = cache.key + "-" + serialized.name;
    if (
      // we only need to add the styles to the registered cache if the
      // class name could be used further down
      // the tree but if it's a string tag, we know it won't
      // so we don't have to add it to registered cache.
      // this improves memory usage since we can avoid storing the whole style string
      (isStringTag2 === false || // we need to always store it if we're in compat mode and
      // in node since emotion-server relies on whether a style is in
      // the registered cache to know whether a style is global or not
      // also, note that this check will be dead code eliminated in the browser
      isBrowser === false) && cache.registered[className] === void 0
    ) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles2(cache, serialized, isStringTag2) {
    registerStyles(cache, serialized, isStringTag2);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === void 0) {
      var current = serialized;
      do {
        cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
        current = current.next;
      } while (current !== void 0);
    }
  };

  // node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.esm.js
  function murmur2(str) {
    var h = 0;
    var k, i = 0, len = str.length;
    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
      k = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
      k ^= /* k >>> r: */
      k >>> 24;
      h = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 255) << 16;
      case 2:
        h ^= (str.charCodeAt(i + 1) & 255) << 8;
      case 1:
        h ^= str.charCodeAt(i) & 255;
        h = /* Math.imul(h, m): */
        (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  // node_modules/.pnpm/@emotion+unitless@0.10.0/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
  var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  // node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
  var isDevelopment2 = false;
  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  var isCustomProperty = function isCustomProperty2(property) {
    return property.charCodeAt(1) === 45;
  };
  var isProcessableValue = function isProcessableValue2(value) {
    return value != null && typeof value !== "boolean";
  };
  var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
  });
  var processStyleValue = function processStyleValue2(key, value) {
    switch (key) {
      case "animation":
      case "animationName": {
        if (typeof value === "string") {
          return value.replace(animationRegex, function(match2, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
    }
    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
      return value + "px";
    }
    return value;
  };
  var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return "";
    }
    var componentSelector = interpolation;
    if (componentSelector.__emotion_styles !== void 0) {
      return componentSelector;
    }
    switch (typeof interpolation) {
      case "boolean": {
        return "";
      }
      case "object": {
        var keyframes = interpolation;
        if (keyframes.anim === 1) {
          cursor = {
            name: keyframes.name,
            styles: keyframes.styles,
            next: cursor
          };
          return keyframes.name;
        }
        var serializedStyles = interpolation;
        if (serializedStyles.styles !== void 0) {
          var next2 = serializedStyles.next;
          if (next2 !== void 0) {
            while (next2 !== void 0) {
              cursor = {
                name: next2.name,
                styles: next2.styles,
                next: cursor
              };
              next2 = next2.next;
            }
          }
          var styles = serializedStyles.styles + ";";
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
      case "function": {
        if (mergedProps !== void 0) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }
        break;
      }
    }
    var asString = interpolation;
    if (registered == null) {
      return asString;
    }
    var cached = registered[asString];
    return cached !== void 0 ? cached : asString;
  }
  function createStringFromObject(mergedProps, registered, obj) {
    var string = "";
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var key in obj) {
        var value = obj[key];
        if (typeof value !== "object") {
          var asString = value;
          if (registered != null && registered[asString] !== void 0) {
            string += key + "{" + registered[asString] + "}";
          } else if (isProcessableValue(asString)) {
            string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
          }
        } else {
          if (key === "NO_COMPONENT_SELECTOR" && isDevelopment2) {
            throw new Error(noComponentSelectorMessage);
          }
          if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);
            switch (key) {
              case "animation":
              case "animationName": {
                string += processStyleName(key) + ":" + interpolated + ";";
                break;
              }
              default: {
                string += key + "{" + interpolated + "}";
              }
            }
          }
        }
      }
    }
    return string;
  }
  var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
  var cursor;
  function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
      return args[0];
    }
    var stringMode = true;
    var styles = "";
    cursor = void 0;
    var strings = args[0];
    if (strings == null || strings.raw === void 0) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {
      var asTemplateStringsArr = strings;
      styles += asTemplateStringsArr[0];
    }
    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);
      if (stringMode) {
        var templateStringsArr = strings;
        styles += templateStringsArr[i];
      }
    }
    labelPattern.lastIndex = 0;
    var identifierName = "";
    var match2;
    while ((match2 = labelPattern.exec(styles)) !== null) {
      identifierName += "-" + match2[1];
    }
    var name = murmur2(styles) + identifierName;
    return {
      name,
      styles,
      next: cursor
    };
  }

  // node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.2.4/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
  var React2 = __toESM(require_react());
  var syncFallback = function syncFallback2(create) {
    return create();
  };
  var useInsertionEffect2 = React2["useInsertionEffect"] ? React2["useInsertionEffect"] : false;
  var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect2 || syncFallback;

  // node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
  var isDevelopment3 = false;
  var EmotionCacheContext = /* @__PURE__ */ React3.createContext(
    // we're doing this to avoid preconstruct's dead code elimination in this one case
    // because this module is primarily intended for the browser and node
    // but it's also required in react native and similar environments sometimes
    // and we could have a special build just for that
    // but this is much easier and the native packages
    // might use a different theme context in the future anyway
    typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
      key: "css"
    }) : null
  );
  var CacheProvider = EmotionCacheContext.Provider;
  var withEmotionCache = function withEmotionCache2(func) {
    return /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
      var cache = (0, import_react.useContext)(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };
  var ThemeContext = /* @__PURE__ */ React3.createContext({});
  var hasOwn = {}.hasOwnProperty;
  var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  var createEmotionProps = function createEmotionProps2(type, props) {
    var newProps = {};
    for (var _key in props) {
      if (hasOwn.call(props, _key)) {
        newProps[_key] = props[_key];
      }
    }
    newProps[typePropName] = type;
    return newProps;
  };
  var Insertion = function Insertion2(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag2);
    useInsertionEffectAlwaysWithSyncFallback(function() {
      return insertStyles(cache, serialized, isStringTag2);
    });
    return null;
  };
  var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
    var cssProp = props.css;
    if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
      cssProp = cache.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className = "";
    if (typeof props.className === "string") {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }
    var serialized = serializeStyles(registeredStyles, void 0, React3.useContext(ThemeContext));
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for (var _key2 in props) {
      if (hasOwn.call(props, _key2) && _key2 !== "css" && _key2 !== typePropName && !isDevelopment3) {
        newProps[_key2] = props[_key2];
      }
    }
    newProps.className = className;
    if (ref) {
      newProps.ref = ref;
    }
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(Insertion, {
      cache,
      serialized,
      isStringTag: typeof WrappedComponent === "string"
    }), /* @__PURE__ */ React3.createElement(WrappedComponent, newProps));
  });
  var Emotion$1 = Emotion;

  // node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
  var React4 = __toESM(require_react());
  var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
  var jsx4 = function jsx5(type, props) {
    var args = arguments;
    if (props == null || !hasOwn.call(props, "css")) {
      return React4.createElement.apply(void 0, args);
    }
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = Emotion$1;
    createElementArgArray[1] = createEmotionProps(type, props);
    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }
    return React4.createElement.apply(null, createElementArgArray);
  };
  (function(_jsx8) {
    var JSX;
    /* @__PURE__ */ (function(_JSX) {
    })(JSX || (JSX = _jsx8.JSX || (_jsx8.JSX = {})));
  })(jsx4 || (jsx4 = {}));

  // node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@types+react@19.2.17_react@19.2.4/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
  var React5 = __toESM(require_react());

  // node_modules/.pnpm/@emotion+is-prop-valid@1.4.0/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  var isPropValid = /* @__PURE__ */ memoize(
    function(prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    }
    /* Z+1 */
  );

  // node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@types+react@19.2.17_react@19.2.4/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
  var isDevelopment4 = false;
  var testOmitPropsOnStringTag = isPropValid;
  var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
    return key !== "theme";
  };
  var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
    return typeof tag === "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  };
  var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
    var shouldForwardProp2;
    if (options) {
      var optionsShouldForwardProp = options.shouldForwardProp;
      shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
        return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
      } : optionsShouldForwardProp;
    }
    if (typeof shouldForwardProp2 !== "function" && isReal) {
      shouldForwardProp2 = tag.__emotion_forwardProp;
    }
    return shouldForwardProp2;
  };
  var Insertion3 = function Insertion4(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag2);
    useInsertionEffectAlwaysWithSyncFallback(function() {
      return insertStyles(cache, serialized, isStringTag2);
    });
    return null;
  };
  var createStyled = function createStyled2(tag, options) {
    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;
    if (options !== void 0) {
      identifierName = options.label;
      targetClassName = options.target;
    }
    var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp("as");
    return function() {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
      if (identifierName !== void 0) {
        styles.push("label:" + identifierName + ";");
      }
      if (args[0] == null || args[0].raw === void 0) {
        styles.push.apply(styles, args);
      } else {
        var templateStringsArr = args[0];
        styles.push(templateStringsArr[0]);
        var len = args.length;
        var i = 1;
        for (; i < len; i++) {
          styles.push(args[i], templateStringsArr[i]);
        }
      }
      var Styled = withEmotionCache(function(props, cache, ref) {
        var FinalTag = shouldUseAs && props.as || baseTag;
        var className = "";
        var classInterpolations = [];
        var mergedProps = props;
        if (props.theme == null) {
          mergedProps = {};
          for (var key in props) {
            mergedProps[key] = props[key];
          }
          mergedProps.theme = React5.useContext(ThemeContext);
        }
        if (typeof props.className === "string") {
          className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }
        var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
        className += cache.key + "-" + serialized.name;
        if (targetClassName !== void 0) {
          className += " " + targetClassName;
        }
        var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
        var newProps = {};
        for (var _key in props) {
          if (shouldUseAs && _key === "as") continue;
          if (finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }
        newProps.className = className;
        if (ref) {
          newProps.ref = ref;
        }
        return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement(Insertion3, {
          cache,
          serialized,
          isStringTag: typeof FinalTag === "string"
        }), /* @__PURE__ */ React5.createElement(FinalTag, newProps));
      });
      Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
      Styled.defaultProps = tag.defaultProps;
      Styled.__emotion_real = Styled;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_styles = styles;
      Styled.__emotion_forwardProp = shouldForwardProp2;
      Object.defineProperty(Styled, "toString", {
        value: function value() {
          if (targetClassName === void 0 && isDevelopment4) {
            return "NO_COMPONENT_SELECTOR";
          }
          return "." + targetClassName;
        }
      });
      Styled.withComponent = function(nextTag, nextOptions) {
        var newStyled = createStyled2(nextTag, _extends({}, options, nextOptions, {
          shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
        }));
        return newStyled.apply(void 0, styles);
      };
      return Styled;
    };
  };

  // node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@types+react@19.2.17_react@19.2.4/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
  var import_react3 = __toESM(require_react());
  var tags = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    // SVG
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
  ];
  var styled = createStyled.bind(null);
  tags.forEach(function(tagName) {
    styled[tagName] = styled(tagName);
  });

  // node_modules/.pnpm/@mui+styled-engine@9.1.1_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emo_e28de8d761f2a81f785bb956112a9948/node_modules/@mui/styled-engine/index.mjs
  function styled2(tag, options) {
    const stylesFactory = styled(tag, options);
    if (false) {
      return (...styles) => {
        const component = typeof tag === "string" ? `"${tag}"` : "component";
        if (styles.length === 0) {
          console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join("\n"));
        } else if (styles.some((style3) => style3 === void 0)) {
          console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
        }
        return stylesFactory(...styles);
      };
    }
    return stylesFactory;
  }
  var styled_engine_default = styled2;
  function internal_mutateStyles(tag, processor) {
    if (Array.isArray(tag.__emotion_styles)) {
      tag.__emotion_styles = processor(tag.__emotion_styles);
    }
  }
  var wrapper = [];
  function internal_serializeStyles(styles) {
    wrapper[0] = styles;
    return serializeStyles(wrapper);
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/createTheme/shape.mjs
  var shape = {
    borderRadius: 4
  };
  var shape_default = shape;

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/createTheme/createSpacing.mjs
  function createSpacing(spacingInput = 8, transform = createUnarySpacing({
    spacing: spacingInput
  })) {
    if (spacingInput.mui) {
      return spacingInput;
    }
    const spacing = (...argsInput) => {
      if (false) {
        if (!(argsInput.length <= 4)) {
          console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
        }
      }
      const args = argsInput.length === 0 ? [1] : argsInput;
      return args.map((argument) => {
        const output = transform(argument);
        return typeof output === "number" ? `${output}px` : output;
      }).join(" ");
    };
    spacing.mui = true;
    return spacing;
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/createTheme/applyStyles.mjs
  function applyStyles(key, styles) {
    const theme = this;
    if (theme.vars) {
      if (!theme.colorSchemes?.[key] || typeof theme.getColorSchemeSelector !== "function") {
        return {};
      }
      let selector = theme.getColorSchemeSelector(key);
      if (selector === "&") {
        return styles;
      }
      if (selector.includes("data-") || selector.includes(".")) {
        selector = `*:where(${selector.replace(/\s*&$/, "")}) &`;
      }
      return {
        [selector]: styles
      };
    }
    if (theme.palette.mode === key) {
      return styles;
    }
    return {};
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/createTheme/createTheme.mjs
  function createTheme(options = {}, ...args) {
    const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {},
      ...other
    } = options;
    const breakpoints = createBreakpoints(breakpointsInput);
    const spacing = createSpacing(spacingInput);
    let muiTheme = deepmerge({
      breakpoints,
      direction: "ltr",
      components: {},
      // Inject component definitions.
      palette: {
        mode: "light",
        ...paletteInput
      },
      spacing,
      shape: {
        ...shape_default,
        ...shapeInput
      }
    }, other);
    muiTheme = cssContainerQueries(muiTheme);
    muiTheme.applyStyles = applyStyles;
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
    muiTheme.unstable_sxConfig = {
      ...defaultSxConfig_default,
      ...other?.unstable_sxConfig
    };
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx_default({
        sx: props,
        theme: this
      });
    };
    muiTheme.internal_cache = {};
    return muiTheme;
  }
  var createTheme_default = createTheme;

  // node_modules/.pnpm/@mui+utils@9.1.1_@types+react@19.2.17_react@19.2.4/node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.mjs
  var defaultGenerator = (componentName) => componentName;
  var createClassNameGenerator = () => {
    let generate = defaultGenerator;
    return {
      configure(generator) {
        generate = generator;
      },
      generate(componentName) {
        return generate(componentName);
      },
      reset() {
        generate = defaultGenerator;
      }
    };
  };
  var ClassNameGenerator = createClassNameGenerator();
  var ClassNameGenerator_default = ClassNameGenerator;

  // node_modules/.pnpm/@mui+utils@9.1.1_@types+react@19.2.17_react@19.2.4/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs
  var globalStateClasses = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
  };
  function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
    const globalStateClass = globalStateClasses[slot];
    return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_default.generate(componentName)}-${slot}`;
  }

  // node_modules/.pnpm/@mui+utils@9.1.1_@types+react@19.2.17_react@19.2.4/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs
  function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
    const result = {};
    slots.forEach((slot) => {
      result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
    });
    return result;
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/preprocessStyles.mjs
  function preprocessStyles(input) {
    const {
      variants: variants2,
      ...style3
    } = input;
    const result = {
      variants: variants2,
      style: internal_serializeStyles(style3),
      isProcessed: true
    };
    if (result.style === style3) {
      return result;
    }
    if (variants2) {
      variants2.forEach((variant) => {
        if (typeof variant.style !== "function") {
          variant.style = internal_serializeStyles(variant.style);
        }
      });
    }
    return result;
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/createStyled/createStyled.mjs
  var systemDefaultTheme = createTheme_default();
  function shouldForwardProp(prop) {
    return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
  }
  function shallowLayer(serialized, layerName) {
    if (layerName && serialized && typeof serialized === "object" && serialized.styles && !serialized.styles.startsWith("@layer")) {
      serialized.styles = `@layer ${layerName}{${String(serialized.styles)}}`;
    }
    return serialized;
  }
  function defaultOverridesResolver(slot) {
    if (!slot) {
      return null;
    }
    return (_props, styles) => styles[slot];
  }
  function attachTheme(props, themeId, defaultTheme2) {
    props.theme = isObjectEmpty(props.theme) ? defaultTheme2 : props.theme[themeId] || props.theme;
  }
  function processStyle(props, style3, layerName) {
    const resolvedStyle = typeof style3 === "function" ? style3(props) : style3;
    if (Array.isArray(resolvedStyle)) {
      return resolvedStyle.flatMap((subStyle) => processStyle(props, subStyle, layerName));
    }
    if (Array.isArray(resolvedStyle?.variants)) {
      let rootStyle;
      if (resolvedStyle.isProcessed) {
        rootStyle = layerName ? shallowLayer(resolvedStyle.style, layerName) : resolvedStyle.style;
      } else {
        const {
          variants: variants2,
          ...otherStyles
        } = resolvedStyle;
        rootStyle = layerName ? shallowLayer(internal_serializeStyles(otherStyles), layerName) : otherStyles;
      }
      return processStyleVariants(props, resolvedStyle.variants, [rootStyle], layerName);
    }
    if (resolvedStyle?.isProcessed) {
      return layerName ? shallowLayer(internal_serializeStyles(resolvedStyle.style), layerName) : resolvedStyle.style;
    }
    return layerName ? shallowLayer(internal_serializeStyles(resolvedStyle), layerName) : resolvedStyle;
  }
  function processStyleVariants(props, variants2, results = [], layerName = void 0) {
    let mergedState;
    variantLoop: for (let i = 0; i < variants2.length; i += 1) {
      const variant = variants2[i];
      if (typeof variant.props === "function") {
        mergedState ??= {
          ...props,
          ...props.ownerState,
          ownerState: props.ownerState
        };
        if (!variant.props(mergedState)) {
          continue;
        }
      } else {
        for (const key in variant.props) {
          if (props[key] !== variant.props[key] && props.ownerState?.[key] !== variant.props[key]) {
            continue variantLoop;
          }
        }
      }
      if (typeof variant.style === "function") {
        mergedState ??= {
          ...props,
          ...props.ownerState,
          ownerState: props.ownerState
        };
        results.push(layerName ? shallowLayer(internal_serializeStyles(variant.style(mergedState)), layerName) : variant.style(mergedState));
      } else {
        results.push(layerName ? shallowLayer(internal_serializeStyles(variant.style), layerName) : variant.style);
      }
    }
    return results;
  }
  function createStyled3(input = {}) {
    const {
      themeId,
      defaultTheme: defaultTheme2 = systemDefaultTheme,
      rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
      slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp
    } = input;
    function styleAttachTheme(props) {
      attachTheme(props, themeId, defaultTheme2);
    }
    const styled4 = (tag, inputOptions = {}) => {
      internal_mutateStyles(tag, (styles) => styles.filter((style3) => style3 !== styleFunctionSx_default));
      const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)),
        ...options
      } = inputOptions;
      const layerName = componentName && componentName.startsWith("Mui") || !!componentSlot ? "components" : "custom";
      const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
      );
      const skipSx = inputSkipSx || false;
      let shouldForwardPropOption = shouldForwardProp;
      if (componentSlot === "Root" || componentSlot === "root") {
        shouldForwardPropOption = rootShouldForwardProp2;
      } else if (componentSlot) {
        shouldForwardPropOption = slotShouldForwardProp2;
      } else if (isStringTag(tag)) {
        shouldForwardPropOption = void 0;
      }
      const defaultStyledResolver = styled_engine_default(tag, {
        shouldForwardProp: shouldForwardPropOption,
        label: generateStyledLabel(componentName, componentSlot),
        ...options
      });
      const transformStyle = (style3) => {
        if (style3.__emotion_real === style3) {
          return style3;
        }
        if (typeof style3 === "function") {
          return function styleFunctionProcessor(props) {
            return processStyle(props, style3, props.theme.modularCssLayers ? layerName : void 0);
          };
        }
        if (isPlainObject(style3)) {
          const serialized = preprocessStyles(style3);
          return function styleObjectProcessor(props) {
            if (!serialized.variants) {
              return props.theme.modularCssLayers ? shallowLayer(serialized.style, layerName) : serialized.style;
            }
            return processStyle(props, serialized, props.theme.modularCssLayers ? layerName : void 0);
          };
        }
        return style3;
      };
      const muiStyledResolver = (...expressionsInput) => {
        const expressionsHead = [];
        const expressionsBody = expressionsInput.map(transformStyle);
        const expressionsTail = [];
        expressionsHead.push(styleAttachTheme);
        if (componentName && overridesResolver) {
          expressionsTail.push(function styleThemeOverrides(props) {
            const theme = props.theme;
            const styleOverrides = theme.components?.[componentName]?.styleOverrides;
            if (!styleOverrides) {
              return null;
            }
            const resolvedStyleOverrides = {};
            for (const slotKey in styleOverrides) {
              resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey], props.theme.modularCssLayers ? "theme" : void 0);
            }
            return overridesResolver(props, resolvedStyleOverrides);
          });
        }
        if (componentName && !skipVariantsResolver) {
          expressionsTail.push(function styleThemeVariants(props) {
            const theme = props.theme;
            const themeVariants = theme?.components?.[componentName]?.variants;
            if (!themeVariants) {
              return null;
            }
            return processStyleVariants(props, themeVariants, [], props.theme.modularCssLayers ? "theme" : void 0);
          });
        }
        if (!skipSx) {
          expressionsTail.push(styleFunctionSx_default);
        }
        if (Array.isArray(expressionsBody[0])) {
          const inputStrings = expressionsBody.shift();
          const placeholdersHead = new Array(expressionsHead.length).fill("");
          const placeholdersTail = new Array(expressionsTail.length).fill("");
          let outputStrings;
          {
            outputStrings = [...placeholdersHead, ...inputStrings, ...placeholdersTail];
            outputStrings.raw = [...placeholdersHead, ...inputStrings.raw, ...placeholdersTail];
          }
          expressionsHead.unshift(outputStrings);
        }
        const expressions = [...expressionsHead, ...expressionsBody, ...expressionsTail];
        const Component = defaultStyledResolver(...expressions);
        if (tag.muiName) {
          Component.muiName = tag.muiName;
        }
        if (false) {
          Component.displayName = generateDisplayName(componentName, componentSlot, tag);
        }
        return Component;
      };
      if (defaultStyledResolver.withConfig) {
        muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
      }
      return muiStyledResolver;
    };
    return styled4;
  }
  function generateStyledLabel(componentName, componentSlot) {
    let label;
    if (false) {
      if (componentName) {
        label = `${componentName}-${lowercaseFirstLetter(componentSlot || "Root")}`;
      }
    }
    return label;
  }
  function isStringTag(tag) {
    return typeof tag === "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96;
  }
  function lowercaseFirstLetter(string) {
    if (!string) {
      return string;
    }
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  // node_modules/.pnpm/@mui+utils@9.1.1_@types+react@19.2.17_react@19.2.4/node_modules/@mui/utils/resolveProps/resolveProps.mjs
  function resolveProps(defaultProps, props, mergeClassNameAndStyle = false) {
    const output = {
      ...props
    };
    for (const key in defaultProps) {
      if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
        const propName = key;
        if (propName === "components" || propName === "slots") {
          output[propName] = {
            ...defaultProps[propName],
            ...output[propName]
          };
        } else if (propName === "componentsProps" || propName === "slotProps") {
          const defaultSlotProps = defaultProps[propName];
          const slotProps = props[propName];
          if (!slotProps) {
            output[propName] = defaultSlotProps || {};
          } else if (!defaultSlotProps) {
            output[propName] = slotProps;
          } else {
            output[propName] = {
              ...slotProps
            };
            for (const slotKey in defaultSlotProps) {
              if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
                const slotPropName = slotKey;
                output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName], mergeClassNameAndStyle);
              }
            }
          }
        } else if (propName === "className" && mergeClassNameAndStyle && props.className !== void 0) {
          output.className = clsx_default(defaultProps?.className, props?.className);
        } else if (propName === "style" && mergeClassNameAndStyle && props.style) {
          output.style = {
            ...defaultProps?.style,
            ...props?.style
          };
        } else if (output[propName] === void 0) {
          output[propName] = defaultProps[propName];
        }
      }
    }
    return output;
  }

  // node_modules/.pnpm/@mui+utils@9.1.1_@types+react@19.2.17_react@19.2.4/node_modules/@mui/utils/clamp/clamp.mjs
  function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    return Math.max(min, Math.min(val, max));
  }
  var clamp_default = clamp;

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/colorManipulator/colorManipulator.mjs
  function clampWrapper(value, min = 0, max = 1) {
    if (false) {
      if (value < min || value > max) {
        console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
      }
    }
    return clamp_default(value, min, max);
  }
  function hexToRgb(color2) {
    color2 = color2.slice(1);
    const re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
    let colors = color2.match(re);
    if (colors && colors[0].length === 1) {
      colors = colors.map((n) => n + n);
    }
    if (false) {
      if (color2.length !== color2.trim().length) {
        console.error(`MUI: The color: "${color2}" is invalid. Make sure the color input doesn't contain leading/trailing space.`);
      }
    }
    return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n, index) => {
      return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3;
    }).join(", ")})` : "";
  }
  function decomposeColor(color2) {
    if (color2.type) {
      return color2;
    }
    if (color2.charAt(0) === "#") {
      return decomposeColor(hexToRgb(color2));
    }
    const marker = color2.indexOf("(");
    const type = color2.substring(0, marker);
    if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(type)) {
      throw new Error(false ? `MUI: Unsupported \`${color2}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : formatMuiErrorMessage(9, color2));
    }
    let values2 = color2.substring(marker + 1, color2.length - 1);
    let colorSpace;
    if (type === "color") {
      values2 = values2.split(" ");
      colorSpace = values2.shift();
      if (values2.length === 4 && values2[3].charAt(0) === "/") {
        values2[3] = values2[3].slice(1);
      }
      if (!["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(colorSpace)) {
        throw new Error(false ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : formatMuiErrorMessage(10, colorSpace));
      }
    } else {
      values2 = values2.split(",");
    }
    values2 = values2.map((value) => parseFloat(value));
    return {
      type,
      values: values2,
      colorSpace
    };
  }
  var colorChannel = (color2) => {
    const decomposedColor = decomposeColor(color2);
    return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.includes("hsl") && idx !== 0 ? `${val}%` : val).join(" ");
  };
  var private_safeColorChannel = (color2, warning) => {
    try {
      return colorChannel(color2);
    } catch (error) {
      if (warning && false) {
        console.warn(warning);
      }
      return color2;
    }
  };
  function recomposeColor(color2) {
    const {
      type,
      colorSpace
    } = color2;
    let {
      values: values2
    } = color2;
    if (type.includes("rgb")) {
      values2 = values2.map((n, i) => i < 3 ? parseInt(n, 10) : n);
    } else if (type.includes("hsl")) {
      values2[1] = `${values2[1]}%`;
      values2[2] = `${values2[2]}%`;
    }
    if (type.includes("color")) {
      values2 = `${colorSpace} ${values2.join(" ")}`;
    } else {
      values2 = `${values2.join(", ")}`;
    }
    return `${type}(${values2})`;
  }
  function hslToRgb(color2) {
    color2 = decomposeColor(color2);
    const {
      values: values2
    } = color2;
    const h = values2[0];
    const s = values2[1] / 100;
    const l = values2[2] / 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    let type = "rgb";
    const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
    if (color2.type === "hsla") {
      type += "a";
      rgb.push(values2[3]);
    }
    return recomposeColor({
      type,
      values: rgb
    });
  }
  function getLuminance(color2) {
    color2 = decomposeColor(color2);
    let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
    rgb = rgb.map((val) => {
      if (color2.type !== "color") {
        val /= 255;
      }
      return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  }
  function getContrastRatio(foreground, background) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }
  function alpha(color2, value) {
    color2 = decomposeColor(color2);
    value = clampWrapper(value);
    if (color2.type === "rgb" || color2.type === "hsl") {
      color2.type += "a";
    }
    if (color2.type === "color") {
      color2.values[3] = `/${value}`;
    } else {
      color2.values[3] = value;
    }
    return recomposeColor(color2);
  }
  function private_safeAlpha(color2, value, warning) {
    try {
      return alpha(color2, value);
    } catch (error) {
      if (warning && false) {
        console.warn(warning);
      }
      return color2;
    }
  }
  function darken(color2, coefficient) {
    color2 = decomposeColor(color2);
    coefficient = clampWrapper(coefficient);
    if (color2.type.includes("hsl")) {
      color2.values[2] *= 1 - coefficient;
    } else if (color2.type.includes("rgb") || color2.type.includes("color")) {
      for (let i = 0; i < 3; i += 1) {
        color2.values[i] *= 1 - coefficient;
      }
    }
    return recomposeColor(color2);
  }
  function private_safeDarken(color2, coefficient, warning) {
    try {
      return darken(color2, coefficient);
    } catch (error) {
      if (warning && false) {
        console.warn(warning);
      }
      return color2;
    }
  }
  function lighten(color2, coefficient) {
    color2 = decomposeColor(color2);
    coefficient = clampWrapper(coefficient);
    if (color2.type.includes("hsl")) {
      color2.values[2] += (100 - color2.values[2]) * coefficient;
    } else if (color2.type.includes("rgb")) {
      for (let i = 0; i < 3; i += 1) {
        color2.values[i] += (255 - color2.values[i]) * coefficient;
      }
    } else if (color2.type.includes("color")) {
      for (let i = 0; i < 3; i += 1) {
        color2.values[i] += (1 - color2.values[i]) * coefficient;
      }
    }
    return recomposeColor(color2);
  }
  function private_safeLighten(color2, coefficient, warning) {
    try {
      return lighten(color2, coefficient);
    } catch (error) {
      if (warning && false) {
        console.warn(warning);
      }
      return color2;
    }
  }
  function emphasize(color2, coefficient = 0.15) {
    return getLuminance(color2) > 0.5 ? darken(color2, coefficient) : lighten(color2, coefficient);
  }
  function private_safeEmphasize(color2, coefficient, warning) {
    try {
      return emphasize(color2, coefficient);
    } catch (error) {
      if (warning && false) {
        console.warn(warning);
      }
      return color2;
    }
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/DefaultPropsProvider/DefaultPropsProvider.mjs
  var React6 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var PropsContext = /* @__PURE__ */ React6.createContext(void 0);
  false ? DefaultPropsProvider.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * @ignore
     */
    children: import_prop_types.default.node,
    /**
     * @ignore
     */
    value: import_prop_types.default.object
  } : void 0;
  function getThemeProps(params) {
    const {
      theme,
      name,
      props
    } = params;
    if (!theme || !theme.components || !theme.components[name]) {
      return props;
    }
    const config = theme.components[name];
    if (config.defaultProps) {
      return resolveProps(config.defaultProps, props, theme.components.mergeClassNameAndStyle);
    }
    if (!config.styleOverrides && !config.variants) {
      return resolveProps(config, props, theme.components.mergeClassNameAndStyle);
    }
    return props;
  }
  function useDefaultProps({
    props,
    name
  }) {
    const ctx = React6.useContext(PropsContext);
    return getThemeProps({
      props,
      name,
      theme: {
        components: ctx
      }
    });
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/memoTheme.mjs
  var arg = {
    theme: void 0
  };
  function unstable_memoTheme(styleFn) {
    let lastValue;
    let lastTheme;
    return function styleMemoized(props) {
      let value = lastValue;
      if (value === void 0 || props.theme !== lastTheme) {
        arg.theme = props.theme;
        value = preprocessStyles(styleFn(arg));
        lastValue = value;
        lastTheme = props.theme;
      }
      return value;
    };
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/cssVars/createGetCssVar.mjs
  function createGetCssVar(prefix2 = "") {
    function appendVar(...vars) {
      if (!vars.length) {
        return "";
      }
      const value = vars[0];
      if (typeof value === "string" && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)) {
        return `, var(--${prefix2 ? `${prefix2}-` : ""}${value}${appendVar(...vars.slice(1))})`;
      }
      return `, ${value}`;
    }
    const getCssVar = (field, ...fallbacks) => {
      return `var(--${prefix2 ? `${prefix2}-` : ""}${field}${appendVar(...fallbacks)})`;
    };
    return getCssVar;
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/cssVars/cssVarsParser.mjs
  var assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
    let temp = obj;
    keys.forEach((k, index) => {
      if (index === keys.length - 1) {
        if (Array.isArray(temp)) {
          temp[Number(k)] = value;
        } else if (temp && typeof temp === "object") {
          temp[k] = value;
        }
      } else if (temp && typeof temp === "object") {
        if (!temp[k]) {
          temp[k] = arrayKeys.includes(k) ? [] : {};
        }
        temp = temp[k];
      }
    });
  };
  var walkObjectDeep = (obj, callback, shouldSkipPaths) => {
    function recurse(object, parentKeys = [], arrayKeys = []) {
      Object.entries(object).forEach(([key, value]) => {
        if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key])) {
          if (value !== void 0 && value !== null) {
            if (typeof value === "object" && Object.keys(value).length > 0) {
              recurse(value, [...parentKeys, key], Array.isArray(value) ? [...arrayKeys, key] : arrayKeys);
            } else {
              callback([...parentKeys, key], value, arrayKeys);
            }
          }
        }
      });
    }
    recurse(obj);
  };
  var getCssValue = (keys, value) => {
    if (typeof value === "number") {
      if (["lineHeight", "fontWeight", "opacity", "zIndex"].some((prop) => keys.includes(prop))) {
        return value;
      }
      const lastKey = keys[keys.length - 1];
      if (lastKey.toLowerCase().includes("opacity")) {
        return value;
      }
      return `${value}px`;
    }
    return value;
  };
  function cssVarsParser(theme, options) {
    const {
      prefix: prefix2,
      shouldSkipGeneratingVar: shouldSkipGeneratingVar2
    } = options || {};
    const css = {};
    const vars = {};
    const varsWithDefaults = {};
    walkObjectDeep(
      theme,
      (keys, value, arrayKeys) => {
        if (typeof value === "string" || typeof value === "number") {
          if (!shouldSkipGeneratingVar2 || !shouldSkipGeneratingVar2(keys, value)) {
            const cssVar = `--${prefix2 ? `${prefix2}-` : ""}${keys.join("-")}`;
            const resolvedValue = getCssValue(keys, value);
            Object.assign(css, {
              [cssVar]: resolvedValue
            });
            assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
            assignNestedKeys(varsWithDefaults, keys, `var(${cssVar}, ${resolvedValue})`, arrayKeys);
          }
        }
      },
      (keys) => keys[0] === "vars"
      // skip 'vars/*' paths
    );
    return {
      css,
      vars,
      varsWithDefaults
    };
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/cssVars/prepareCssVars.mjs
  function prepareCssVars(theme, parserConfig = {}) {
    const {
      getSelector = defaultGetSelector,
      disableCssColorScheme,
      colorSchemeSelector: selector,
      enableContrastVars
    } = parserConfig;
    const {
      colorSchemes = {},
      components,
      defaultColorScheme = "light",
      ...otherTheme
    } = theme;
    const {
      vars: rootVars,
      css: rootCss,
      varsWithDefaults: rootVarsWithDefaults
    } = cssVarsParser(otherTheme, parserConfig);
    let themeVars = rootVarsWithDefaults;
    const colorSchemesMap = {};
    const {
      [defaultColorScheme]: defaultScheme,
      ...otherColorSchemes
    } = colorSchemes;
    Object.entries(otherColorSchemes || {}).forEach(([key, scheme]) => {
      const {
        vars,
        css,
        varsWithDefaults
      } = cssVarsParser(scheme, parserConfig);
      themeVars = deepmerge(themeVars, varsWithDefaults);
      colorSchemesMap[key] = {
        css,
        vars
      };
    });
    if (defaultScheme) {
      const {
        css,
        vars,
        varsWithDefaults
      } = cssVarsParser(defaultScheme, parserConfig);
      themeVars = deepmerge(themeVars, varsWithDefaults);
      colorSchemesMap[defaultColorScheme] = {
        css,
        vars
      };
    }
    function defaultGetSelector(colorScheme, cssObject) {
      let rule = selector;
      if (selector === "class") {
        rule = ".%s";
      }
      if (selector === "data") {
        rule = "[data-%s]";
      }
      if (selector?.startsWith("data-") && !selector.includes("%s")) {
        rule = `[${selector}="%s"]`;
      }
      if (colorScheme) {
        if (rule === "media") {
          if (theme.defaultColorScheme === colorScheme) {
            return ":root";
          }
          const mode = colorSchemes[colorScheme]?.palette?.mode || colorScheme;
          return {
            [`@media (prefers-color-scheme: ${mode})`]: {
              ":root": cssObject
            }
          };
        }
        if (rule) {
          if (theme.defaultColorScheme === colorScheme) {
            return `:root, ${rule.replace("%s", String(colorScheme))}`;
          }
          return rule.replace("%s", String(colorScheme));
        }
      }
      return ":root";
    }
    const generateThemeVars = () => {
      let vars = {
        ...rootVars
      };
      Object.entries(colorSchemesMap).forEach(([, {
        vars: schemeVars
      }]) => {
        vars = deepmerge(vars, schemeVars);
      });
      return vars;
    };
    const generateStyleSheets = () => {
      const stylesheets = [];
      const colorScheme = theme.defaultColorScheme || "light";
      function insertStyleSheet(key, css) {
        if (Object.keys(css).length) {
          stylesheets.push(typeof key === "string" ? {
            [key]: {
              ...css
            }
          } : key);
        }
      }
      insertStyleSheet(getSelector(void 0, {
        ...rootCss
      }), rootCss);
      const {
        [colorScheme]: defaultSchemeVal,
        ...other
      } = colorSchemesMap;
      if (defaultSchemeVal) {
        const {
          css
        } = defaultSchemeVal;
        const cssColorSheme = colorSchemes[colorScheme]?.palette?.mode;
        const finalCss = !disableCssColorScheme && cssColorSheme ? {
          colorScheme: cssColorSheme,
          ...css
        } : {
          ...css
        };
        insertStyleSheet(getSelector(colorScheme, {
          ...finalCss
        }), finalCss);
      }
      Object.entries(other).forEach(([key, {
        css
      }]) => {
        const cssColorSheme = colorSchemes[key]?.palette?.mode;
        const finalCss = !disableCssColorScheme && cssColorSheme ? {
          colorScheme: cssColorSheme,
          ...css
        } : {
          ...css
        };
        insertStyleSheet(getSelector(key, {
          ...finalCss
        }), finalCss);
      });
      if (enableContrastVars) {
        stylesheets.push({
          ":root": {
            // use double underscore to indicate that these are private variables
            "--__l-threshold": "0.7",
            "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
            "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
            // 0.87 is the default alpha value for black text.
          }
        });
      }
      return stylesheets;
    };
    return {
      vars: themeVars,
      generateThemeVars,
      generateStyleSheets
    };
  }
  var prepareCssVars_default = prepareCssVars;

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/cssVars/getColorSchemeSelector.mjs
  function createGetColorSchemeSelector(selector) {
    return function getColorSchemeSelector(colorScheme) {
      if (selector === "media") {
        if (false) {
          if (colorScheme !== "light" && colorScheme !== "dark") {
            console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${colorScheme}'.`);
          }
        }
        return `@media (prefers-color-scheme: ${colorScheme})`;
      }
      if (selector) {
        if (selector.startsWith("data-") && !selector.includes("%s")) {
          return `[${selector}="${colorScheme}"] &`;
        }
        if (selector === "class") {
          return `.${colorScheme} &`;
        }
        if (selector === "data") {
          return `[data-${colorScheme}] &`;
        }
        return `${selector.replace("%s", colorScheme)} &`;
      }
      return "&";
    };
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/colors/common.mjs
  var common = {
    black: "#000",
    white: "#fff"
  };
  var common_default = common;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/colors/grey.mjs
  var grey = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
  };
  var grey_default = grey;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/colors/purple.mjs
  var purple = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff"
  };
  var purple_default = purple;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/colors/red.mjs
  var red = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000"
  };
  var red_default = red;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/colors/orange.mjs
  var orange = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00"
  };
  var orange_default = orange;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/colors/blue.mjs
  var blue = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
  };
  var blue_default = blue;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/colors/lightBlue.mjs
  var lightBlue = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea"
  };
  var lightBlue_default = lightBlue;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/colors/green.mjs
  var green = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
  };
  var green_default = green;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/createPalette.mjs
  function getLight() {
    return {
      // The colors used to style the text.
      text: {
        // The most important text.
        primary: "rgba(0, 0, 0, 0.87)",
        // Secondary text.
        secondary: "rgba(0, 0, 0, 0.6)",
        // Disabled text have even lower visual prominence.
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      // The color used to divide different elements.
      divider: "rgba(0, 0, 0, 0.12)",
      // The background colors used to style the surfaces.
      // Consistency between these values is important.
      background: {
        paper: common_default.white,
        default: common_default.white
      },
      // The colors used to style the action elements.
      action: {
        // The color of an active action like an icon button.
        active: "rgba(0, 0, 0, 0.54)",
        // The color of an hovered action.
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        // The color of a selected action.
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        // The color of a disabled action.
        disabled: "rgba(0, 0, 0, 0.26)",
        // The background color of a disabled action.
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12
      }
    };
  }
  var light = getLight();
  function getDark() {
    return {
      text: {
        primary: common_default.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        paper: "#121212",
        default: "#121212"
      },
      action: {
        active: common_default.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24
      }
    };
  }
  var dark = getDark();
  function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === "light") {
        intent.light = lighten(intent.main, tonalOffsetLight);
      } else if (direction === "dark") {
        intent.dark = darken(intent.main, tonalOffsetDark);
      }
    }
  }
  function mixLightOrDark(colorSpace, intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === "light") {
        intent.light = `color-mix(in ${colorSpace}, ${intent.main}, #fff ${(tonalOffsetLight * 100).toFixed(0)}%)`;
      } else if (direction === "dark") {
        intent.dark = `color-mix(in ${colorSpace}, ${intent.main}, #000 ${(tonalOffsetDark * 100).toFixed(0)}%)`;
      }
    }
  }
  function getDefaultPrimary(mode = "light") {
    if (mode === "dark") {
      return {
        main: blue_default[200],
        light: blue_default[50],
        dark: blue_default[400]
      };
    }
    return {
      main: blue_default[700],
      light: blue_default[400],
      dark: blue_default[800]
    };
  }
  function getDefaultSecondary(mode = "light") {
    if (mode === "dark") {
      return {
        main: purple_default[200],
        light: purple_default[50],
        dark: purple_default[400]
      };
    }
    return {
      main: purple_default[500],
      light: purple_default[300],
      dark: purple_default[700]
    };
  }
  function getDefaultError(mode = "light") {
    if (mode === "dark") {
      return {
        main: red_default[500],
        light: red_default[300],
        dark: red_default[700]
      };
    }
    return {
      main: red_default[700],
      light: red_default[400],
      dark: red_default[800]
    };
  }
  function getDefaultInfo(mode = "light") {
    if (mode === "dark") {
      return {
        main: lightBlue_default[400],
        light: lightBlue_default[300],
        dark: lightBlue_default[700]
      };
    }
    return {
      main: lightBlue_default[700],
      light: lightBlue_default[500],
      dark: lightBlue_default[900]
    };
  }
  function getDefaultSuccess(mode = "light") {
    if (mode === "dark") {
      return {
        main: green_default[400],
        light: green_default[300],
        dark: green_default[700]
      };
    }
    return {
      main: green_default[800],
      light: green_default[500],
      dark: green_default[900]
    };
  }
  function getDefaultWarning(mode = "light") {
    if (mode === "dark") {
      return {
        main: orange_default[400],
        light: orange_default[300],
        dark: orange_default[700]
      };
    }
    return {
      main: "#ed6c02",
      // closest to orange[800] that pass 3:1.
      light: orange_default[500],
      dark: orange_default[900]
    };
  }
  function contrastColor(background) {
    return `oklch(from ${background} var(--__l) 0 h / var(--__a))`;
  }
  function createPalette(palette2) {
    const {
      mode = "light",
      contrastThreshold = 3,
      tonalOffset = 0.2,
      colorSpace,
      ...other
    } = palette2;
    const primary = palette2.primary || getDefaultPrimary(mode);
    const secondary = palette2.secondary || getDefaultSecondary(mode);
    const error = palette2.error || getDefaultError(mode);
    const info = palette2.info || getDefaultInfo(mode);
    const success = palette2.success || getDefaultSuccess(mode);
    const warning = palette2.warning || getDefaultWarning(mode);
    function getContrastText(background) {
      if (colorSpace) {
        return contrastColor(background);
      }
      const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
      if (false) {
        const contrast = getContrastRatio(background, contrastText);
        if (contrast < 3) {
          console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
        }
      }
      return contrastText;
    }
    const augmentColor = ({
      color: color2,
      name,
      mainShade = 500,
      lightShade = 300,
      darkShade = 700
    }) => {
      color2 = {
        ...color2
      };
      if (!color2.main && color2[mainShade]) {
        color2.main = color2[mainShade];
      }
      if (!color2.hasOwnProperty("main")) {
        throw new Error(false ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
      }
      if (typeof color2.main !== "string") {
        throw new Error(false ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color2.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color2.main)));
      }
      if (colorSpace) {
        mixLightOrDark(colorSpace, color2, "light", lightShade, tonalOffset);
        mixLightOrDark(colorSpace, color2, "dark", darkShade, tonalOffset);
      } else {
        addLightOrDark(color2, "light", lightShade, tonalOffset);
        addLightOrDark(color2, "dark", darkShade, tonalOffset);
      }
      if (!color2.contrastText) {
        color2.contrastText = getContrastText(color2.main);
      }
      return color2;
    };
    let modeHydrated;
    if (mode === "light") {
      modeHydrated = getLight();
    } else if (mode === "dark") {
      modeHydrated = getDark();
    }
    if (false) {
      if (!modeHydrated) {
        console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
      }
    }
    const paletteOutput = deepmerge({
      // A collection of common colors.
      common: {
        ...common_default
      },
      // prevent mutable object.
      // The palette mode, can be light or dark.
      mode,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor({
        color: primary,
        name: "primary"
      }),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor({
        color: secondary,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor({
        color: error,
        name: "error"
      }),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor({
        color: warning,
        name: "warning"
      }),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor({
        color: info,
        name: "info"
      }),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor({
        color: success,
        name: "success"
      }),
      // The grey colors.
      grey: grey_default,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText,
      // Generate a rich color object.
      augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset,
      // The light and dark mode object.
      ...modeHydrated
    }, other);
    return paletteOutput;
  }

  // node_modules/.pnpm/@mui+system@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+st_b8840067a41eabdbb9bcf9c531638183/node_modules/@mui/system/cssVars/prepareTypographyVars.mjs
  function prepareTypographyVars(typography) {
    const vars = {};
    const entries = Object.entries(typography);
    entries.forEach((entry) => {
      const [key, value] = entry;
      if (typeof value === "object") {
        vars[key] = `${value.fontStyle ? `${value.fontStyle} ` : ""}${value.fontVariant ? `${value.fontVariant} ` : ""}${value.fontWeight ? `${value.fontWeight} ` : ""}${value.fontStretch ? `${value.fontStretch} ` : ""}${value.fontSize || ""}${value.lineHeight ? `/${value.lineHeight} ` : ""}${value.fontFamily || ""}`;
      }
    });
    return vars;
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/createMixins.mjs
  function createMixins(breakpoints, mixins) {
    return {
      toolbar: {
        minHeight: 56,
        [breakpoints.up("xs")]: {
          "@media (orientation: landscape)": {
            minHeight: 48
          }
        },
        [breakpoints.up("sm")]: {
          minHeight: 64
        }
      },
      ...mixins
    };
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/createTypography.mjs
  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }
  var caseAllCaps = {
    textTransform: "uppercase"
  };
  var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  function createTypography(palette2, typography) {
    const {
      fontFamily = defaultFontFamily,
      // The default font size of the Material Specification.
      fontSize = 14,
      // px
      fontWeightLight = 300,
      fontWeightRegular = 400,
      fontWeightMedium = 500,
      fontWeightBold = 700,
      // Tell MUI what's the font-size on the html element.
      // 16px is the default font-size used by browsers.
      htmlFontSize = 16,
      // Apply the CSS properties to all the variants.
      allVariants,
      pxToRem: pxToRem2,
      ...other
    } = typeof typography === "function" ? typography(palette2) : typography;
    if (false) {
      if (typeof fontSize !== "number") {
        console.error("MUI: `fontSize` is required to be a number.");
      }
      if (typeof htmlFontSize !== "number") {
        console.error("MUI: `htmlFontSize` is required to be a number.");
      }
    }
    const coef = fontSize / 14;
    const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => ({
      fontFamily,
      fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight,
      // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
      // across font-families can cause issues with the kerning.
      ...fontFamily === defaultFontFamily ? {
        letterSpacing: `${round(letterSpacing / size)}em`
      } : {},
      ...casing,
      ...allVariants
    });
    const variants2 = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
      // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return deepmerge({
      htmlFontSize,
      pxToRem,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold,
      ...variants2
    }, other, {
      clone: false
      // No need to clone deep
    });
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/shadows.mjs
  var shadowKeyUmbraOpacity = 0.2;
  var shadowKeyPenumbraOpacity = 0.14;
  var shadowAmbientShadowOpacity = 0.12;
  function createShadow(...px) {
    return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
  }
  var shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
  var shadows_default = shadows;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/createTransitions.mjs
  var DEFAULT_TRANSITION_PROPS = ["all"];
  var EMPTY_OPTIONS = {};
  var easing = {
    // This is the most common easing curve.
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  var duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };
  function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
  }
  function getAutoHeightDuration(height2) {
    if (!height2) {
      return 0;
    }
    const constant = height2 / 36;
    return Math.min(Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10), 3e3);
  }
  function createTransitions(inputTransitions) {
    const transitions = {
      ...inputTransitions
    };
    delete transitions.reducedMotion;
    const mergedEasing = {
      ...easing,
      ...transitions.easing
    };
    const mergedDuration = {
      ...duration,
      ...transitions.duration
    };
    const createTransitionValue = (props = DEFAULT_TRANSITION_PROPS, options = EMPTY_OPTIONS) => {
      const {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0,
        ...other
      } = options;
      if (false) {
        const isString = (value) => typeof value === "string";
        const isNumber = (value) => !Number.isNaN(parseFloat(value));
        if (!isString(props) && !Array.isArray(props)) {
          console.error('MUI: Argument "props" must be a string or Array.');
        }
        if (!isNumber(durationOption) && !isString(durationOption)) {
          console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
        }
        if (!isString(easingOption)) {
          console.error('MUI: Argument "easing" must be a string.');
        }
        if (!isNumber(delay) && !isString(delay)) {
          console.error('MUI: Argument "delay" must be a number or a string.');
        }
        if (typeof options !== "object") {
          console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join("\n"));
        }
        if (Object.keys(other).length !== 0) {
          console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
        }
      }
      return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
    };
    const create = transitions.create ?? createTransitionValue;
    return {
      getAutoHeightDuration,
      create,
      ...transitions,
      easing: mergedEasing,
      duration: mergedDuration
    };
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/createMotion.mjs
  var EMPTY_MOTION = {};
  function createMotion(inputMotion = EMPTY_MOTION) {
    return {
      reducedMotion: "never",
      ...inputMotion
    };
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/zIndex.mjs
  var zIndex = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  var zIndex_default = zIndex;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/stringifyTheme.mjs
  function isSerializable(val) {
    return isPlainObject(val) || typeof val === "undefined" || typeof val === "string" || typeof val === "boolean" || typeof val === "number" || Array.isArray(val);
  }
  function stringifyTheme(baseTheme = {}) {
    const serializableTheme = {
      ...baseTheme
    };
    function serializeTheme(object) {
      const array = Object.entries(object);
      for (let index = 0; index < array.length; index++) {
        const [key, value] = array[index];
        if (!isSerializable(value) || key.startsWith("unstable_") || key.startsWith("internal_")) {
          delete object[key];
        } else if (isPlainObject(value)) {
          object[key] = {
            ...value
          };
          serializeTheme(object[key]);
        }
      }
    }
    serializeTheme(serializableTheme);
    return `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(serializableTheme, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.motion = { reducedMotion: 'never', ...theme.motion };
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/createThemeNoVars.mjs
  function coefficientToPercentage(coefficient) {
    if (typeof coefficient === "number") {
      return `${(coefficient * 100).toFixed(0)}%`;
    }
    return `calc((${coefficient}) * 100%)`;
  }
  var parseAddition = (str) => {
    if (!Number.isNaN(+str)) {
      return +str;
    }
    const numbers = str.match(/\d*\.?\d+/g);
    if (!numbers) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      sum += +numbers[i];
    }
    return sum;
  };
  function attachColorManipulators(theme) {
    Object.assign(theme, {
      alpha(color2, coefficient) {
        const obj = this || theme;
        if (obj.colorSpace) {
          return `oklch(from ${color2} l c h / ${typeof coefficient === "string" ? `calc(${coefficient})` : coefficient})`;
        }
        if (obj.vars) {
          return `rgba(${color2.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof coefficient === "string" ? `calc(${coefficient})` : coefficient})`;
        }
        return alpha(color2, parseAddition(coefficient));
      },
      lighten(color2, coefficient) {
        const obj = this || theme;
        if (obj.colorSpace) {
          return `color-mix(in ${obj.colorSpace}, ${color2}, #fff ${coefficientToPercentage(coefficient)})`;
        }
        return lighten(color2, coefficient);
      },
      darken(color2, coefficient) {
        const obj = this || theme;
        if (obj.colorSpace) {
          return `color-mix(in ${obj.colorSpace}, ${color2}, #000 ${coefficientToPercentage(coefficient)})`;
        }
        return darken(color2, coefficient);
      }
    });
  }
  function createThemeNoVars(options = {}, ...args) {
    const {
      breakpoints: breakpointsInput,
      mixins: mixinsInput = {},
      spacing: spacingInput,
      palette: paletteInput = {},
      motion: motionInput = {},
      transitions: transitionsInput = {},
      typography: typographyInput = {},
      shape: shapeInput,
      colorSpace,
      ...other
    } = options;
    if (options.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
    // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
    options.generateThemeVars === void 0) {
      throw new Error(false ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : formatMuiErrorMessage(22));
    }
    const palette2 = createPalette({
      ...paletteInput,
      colorSpace
    });
    const systemTheme = createTheme_default(options);
    let muiTheme = deepmerge(systemTheme, {
      mixins: createMixins(systemTheme.breakpoints, mixinsInput),
      palette: palette2,
      // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
      shadows: shadows_default.slice(),
      typography: createTypography(palette2, typographyInput),
      motion: createMotion(motionInput),
      transitions: createTransitions(transitionsInput),
      zIndex: {
        ...zIndex_default
      }
    });
    muiTheme = deepmerge(muiTheme, other);
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
    delete muiTheme.transitions.reducedMotion;
    if (false) {
      const stateClasses = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"];
      const traverse = (node2, component) => {
        let key;
        for (key in node2) {
          const child = node2[key];
          if (stateClasses.includes(key) && Object.keys(child).length > 0) {
            if (false) {
              const stateClass = generateUtilityClass("", key);
              console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`, "You can not override it like this: ", JSON.stringify(node2, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
                root: {
                  [`&.${stateClass}`]: child
                }
              }, null, 2), "", "https://mui.com/r/state-classes-guide"].join("\n"));
            }
            node2[key] = {};
          }
        }
      };
      Object.keys(muiTheme.components).forEach((component) => {
        const styleOverrides = muiTheme.components[component].styleOverrides;
        if (styleOverrides && component.startsWith("Mui")) {
          traverse(styleOverrides, component);
        }
      });
    }
    muiTheme.unstable_sxConfig = {
      ...defaultSxConfig_default,
      ...other?.unstable_sxConfig
    };
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx_default({
        sx: props,
        theme: this
      });
    };
    muiTheme.toRuntimeSource = stringifyTheme;
    attachColorManipulators(muiTheme);
    return muiTheme;
  }
  var createThemeNoVars_default = createThemeNoVars;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/getOverlayAlpha.mjs
  function getOverlayAlpha(elevation) {
    let alphaValue;
    if (elevation < 1) {
      alphaValue = 5.11916 * elevation ** 2;
    } else {
      alphaValue = 4.5 * Math.log(elevation + 1) + 2;
    }
    return Math.round(alphaValue * 10) / 1e3;
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/createColorScheme.mjs
  var defaultDarkOverlays = [...Array(25)].map((_, index) => {
    if (index === 0) {
      return "none";
    }
    const overlay = getOverlayAlpha(index);
    return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
  });
  function getOpacity(mode) {
    return {
      inputPlaceholder: mode === "dark" ? 0.5 : 0.42,
      inputUnderline: mode === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: mode === "dark" ? 0.2 : 0.12,
      switchTrack: mode === "dark" ? 0.3 : 0.38
    };
  }
  function getOverlays(mode) {
    return mode === "dark" ? defaultDarkOverlays : [];
  }
  function createColorScheme(options) {
    const {
      palette: paletteInput = {
        mode: "light"
      },
      // need to cast to avoid module augmentation test
      opacity,
      overlays,
      colorSpace,
      ...other
    } = options;
    const palette2 = createPalette({
      ...paletteInput,
      colorSpace
    });
    return {
      palette: palette2,
      opacity: {
        ...getOpacity(palette2.mode),
        ...opacity
      },
      overlays: overlays || getOverlays(palette2.mode),
      ...other
    };
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/shouldSkipGeneratingVar.mjs
  function shouldSkipGeneratingVar(keys) {
    return keys[0] === "motion" || !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) || // ends with sxConfig
    keys[0] === "palette" && !!keys[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/excludeVariablesFromRoot.mjs
  var excludeVariablesFromRoot = (cssVarPrefix) => [...[...Array(25)].map((_, index) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}overlays-${index}`), `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkBg`, `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkColor`];
  var excludeVariablesFromRoot_default = excludeVariablesFromRoot;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/createGetSelector.mjs
  var createGetSelector_default = (theme) => (colorScheme, css) => {
    const root = theme.rootSelector || ":root";
    const selector = theme.colorSchemeSelector;
    let rule = selector;
    if (selector === "class") {
      rule = ".%s";
    }
    if (selector === "data") {
      rule = "[data-%s]";
    }
    if (selector?.startsWith("data-") && !selector.includes("%s")) {
      rule = `[${selector}="%s"]`;
    }
    if (theme.defaultColorScheme === colorScheme) {
      if (colorScheme === "dark") {
        const excludedVariables = {};
        excludeVariablesFromRoot_default(theme.cssVarPrefix).forEach((cssVar) => {
          excludedVariables[cssVar] = css[cssVar];
          delete css[cssVar];
        });
        if (rule === "media") {
          return {
            [root]: css,
            [`@media (prefers-color-scheme: dark)`]: {
              [root]: excludedVariables
            }
          };
        }
        if (rule) {
          return {
            [rule.replace("%s", colorScheme)]: excludedVariables,
            [`${root}, ${rule.replace("%s", colorScheme)}`]: css
          };
        }
        return {
          [root]: {
            ...css,
            ...excludedVariables
          }
        };
      }
      if (rule && rule !== "media") {
        return `${root}, ${rule.replace("%s", String(colorScheme))}`;
      }
    } else if (colorScheme) {
      if (rule === "media") {
        return {
          [`@media (prefers-color-scheme: ${String(colorScheme)})`]: {
            [root]: css
          }
        };
      }
      if (rule) {
        return rule.replace("%s", String(colorScheme));
      }
    }
    return root;
  };

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/createThemeWithVars.mjs
  function assignNode(obj, keys) {
    keys.forEach((k) => {
      if (!obj[k]) {
        obj[k] = {};
      }
    });
  }
  function setColor(obj, key, defaultValue) {
    if (!obj[key] && defaultValue) {
      obj[key] = defaultValue;
    }
  }
  function toRgb(color2) {
    if (typeof color2 !== "string" || !color2.startsWith("hsl")) {
      return color2;
    }
    return hslToRgb(color2);
  }
  function setColorChannel(obj, key) {
    if (!(`${key}Channel` in obj)) {
      obj[`${key}Channel`] = private_safeColorChannel(toRgb(obj[key]), `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`);
    }
  }
  function getSpacingVal(spacingInput) {
    if (typeof spacingInput === "number") {
      return `${spacingInput}px`;
    }
    if (typeof spacingInput === "string" || typeof spacingInput === "function" || Array.isArray(spacingInput)) {
      return spacingInput;
    }
    return "8px";
  }
  var silent = (fn) => {
    try {
      return fn();
    } catch (error) {
    }
    return void 0;
  };
  var createGetCssVar2 = (cssVarPrefix = "mui") => createGetCssVar(cssVarPrefix);
  function attachColorScheme(colorSpace, colorSchemes, scheme, restTheme, colorScheme) {
    if (!scheme) {
      return void 0;
    }
    scheme = scheme === true ? {} : scheme;
    const mode = colorScheme === "dark" ? "dark" : "light";
    if (!restTheme) {
      colorSchemes[colorScheme] = createColorScheme({
        ...scheme,
        palette: {
          mode,
          ...scheme?.palette
        },
        colorSpace
      });
      return void 0;
    }
    const {
      palette: palette2,
      ...muiTheme
    } = createThemeNoVars_default({
      ...restTheme,
      palette: {
        mode,
        ...scheme?.palette
      },
      colorSpace
    });
    colorSchemes[colorScheme] = {
      ...scheme,
      palette: palette2,
      opacity: {
        ...getOpacity(mode),
        ...scheme?.opacity
      },
      overlays: scheme?.overlays || getOverlays(mode)
    };
    return muiTheme;
  }
  function createThemeWithVars(options = {}, ...args) {
    const {
      colorSchemes: colorSchemesInput = {
        light: true
      },
      defaultColorScheme: defaultColorSchemeInput,
      disableCssColorScheme = false,
      cssVarPrefix = "mui",
      nativeColor = false,
      shouldSkipGeneratingVar: shouldSkipGeneratingVar2 = shouldSkipGeneratingVar,
      colorSchemeSelector: selector = colorSchemesInput.light && colorSchemesInput.dark ? "media" : void 0,
      rootSelector = ":root",
      ...input
    } = options;
    const firstColorScheme = Object.keys(colorSchemesInput)[0];
    const defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== "light" ? "light" : firstColorScheme);
    const getCssVar = createGetCssVar2(cssVarPrefix);
    const {
      [defaultColorScheme]: defaultSchemeInput,
      light: builtInLight,
      dark: builtInDark,
      ...customColorSchemes
    } = colorSchemesInput;
    const colorSchemes = {
      ...customColorSchemes
    };
    let defaultScheme = defaultSchemeInput;
    if (defaultColorScheme === "dark" && !("dark" in colorSchemesInput) || defaultColorScheme === "light" && !("light" in colorSchemesInput)) {
      defaultScheme = true;
    }
    if (!defaultScheme) {
      throw new Error(false ? `MUI: The \`colorSchemes.${defaultColorScheme}\` option is either missing or invalid.` : formatMuiErrorMessage(21, defaultColorScheme));
    }
    let colorSpace;
    if (nativeColor) {
      colorSpace = "oklch";
    }
    const muiTheme = attachColorScheme(colorSpace, colorSchemes, defaultScheme, input, defaultColorScheme);
    if (builtInLight && !colorSchemes.light) {
      attachColorScheme(colorSpace, colorSchemes, builtInLight, void 0, "light");
    }
    if (builtInDark && !colorSchemes.dark) {
      attachColorScheme(colorSpace, colorSchemes, builtInDark, void 0, "dark");
    }
    let theme = {
      defaultColorScheme,
      ...muiTheme,
      cssVarPrefix,
      colorSchemeSelector: selector,
      rootSelector,
      getCssVar,
      colorSchemes,
      font: {
        ...prepareTypographyVars(muiTheme.typography),
        ...muiTheme.font
      },
      spacing: getSpacingVal(input.spacing)
    };
    Object.keys(theme.colorSchemes).forEach((key) => {
      const palette2 = theme.colorSchemes[key].palette;
      const setCssVarColor = (cssVar) => {
        const tokens = cssVar.split("-");
        const color2 = tokens[1];
        const colorToken = tokens[2];
        return getCssVar(cssVar, palette2[color2][colorToken]);
      };
      if (palette2.mode === "light") {
        setColor(palette2.common, "background", "#fff");
        setColor(palette2.common, "onBackground", "#000");
      }
      if (palette2.mode === "dark") {
        setColor(palette2.common, "background", "#000");
        setColor(palette2.common, "onBackground", "#fff");
      }
      function colorMix(method, color2, coefficient) {
        if (colorSpace) {
          let mixer;
          if (method === private_safeAlpha) {
            mixer = `transparent ${((1 - coefficient) * 100).toFixed(0)}%`;
          }
          if (method === private_safeDarken) {
            mixer = `#000 ${(coefficient * 100).toFixed(0)}%`;
          }
          if (method === private_safeLighten) {
            mixer = `#fff ${(coefficient * 100).toFixed(0)}%`;
          }
          return `color-mix(in ${colorSpace}, ${color2}, ${mixer})`;
        }
        return method(color2, coefficient);
      }
      assignNode(palette2, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]);
      if (palette2.mode === "light") {
        setColor(palette2.Alert, "errorColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-light") : palette2.error.light, 0.6));
        setColor(palette2.Alert, "infoColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-light") : palette2.info.light, 0.6));
        setColor(palette2.Alert, "successColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-light") : palette2.success.light, 0.6));
        setColor(palette2.Alert, "warningColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-light") : palette2.warning.light, 0.6));
        setColor(palette2.Alert, "errorFilledBg", setCssVarColor("palette-error-main"));
        setColor(palette2.Alert, "infoFilledBg", setCssVarColor("palette-info-main"));
        setColor(palette2.Alert, "successFilledBg", setCssVarColor("palette-success-main"));
        setColor(palette2.Alert, "warningFilledBg", setCssVarColor("palette-warning-main"));
        setColor(palette2.Alert, "errorFilledColor", silent(() => palette2.getContrastText(palette2.error.main)));
        setColor(palette2.Alert, "infoFilledColor", silent(() => palette2.getContrastText(palette2.info.main)));
        setColor(palette2.Alert, "successFilledColor", silent(() => palette2.getContrastText(palette2.success.main)));
        setColor(palette2.Alert, "warningFilledColor", silent(() => palette2.getContrastText(palette2.warning.main)));
        setColor(palette2.Alert, "errorStandardBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-light") : palette2.error.light, 0.9));
        setColor(palette2.Alert, "infoStandardBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-light") : palette2.info.light, 0.9));
        setColor(palette2.Alert, "successStandardBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-light") : palette2.success.light, 0.9));
        setColor(palette2.Alert, "warningStandardBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-light") : palette2.warning.light, 0.9));
        setColor(palette2.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
        setColor(palette2.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
        setColor(palette2.Alert, "successIconColor", setCssVarColor("palette-success-main"));
        setColor(palette2.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
        setColor(palette2.AppBar, "defaultBg", setCssVarColor("palette-grey-100"));
        setColor(palette2.Avatar, "defaultBg", setCssVarColor("palette-grey-400"));
        setColor(palette2.Button, "inheritContainedBg", setCssVarColor("palette-grey-300"));
        setColor(palette2.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-A100"));
        setColor(palette2.Chip, "defaultBorder", setCssVarColor("palette-grey-400"));
        setColor(palette2.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-700"));
        setColor(palette2.Chip, "defaultIconColor", setCssVarColor("palette-grey-700"));
        setColor(palette2.FilledInput, "bg", "rgba(0, 0, 0, 0.06)");
        setColor(palette2.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)");
        setColor(palette2.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)");
        setColor(palette2.LinearProgress, "primaryBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-primary-main") : palette2.primary.main, 0.62));
        setColor(palette2.LinearProgress, "secondaryBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-secondary-main") : palette2.secondary.main, 0.62));
        setColor(palette2.LinearProgress, "errorBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-main") : palette2.error.main, 0.62));
        setColor(palette2.LinearProgress, "infoBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-main") : palette2.info.main, 0.62));
        setColor(palette2.LinearProgress, "successBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-main") : palette2.success.main, 0.62));
        setColor(palette2.LinearProgress, "warningBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-light") : palette2.warning.main, 0.62));
        setColor(palette2.Skeleton, "bg", colorSpace ? colorMix(private_safeAlpha, nativeColor ? getCssVar("palette-text-primary") : palette2.text.primary, 0.11) : `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.11)`);
        setColor(palette2.Slider, "primaryTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-primary-main") : palette2.primary.main, 0.62));
        setColor(palette2.Slider, "secondaryTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-secondary-main") : palette2.secondary.main, 0.62));
        setColor(palette2.Slider, "errorTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-main") : palette2.error.main, 0.62));
        setColor(palette2.Slider, "infoTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-main") : palette2.info.main, 0.62));
        setColor(palette2.Slider, "successTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-main") : palette2.success.main, 0.62));
        setColor(palette2.Slider, "warningTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-main") : palette2.warning.main, 0.62));
        const snackbarContentBackground = colorSpace ? colorMix(private_safeDarken, nativeColor ? getCssVar("palette-background-default") : palette2.background.default, 0.6825) : private_safeEmphasize(palette2.background.default, 0.8);
        setColor(palette2.SnackbarContent, "bg", snackbarContentBackground);
        setColor(palette2.SnackbarContent, "color", silent(() => colorSpace ? dark.text.primary : palette2.getContrastText(snackbarContentBackground)));
        setColor(palette2.SpeedDialAction, "fabHoverBg", private_safeEmphasize(palette2.background.paper, 0.15));
        setColor(palette2.StepConnector, "border", setCssVarColor("palette-grey-400"));
        setColor(palette2.StepContent, "border", setCssVarColor("palette-grey-400"));
        setColor(palette2.Switch, "defaultColor", setCssVarColor("palette-common-white"));
        setColor(palette2.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-100"));
        setColor(palette2.Switch, "primaryDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-primary-main") : palette2.primary.main, 0.62));
        setColor(palette2.Switch, "secondaryDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-secondary-main") : palette2.secondary.main, 0.62));
        setColor(palette2.Switch, "errorDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-main") : palette2.error.main, 0.62));
        setColor(palette2.Switch, "infoDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-main") : palette2.info.main, 0.62));
        setColor(palette2.Switch, "successDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-main") : palette2.success.main, 0.62));
        setColor(palette2.Switch, "warningDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-main") : palette2.warning.main, 0.62));
        setColor(palette2.TableCell, "border", colorMix(private_safeLighten, private_safeAlpha(nativeColor ? getCssVar("palette-divider") : palette2.divider, 1), 0.88));
        setColor(palette2.Tooltip, "bg", colorMix(private_safeAlpha, nativeColor ? getCssVar("palette-grey-700") : palette2.grey[700], 0.92));
      }
      if (palette2.mode === "dark") {
        setColor(palette2.Alert, "errorColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-light") : palette2.error.light, 0.6));
        setColor(palette2.Alert, "infoColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-light") : palette2.info.light, 0.6));
        setColor(palette2.Alert, "successColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-light") : palette2.success.light, 0.6));
        setColor(palette2.Alert, "warningColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-light") : palette2.warning.light, 0.6));
        setColor(palette2.Alert, "errorFilledBg", setCssVarColor("palette-error-dark"));
        setColor(palette2.Alert, "infoFilledBg", setCssVarColor("palette-info-dark"));
        setColor(palette2.Alert, "successFilledBg", setCssVarColor("palette-success-dark"));
        setColor(palette2.Alert, "warningFilledBg", setCssVarColor("palette-warning-dark"));
        setColor(palette2.Alert, "errorFilledColor", silent(() => palette2.getContrastText(palette2.error.dark)));
        setColor(palette2.Alert, "infoFilledColor", silent(() => palette2.getContrastText(palette2.info.dark)));
        setColor(palette2.Alert, "successFilledColor", silent(() => palette2.getContrastText(palette2.success.dark)));
        setColor(palette2.Alert, "warningFilledColor", silent(() => palette2.getContrastText(palette2.warning.dark)));
        setColor(palette2.Alert, "errorStandardBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-light") : palette2.error.light, 0.9));
        setColor(palette2.Alert, "infoStandardBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-light") : palette2.info.light, 0.9));
        setColor(palette2.Alert, "successStandardBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-light") : palette2.success.light, 0.9));
        setColor(palette2.Alert, "warningStandardBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-light") : palette2.warning.light, 0.9));
        setColor(palette2.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
        setColor(palette2.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
        setColor(palette2.Alert, "successIconColor", setCssVarColor("palette-success-main"));
        setColor(palette2.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
        setColor(palette2.AppBar, "defaultBg", setCssVarColor("palette-grey-900"));
        setColor(palette2.AppBar, "darkBg", setCssVarColor("palette-background-paper"));
        setColor(palette2.AppBar, "darkColor", setCssVarColor("palette-text-primary"));
        setColor(palette2.Avatar, "defaultBg", setCssVarColor("palette-grey-600"));
        setColor(palette2.Button, "inheritContainedBg", setCssVarColor("palette-grey-800"));
        setColor(palette2.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-700"));
        setColor(palette2.Chip, "defaultBorder", setCssVarColor("palette-grey-700"));
        setColor(palette2.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-300"));
        setColor(palette2.Chip, "defaultIconColor", setCssVarColor("palette-grey-300"));
        setColor(palette2.FilledInput, "bg", "rgba(255, 255, 255, 0.09)");
        setColor(palette2.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)");
        setColor(palette2.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)");
        setColor(palette2.LinearProgress, "primaryBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-primary-main") : palette2.primary.main, 0.5));
        setColor(palette2.LinearProgress, "secondaryBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-secondary-main") : palette2.secondary.main, 0.5));
        setColor(palette2.LinearProgress, "errorBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-main") : palette2.error.main, 0.5));
        setColor(palette2.LinearProgress, "infoBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-main") : palette2.info.main, 0.5));
        setColor(palette2.LinearProgress, "successBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-main") : palette2.success.main, 0.5));
        setColor(palette2.LinearProgress, "warningBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-main") : palette2.warning.main, 0.5));
        setColor(palette2.Skeleton, "bg", colorSpace ? colorMix(private_safeAlpha, nativeColor ? getCssVar("palette-text-primary") : palette2.text.primary, 0.13) : `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.13)`);
        setColor(palette2.Slider, "primaryTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-primary-main") : palette2.primary.main, 0.5));
        setColor(palette2.Slider, "secondaryTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-secondary-main") : palette2.secondary.main, 0.5));
        setColor(palette2.Slider, "errorTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-main") : palette2.error.main, 0.5));
        setColor(palette2.Slider, "infoTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-main") : palette2.info.main, 0.5));
        setColor(palette2.Slider, "successTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-main") : palette2.success.main, 0.5));
        setColor(palette2.Slider, "warningTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-light") : palette2.warning.main, 0.5));
        const snackbarContentBackground = colorSpace ? colorMix(private_safeLighten, nativeColor ? getCssVar("palette-background-default") : palette2.background.default, 0.985) : private_safeEmphasize(palette2.background.default, 0.98);
        setColor(palette2.SnackbarContent, "bg", snackbarContentBackground);
        setColor(palette2.SnackbarContent, "color", silent(() => colorSpace ? light.text.primary : palette2.getContrastText(snackbarContentBackground)));
        setColor(palette2.SpeedDialAction, "fabHoverBg", private_safeEmphasize(palette2.background.paper, 0.15));
        setColor(palette2.StepConnector, "border", setCssVarColor("palette-grey-600"));
        setColor(palette2.StepContent, "border", setCssVarColor("palette-grey-600"));
        setColor(palette2.Switch, "defaultColor", setCssVarColor("palette-grey-300"));
        setColor(palette2.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-600"));
        setColor(palette2.Switch, "primaryDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-primary-main") : palette2.primary.main, 0.55));
        setColor(palette2.Switch, "secondaryDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-secondary-main") : palette2.secondary.main, 0.55));
        setColor(palette2.Switch, "errorDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-main") : palette2.error.main, 0.55));
        setColor(palette2.Switch, "infoDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-main") : palette2.info.main, 0.55));
        setColor(palette2.Switch, "successDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-main") : palette2.success.main, 0.55));
        setColor(palette2.Switch, "warningDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-light") : palette2.warning.main, 0.55));
        setColor(palette2.TableCell, "border", colorMix(private_safeDarken, private_safeAlpha(nativeColor ? getCssVar("palette-divider") : palette2.divider, 1), 0.68));
        setColor(palette2.Tooltip, "bg", colorMix(private_safeAlpha, nativeColor ? getCssVar("palette-grey-700") : palette2.grey[700], 0.92));
      }
      if (!nativeColor) {
        setColorChannel(palette2.background, "default");
        setColorChannel(palette2.background, "paper");
        setColorChannel(palette2.common, "background");
        setColorChannel(palette2.common, "onBackground");
        setColorChannel(palette2, "divider");
      }
      Object.keys(palette2).forEach((color2) => {
        const colors = palette2[color2];
        if (color2 !== "tonalOffset" && !nativeColor && colors && typeof colors === "object") {
          if (colors.main) {
            setColor(palette2[color2], "mainChannel", private_safeColorChannel(toRgb(colors.main)));
          }
          if (colors.light) {
            setColor(palette2[color2], "lightChannel", private_safeColorChannel(toRgb(colors.light)));
          }
          if (colors.dark) {
            setColor(palette2[color2], "darkChannel", private_safeColorChannel(toRgb(colors.dark)));
          }
          if (colors.contrastText) {
            setColor(palette2[color2], "contrastTextChannel", private_safeColorChannel(toRgb(colors.contrastText)));
          }
          if (color2 === "text") {
            setColorChannel(palette2[color2], "primary");
            setColorChannel(palette2[color2], "secondary");
          }
          if (color2 === "action") {
            if (colors.active) {
              setColorChannel(palette2[color2], "active");
            }
            if (colors.selected) {
              setColorChannel(palette2[color2], "selected");
            }
          }
        }
      });
    });
    theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);
    const parserConfig = {
      prefix: cssVarPrefix,
      disableCssColorScheme,
      shouldSkipGeneratingVar: shouldSkipGeneratingVar2,
      getSelector: createGetSelector_default(theme),
      enableContrastVars: nativeColor
    };
    const {
      vars,
      generateThemeVars,
      generateStyleSheets
    } = prepareCssVars_default(theme, parserConfig);
    theme.vars = vars;
    Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(([key, value]) => {
      theme[key] = value;
    });
    theme.generateThemeVars = generateThemeVars;
    theme.generateStyleSheets = generateStyleSheets;
    theme.generateSpacing = function generateSpacing() {
      return createSpacing(input.spacing, createUnarySpacing(this));
    };
    theme.getColorSchemeSelector = createGetColorSchemeSelector(selector);
    theme.spacing = theme.generateSpacing();
    theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar2;
    theme.unstable_sxConfig = {
      ...defaultSxConfig_default,
      ...input?.unstable_sxConfig
    };
    theme.unstable_sx = function sx(props) {
      return styleFunctionSx_default({
        sx: props,
        theme: this
      });
    };
    theme.internal_cache = {};
    theme.toRuntimeSource = stringifyTheme;
    return theme;
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/createTheme.mjs
  function attachColorScheme2(theme, scheme, colorScheme) {
    if (!theme.colorSchemes) {
      return void 0;
    }
    if (colorScheme) {
      theme.colorSchemes[scheme] = {
        ...colorScheme !== true && colorScheme,
        palette: createPalette({
          ...colorScheme === true ? {} : colorScheme.palette,
          mode: scheme
        })
        // cast type to skip module augmentation test
      };
    }
  }
  function createTheme2(options = {}, ...args) {
    const {
      palette: palette2,
      cssVariables = false,
      colorSchemes: initialColorSchemes = !palette2 ? {
        light: true
      } : void 0,
      defaultColorScheme: initialDefaultColorScheme = palette2?.mode,
      ...other
    } = options;
    const defaultColorSchemeInput = initialDefaultColorScheme || "light";
    const defaultScheme = initialColorSchemes?.[defaultColorSchemeInput];
    const colorSchemesInput = {
      ...initialColorSchemes,
      ...palette2 ? {
        [defaultColorSchemeInput]: {
          ...typeof defaultScheme !== "boolean" && defaultScheme,
          palette: palette2
        }
      } : void 0
    };
    if (cssVariables === false) {
      if (!("colorSchemes" in options)) {
        return createThemeNoVars_default(options, ...args);
      }
      let paletteOptions = palette2;
      if (!("palette" in options)) {
        if (colorSchemesInput[defaultColorSchemeInput]) {
          if (colorSchemesInput[defaultColorSchemeInput] !== true) {
            paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
          } else if (defaultColorSchemeInput === "dark") {
            paletteOptions = {
              mode: "dark"
            };
          }
        }
      }
      const theme = createThemeNoVars_default({
        ...options,
        palette: paletteOptions
      }, ...args);
      theme.defaultColorScheme = defaultColorSchemeInput;
      theme.colorSchemes = colorSchemesInput;
      if (theme.palette.mode === "light") {
        theme.colorSchemes.light = {
          ...colorSchemesInput.light !== true && colorSchemesInput.light,
          palette: theme.palette
        };
        attachColorScheme2(theme, "dark", colorSchemesInput.dark);
      }
      if (theme.palette.mode === "dark") {
        theme.colorSchemes.dark = {
          ...colorSchemesInput.dark !== true && colorSchemesInput.dark,
          palette: theme.palette
        };
        attachColorScheme2(theme, "light", colorSchemesInput.light);
      }
      return theme;
    }
    if (!palette2 && !("light" in colorSchemesInput) && defaultColorSchemeInput === "light") {
      colorSchemesInput.light = true;
    }
    return createThemeWithVars({
      ...other,
      colorSchemes: colorSchemesInput,
      defaultColorScheme: defaultColorSchemeInput,
      ...typeof cssVariables !== "boolean" && cssVariables
    }, ...args);
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/defaultTheme.mjs
  var defaultTheme = createTheme2();
  var defaultTheme_default = defaultTheme;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/identifier.mjs
  var identifier_default = "$$material";

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/zero-styled/index.mjs
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/slotShouldForwardProp.mjs
  function slotShouldForwardProp(prop) {
    return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
  }
  var slotShouldForwardProp_default = slotShouldForwardProp;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/rootShouldForwardProp.mjs
  var rootShouldForwardProp = (prop) => slotShouldForwardProp_default(prop) && prop !== "classes";
  var rootShouldForwardProp_default = rootShouldForwardProp;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/styled.mjs
  var styled3 = createStyled3({
    themeId: identifier_default,
    defaultTheme: defaultTheme_default,
    rootShouldForwardProp: rootShouldForwardProp_default
  });
  var styled_default = styled3;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/utils/memoTheme.mjs
  var memoTheme = unstable_memoTheme;
  var memoTheme_default = memoTheme;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs
  var React7 = __toESM(require_react(), 1);
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  false ? DefaultPropsProvider.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * @ignore
     */
    children: import_prop_types.default.node,
    /**
     * @ignore
     */
    value: import_prop_types.default.object.isRequired
  } : void 0;
  function useDefaultProps2(params) {
    return useDefaultProps(params);
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/SvgIcon/svgIconClasses.mjs
  function getSvgIconUtilityClass(slot) {
    return generateUtilityClass("MuiSvgIcon", slot);
  }
  var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/styles/reducedMotion.mjs
  var defaultStyles = {
    transition: "none"
  };
  function resolveReducedMotionStyles(reducedMotion, styles) {
    if (reducedMotion === "always") {
      return styles;
    }
    if (reducedMotion === "system") {
      return {
        "@media (prefers-reduced-motion: reduce)": styles
      };
    }
    return null;
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/transitions/utils.mjs
  var EMPTY_STYLE = {};
  var DEFAULT_TRANSITION_PROPS2 = ["all"];
  var EMPTY_OPTIONS2 = {};
  function getReducedMotionStyles(theme, styles) {
    const resolvedStyles = styles ?? defaultStyles;
    return resolveReducedMotionStyles(theme.motion?.reducedMotion, resolvedStyles);
  }
  function getTransitionStyles(theme, props = DEFAULT_TRANSITION_PROPS2, options = EMPTY_OPTIONS2) {
    const transition = theme.transitions?.create?.(props, options);
    const reducedMotionStyles = getReducedMotionStyles(theme);
    if (transition === void 0) {
      return reducedMotionStyles ?? EMPTY_STYLE;
    }
    const transitionStyles = {
      transition
    };
    return reducedMotionStyles ? {
      ...transitionStyles,
      ...reducedMotionStyles
    } : transitionStyles;
  }

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/SvgIcon/SvgIcon.mjs
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var useUtilityClasses = (ownerState) => {
    const {
      color: color2,
      fontSize,
      classes
    } = ownerState;
    const slots = {
      root: ["root", color2 !== "inherit" && `color${capitalize_default(color2)}`, `fontSize${capitalize_default(fontSize)}`]
    };
    return composeClasses(slots, getSvgIconUtilityClass, classes);
  };
  var SvgIconRoot = styled_default("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`], styles[`fontSize${capitalize_default(ownerState.fontSize)}`]];
    }
  })(memoTheme_default(({
    theme
  }) => ({
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...getTransitionStyles(theme, "fill", {
      duration: (theme.vars ?? theme).transitions?.duration?.shorter
    }),
    variants: [
      {
        props: (props) => !props.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: theme.typography?.pxToRem?.(20) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: theme.typography?.pxToRem?.(24) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: theme.typography?.pxToRem?.(35) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color2]) => ({
        props: {
          color: color2
        },
        style: {
          color: (theme.vars ?? theme).palette?.[color2]?.main
        }
      })),
      {
        props: {
          color: "action"
        },
        style: {
          color: (theme.vars ?? theme).palette?.action?.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (theme.vars ?? theme).palette?.action?.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  })));
  var SvgIcon = /* @__PURE__ */ React8.forwardRef(function SvgIcon2(inProps, ref) {
    const props = useDefaultProps2({
      props: inProps,
      name: "MuiSvgIcon"
    });
    const {
      children,
      className,
      color: color2 = "inherit",
      component = "svg",
      fontSize = "medium",
      htmlColor,
      inheritViewBox = false,
      titleAccess,
      viewBox = "0 0 24 24",
      ...other
    } = props;
    const hasSvgAsChild = /* @__PURE__ */ React8.isValidElement(children) && children.type === "svg";
    const ownerState = {
      ...props,
      color: color2,
      component,
      fontSize,
      instanceFontSize: inProps.fontSize,
      inheritViewBox,
      viewBox,
      hasSvgAsChild
    };
    const more = {};
    if (!inheritViewBox) {
      more.viewBox = viewBox;
    }
    const classes = useUtilityClasses(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(SvgIconRoot, {
      as: component,
      className: clsx_default(classes.root, className),
      focusable: "false",
      color: htmlColor,
      "aria-hidden": titleAccess ? void 0 : true,
      role: titleAccess ? "img" : void 0,
      ref,
      ...more,
      ...other,
      ...hasSvgAsChild && children.props,
      ownerState,
      children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("title", {
        children: titleAccess
      }) : null]
    });
  });
  false ? SvgIcon.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * Node passed into the SVG element.
     */
    children: import_prop_types.default.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: import_prop_types.default.object,
    /**
     * @ignore
     */
    className: import_prop_types.default.string,
    /**
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
     * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
     * @default 'inherit'
     */
    color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types.default.string]),
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: import_prop_types.default.elementType,
    /**
     * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
     * @default 'medium'
     */
    fontSize: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types.default.string]),
    /**
     * Applies a color attribute to the SVG element.
     */
    htmlColor: import_prop_types.default.string,
    /**
     * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
     * prop will be ignored.
     * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
     * `component`'s viewBox to the root node.
     * @default false
     */
    inheritViewBox: import_prop_types.default.bool,
    /**
     * The shape-rendering attribute. The behavior of the different options is described on the
     * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
     * If you are having issues with blurry icons you should investigate this prop.
     */
    shapeRendering: import_prop_types.default.string,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
    /**
     * Provides a human-readable title for the element that contains it.
     * https://www.w3.org/TR/SVG-access/#Equivalent
     */
    titleAccess: import_prop_types.default.string,
    /**
     * Allows you to redefine what the coordinates without units mean inside an SVG element.
     * For example, if the SVG element is 500 (width) by 200 (height),
     * and you pass viewBox="0 0 50 20",
     * this means that the coordinates inside the SVG will go from the top left corner (0,0)
     * to bottom right (50,20) and each unit will be worth 10px.
     * @default '0 0 24 24'
     */
    viewBox: import_prop_types.default.string
  } : void 0;
  SvgIcon.muiName = "SvgIcon";
  var SvgIcon_default = SvgIcon;

  // node_modules/.pnpm/@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2.17_react@19.2.4__@emotion+_12a940d4adadcf611e0a3a3aa5aec791/node_modules/@mui/material/SvgIcon/createSvgIcon.mjs
  var React9 = __toESM(require_react(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  function createSvgIcon(path, displayName) {
    function Component(props, ref) {
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SvgIcon_default, {
        "data-testid": false ? `${displayName}Icon` : void 0,
        ref,
        ...props,
        children: path
      });
    }
    if (false) {
      Component.displayName = `${displayName}Icon`;
    }
    Component.muiName = SvgIcon_default.muiName;
    return /* @__PURE__ */ React9.memo(/* @__PURE__ */ React9.forwardRef(Component));
  }

  // node_modules/.pnpm/@mui+icons-material@9.1.1_@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2._588cdd0ca75b44edf2d698fe09308d1a/node_modules/@mui/icons-material/Mic.mjs
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var Mic_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", {
    d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72z"
  }), "Mic");

  // node_modules/.pnpm/@mui+icons-material@9.1.1_@mui+material@9.1.2_@emotion+react@11.14.0_@types+react@19.2._588cdd0ca75b44edf2d698fe09308d1a/node_modules/@mui/icons-material/MicOff.mjs
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var MicOff_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
    d: "M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28m-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18zM4.27 3 3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73z"
  }), "MicOff");

  // components/ui/pip-overlay/overlay.tsx
  var import_react4 = __toESM(require_react());
  var import_jsx_runtime11 = __toESM(require_jsx_runtime());
  function Overlay({
    audioLevel = 0,
    elapsedTime,
    hasStarted = false,
    interviewerResponse = "",
    interviewerStatus = "Ready",
    isListening = false,
    isMuted = false,
    onClose,
    onEnd,
    onRequestHint,
    onStartInterview,
    onStartListening,
    onStopListening,
    onToggleMute,
    transcript,
    transcriptStatus = "Mic off"
  }) {
    const localElapsedTime = useElapsedTime();
    const [isScreenPromptOpen, setIsScreenPromptOpen] = (0, import_react4.useState)(false);
    const displayElapsedTime = elapsedTime ?? localElapsedTime;
    const displayInterviewerResponse = interviewerResponse || getInterviewerPlaceholder(interviewerStatus);
    function handleStartInterview(shareScreen) {
      setIsScreenPromptOpen(false);
      onStartInterview?.({ shareScreen });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "w-[352px] rounded-[1.45rem] border border-white/10 bg-[#171717] p-3 text-zinc-50 shadow-[0_28px_80px_rgba(0,0,0,0.55)]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mb-3 flex items-center gap-3 px-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500", children: "Pip Overlay" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "rounded-full bg-blue-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-300", children: "Floats on Leetcode" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Avatar, { className: "size-12", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(AvatarFallback, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(UserIcon, {}) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h1", { className: "text-base font-bold leading-tight text-white", children: "Alex \u2014 Interviewer" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mt-0.5 text-sm font-semibold text-zinc-500", children: interviewerStatus })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("time", { className: "pt-2 text-base font-bold text-zinc-400", children: displayElapsedTime })
        ] }),
        hasStarted ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mt-6 flex items-center justify-between gap-3 animate-[interviewer-overlay-enter_420ms_cubic-bezier(.16,1,.3,1)_both]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(AudioBars, { isActive: isListening && !isMuted, level: audioLevel }),
            transcriptStatus
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              Button,
              {
                variant: "secondary",
                className: "size-8 rounded-lg border-white/25 bg-[#2a2a28] p-0 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-[#343431]",
                disabled: !isListening,
                "aria-label": isMuted ? "Unmute microphone" : "Mute microphone",
                title: isMuted ? "Unmute microphone" : "Mute microphone",
                onClick: onToggleMute,
                children: isMuted ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(MicOffIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(MicIcon, {})
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              Button,
              {
                variant: "secondary",
                className: "h-8 rounded-lg px-3 text-xs",
                onClick: isListening ? onStopListening : onStartListening,
                children: isListening ? "Stop mic" : "Start mic"
              }
            )
          ] })
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("blockquote", { className: "mt-4 rounded-xl bg-[#202020] px-4 py-3 text-[15px] font-semibold leading-6 text-zinc-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]", children: [
          "\u201C",
          displayInterviewerResponse,
          "\u201D"
        ] }),
        hasStarted ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: "mt-4 animate-[interviewer-overlay-enter_420ms_cubic-bezier(.16,1,.3,1)_80ms_both] text-[14px] font-medium italic leading-6 text-zinc-500", children: [
            "You: \u201C",
            transcript || "Start answering out loud.",
            "\u201D"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mt-4 grid grid-cols-2 gap-3 animate-[interviewer-overlay-enter_420ms_cubic-bezier(.16,1,.3,1)_140ms_both]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Button, { variant: "secondary", onClick: onRequestHint, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BulbIcon, {}),
              "Hint"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Button, { onClick: onEnd ?? onClose, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(StopIcon, {}),
              "End"
            ] })
          ] })
        ] }) : isScreenPromptOpen ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mt-6 rounded-xl border border-white/10 bg-[#202020] p-4 animate-[interviewer-overlay-enter_420ms_cubic-bezier(.16,1,.3,1)_both]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-sm font-bold leading-5 text-white", children: "Share your screen for better interview feedback?" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mt-2 text-xs font-medium leading-5 text-zinc-500", children: "Alex can use snapshots of your code as context. Chrome will ask for permission next if you choose to share." }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Button, { variant: "secondary", onClick: () => handleStartInterview(false), children: "Skip" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Button, { onClick: () => handleStartInterview(true), children: "Share screen" })
          ] })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Button, { className: "mt-6 h-11 w-full rounded-xl text-sm font-bold", onClick: () => setIsScreenPromptOpen(true), children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(MicIcon, { className: "size-5 text-zinc-950" }),
          "Start interview"
        ] })
      ] }) })
    ] });
  }
  function getInterviewerPlaceholder(status) {
    if (/connecting|thinking/i.test(status)) {
      return "Alex is getting ready to respond...";
    }
    return "Start the interview when you're ready for Alex's first prompt.";
  }
  function useElapsedTime() {
    const [elapsedSeconds, setElapsedSeconds] = (0, import_react4.useState)(0);
    (0, import_react4.useEffect)(() => {
      const interval = setInterval(() => {
        setElapsedSeconds((seconds2) => seconds2 + 1);
      }, 1e3);
      return () => clearInterval(interval);
    }, []);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  function AudioBars({
    isActive,
    level
  }) {
    const bars = [5, 7, 9, 11, 12, 10, 8, 6];
    const activeBars = isActive ? Math.min(bars.length, Math.max(1, Math.ceil(level * bars.length))) : 0;
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex h-3 items-center gap-1", "aria-label": "Speaking", children: bars.map((height2, index) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "span",
      {
        className: [
          "w-1 rounded-full shadow-[0_0_10px_rgba(132,204,22,0.25)]",
          index < activeBars ? "bg-lime-500" : "bg-zinc-700"
        ].join(" "),
        style: { height: height2 }
      },
      index
    )) });
  }
  function UserIcon() {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "svg",
      {
        "aria-hidden": "true",
        className: "size-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: "1.8",
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
          }
        )
      }
    );
  }
  function MicIcon({ className = "size-5 text-white" }) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Mic_default, { "aria-hidden": "true", className });
  }
  function MicOffIcon() {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(MicOff_default, { "aria-hidden": "true", className: "size-5 text-white" });
  }
  function BulbIcon() {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "svg",
      {
        "aria-hidden": "true",
        className: "size-4",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: "1.8",
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 18h6M10 21h4M8.25 14.25c-1.05-.96-1.75-2.3-1.75-3.75a5.5 5.5 0 1 1 11 0c0 1.45-.7 2.79-1.75 3.75-.61.56-.75.98-.75 1.75H9c0-.77-.14-1.19-.75-1.75ZM12 3v1.5M4.93 5.93l1.06 1.06M19.07 5.93l-1.06 1.06"
          }
        )
      }
    );
  }
  function StopIcon() {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "svg",
      {
        "aria-hidden": "true",
        className: "size-3.5",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: "2.2",
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("rect", { x: "7", y: "7", width: "10", height: "10", rx: "1" })
      }
    );
  }

  // lib/extension-progress-sync.ts
  var PENDING_INTERVIEW_RECORDS_KEY = "pendingInterviewRecords";
  function getChromeStorageLocal() {
    if (typeof chrome === "undefined") {
      return null;
    }
    return chrome.storage?.local ?? null;
  }
  async function queuePendingInterviewRecord(record) {
    const storage = getChromeStorageLocal();
    if (!storage) {
      return;
    }
    const stored = await storage.get([PENDING_INTERVIEW_RECORDS_KEY]);
    const pendingRecords = normalizePendingRecords(stored[PENDING_INTERVIEW_RECORDS_KEY]);
    const nextRecords = [
      record,
      ...pendingRecords.filter((entry) => entry.problemSlug !== record.problemSlug)
    ].slice(0, 50);
    await storage.set({
      [PENDING_INTERVIEW_RECORDS_KEY]: nextRecords
    });
  }
  function normalizePendingRecords(value) {
    if (!Array.isArray(value)) {
      return [];
    }
    return value.flatMap((entry) => {
      if (!entry || typeof entry !== "object") {
        return [];
      }
      const record = entry;
      if (!record.problemSlug || !record.problemTitle || !record.completedAt) {
        return [];
      }
      return [
        {
          category: typeof record.category === "string" ? record.category : void 0,
          completedAt: record.completedAt,
          elapsedSeconds: typeof record.elapsedSeconds === "number" ? record.elapsedSeconds : 0,
          overallScore: typeof record.overallScore === "number" ? record.overallScore : null,
          problemSlug: record.problemSlug,
          problemTitle: record.problemTitle,
          verdict: typeof record.verdict === "string" ? record.verdict : "Completed"
        }
      ];
    });
  }

  // lib/interview-summary-storage.ts
  var INTERVIEW_SUMMARIES_STORAGE_KEY = "dsa_interviewer_interview_summaries_v1";
  var CHROME_INTERVIEW_SUMMARIES_KEY = "interviewSummaries";
  function getInterviewSummaryPath(slug) {
    return `/dashboard/summary/${encodeURIComponent(slug)}`;
  }
  function loadLocalInterviewSummaries() {
    if (typeof window === "undefined") {
      return {};
    }
    const stored = window.localStorage.getItem(INTERVIEW_SUMMARIES_STORAGE_KEY);
    if (!stored) {
      return {};
    }
    try {
      return normalizeSummaryMap(JSON.parse(stored));
    } catch {
      return {};
    }
  }
  function saveLocalInterviewSummary(slug, summary) {
    if (typeof window === "undefined") {
      return;
    }
    const nextSummaries = {
      ...loadLocalInterviewSummaries(),
      [slug]: summary
    };
    window.localStorage.setItem(
      INTERVIEW_SUMMARIES_STORAGE_KEY,
      JSON.stringify(nextSummaries)
    );
  }
  async function saveInterviewSummary(slug, summary) {
    saveLocalInterviewSummary(slug, summary);
    await saveChromeInterviewSummary(slug, summary);
  }
  async function saveChromeInterviewSummary(slug, summary) {
    const storage = getChromeStorageLocal2();
    if (!storage) {
      return;
    }
    const stored = await storage.get([CHROME_INTERVIEW_SUMMARIES_KEY]);
    const summaries = normalizeSummaryMap(stored[CHROME_INTERVIEW_SUMMARIES_KEY]);
    await storage.set({
      [CHROME_INTERVIEW_SUMMARIES_KEY]: {
        ...summaries,
        [slug]: summary
      }
    });
  }
  function getChromeStorageLocal2() {
    if (typeof chrome === "undefined") {
      return null;
    }
    return chrome.storage?.local ?? null;
  }
  function normalizeSummaryMap(value) {
    if (!value || typeof value !== "object") {
      return {};
    }
    return Object.fromEntries(
      Object.entries(value).flatMap(([slug, summary]) => {
        if (!slug || !summary || typeof summary !== "object") {
          return [];
        }
        const parsed = summary;
        if (typeof parsed.problemTitle !== "string" || typeof parsed.verdict !== "string") {
          return [];
        }
        return [
          [
            slug,
            {
              areasToImprove: Array.isArray(parsed.areasToImprove) ? parsed.areasToImprove.filter((item) => typeof item === "string") : [],
              breakdown: Array.isArray(parsed.breakdown) ? parsed.breakdown.flatMap((item) => {
                if (!item || typeof item !== "object") {
                  return [];
                }
                const entry = item;
                if (typeof entry.label !== "string") {
                  return [];
                }
                return [
                  {
                    label: entry.label,
                    score: typeof entry.score === "number" ? entry.score : null
                  }
                ];
              }) : [],
              elapsedSeconds: typeof parsed.elapsedSeconds === "number" ? parsed.elapsedSeconds : 0,
              exchangeCount: typeof parsed.exchangeCount === "number" ? parsed.exchangeCount : 0,
              finalComplexity: typeof parsed.finalComplexity === "string" ? parsed.finalComplexity : null,
              hintsUsed: typeof parsed.hintsUsed === "number" ? parsed.hintsUsed : 0,
              overallScore: typeof parsed.overallScore === "number" ? parsed.overallScore : null,
              problemTitle: parsed.problemTitle,
              transcript: Array.isArray(parsed.transcript) ? parsed.transcript.flatMap((line2) => {
                if (!line2 || typeof line2 !== "object") {
                  return [];
                }
                const entry = line2;
                if (entry.speaker !== "Alex" && entry.speaker !== "You" || typeof entry.text !== "string") {
                  return [];
                }
                return [{ speaker: entry.speaker, text: entry.text }];
              }) : [],
              verdict: parsed.verdict,
              wentWell: Array.isArray(parsed.wentWell) ? parsed.wentWell.filter((item) => typeof item === "string") : []
            }
          ]
        ];
      })
    );
  }

  // lib/dashboard-progress.ts
  var DASHBOARD_PROGRESS_STORAGE_KEY = "dsa_interviewer_dashboard_progress_v1";
  var EMPTY_DASHBOARD_PROGRESS = {
    interviews: []
  };
  function loadDashboardProgress() {
    if (typeof window === "undefined") {
      return EMPTY_DASHBOARD_PROGRESS;
    }
    const storedProgress = window.localStorage.getItem(DASHBOARD_PROGRESS_STORAGE_KEY);
    if (!storedProgress) {
      return EMPTY_DASHBOARD_PROGRESS;
    }
    try {
      return normalizeDashboardProgress(JSON.parse(storedProgress));
    } catch {
      return EMPTY_DASHBOARD_PROGRESS;
    }
  }
  function saveLocalDashboardProgress(record) {
    if (typeof window === "undefined") {
      return;
    }
    const currentProgress = loadDashboardProgress();
    const nextInterviews = [
      record,
      ...currentProgress.interviews.filter(
        (interview) => interview.problemSlug !== record.problemSlug
      )
    ].slice(0, 50);
    window.localStorage.setItem(
      DASHBOARD_PROGRESS_STORAGE_KEY,
      JSON.stringify({ interviews: nextInterviews })
    );
  }
  async function recordCompletedInterview(record, apiBase = "", summary) {
    if (summary) {
      await saveInterviewSummary(record.problemSlug, summary).catch(() => null);
    }
    await queuePendingInterviewRecord(record).catch(() => null);
    if (!apiBase) {
      saveLocalDashboardProgress(record);
    }
    if (typeof window === "undefined") {
      return;
    }
    const base = apiBase.replace(/\/$/, "");
    await fetch(`${base || ""}/api/dashboard/progress`, {
      body: JSON.stringify(record),
      credentials: apiBase ? "include" : "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }).catch(() => null);
  }
  function normalizeDashboardProgress(progress) {
    if (!progress || typeof progress !== "object" || !("interviews" in progress)) {
      return EMPTY_DASHBOARD_PROGRESS;
    }
    const interviews = progress.interviews;
    if (!Array.isArray(interviews)) {
      return EMPTY_DASHBOARD_PROGRESS;
    }
    return {
      interviews: interviews.flatMap((interview) => {
        if (!interview || typeof interview !== "object") {
          return [];
        }
        const record = interview;
        if (!record.problemSlug || !record.problemTitle || !record.completedAt) {
          return [];
        }
        return [
          {
            category: typeof record.category === "string" ? record.category : void 0,
            completedAt: record.completedAt,
            elapsedSeconds: typeof record.elapsedSeconds === "number" ? record.elapsedSeconds : 0,
            overallScore: typeof record.overallScore === "number" ? record.overallScore : null,
            problemSlug: record.problemSlug,
            problemTitle: record.problemTitle,
            verdict: typeof record.verdict === "string" ? record.verdict : "Completed"
          }
        ];
      })
    };
  }

  // app/dashboard/problem-lists.ts
  var leetcodeUrl = (slug) => `https://leetcode.com/problems/${slug}/`;
  var neetcodeUrl = (slug) => `https://neetcode.io/problems/${slug}`;
  function flattenProblems(sources) {
    return sources.flatMap(
      ({ category, problems }) => problems.map((problem) => ({
        category,
        neetcodeUrl: neetcodeUrl(problem.slug),
        slug: problem.slug,
        title: problem.title,
        url: leetcodeUrl(problem.slug)
      }))
    );
  }
  var neetcode150Problems = flattenProblems([
    {
      category: "Arrays & Hashing",
      problems: [
        { title: "Contains Duplicate", slug: "contains-duplicate" },
        { title: "Valid Anagram", slug: "valid-anagram" },
        { title: "Two Sum", slug: "two-sum" },
        { title: "Group Anagrams", slug: "group-anagrams" },
        { title: "Top K Frequent Elements", slug: "top-k-frequent-elements" },
        { title: "Product of Array Except Self", slug: "product-of-array-except-self" },
        { title: "Valid Sudoku", slug: "valid-sudoku" },
        { title: "Encode and Decode Strings", slug: "encode-and-decode-strings" },
        { title: "Longest Consecutive Sequence", slug: "longest-consecutive-sequence" }
      ]
    },
    {
      category: "Two Pointers",
      problems: [
        { title: "Valid Palindrome", slug: "valid-palindrome" },
        { title: "Two Sum II Input Array Is Sorted", slug: "two-sum-ii-input-array-is-sorted" },
        { title: "3Sum", slug: "3sum" },
        { title: "Container With Most Water", slug: "container-with-most-water" },
        { title: "Trapping Rain Water", slug: "trapping-rain-water" }
      ]
    },
    {
      category: "Sliding Window",
      problems: [
        { title: "Best Time to Buy and Sell Stock", slug: "best-time-to-buy-and-sell-stock" },
        {
          title: "Longest Substring Without Repeating Characters",
          slug: "longest-substring-without-repeating-characters"
        },
        {
          title: "Longest Repeating Character Replacement",
          slug: "longest-repeating-character-replacement"
        },
        { title: "Permutation in String", slug: "permutation-in-string" },
        { title: "Minimum Window Substring", slug: "minimum-window-substring" },
        { title: "Sliding Window Maximum", slug: "sliding-window-maximum" }
      ]
    },
    {
      category: "Stack",
      problems: [
        { title: "Valid Parentheses", slug: "valid-parentheses" },
        { title: "Min Stack", slug: "min-stack" },
        { title: "Evaluate Reverse Polish Notation", slug: "evaluate-reverse-polish-notation" },
        { title: "Generate Parentheses", slug: "generate-parentheses" },
        { title: "Daily Temperatures", slug: "daily-temperatures" },
        { title: "Car Fleet", slug: "car-fleet" },
        { title: "Largest Rectangle in Histogram", slug: "largest-rectangle-in-histogram" }
      ]
    },
    {
      category: "Binary Search",
      problems: [
        { title: "Binary Search", slug: "binary-search" },
        { title: "Search a 2D Matrix", slug: "search-a-2d-matrix" },
        { title: "Koko Eating Bananas", slug: "koko-eating-bananas" },
        {
          title: "Find Minimum in Rotated Sorted Array",
          slug: "find-minimum-in-rotated-sorted-array"
        },
        { title: "Search in Rotated Sorted Array", slug: "search-in-rotated-sorted-array" },
        { title: "Time Based Key Value Store", slug: "time-based-key-value-store" },
        { title: "Median of Two Sorted Arrays", slug: "median-of-two-sorted-arrays" }
      ]
    },
    {
      category: "Linked List",
      problems: [
        { title: "Reverse Linked List", slug: "reverse-linked-list" },
        { title: "Merge Two Sorted Lists", slug: "merge-two-sorted-lists" },
        { title: "Linked List Cycle", slug: "linked-list-cycle" },
        { title: "Reorder List", slug: "reorder-list" },
        { title: "Remove Nth Node From End of List", slug: "remove-nth-node-from-end-of-list" },
        { title: "Copy List with Random Pointer", slug: "copy-list-with-random-pointer" },
        { title: "Add Two Numbers", slug: "add-two-numbers" },
        { title: "Find the Duplicate Number", slug: "find-the-duplicate-number" },
        { title: "LRU Cache", slug: "lru-cache" },
        { title: "Merge K Sorted Lists", slug: "merge-k-sorted-lists" },
        { title: "Reverse Nodes in K-Group", slug: "reverse-nodes-in-k-group" }
      ]
    },
    {
      category: "Trees",
      problems: [
        { title: "Invert Binary Tree", slug: "invert-binary-tree" },
        { title: "Maximum Depth of Binary Tree", slug: "maximum-depth-of-binary-tree" },
        { title: "Diameter of Binary Tree", slug: "diameter-of-binary-tree" },
        { title: "Balanced Binary Tree", slug: "balanced-binary-tree" },
        { title: "Same Tree", slug: "same-tree" },
        { title: "Subtree of Another Tree", slug: "subtree-of-another-tree" },
        {
          title: "Lowest Common Ancestor of a Binary Search Tree",
          slug: "lowest-common-ancestor-of-a-binary-search-tree"
        },
        { title: "Binary Tree Level Order Traversal", slug: "binary-tree-level-order-traversal" },
        { title: "Binary Tree Right Side View", slug: "binary-tree-right-side-view" },
        { title: "Count Good Nodes in Binary Tree", slug: "count-good-nodes-in-binary-tree" },
        { title: "Validate Binary Search Tree", slug: "validate-binary-search-tree" },
        { title: "Kth Smallest Element in a BST", slug: "kth-smallest-element-in-a-bst" },
        {
          title: "Construct Binary Tree from Preorder and Inorder Traversal",
          slug: "construct-binary-tree-from-preorder-and-inorder-traversal"
        },
        { title: "Binary Tree Maximum Path Sum", slug: "binary-tree-maximum-path-sum" },
        {
          title: "Serialize and Deserialize Binary Tree",
          slug: "serialize-and-deserialize-binary-tree"
        }
      ]
    },
    {
      category: "Heap / Priority Queue",
      problems: [
        { title: "Kth Largest Element in a Stream", slug: "kth-largest-element-in-a-stream" },
        { title: "Last Stone Weight", slug: "last-stone-weight" },
        { title: "K Closest Points to Origin", slug: "k-closest-points-to-origin" },
        { title: "Kth Largest Element in an Array", slug: "kth-largest-element-in-an-array" },
        { title: "Task Scheduler", slug: "task-scheduler" },
        { title: "Design Twitter", slug: "design-twitter" },
        { title: "Find Median from Data Stream", slug: "find-median-from-data-stream" }
      ]
    },
    {
      category: "Backtracking",
      problems: [
        { title: "Subsets", slug: "subsets" },
        { title: "Combination Sum", slug: "combination-sum" },
        { title: "Permutations", slug: "permutations" },
        { title: "Subsets II", slug: "subsets-ii" },
        { title: "Combination Sum II", slug: "combination-sum-ii" },
        { title: "Word Search", slug: "word-search" },
        { title: "Palindrome Partitioning", slug: "palindrome-partitioning" },
        {
          title: "Letter Combinations of a Phone Number",
          slug: "letter-combinations-of-a-phone-number"
        },
        { title: "N-Queens", slug: "n-queens" }
      ]
    },
    {
      category: "Tries",
      problems: [
        { title: "Implement Trie", slug: "implement-trie-prefix-tree" },
        {
          title: "Design Add and Search Words Data Structure",
          slug: "design-add-and-search-words-data-structure"
        },
        { title: "Word Search II", slug: "word-search-ii" }
      ]
    },
    {
      category: "Graphs",
      problems: [
        { title: "Number of Islands", slug: "number-of-islands" },
        { title: "Clone Graph", slug: "clone-graph" },
        { title: "Max Area of Island", slug: "max-area-of-island" },
        { title: "Pacific Atlantic Water Flow", slug: "pacific-atlantic-water-flow" },
        { title: "Surrounded Regions", slug: "surrounded-regions" },
        { title: "Rotting Oranges", slug: "rotting-oranges" },
        { title: "Walls and Gates", slug: "walls-and-gates" },
        { title: "Course Schedule", slug: "course-schedule" },
        { title: "Course Schedule II", slug: "course-schedule-ii" },
        { title: "Redundant Connection", slug: "redundant-connection" },
        {
          title: "Number of Connected Components in an Undirected Graph",
          slug: "number-of-connected-components-in-an-undirected-graph"
        },
        { title: "Graph Valid Tree", slug: "graph-valid-tree" },
        { title: "Word Ladder", slug: "word-ladder" }
      ]
    },
    {
      category: "Advanced Graphs",
      problems: [
        { title: "Reconstruct Itinerary", slug: "reconstruct-itinerary" },
        { title: "Min Cost to Connect All Points", slug: "min-cost-to-connect-all-points" },
        { title: "Network Delay Time", slug: "network-delay-time" },
        { title: "Swim in Rising Water", slug: "swim-in-rising-water" },
        { title: "Alien Dictionary", slug: "alien-dictionary" },
        { title: "Cheapest Flights Within K Stops", slug: "cheapest-flights-within-k-stops" }
      ]
    },
    {
      category: "1-D Dynamic Programming",
      problems: [
        { title: "Climbing Stairs", slug: "climbing-stairs" },
        { title: "Min Cost Climbing Stairs", slug: "min-cost-climbing-stairs" },
        { title: "House Robber", slug: "house-robber" },
        { title: "House Robber II", slug: "house-robber-ii" },
        { title: "Longest Palindromic Substring", slug: "longest-palindromic-substring" },
        { title: "Palindromic Substrings", slug: "palindromic-substrings" },
        { title: "Decode Ways", slug: "decode-ways" },
        { title: "Coin Change", slug: "coin-change" },
        { title: "Maximum Product Subarray", slug: "maximum-product-subarray" },
        { title: "Word Break", slug: "word-break" },
        { title: "Longest Increasing Subsequence", slug: "longest-increasing-subsequence" },
        { title: "Partition Equal Subset Sum", slug: "partition-equal-subset-sum" }
      ]
    },
    {
      category: "2-D Dynamic Programming",
      problems: [
        { title: "Unique Paths", slug: "unique-paths" },
        { title: "Longest Common Subsequence", slug: "longest-common-subsequence" },
        {
          title: "Best Time to Buy and Sell Stock with Cooldown",
          slug: "best-time-to-buy-and-sell-stock-with-cooldown"
        },
        { title: "Coin Change II", slug: "coin-change-ii" },
        { title: "Target Sum", slug: "target-sum" },
        { title: "Interleaving String", slug: "interleaving-string" },
        {
          title: "Longest Increasing Path in a Matrix",
          slug: "longest-increasing-path-in-a-matrix"
        },
        { title: "Distinct Subsequences", slug: "distinct-subsequences" },
        { title: "Edit Distance", slug: "edit-distance" },
        { title: "Burst Balloons", slug: "burst-balloons" },
        { title: "Regular Expression Matching", slug: "regular-expression-matching" }
      ]
    },
    {
      category: "Greedy",
      problems: [
        { title: "Maximum Subarray", slug: "maximum-subarray" },
        { title: "Jump Game", slug: "jump-game" },
        { title: "Jump Game II", slug: "jump-game-ii" },
        { title: "Gas Station", slug: "gas-station" },
        { title: "Hand of Straights", slug: "hand-of-straights" },
        { title: "Merge Triplets to Form Target Triplet", slug: "merge-triplets-to-form-target-triplet" },
        { title: "Partition Labels", slug: "partition-labels" },
        { title: "Valid Parenthesis String", slug: "valid-parenthesis-string" }
      ]
    },
    {
      category: "Intervals",
      problems: [
        { title: "Insert Interval", slug: "insert-interval" },
        { title: "Merge Intervals", slug: "merge-intervals" },
        { title: "Non-overlapping Intervals", slug: "non-overlapping-intervals" },
        { title: "Meeting Rooms", slug: "meeting-rooms" },
        { title: "Meeting Rooms II", slug: "meeting-rooms-ii" },
        { title: "Minimum Interval to Include Each Query", slug: "minimum-interval-to-include-each-query" }
      ]
    },
    {
      category: "Math & Geometry",
      problems: [
        { title: "Rotate Image", slug: "rotate-image" },
        { title: "Spiral Matrix", slug: "spiral-matrix" },
        { title: "Set Matrix Zeroes", slug: "set-matrix-zeroes" },
        { title: "Happy Number", slug: "happy-number" },
        { title: "Plus One", slug: "plus-one" },
        { title: "Pow(x, n)", slug: "powx-n" },
        { title: "Multiply Strings", slug: "multiply-strings" },
        { title: "Detect Squares", slug: "detect-squares" }
      ]
    },
    {
      category: "Bit Manipulation",
      problems: [
        { title: "Single Number", slug: "single-number" },
        { title: "Number of 1 Bits", slug: "number-of-1-bits" },
        { title: "Counting Bits", slug: "counting-bits" },
        { title: "Reverse Bits", slug: "reverse-bits" },
        { title: "Missing Number", slug: "missing-number" },
        { title: "Sum of Two Integers", slug: "sum-of-two-integers" },
        { title: "Reverse Integer", slug: "reverse-integer" }
      ]
    }
  ]);
  var blind75Problems = flattenProblems([
    {
      category: "Array",
      problems: [
        { title: "Two Sum", slug: "two-sum" },
        { title: "Best Time to Buy and Sell Stock", slug: "best-time-to-buy-and-sell-stock" },
        { title: "Contains Duplicate", slug: "contains-duplicate" },
        { title: "Product of Array Except Self", slug: "product-of-array-except-self" },
        { title: "Maximum Subarray", slug: "maximum-subarray" },
        { title: "Maximum Product Subarray", slug: "maximum-product-subarray" },
        {
          title: "Find Minimum in Rotated Sorted Array",
          slug: "find-minimum-in-rotated-sorted-array"
        },
        { title: "Search in Rotated Sorted Array", slug: "search-in-rotated-sorted-array" },
        { title: "3Sum", slug: "3sum" },
        { title: "Container With Most Water", slug: "container-with-most-water" }
      ]
    },
    {
      category: "Binary",
      problems: [
        { title: "Sum of Two Integers", slug: "sum-of-two-integers" },
        { title: "Number of 1 Bits", slug: "number-of-1-bits" },
        { title: "Counting Bits", slug: "counting-bits" },
        { title: "Missing Number", slug: "missing-number" },
        { title: "Reverse Bits", slug: "reverse-bits" }
      ]
    },
    {
      category: "Dynamic Programming",
      problems: [
        { title: "Climbing Stairs", slug: "climbing-stairs" },
        { title: "Coin Change", slug: "coin-change" },
        { title: "Longest Increasing Subsequence", slug: "longest-increasing-subsequence" },
        { title: "Longest Common Subsequence", slug: "longest-common-subsequence" },
        { title: "Word Break", slug: "word-break" },
        { title: "Combination Sum", slug: "combination-sum" },
        { title: "House Robber", slug: "house-robber" },
        { title: "House Robber II", slug: "house-robber-ii" },
        { title: "Decode Ways", slug: "decode-ways" },
        { title: "Unique Paths", slug: "unique-paths" },
        { title: "Jump Game", slug: "jump-game" }
      ]
    },
    {
      category: "Graph",
      problems: [
        { title: "Clone Graph", slug: "clone-graph" },
        { title: "Course Schedule", slug: "course-schedule" },
        { title: "Pacific Atlantic Water Flow", slug: "pacific-atlantic-water-flow" },
        { title: "Number of Islands", slug: "number-of-islands" },
        { title: "Longest Consecutive Sequence", slug: "longest-consecutive-sequence" },
        { title: "Alien Dictionary", slug: "alien-dictionary" },
        { title: "Graph Valid Tree", slug: "graph-valid-tree" },
        {
          title: "Number of Connected Components in an Undirected Graph",
          slug: "number-of-connected-components-in-an-undirected-graph"
        }
      ]
    },
    {
      category: "Interval",
      problems: [
        { title: "Insert Interval", slug: "insert-interval" },
        { title: "Merge Intervals", slug: "merge-intervals" },
        { title: "Non-overlapping Intervals", slug: "non-overlapping-intervals" },
        { title: "Meeting Rooms", slug: "meeting-rooms" },
        { title: "Meeting Rooms II", slug: "meeting-rooms-ii" }
      ]
    },
    {
      category: "Linked List",
      problems: [
        { title: "Reverse Linked List", slug: "reverse-linked-list" },
        { title: "Linked List Cycle", slug: "linked-list-cycle" },
        { title: "Merge Two Sorted Lists", slug: "merge-two-sorted-lists" },
        { title: "Merge K Sorted Lists", slug: "merge-k-sorted-lists" },
        { title: "Remove Nth Node From End of List", slug: "remove-nth-node-from-end-of-list" },
        { title: "Reorder List", slug: "reorder-list" }
      ]
    },
    {
      category: "Matrix",
      problems: [
        { title: "Set Matrix Zeroes", slug: "set-matrix-zeroes" },
        { title: "Spiral Matrix", slug: "spiral-matrix" },
        { title: "Rotate Image", slug: "rotate-image" },
        { title: "Word Search", slug: "word-search" }
      ]
    },
    {
      category: "String",
      problems: [
        { title: "Longest Substring Without Repeating Characters", slug: "longest-substring-without-repeating-characters" },
        { title: "Longest Repeating Character Replacement", slug: "longest-repeating-character-replacement" },
        { title: "Minimum Window Substring", slug: "minimum-window-substring" },
        { title: "Valid Anagram", slug: "valid-anagram" },
        { title: "Group Anagrams", slug: "group-anagrams" },
        { title: "Valid Parentheses", slug: "valid-parentheses" },
        { title: "Valid Palindrome", slug: "valid-palindrome" },
        { title: "Longest Palindromic Substring", slug: "longest-palindromic-substring" },
        { title: "Palindromic Substrings", slug: "palindromic-substrings" },
        { title: "Encode and Decode Strings", slug: "encode-and-decode-strings" }
      ]
    },
    {
      category: "Tree",
      problems: [
        { title: "Maximum Depth of Binary Tree", slug: "maximum-depth-of-binary-tree" },
        { title: "Same Tree", slug: "same-tree" },
        { title: "Invert Binary Tree", slug: "invert-binary-tree" },
        { title: "Binary Tree Maximum Path Sum", slug: "binary-tree-maximum-path-sum" },
        { title: "Binary Tree Level Order Traversal", slug: "binary-tree-level-order-traversal" },
        {
          title: "Serialize and Deserialize Binary Tree",
          slug: "serialize-and-deserialize-binary-tree"
        },
        { title: "Subtree of Another Tree", slug: "subtree-of-another-tree" },
        {
          title: "Construct Binary Tree from Preorder and Inorder Traversal",
          slug: "construct-binary-tree-from-preorder-and-inorder-traversal"
        },
        { title: "Validate Binary Search Tree", slug: "validate-binary-search-tree" },
        { title: "Kth Smallest Element in a BST", slug: "kth-smallest-element-in-a-bst" },
        {
          title: "Lowest Common Ancestor of a Binary Search Tree",
          slug: "lowest-common-ancestor-of-a-binary-search-tree"
        },
        { title: "Implement Trie", slug: "implement-trie-prefix-tree" },
        {
          title: "Design Add and Search Words Data Structure",
          slug: "design-add-and-search-words-data-structure"
        },
        { title: "Word Search II", slug: "word-search-ii" }
      ]
    },
    {
      category: "Heap",
      problems: [
        { title: "Top K Frequent Elements", slug: "top-k-frequent-elements" },
        { title: "Find Median from Data Stream", slug: "find-median-from-data-stream" }
      ]
    }
  ]);

  // lib/interview/problem-catalog.ts
  var catalogBySlug = /* @__PURE__ */ new Map();
  for (const problem of [...neetcode150Problems, ...blind75Problems]) {
    catalogBySlug.set(problem.slug, problem);
  }
  function camelCaseToKebabSlug(slug) {
    return slug.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase();
  }
  function lookupProblemInCatalog(rawSlug) {
    const candidates = [rawSlug, camelCaseToKebabSlug(rawSlug)];
    for (const slug of candidates) {
      const match2 = catalogBySlug.get(slug);
      if (match2) {
        return match2;
      }
    }
    return null;
  }

  // lib/interview/leetcode-launch.ts
  var LEETCODE_LAUNCH_HASH_PREFIX = "#__dsa_interviewer__=";
  function decodeLeetCodeLaunchConfig(encodedValue) {
    try {
      const parsed = JSON.parse(atob(decodeURIComponent(encodedValue)));
      if (!parsed.slug || !parsed.title || !parsed.appOrigin) {
        return null;
      }
      return parsed;
    } catch {
      return null;
    }
  }
  function launchConfigToProblem(config) {
    return {
      category: config.category,
      slug: config.slug,
      title: config.title,
      url: `https://leetcode.com/problems/${config.slug}/`
    };
  }
  var PROBLEM_PATH = /^\/problems\/([^/?#]+)/;
  function parseProblemSlugFromPath(pathname = "") {
    return pathname.match(PROBLEM_PATH)?.[1] ?? null;
  }
  function titleizeProblemSlug(slug) {
    return slug.split("-").filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  function buildLaunchConfigFromProblemPage({
    appOrigin,
    pathname = ""
  }) {
    const rawSlug = parseProblemSlugFromPath(pathname);
    if (!rawSlug) {
      return null;
    }
    const catalogMatch = lookupProblemInCatalog(rawSlug);
    if (catalogMatch) {
      return {
        appOrigin,
        category: catalogMatch.category,
        slug: catalogMatch.slug,
        title: catalogMatch.title
      };
    }
    return {
      appOrigin,
      slug: camelCaseToKebabSlug(rawSlug),
      title: titleizeProblemSlug(camelCaseToKebabSlug(rawSlug))
    };
  }

  // lib/interview/types.ts
  var INITIAL_INTERVIEWER_RESPONSE = "";

  // lib/interview/summary.ts
  function createInterviewSummary({
    elapsedSeconds,
    exchangeCount,
    hintsUsed,
    interviewerResponse,
    problemTitle,
    transcript
  }) {
    const normalizedTranscript = transcript.map((line2) => ({
      ...line2,
      text: normalizeSummaryText(line2.text)
    })).filter((line2) => line2.text);
    const candidateTranscript = normalizeSummaryText(
      normalizedTranscript.filter((line2) => line2.speaker === "You").map((line2) => line2.text).join(" ")
    );
    const conversationTranscript = normalizeSummaryText(
      normalizedTranscript.map((line2) => `${line2.speaker}: ${line2.text}`).join(" ")
    );
    const interviewerTranscript = normalizeSummaryText(
      interviewerResponse === INITIAL_INTERVIEWER_RESPONSE ? "" : interviewerResponse
    );
    const wordCount = countWords(candidateTranscript);
    const completedExchanges = Math.max(exchangeCount, candidateTranscript ? 1 : 0);
    const hasAcceptedSignal = hasAcceptedTestSignal(conversationTranscript);
    const hasPositiveInterviewerSignal = hasInterviewerSolutionApproval(conversationTranscript);
    const hasSolutionSignal = hasAcceptedSignal || hasPositiveInterviewerSignal || hasGeneralSolutionSignal(candidateTranscript);
    const hasAssessableTranscript = hasAcceptedSignal || normalizedTranscript.length >= 3 && wordCount >= 12;
    const finalComplexity = extractComplexity(candidateTranscript) ?? inferComplexityFromApproach(candidateTranscript);
    const communicationScore = hasAssessableTranscript ? Math.min(10, Math.max(5, Math.round(wordCount / 18) + 6)) : null;
    const comprehensionScore = hasAssessableTranscript ? hasSolutionSignal ? hasAcceptedSignal ? 9 : 8 : 6 : null;
    const correctnessScore = hasAcceptedSignal ? 10 : hasAssessableTranscript ? hasSolutionSignal ? 8 : 5 : null;
    const complexityScore = hasAssessableTranscript && finalComplexity ? 8 : hasAssessableTranscript ? null : null;
    const hintScore = hasAssessableTranscript ? Math.max(5, 9 - hintsUsed) : null;
    const scoredBreakdown = [
      comprehensionScore,
      communicationScore,
      correctnessScore,
      complexityScore,
      hintScore
    ].filter((score) => score !== null);
    const overallScore = scoredBreakdown.length ? Math.round(
      scoredBreakdown.reduce((total, score) => total + score, 0) / scoredBreakdown.length * 10
    ) : null;
    const wentWell = getEvidenceBackedWentWell({
      accepted: hasAcceptedSignal,
      transcript: candidateTranscript
    });
    const areasToImprove = hasAssessableTranscript ? getEvidenceBackedAreasToImprove({
      accepted: hasAcceptedSignal,
      hasSolutionSignal,
      mentionedComplexity: Boolean(finalComplexity),
      transcript: candidateTranscript
    }) : [];
    return {
      areasToImprove,
      breakdown: hasAssessableTranscript ? [
        { label: "Problem comprehension", score: comprehensionScore },
        { label: "Communication", score: communicationScore },
        { label: "Code correctness", score: correctnessScore },
        { label: "Complexity analysis", score: complexityScore },
        { label: "Handling hints", score: hintScore }
      ] : [],
      elapsedSeconds,
      exchangeCount: completedExchanges,
      finalComplexity,
      hintsUsed,
      overallScore,
      problemTitle,
      transcript: normalizedTranscript.length ? normalizedTranscript : [
        ...interviewerTranscript ? [{ speaker: "Alex", text: interviewerTranscript }] : [],
        {
          speaker: "You",
          text: candidateTranscript || "No candidate transcript was captured."
        }
      ],
      verdict: overallScore === null ? "Not assessed" : overallScore >= 75 ? "Hire" : "Lean no",
      wentWell: hasAssessableTranscript ? wentWell : []
    };
  }
  function normalizeSummaryText(text) {
    return text.replace(/\s+/g, " ").trim();
  }
  function countWords(text) {
    return text ? text.split(/\s+/).length : 0;
  }
  function hasAcceptedTestSignal(text) {
    return /\b(accepted|all\s+\d+\s+(?:out\s+of\s+\d+\s+)?test cases|passes?\s+all\s+test cases|all\s+test cases\s+(?:pass|passed|passing)|\d+\s*\/\s*\d+\s+test cases)\b/i.test(
      text
    );
  }
  function hasInterviewerSolutionApproval(text) {
    return /\b(looks correct|looks good|correct overall|logic is solid|solution is solid|you're in good shape|very close|passes?)\b/i.test(
      text
    );
  }
  function hasGeneralSolutionSignal(text) {
    return /\b(hash ?map|map|dictionary|dict|set|frequency|count|sort|sorted|two[- ]?pointer|sliding window|stack|queue|heap|binary search|dfs|bfs|dynamic programming|dp|recursion|prefix|suffix|greedy|return false|return true|edge case|constraint)\b/i.test(
      text
    );
  }
  function extractComplexity(text) {
    const normalizedText = text.toLowerCase();
    if (/\bo\(\s*n\s*\)\b|linear/.test(normalizedText)) {
      return "O(n)";
    }
    if (/\bo\(\s*n\s*(?:\^2|\*\s*n|squared)\s*\)\b|quadratic|nested loop/.test(normalizedText)) {
      return "O(n\xB2)";
    }
    if (/\bo\(\s*1\s*\)\b|constant/.test(normalizedText)) {
      return "O(1)";
    }
    if (/\bo\(\s*n\s*log\s*n\s*\)\b|n log n/.test(normalizedText)) {
      return "O(n log n)";
    }
    return null;
  }
  function inferComplexityFromApproach(text) {
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
    transcript
  }) {
    const wentWell = [];
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
    transcript
  }) {
    const areasToImprove = [];
    if (!hasSolutionSignal && !accepted) {
      areasToImprove.push(
        "The captured answer did not clearly explain a complete solution strategy."
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

  // lib/interview/use-elapsed-seconds.ts
  var import_react5 = __toESM(require_react());
  function useElapsedSeconds(isActive = true) {
    const [elapsedSeconds, setElapsedSeconds] = (0, import_react5.useState)(0);
    (0, import_react5.useEffect)(() => {
      if (!isActive) {
        return;
      }
      const interval = setInterval(() => {
        setElapsedSeconds((seconds) => seconds + 1);
      }, 1e3);
      return () => clearInterval(interval);
    }, [isActive]);
    return elapsedSeconds;
  }
  function formatElapsedClock(elapsedSeconds) {
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  // lib/interview/use-realtime-interview-session.ts
  var import_react6 = __toESM(require_react());

  // lib/interview/realtime-utils.ts
  function getRealtimeClientSecret(payload) {
    const directValue = getStringPayloadValue(payload, "value");
    if (directValue) {
      return directValue;
    }
    if (!payload || typeof payload !== "object" || !("client_secret" in payload)) {
      return null;
    }
    return getStringPayloadValue(payload.client_secret, "value");
  }
  function parseRealtimeEvent(data) {
    try {
      return JSON.parse(String(data));
    } catch {
      return null;
    }
  }
  async function parseJsonResponse(response) {
    const text = await response.text();
    if (!text.trim()) {
      return null;
    }
    try {
      return JSON.parse(text);
    } catch {
      return null;
    }
  }
  function getStringPayloadValue(payload, key) {
    return getRawStringPayloadValue(payload, key)?.trim() || null;
  }
  function getRawStringPayloadValue(payload, key) {
    if (!payload || typeof payload !== "object" || !(key in payload)) {
      return null;
    }
    const value = payload[key];
    return typeof value === "string" ? value : null;
  }

  // lib/interview/remote-audio.ts
  var REMOTE_AUDIO_ID = "dsa-interviewer-remote-audio";
  function mountRemoteAudioElement() {
    const existing = document.getElementById(REMOTE_AUDIO_ID);
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
  async function playRemoteAudio(audio) {
    audio.muted = false;
    audio.volume = 1;
    if (audio.paused) {
      try {
        await audio.play();
      } catch {
      }
    }
  }
  function unmountRemoteAudioElement(audio) {
    if (!audio) {
      return;
    }
    audio.pause();
    audio.srcObject = null;
    audio.remove();
  }

  // lib/interview/use-realtime-interview-session.ts
  function useRealtimeInterviewSession(problem, appOrigin = "") {
    const apiBase = appOrigin.replace(/\/$/, "");
    const analyserRef = (0, import_react6.useRef)(null);
    const audioContextRef = (0, import_react6.useRef)(null);
    const audioSourceRef = (0, import_react6.useRef)(null);
    const dataChannelRef = (0, import_react6.useRef)(null);
    const frequencyDataRef = (0, import_react6.useRef)(null);
    const meterAnimationRef = (0, import_react6.useRef)(null);
    const peerConnectionRef = (0, import_react6.useRef)(null);
    const remoteAudioRef = (0, import_react6.useRef)(null);
    const inputTranscriptRef = (0, import_react6.useRef)("");
    const sessionTranscriptRef = (0, import_react6.useRef)([]);
    const isMutedRef = (0, import_react6.useRef)(false);
    const isScreenSharingRef = (0, import_react6.useRef)(false);
    const responseTranscriptRef = (0, import_react6.useRef)("");
    const screenCanvasRef = (0, import_react6.useRef)(null);
    const screenFrameIntervalRef = (0, import_react6.useRef)(null);
    const screenStreamRef = (0, import_react6.useRef)(null);
    const screenVideoRef = (0, import_react6.useRef)(null);
    const streamRef = (0, import_react6.useRef)(null);
    const [audioLevel, setAudioLevel] = (0, import_react6.useState)(0);
    const [interviewerResponse, setInterviewerResponse] = (0, import_react6.useState)(
      INITIAL_INTERVIEWER_RESPONSE
    );
    const [interviewerStatus, setInterviewerStatus] = (0, import_react6.useState)("Ready");
    const [exchangeCount, setExchangeCount] = (0, import_react6.useState)(0);
    const [fullTranscript, setFullTranscript] = (0, import_react6.useState)([]);
    const [hintsUsed, setHintsUsed] = (0, import_react6.useState)(0);
    const [text, setText] = (0, import_react6.useState)("");
    const [status, setStatus] = (0, import_react6.useState)("Mic off");
    const [isListening, setIsListening] = (0, import_react6.useState)(false);
    const [isMuted, setIsMuted] = (0, import_react6.useState)(false);
    function startAudioMeter(stream) {
      const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextConstructor) {
        return;
      }
      const audioContext = new AudioContextConstructor();
      void audioContext.resume().catch(() => null);
      const analyser = audioContext.createAnalyser();
      const audioSource = audioContext.createMediaStreamSource(stream);
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.75;
      audioSource.connect(analyser);
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      audioSourceRef.current = audioSource;
      frequencyDataRef.current = new Uint8Array(analyser.frequencyBinCount);
      updateAudioMeter();
    }
    function updateAudioMeter() {
      const analyser = analyserRef.current;
      const frequencyData = frequencyDataRef.current;
      if (!analyser || !frequencyData) {
        return;
      }
      analyser.getByteFrequencyData(frequencyData);
      const lowBinCount = Math.max(1, Math.floor(frequencyData.length * 0.35));
      const totalEnergy = frequencyData.reduce((total, value) => total + value, 0) / frequencyData.length;
      const higherFrequencyEnergy = frequencyData.slice(lowBinCount).reduce((total, value) => total + value, 0) / (frequencyData.length - lowBinCount);
      const normalizedLevel = Math.min(
        1,
        Math.max(0, (totalEnergy * 0.7 + higherFrequencyEnergy * 0.3) / 95)
      );
      setAudioLevel(normalizedLevel);
      meterAnimationRef.current = requestAnimationFrame(updateAudioMeter);
    }
    function stopAudioMeter() {
      if (meterAnimationRef.current) {
        cancelAnimationFrame(meterAnimationRef.current);
        meterAnimationRef.current = null;
      }
      audioSourceRef.current?.disconnect();
      audioContextRef.current?.close().catch(() => null);
      audioSourceRef.current = null;
      audioContextRef.current = null;
      analyserRef.current = null;
      frequencyDataRef.current = null;
      setAudioLevel(0);
    }
    function stopScreenContext() {
      if (screenFrameIntervalRef.current) {
        window.clearInterval(screenFrameIntervalRef.current);
        screenFrameIntervalRef.current = null;
      }
      screenVideoRef.current?.pause();
      screenStreamRef.current?.getTracks().forEach((track) => track.stop());
      screenVideoRef.current = null;
      screenStreamRef.current = null;
      screenCanvasRef.current = null;
      isScreenSharingRef.current = false;
    }
    function getListeningStatus() {
      return isScreenSharingRef.current ? "Listening with screen context..." : "Listening...";
    }
    function resetInputTranscript() {
      inputTranscriptRef.current = "";
    }
    function appendTranscriptLine(speaker, text2) {
      const normalizedText = normalizeSummaryText(text2);
      if (!normalizedText) {
        return false;
      }
      const previousLine = sessionTranscriptRef.current[sessionTranscriptRef.current.length - 1];
      if (previousLine?.speaker === speaker && previousLine.text === normalizedText) {
        return false;
      }
      const nextTranscript = [
        ...sessionTranscriptRef.current,
        { speaker, text: normalizedText }
      ];
      sessionTranscriptRef.current = nextTranscript;
      setFullTranscript(nextTranscript);
      return true;
    }
    function setMicrophoneMuted(nextIsMuted) {
      isMutedRef.current = nextIsMuted;
      streamRef.current?.getAudioTracks().forEach((track) => {
        track.enabled = !nextIsMuted;
      });
      setIsMuted(nextIsMuted);
      setStatus(nextIsMuted ? "Muted" : getListeningStatus());
    }
    function cleanupConnection() {
      dataChannelRef.current?.close();
      peerConnectionRef.current?.close();
      unmountRemoteAudioElement(remoteAudioRef.current);
      streamRef.current?.getTracks().forEach((track) => track.stop());
      stopScreenContext();
      stopAudioMeter();
      dataChannelRef.current = null;
      peerConnectionRef.current = null;
      remoteAudioRef.current = null;
      resetInputTranscript();
      sessionTranscriptRef.current = [];
      isMutedRef.current = false;
      setIsMuted(false);
      responseTranscriptRef.current = "";
      streamRef.current = null;
      setFullTranscript([]);
      setText("");
    }
    async function prepareScreenContext(screenStream) {
      const screenTrack = screenStream.getVideoTracks()[0];
      if (!screenTrack) {
        throw new Error("No screen video track was available.");
      }
      const screenVideo = document.createElement("video");
      screenVideo.muted = true;
      screenVideo.playsInline = true;
      screenVideo.srcObject = screenStream;
      screenStreamRef.current = screenStream;
      screenVideoRef.current = screenVideo;
      isScreenSharingRef.current = true;
      screenTrack.addEventListener(
        "ended",
        () => {
          stopScreenContext();
          setStatus(isMutedRef.current ? "Muted" : getListeningStatus());
        },
        { once: true }
      );
      await screenVideo.play().catch(() => null);
      await waitForScreenFrame(screenVideo);
    }
    function waitForScreenFrame(screenVideo) {
      if (screenVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        const timeout = window.setTimeout(resolve, 1200);
        screenVideo.addEventListener(
          "loadeddata",
          () => {
            window.clearTimeout(timeout);
            resolve();
          },
          { once: true }
        );
      });
    }
    function startScreenFrameSharing(dataChannel) {
      void sendScreenFrame(dataChannel);
      screenFrameIntervalRef.current = window.setInterval(() => {
        void sendScreenFrame(dataChannel);
      }, 8e3);
    }
    async function sendScreenFrame(dataChannel) {
      if (dataChannel.readyState !== "open") {
        return;
      }
      const imageUrl = getScreenFrameDataUrl();
      if (!imageUrl) {
        return;
      }
      try {
        dataChannel.send(
          JSON.stringify({
            type: "conversation.item.create",
            item: {
              type: "message",
              role: "user",
              content: [
                {
                  type: "input_text",
                  text: "Current screen context snapshot from the candidate's shared coding window. Use this image as visual context for the next interview response. If it clearly shows LeetCode Accepted or all test cases passing for the current problem, ask final follow-up questions and then invite the candidate to end the interview."
                },
                {
                  type: "input_image",
                  image_url: imageUrl
                }
              ]
            }
          })
        );
      } catch {
      }
    }
    function getScreenFrameDataUrl() {
      const screenVideo = screenVideoRef.current;
      if (!screenVideo || screenVideo.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || screenVideo.videoWidth === 0 || screenVideo.videoHeight === 0) {
        return null;
      }
      const canvas = screenCanvasRef.current ?? document.createElement("canvas");
      const maxWidth2 = 960;
      const scale = Math.min(1, maxWidth2 / screenVideo.videoWidth);
      canvas.width = Math.max(1, Math.round(screenVideo.videoWidth * scale));
      canvas.height = Math.max(1, Math.round(screenVideo.videoHeight * scale));
      try {
        canvas.getContext("2d")?.drawImage(screenVideo, 0, 0, canvas.width, canvas.height);
        screenCanvasRef.current = canvas;
        return canvas.toDataURL("image/jpeg", 0.58);
      } catch {
        return null;
      }
    }
    function handleRealtimeEvent(event) {
      if (!event || typeof event !== "object") {
        return;
      }
      const eventType = getStringPayloadValue(event, "type");
      if (!eventType) {
        return;
      }
      if (eventType === "input_audio_buffer.speech_started") {
        if (isMutedRef.current) {
          return;
        }
        inputTranscriptRef.current = "";
        setText("");
        setStatus("Listening...");
        setInterviewerStatus("Listening");
        return;
      }
      if (eventType === "input_audio_buffer.speech_stopped") {
        const dataChannel = dataChannelRef.current;
        if (isScreenSharingRef.current && dataChannel?.readyState === "open") {
          void sendScreenFrame(dataChannel);
        }
        setStatus("Thinking...");
        setInterviewerStatus("Thinking");
        return;
      }
      if (eventType === "response.created") {
        responseTranscriptRef.current = "";
        setInterviewerResponse("");
        setInterviewerStatus("Thinking");
        return;
      }
      if (eventType === "response.output_audio_transcript.delta" || eventType === "response.audio_transcript.delta") {
        const delta = getRawStringPayloadValue(event, "delta");
        if (delta) {
          responseTranscriptRef.current += delta;
          setInterviewerResponse(responseTranscriptRef.current.trim());
        }
        setInterviewerStatus("Speaking");
        return;
      }
      if (eventType === "response.output_audio_transcript.done" || eventType === "response.audio_transcript.done") {
        const transcript = getStringPayloadValue(event, "transcript");
        if (transcript) {
          responseTranscriptRef.current = transcript;
          setInterviewerResponse(transcript);
          appendTranscriptLine("Alex", transcript);
        }
        setInterviewerStatus("Listening");
        setStatus(isMutedRef.current ? "Muted" : getListeningStatus());
        return;
      }
      if (eventType === "response.output_text.delta") {
        const delta = getRawStringPayloadValue(event, "delta");
        if (delta) {
          responseTranscriptRef.current += delta;
          setInterviewerResponse(responseTranscriptRef.current.trim());
        }
        return;
      }
      if (eventType === "conversation.item.input_audio_transcription.delta") {
        const delta = getRawStringPayloadValue(event, "delta");
        if (delta) {
          inputTranscriptRef.current += delta;
          setText(inputTranscriptRef.current);
        }
        return;
      }
      if (eventType === "conversation.item.input_audio_transcription.completed" || eventType === "conversation.item.input_audio_transcription.done") {
        const transcript = getStringPayloadValue(event, "transcript");
        if (transcript) {
          inputTranscriptRef.current = "";
          const didAppendTranscript = appendTranscriptLine("You", transcript);
          setText(transcript);
          if (didAppendTranscript) {
            setExchangeCount((count) => count + 1);
          }
        }
        return;
      }
      if (eventType === "response.done") {
        resetInputTranscript();
        setInterviewerStatus("Listening");
        setStatus(isMutedRef.current ? "Muted" : getListeningStatus());
        return;
      }
      if (eventType === "error") {
        const error = "error" in event ? event.error : null;
        const message = error && typeof error === "object" ? getStringPayloadValue(error, "message") : null;
        setStatus(message ?? "Realtime error");
        setInterviewerStatus("Error");
      }
    }
    async function start({ shareScreen = false } = {}) {
      if (peerConnectionRef.current) {
        return;
      }
      try {
        setStatus("Connecting...");
        setInterviewerStatus("Connecting");
        let screenStream = null;
        let screenTrack = null;
        if (shareScreen) {
          if (!navigator.mediaDevices.getDisplayMedia) {
            setStatus("Screen sharing unavailable. Connecting microphone...");
          } else {
            try {
              setStatus("Choose a screen to share...");
              screenStream = await navigator.mediaDevices.getDisplayMedia({
                audio: false,
                video: {
                  frameRate: { ideal: 2, max: 5 },
                  height: { ideal: 720 },
                  width: { ideal: 1280 }
                }
              });
              screenTrack = screenStream.getVideoTracks()[0] ?? null;
              if (screenTrack) {
                await prepareScreenContext(screenStream);
              } else {
                screenStream.getTracks().forEach((track) => track.stop());
                screenStream = null;
              }
            } catch {
              stopScreenContext();
              screenStream = null;
              screenTrack = null;
            }
          }
        }
        setStatus("Connecting microphone...");
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioTrack = stream.getAudioTracks()[0];
        if (!audioTrack) {
          throw new Error("No microphone audio track was available.");
        }
        isMutedRef.current = false;
        setIsMuted(false);
        const sessionResponse = await fetch(`${apiBase}/api/realtime/session`, {
          body: JSON.stringify({
            problemTitle: problem.title,
            problemUrl: problem.url
          }),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        });
        const sessionPayload = await parseJsonResponse(sessionResponse);
        if (!sessionResponse.ok) {
          throw new Error(
            getStringPayloadValue(sessionPayload, "error") ?? "Realtime session request failed."
          );
        }
        const clientSecret = getRealtimeClientSecret(sessionPayload);
        if (!clientSecret) {
          throw new Error("Realtime session response did not include a client secret.");
        }
        const peerConnection = new RTCPeerConnection();
        const remoteAudio = mountRemoteAudioElement();
        const dataChannel = peerConnection.createDataChannel("oai-events");
        peerConnection.addTrack(audioTrack, stream);
        if (screenTrack && screenStream) {
          peerConnection.addTrack(screenTrack, screenStream);
        }
        peerConnection.addEventListener("track", (event) => {
          remoteAudio.srcObject = event.streams[0];
          void playRemoteAudio(remoteAudio);
        });
        dataChannel.addEventListener("open", () => {
          void playRemoteAudio(remoteAudio);
          setStatus(getListeningStatus());
          setInterviewerStatus("Listening");
          if (isScreenSharingRef.current) {
            startScreenFrameSharing(dataChannel);
          }
          dataChannel.send(
            JSON.stringify({
              type: "response.create",
              response: {
                instructions: isScreenSharingRef.current ? `Briefly greet the candidate and ask them to start by explaining their ${problem.title} approach. Use the shared screen context when it is relevant. If the shared screen later shows LeetCode Accepted or all test cases passing, ask one or two final follow-up questions and then invite the candidate to end the interview.` : `Briefly greet the candidate and ask them to start by explaining their ${problem.title} approach.`
              }
            })
          );
        });
        dataChannel.addEventListener("message", (messageEvent) => {
          const realtimeEvent = parseRealtimeEvent(messageEvent.data);
          if (realtimeEvent) {
            handleRealtimeEvent(realtimeEvent);
          }
        });
        dataChannel.addEventListener("close", () => {
          if (screenFrameIntervalRef.current) {
            window.clearInterval(screenFrameIntervalRef.current);
            screenFrameIntervalRef.current = null;
          }
          setIsListening(false);
          setStatus("Mic off");
          setInterviewerStatus("Ready");
        });
        streamRef.current = stream;
        peerConnectionRef.current = peerConnection;
        remoteAudioRef.current = remoteAudio;
        dataChannelRef.current = dataChannel;
        const offer = await peerConnection.createOffer();
        const offerSdp = offer.sdp;
        if (!offerSdp) {
          throw new Error("Unable to create a WebRTC offer.");
        }
        await peerConnection.setLocalDescription(offer);
        startAudioMeter(stream);
        const sdpResponse = await fetch("https://api.openai.com/v1/realtime/calls", {
          method: "POST",
          body: offerSdp,
          headers: {
            Authorization: `Bearer ${clientSecret}`,
            "Content-Type": "application/sdp"
          }
        });
        if (!sdpResponse.ok) {
          throw new Error(
            await sdpResponse.text() || "Realtime WebRTC connection failed."
          );
        }
        await peerConnection.setRemoteDescription({
          type: "answer",
          sdp: await sdpResponse.text()
        });
        setIsListening(true);
      } catch (error) {
        cleanupConnection();
        setStatus(
          error instanceof Error ? error.message : "Unable to start realtime audio."
        );
        setInterviewerStatus("Error");
        setIsListening(false);
      }
    }
    function stop() {
      cleanupConnection();
      setIsListening(false);
      setStatus("Mic off");
      setInterviewerStatus("Ready");
    }
    function toggleMute() {
      if (!streamRef.current) {
        return;
      }
      setMicrophoneMuted(!isMutedRef.current);
    }
    function requestHint() {
      setHintsUsed((count) => count + 1);
      const dataChannel = dataChannelRef.current;
      if (!dataChannel || dataChannel.readyState !== "open") {
        setInterviewerResponse("Start the mic first, then I can give you a hint.");
        return;
      }
      responseTranscriptRef.current = "";
      setInterviewerResponse("Thinking of a hint...");
      setInterviewerStatus("Thinking");
      dataChannel.send(
        JSON.stringify({
          type: "response.create",
          response: {
            instructions: `Give the candidate one concise ${problem.title} hint based on the current conversation. Do not reveal the full solution. Prefer a guiding question or a small nudge toward the next idea.`
          }
        })
      );
    }
    (0, import_react6.useEffect)(() => {
      return () => {
        dataChannelRef.current?.close();
        peerConnectionRef.current?.close();
        remoteAudioRef.current?.pause();
        streamRef.current?.getTracks().forEach((track) => track.stop());
        screenStreamRef.current?.getTracks().forEach((track) => track.stop());
        if (screenFrameIntervalRef.current) {
          window.clearInterval(screenFrameIntervalRef.current);
          screenFrameIntervalRef.current = null;
        }
        if (meterAnimationRef.current) {
          cancelAnimationFrame(meterAnimationRef.current);
          meterAnimationRef.current = null;
        }
        audioSourceRef.current?.disconnect();
        audioContextRef.current?.close().catch(() => null);
        dataChannelRef.current = null;
        peerConnectionRef.current = null;
        remoteAudioRef.current = null;
        inputTranscriptRef.current = "";
        sessionTranscriptRef.current = [];
        isMutedRef.current = false;
        isScreenSharingRef.current = false;
        responseTranscriptRef.current = "";
        screenCanvasRef.current = null;
        screenStreamRef.current = null;
        screenVideoRef.current = null;
        streamRef.current = null;
        audioSourceRef.current = null;
        audioContextRef.current = null;
        analyserRef.current = null;
        frequencyDataRef.current = null;
      };
    }, []);
    return {
      audioLevel,
      exchangeCount,
      fullTranscript,
      hintsUsed,
      interviewerResponse,
      interviewerStatus,
      isListening,
      isMuted,
      requestHint,
      start,
      status,
      stop,
      text,
      toggleMute
    };
  }

  // components/interview/leetcode-extension-overlay.tsx
  var import_react7 = __toESM(require_react());
  var import_jsx_runtime12 = __toESM(require_jsx_runtime());
  function LeetCodeExtensionOverlay({
    config
  }) {
    const problem = launchConfigToProblem(config);
    const overlayRef = (0, import_react7.useRef)(null);
    const dragOffsetRef = (0, import_react7.useRef)({ x: 0, y: 0 });
    const finalElapsedSecondsRef = (0, import_react7.useRef)(0);
    const [overlayPosition, setOverlayPosition] = (0, import_react7.useState)(
      null
    );
    const [hasInterviewStarted, setHasInterviewStarted] = (0, import_react7.useState)(false);
    const [isInterviewEnded, setIsInterviewEnded] = (0, import_react7.useState)(false);
    const [isSavingInterview, setIsSavingInterview] = (0, import_react7.useState)(false);
    const elapsedSeconds = useElapsedSeconds(hasInterviewStarted);
    const interview = useRealtimeInterviewSession(problem, config.appOrigin);
    function handleOverlayPointerDown(event) {
      if (event.target.closest("button")) {
        return;
      }
      const rect = event.currentTarget.getBoundingClientRect();
      dragOffsetRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      setOverlayPosition({ x: rect.left, y: rect.top });
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    function handleOverlayPointerMove(event) {
      if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
        return;
      }
      const rect = event.currentTarget.getBoundingClientRect();
      const margin2 = 16;
      const maxX = window.innerWidth - rect.width - margin2;
      const maxY = window.innerHeight - rect.height - margin2;
      setOverlayPosition({
        x: Math.min(Math.max(event.clientX - dragOffsetRef.current.x, margin2), maxX),
        y: Math.min(Math.max(event.clientY - dragOffsetRef.current.y, margin2), maxY)
      });
    }
    function handleOverlayPointerUp(event) {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    }
    function handleStartInterview(options) {
      setIsInterviewEnded(false);
      setHasInterviewStarted(true);
      void interview.start(options);
    }
    async function handleEndInterview() {
      if (isSavingInterview || isInterviewEnded) {
        return;
      }
      setIsSavingInterview(true);
      finalElapsedSecondsRef.current = elapsedSeconds;
      setHasInterviewStarted(false);
      const summary = createInterviewSummary({
        elapsedSeconds: finalElapsedSecondsRef.current,
        exchangeCount: interview.exchangeCount,
        hintsUsed: interview.hintsUsed,
        interviewerResponse: interview.interviewerResponse,
        problemTitle: problem.title,
        transcript: interview.fullTranscript
      });
      interview.stop();
      await recordCompletedInterview(
        {
          category: problem.category,
          completedAt: (/* @__PURE__ */ new Date()).toISOString(),
          elapsedSeconds: summary.elapsedSeconds,
          overallScore: summary.overallScore,
          problemSlug: problem.slug,
          problemTitle: problem.title,
          verdict: summary.verdict
        },
        config.appOrigin,
        summary
      );
      setIsInterviewEnded(true);
      setIsSavingInterview(false);
      window.open(
        `${config.appOrigin}${getInterviewSummaryPath(problem.slug)}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
    const displayElapsedTime = formatElapsedClock(
      isInterviewEnded ? finalElapsedSecondsRef.current : elapsedSeconds
    );
    if (isInterviewEnded) {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "div",
        {
          "aria-label": "DSA interviewer overlay",
          className: "pointer-events-auto fixed z-[2147483647] w-[352px] animate-[interviewer-overlay-enter_620ms_cubic-bezier(.16,1,.3,1)_both]",
          style: overlayPosition ? { left: overlayPosition.x, top: overlayPosition.y } : { right: "2rem", top: "6rem" },
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "rounded-[1.45rem] border border-white/10 bg-[#171717] p-6 text-zinc-50 shadow-[0_28px_80px_rgba(0,0,0,0.55)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500", children: "Interview complete" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "mt-3 text-lg font-bold text-white", children: problem.title }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "mt-2 text-sm font-medium text-zinc-400", children: [
              "Finished in ",
              displayElapsedTime,
              ". Progress syncs when you open the dashboard."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              "a",
              {
                className: "mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-white text-sm font-bold text-zinc-950",
                href: `${config.appOrigin}${getInterviewSummaryPath(problem.slug)}`,
                rel: "noreferrer",
                target: "_blank",
                children: "View summary"
              }
            )
          ] })
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        ref: overlayRef,
        "aria-label": "DSA interviewer overlay",
        className: "pointer-events-auto fixed z-[2147483647] touch-none cursor-grab animate-[interviewer-overlay-enter_620ms_cubic-bezier(.16,1,.3,1)_420ms_both] active:cursor-grabbing",
        onPointerCancel: handleOverlayPointerUp,
        onPointerDown: handleOverlayPointerDown,
        onPointerMove: handleOverlayPointerMove,
        onPointerUp: handleOverlayPointerUp,
        style: overlayPosition ? { left: overlayPosition.x, top: overlayPosition.y } : { right: "2rem", top: "6rem" },
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          Overlay,
          {
            audioLevel: interview.audioLevel,
            elapsedTime: displayElapsedTime,
            hasStarted: hasInterviewStarted,
            interviewerResponse: interview.interviewerResponse,
            interviewerStatus: isSavingInterview ? "Saving..." : interview.interviewerStatus,
            isListening: interview.isListening,
            isMuted: interview.isMuted,
            onEnd: () => void handleEndInterview(),
            onRequestHint: interview.requestHint,
            onStartInterview: handleStartInterview,
            onStartListening: interview.start,
            onStopListening: interview.stop,
            onToggleMute: interview.toggleMute,
            transcript: interview.text,
            transcriptStatus: interview.status
          }
        )
      }
    );
  }

  // extension/content-entry.tsx
  var import_jsx_runtime13 = __toESM(require_jsx_runtime());
  var HOST_ID = "dsa-interviewer-host";
  var DEFAULT_APP_ORIGIN = "http://localhost:3000";
  var reactRoot = null;
  var mountedSlug = null;
  function readHashLaunchConfig() {
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
  async function resolveLaunchConfig() {
    const hashConfig = readHashLaunchConfig();
    if (hashConfig) {
      history.replaceState(null, "", `${location.pathname}${location.search}`);
      return hashConfig;
    }
    const appOrigin = await getAppOrigin();
    return buildLaunchConfigFromProblemPage({
      appOrigin,
      pathname: location.pathname
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
    let shadowRoot = host.shadowRoot;
    if (!shadowRoot) {
      shadowRoot = host.attachShadow({ mode: "open" });
      const style3 = document.createElement("style");
      style3.textContent = OVERLAY_STYLES;
      shadowRoot.appendChild(style3);
    }
    let mountPoint = shadowRoot.querySelector(".dsa-interviewer-root");
    if (!mountPoint) {
      mountPoint = document.createElement("div");
      mountPoint.className = "dsa-interviewer-root";
      mountPoint.style.pointerEvents = "none";
      shadowRoot.appendChild(mountPoint);
    }
    return mountPoint;
  }
  function mountOverlay(config) {
    if (mountedSlug === config.slug && reactRoot) {
      return;
    }
    mountedSlug = config.slug;
    const mountPoint = ensureMountPoint();
    if (!reactRoot) {
      reactRoot = (0, import_client.createRoot)(mountPoint);
    }
    reactRoot.render(
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react8.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(LeetCodeExtensionOverlay, { config }) })
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
    window.setInterval(checkNavigation, 1e3);
  }
  void syncOverlayWithPage();
  watchLeetCodeNavigation();
})();
