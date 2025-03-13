
// This file simulates Next.js server-side functions
// In a real Next.js app, these would be API routes or server components
import { ObjectId } from 'mongodb';
import { connectToDatabase } from './db';

// Types for our data models
export interface Blog {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
  status: 'Published' | 'Draft';
  author?: string;
  imageUrl?: string;
}

export interface News {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
  category: string;
  imageUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  status: 'Upcoming' | 'Past';
  registrationUrl?: string;
  imageUrl?: string;
}

// Blog API
export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const db = await connectToDatabase();
    const blogsCollection = db.collection('blogs');
    const blogs = await blogsCollection.find({}).toArray();
    
    // Convert MongoDB _id to id
    return blogs.map(blog => ({
      id: blog._id.toString(),
      title: blog.title,
      content: blog.content,
      publishedDate: blog.publishedDate,
      status: blog.status,
      author: blog.author,
      imageUrl: blog.imageUrl
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const getBlogById = async (id: string): Promise<Blog | undefined> => {
  try {
    const db = await connectToDatabase();
    const blogsCollection = db.collection('blogs');
    
    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (error) {
      console.error("Invalid ObjectId format:", error);
      return undefined;
    }
    
    const blog = await blogsCollection.findOne({ _id: objectId });
    
    if (!blog) return undefined;
    
    return {
      id: blog._id.toString(),
      title: blog.title,
      content: blog.content,
      publishedDate: blog.publishedDate,
      status: blog.status,
      author: blog.author,
      imageUrl: blog.imageUrl
    };
  } catch (error) {
    console.error("Error fetching blog by id:", error);
    throw error;
  }
};

export const createBlog = async (blog: Omit<Blog, 'id'>): Promise<Blog> => {
  try {
    const db = await connectToDatabase();
    const blogsCollection = db.collection('blogs');
    
    const result = await blogsCollection.insertOne(blog);
    
    return {
      id: result.insertedId.toString(),
      ...blog
    };
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};

export const updateBlog = async (id: string, blog: Partial<Blog>): Promise<Blog | undefined> => {
  try {
    const db = await connectToDatabase();
    const blogsCollection = db.collection('blogs');
    
    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (error) {
      console.error("Invalid ObjectId format:", error);
      return undefined;
    }
    
    // Remove id from update object if present
    const { id: _, ...updateData } = blog;
    
    await blogsCollection.updateOne(
      { _id: objectId },
      { $set: updateData }
    );
    
    const updatedBlog = await blogsCollection.findOne({ _id: objectId });
    
    if (!updatedBlog) return undefined;
    
    return {
      id: updatedBlog._id.toString(),
      title: updatedBlog.title,
      content: updatedBlog.content,
      publishedDate: updatedBlog.publishedDate,
      status: updatedBlog.status,
      author: updatedBlog.author,
      imageUrl: updatedBlog.imageUrl
    };
  } catch (error) {
    console.error("Error updating blog:", error);
    throw error;
  }
};

export const deleteBlog = async (id: string): Promise<boolean> => {
  try {
    const db = await connectToDatabase();
    const blogsCollection = db.collection('blogs');
    
    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (error) {
      console.error("Invalid ObjectId format:", error);
      return false;
    }
    
    const result = await blogsCollection.deleteOne({ _id: objectId });
    return result.deletedCount > 0;
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw error;
  }
};

// News API
export const getNews = async (): Promise<News[]> => {
  try {
    const db = await connectToDatabase();
    const newsCollection = db.collection('news');
    const newsItems = await newsCollection.find({}).toArray();
    
    // Convert MongoDB _id to id
    return newsItems.map(news => ({
      id: news._id.toString(),
      title: news.title,
      content: news.content,
      publishedDate: news.publishedDate,
      category: news.category,
      imageUrl: news.imageUrl
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export const getNewsById = async (id: string): Promise<News | undefined> => {
  try {
    const db = await connectToDatabase();
    const newsCollection = db.collection('news');
    
    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (error) {
      console.error("Invalid ObjectId format:", error);
      return undefined;
    }
    
    const news = await newsCollection.findOne({ _id: objectId });
    
    if (!news) return undefined;
    
    return {
      id: news._id.toString(),
      title: news.title,
      content: news.content,
      publishedDate: news.publishedDate,
      category: news.category,
      imageUrl: news.imageUrl
    };
  } catch (error) {
    console.error("Error fetching news by id:", error);
    throw error;
  }
};

export const createNews = async (newsItem: Omit<News, 'id'>): Promise<News> => {
  try {
    const db = await connectToDatabase();
    const newsCollection = db.collection('news');
    
    const result = await newsCollection.insertOne(newsItem);
    
    return {
      id: result.insertedId.toString(),
      ...newsItem
    };
  } catch (error) {
    console.error("Error creating news:", error);
    throw error;
  }
};

export const updateNews = async (id: string, newsItem: Partial<News>): Promise<News | undefined> => {
  try {
    const db = await connectToDatabase();
    const newsCollection = db.collection('news');
    
    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (error) {
      console.error("Invalid ObjectId format:", error);
      return undefined;
    }
    
    // Remove id from update object if present
    const { id: _, ...updateData } = newsItem;
    
    await newsCollection.updateOne(
      { _id: objectId },
      { $set: updateData }
    );
    
    const updatedNews = await newsCollection.findOne({ _id: objectId });
    
    if (!updatedNews) return undefined;
    
    return {
      id: updatedNews._id.toString(),
      title: updatedNews.title,
      content: updatedNews.content,
      publishedDate: updatedNews.publishedDate,
      category: updatedNews.category,
      imageUrl: updatedNews.imageUrl
    };
  } catch (error) {
    console.error("Error updating news:", error);
    throw error;
  }
};

export const deleteNews = async (id: string): Promise<boolean> => {
  try {
    const db = await connectToDatabase();
    const newsCollection = db.collection('news');
    
    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (error) {
      console.error("Invalid ObjectId format:", error);
      return false;
    }
    
    const result = await newsCollection.deleteOne({ _id: objectId });
    return result.deletedCount > 0;
  } catch (error) {
    console.error("Error deleting news:", error);
    throw error;
  }
};

// Events API
export const getEvents = async (): Promise<Event[]> => {
  try {
    const db = await connectToDatabase();
    const eventsCollection = db.collection('events');
    const events = await eventsCollection.find({}).toArray();
    
    // Convert MongoDB _id to id
    return events.map(event => ({
      id: event._id.toString(),
      title: event.title,
      description: event.description,
      date: event.date,
      location: event.location,
      status: event.status,
      registrationUrl: event.registrationUrl,
      imageUrl: event.imageUrl
    }));
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const getEventById = async (id: string): Promise<Event | undefined> => {
  try {
    const db = await connectToDatabase();
    const eventsCollection = db.collection('events');
    
    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (error) {
      console.error("Invalid ObjectId format:", error);
      return undefined;
    }
    
    const event = await eventsCollection.findOne({ _id: objectId });
    
    if (!event) return undefined;
    
    return {
      id: event._id.toString(),
      title: event.title,
      description: event.description,
      date: event.date,
      location: event.location,
      status: event.status,
      registrationUrl: event.registrationUrl,
      imageUrl: event.imageUrl
    };
  } catch (error) {
    console.error("Error fetching event by id:", error);
    throw error;
  }
};

export const createEvent = async (event: Omit<Event, 'id'>): Promise<Event> => {
  try {
    const db = await connectToDatabase();
    const eventsCollection = db.collection('events');
    
    const result = await eventsCollection.insertOne(event);
    
    return {
      id: result.insertedId.toString(),
      ...event
    };
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const updateEvent = async (id: string, event: Partial<Event>): Promise<Event | undefined> => {
  try {
    const db = await connectToDatabase();
    const eventsCollection = db.collection('events');
    
    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (error) {
      console.error("Invalid ObjectId format:", error);
      return undefined;
    }
    
    // Remove id from update object if present
    const { id: _, ...updateData } = event;
    
    await eventsCollection.updateOne(
      { _id: objectId },
      { $set: updateData }
    );
    
    const updatedEvent = await eventsCollection.findOne({ _id: objectId });
    
    if (!updatedEvent) return undefined;
    
    return {
      id: updatedEvent._id.toString(),
      title: updatedEvent.title,
      description: updatedEvent.description,
      date: updatedEvent.date,
      location: updatedEvent.location,
      status: updatedEvent.status,
      registrationUrl: updatedEvent.registrationUrl,
      imageUrl: updatedEvent.imageUrl
    };
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
};

export const deleteEvent = async (id: string): Promise<boolean> => {
  try {
    const db = await connectToDatabase();
    const eventsCollection = db.collection('events');
    
    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (error) {
      console.error("Invalid ObjectId format:", error);
      return false;
    }
    
    const result = await eventsCollection.deleteOne({ _id: objectId });
    return result.deletedCount > 0;
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error;
  }
};
