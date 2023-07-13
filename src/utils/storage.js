// This file can manage data storage and retrieval, such as local storage or session storage.
// storage.js

// Helper function to store data in localStorage
export function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error storing data in localStorage:', error);
  }
}

// Helper function to retrieve data from localStorage
export function getItem(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error retrieving data from localStorage:', error);
    return null;
  }
}

// Helper function to remove data from localStorage
export function removeItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data from localStorage:', error);
  }
}

// Other storage utility functions as needed
