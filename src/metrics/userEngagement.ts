let startTime: number;

export function captureUserEngagement() {
  window.addEventListener("focus", () => {
    startTime = Date.now();
  });

  window.addEventListener("blur", () => {
    const endTime = Date.now();
    const engagementTime = (endTime - startTime) / 1000; // Time in seconds

    console.log(`User engagement time: ${engagementTime} seconds`);
    // Send data to server
  });
}
