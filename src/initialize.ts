import { captureBounceRate } from "./metrics/bounceRate";
import { captureClick } from "./metrics/clicks";
import { captureDeviceInfo } from "./metrics/deviceInformation";
import { captureErrorTracking } from "./metrics/errorTracking";
import { captureExitRate } from "./metrics/exitRate";
import { captureHeatmap } from "./metrics/heatmaps";
import { captureImpression } from "./metrics/impressions";
import { capturePageLoadTime } from "./metrics/pageLoadTime";
import { capturePageView } from "./metrics/pageViews";
import { captureScrollDepth } from "./metrics/scrollDepth";
import { captureSessionReplay } from "./metrics/sessionReplay";
import { captureUserEngagement } from "./metrics/userEngagement";
import type { InitializationOptions } from "./types";

export const initialize = (options: InitializationOptions) => {
  console.log(`Capture initialized with API key: ${options.apiKey}`);

  // Initialize click tracking for dynamic elements
  if (options.clickIds) {
    options.clickIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        captureClick(element);
      }
    });
  }

  // // Initialize impression tracking for dynamic elements
  // if (options.impressionIds) {
  //   options.impressionIds.forEach((id) => {
  //     const element = document.getElementById(id);
  //     if (element) {
  //       captureImpression(element, () => {
  //         console.log("Impression Captured");
  //       });
  //     }
  //   });
  // }

  // // Initialize page view tracking
  // capturePageView();

  // // Initialize scroll depth tracking
  // captureScrollDepth();

  // // Initialize user engagement time tracking
  // captureUserEngagement();

  // captureDeviceInfo();
  // captureExitRate();
  // captureBounceRate();
  // captureErrorTracking();
  // capturePageLoadTime();

  // // Initialize advanced metrics based on provided options
  // if (options.advancedMetrics) {
  //   if (options.advancedMetrics.enableHeatmaps) {
  //     captureHeatmap();
  //   }
  //   if (options.advancedMetrics.enableSessionReplays) {
  //     captureSessionReplay();
  //   }
  // }
};
