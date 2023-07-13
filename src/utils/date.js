// This file can include functions for date manipulation and formatting.
// date.js

// Format a date in a specific format
export function formatDate(date, format = 'YYYY-MM-DD') {
  const formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: format }).format(date);
  return formattedDate;
}

// Get the current date and time
export function getCurrentDateTime() {
  const currentDate = new Date();
  const currentDateTime = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(currentDate);
  return currentDateTime;
}

// Calculate the difference between two dates
export function calculateDateDifference(date1, date2) {
  const diffInMilliseconds = Math.abs(date2 - date1);
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  return diffInDays;
}

// Other date utility functions as needed
