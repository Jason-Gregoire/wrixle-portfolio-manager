// This file can store helper functions that provide common functionality across the application.
// helpers.js

// Helper function to calculate the average value of an array
export function calculateAverage(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }

  const sum = array.reduce((acc, val) => acc + val, 0);
  const average = sum / array.length;

  return average;
}

// Helper function to generate a random number within a specified range
export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Other helper utility functions as needed
