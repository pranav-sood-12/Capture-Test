export const capturePageLoadTime = () => {
  window.addEventListener("load", () => {
    const performanceEntries = performance.getEntriesByType("navigation");

    if (performanceEntries.length > 0) {
      const navigationEntry =
        performanceEntries[0] as PerformanceNavigationTiming;
      const pageLoadTime =
        navigationEntry.loadEventEnd - navigationEntry.startTime;

      console.log(`Page load time: ${pageLoadTime} ms`);
      // Send data to server
    }
  });
};
