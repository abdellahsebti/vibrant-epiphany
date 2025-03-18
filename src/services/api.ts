
// Type definitions
export interface News {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publishedDate: string;
  image: string;
  category: string;
  author: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publishedDate: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  status: string;
  tags: string[];
  readTime: string;
  commentCount: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendeeCount: number;
  maxAttendees: number;
  image: string;
  category: string;
  status: string;
}

// API Base URL - Replace with your Express backend URL when deployed
const API_BASE_URL = 'http://localhost:3001/api';

// News API functions
export const getNews = async (): Promise<News[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news`);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export const getNewsById = async (id: string): Promise<News> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news/${id}`);
    if (!response.ok) {
      throw new Error('News article not found');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching news with id ${id}:`, error);
    throw error;
  }
};

export const createNews = async (newsItem: Omit<News, 'id'>): Promise<News> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newsItem),
    });
    if (!response.ok) {
      throw new Error('Failed to create news');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating news:', error);
    throw error;
  }
};

export const updateNews = async (id: string, news: Partial<News>): Promise<News> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(news),
    });
    if (!response.ok) {
      throw new Error('Failed to update news');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating news with id ${id}:`, error);
    throw error;
  }
};

export const deleteNews = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete news');
    }
  } catch (error) {
    console.error(`Error deleting news with id ${id}:`, error);
    throw error;
  }
};

// Blog API functions
export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs`);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

export const getBlogById = async (id: string): Promise<Blog> => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
    if (!response.ok) {
      throw new Error('Blog post not found');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching blog with id ${id}:`, error);
    throw error;
  }
};

export const createBlog = async (blogItem: Omit<Blog, 'id'>): Promise<Blog> => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogItem),
    });
    if (!response.ok) {
      throw new Error('Failed to create blog');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

export const updateBlog = async (id: string, blog: Partial<Blog>): Promise<Blog> => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    });
    if (!response.ok) {
      throw new Error('Failed to update blog');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating blog with id ${id}:`, error);
    throw error;
  }
};

export const deleteBlog = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete blog');
    }
  } catch (error) {
    console.error(`Error deleting blog with id ${id}:`, error);
    throw error;
  }
};

// Event API functions
export const getEvents = async (): Promise<Event[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/events`);
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

export const getEventById = async (id: string): Promise<Event> => {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${id}`);
    if (!response.ok) {
      throw new Error('Event not found');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching event with id ${id}:`, error);
    throw error;
  }
};

export const createEvent = async (eventItem: Omit<Event, 'id'>): Promise<Event> => {
  try {
    const response = await fetch(`${API_BASE_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventItem),
    });
    if (!response.ok) {
      throw new Error('Failed to create event');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

export const updateEvent = async (id: string, event: Partial<Event>): Promise<Event> => {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
    if (!response.ok) {
      throw new Error('Failed to update event');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating event with id ${id}:`, error);
    throw error;
  }
};

export const deleteEvent = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete event');
    }
  } catch (error) {
    console.error(`Error deleting event with id ${id}:`, error);
    throw error;
  }
};
