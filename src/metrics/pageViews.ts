import { transport } from "../transport";

// Inside capture/src/events/pageViews.ts
export function capturePageView() {
  console.log("Page view event captured");
  // Here you'll send this page view event to your server
  // transport("pageView", { url: window.location.href });
}
