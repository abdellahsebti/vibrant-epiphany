
import { NextResponse } from 'next/server';
import { API_BASE_URL } from '@/services/api';

export async function POST(request: Request) {
  try {
    const credentials = await request.json();
    
    // Forward the request to the existing backend
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json({ message: data.message || 'Failed to login' }, { status: response.status });
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in Next.js API route:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
