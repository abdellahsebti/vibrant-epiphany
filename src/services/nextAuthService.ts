
import { API_BASE_URL } from './api';
import { SignupData, LoginData, AuthResponse } from './authService';

// Base URL for Next.js API routes
const NEXT_API_BASE_URL = '/api';

// Authentication API functions using Next.js API routes
export const nextSignup = async (userData: SignupData): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${NEXT_API_BASE_URL}/users/register`, {
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

export const nextLogin = async (credentials: LoginData): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${NEXT_API_BASE_URL}/users/login`, {
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

export const nextGetUserProfile = async (token: string): Promise<any> => {
  try {
    const response = await fetch(`${NEXT_API_BASE_URL}/users/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (!response.ok) {
      // Parse error response
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to get user profile');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};
