export const captureExitRate = () => {
  window.addEventListener("beforeunload", () => {
    console.log("Exit detected");
    // TODO: Send data to server
  });
};
