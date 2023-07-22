// This file can include functions for data validation and input sanitization.

// Helper function to validate an email address
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to validate a password
export function validatePassword(password) {
  // Add your password validation logic here (e.g., minimum length, uppercase, lowercase, special characters)
  return password.length >= 8;
}

// Helper function to validate a name
export function validateName(name) {
  // Add your name validation logic here
  return name.length > 0;
}

// Other validation utility functions as needed
