interface ErrorEventDetails {
  message: string;
  source: string;
  lineno: number;
  colno: number;
  error: Error;
  timestamp: number;
}

const errorData: ErrorEventDetails[] = [];

export function captureErrorTracking() {
  window.addEventListener("error", (event) => {
    const { message, filename, lineno, colno, error } = event;
    const errorDetails: ErrorEventDetails = {
      message,
      source: filename,
      lineno,
      colno,
      error,
      timestamp: Date.now(),
    };

    errorData.push(errorDetails);
  });

  window.addEventListener("unhandledrejection", (event) => {
    const errorDetails: ErrorEventDetails = {
      message: "Unhandled Promise Rejection",
      source: event.type,
      lineno: 0,
      colno: 0,
      error: event.reason,
      timestamp: Date.now(),
    };

    errorData.push(errorDetails);
  });

  // Sending error data to server at intervals
  setInterval(() => {
    if (errorData.length > 0) {
      console.log("Sending error data to server", errorData);
      // TODO: Actually send data to server
      errorData.length = 0; // Clear the array
    }
  }, 5000); // 5-second interval
}
