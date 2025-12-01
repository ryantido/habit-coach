import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// Ensure React Testing Library cleans up between tests to avoid
// multiple renders stacking up in the document and causing
// getBy* queries to match multiple elements.
afterEach(() => {
  cleanup();
});

// Minimal JSDOM shims to quiet libraries that expect browser APIs.
if (!("matchMedia" in window)) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  });
}

if (!("requestAnimationFrame" in window)) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(() => cb(performance.now()), 16) as unknown as number;
}
if (!("cancelAnimationFrame" in window)) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).cancelAnimationFrame = (id: number) => clearTimeout(id as unknown as number);
}