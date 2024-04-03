export const captureBounceRate = () => {
  let visibilityChanged = false;
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      visibilityChanged = true;
    }
  });

  window.addEventListener("beforeunload", () => {
    if (!visibilityChanged) {
      console.log("Bounce detected");
      // TODO: Send data to server
    }
  });
};
