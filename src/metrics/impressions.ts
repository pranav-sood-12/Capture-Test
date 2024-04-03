// Inside capture/src/metrics/impressions.ts

import { transport } from "../transport";

export const captureImpression = (element: HTMLElement, callback: Function) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element is visible, count as an impression
        callback(); // Trigger whatever action you want to record the impression
        // Here you'll send this impression event to your server
        // transport("impression", { elementId: element.id });
        observer.disconnect(); // Stop observing since impression has been captured
      }
    });
  });

  observer.observe(element);
};
