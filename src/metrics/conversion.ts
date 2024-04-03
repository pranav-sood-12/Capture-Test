interface ConversionEvent {
  type: string;
  value?: any;
  timestamp: number;
}

const conversionData: ConversionEvent[] = [];

export function captureConversion(event: ConversionEvent) {
  event.timestamp = Date.now();
  conversionData.push(event);

  console.log(`Conversion event: ${event.type}`);
  // TODO: Send data to server at intervals or under certain conditions

  // For demonstration, sending data every 5 events
  if (conversionData.length >= 5) {
    console.log("Sending batch of conversion data to server", conversionData);
    // TODO: Actually send data to server
    conversionData.length = 0; // Clear the array
  }
}
