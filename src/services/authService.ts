
import { API_BASE_URL } from './api';

// Type definitions for authentication
export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

// Authentication API functions
export const signup = async (userData: SignupData): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      // Parse error response
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to sign up');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

export const login = async (credentials: LoginData): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    
    if (!response.ok) {
      // Parse error response
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to log in');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Store the authentication token
export const setAuthToken = (token: string): void => {
  localStorage.setItem('authToken', token);
};

// Get the stored authentication token
export const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken');
};

// Clear the stored authentication token (logout)
export const clearAuthToken = (): void => {
  localStorage.removeItem('authToken');
};

// Check if user is logged in
export const isLoggedIn = (): boolean => {
  return !!getAuthToken();
};
