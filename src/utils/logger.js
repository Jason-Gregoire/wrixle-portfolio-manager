// This file can handle logging and debugging functionalities.
// logger.js

// Helper function to log messages to the console with timestamps
export function logMessage(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

// Helper function to log error messages to the console with timestamps
export function logError(error) {
  const timestamp = new Date().toISOString();
  console.error(`[${timestamp}] ${error}`);
}

// Other logging utility functions as needed
