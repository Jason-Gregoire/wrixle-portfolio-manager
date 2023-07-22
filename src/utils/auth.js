// Utility functions for authentication

// Function to check if the user is authenticated
export function isAuthenticated() {
  // Check if the user has a valid authentication token
  const accessToken = localStorage.getItem('accessToken');
  return !!accessToken;
}

// Function to perform user login
export async function login(username, password) {
  try {
    // Send a login request to the backend API
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      // Store the access token in local storage
      localStorage.setItem('accessToken', data.accessToken);
      return data.user;
    } else {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Login failed. Please check your credentials and try again.');
    }
  } catch (error) {
    throw new Error('An error occurred during login. Please try again later.');
  }
}

// Function to perform user logout
export function logout() {
  // Clear the access token from local storage
  localStorage.removeItem('accessToken');
}

// Export other utility functions as needed
