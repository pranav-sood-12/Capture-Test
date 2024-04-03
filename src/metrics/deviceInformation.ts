export function captureDeviceInfo() {
  const { innerHeight: screenHeight, innerWidth: screenWidth } = window;
  const deviceInfo = {
    userAgent: navigator.userAgent,
    platform: (navigator as any).userAgentData.platform,
    screenHeight,
    screenWidth,
    language: navigator.language,
  };
  console.log("Device Info:", deviceInfo);
  // TODO: Send data to server
}
