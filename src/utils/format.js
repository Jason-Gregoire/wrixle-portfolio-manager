// This file can contain utility functions for formatting data or values.
// format.js

// Format a number with decimal places
export function formatNumber(number, decimalPlaces = 2) {
  return number.toFixed(decimalPlaces);
}

// Format a currency value
export function formatCurrency(value, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value);
}

// Format a percentage value
export function formatPercentage(value, decimalPlaces = 2) {
  return `${value.toFixed(decimalPlaces)}%`;
}

// Format a date in a specific format
export function formatDate(date, format = 'YYYY-MM-DD') {
  const formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: format }).format(date);
  return formattedDate;
}

// Other formatting utility functions as needed
