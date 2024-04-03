interface HeatData {
  x: number;
  y: number;
  type: "mousemove" | "click";
}

export const captureHeatmap = () => {
  const heatData: HeatData[] = [];

  document.body.addEventListener("mousemove", (e) => {
    heatData.push({
      x: e.clientX,
      y: e.clientY,
      type: "mousemove",
    });
  });

  document.body.addEventListener("click", (e) => {
    heatData.push({
      x: e.clientX,
      y: e.clientY,
      type: "click",
    });
  });

  // Send aggregated data to server at intervals
  setInterval(() => {
    if (heatData.length > 0) {
      // TODO: Send data to server
      console.log("Sending heatmap data to server", heatData);
      heatData.length = 0; // Clear the array
    }
  }, 5000); // 5-second interval
};
