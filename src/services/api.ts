
// This file simulates Next.js server-side functions
// In a real Next.js app, these would be API routes or server components

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

// Mock data - Replace with MongoDB connection
// MONGODB INTEGRATION POINT: Replace these arrays with MongoDB collections
let blogs: Blog[] = [
  { id: '1', title: 'The Future of Scientific Research', content: 'Lorem ipsum...', publishedDate: '2023-05-12', status: 'Published' },
  { id: '2', title: 'Quantum Computing Breakthroughs', content: 'Lorem ipsum...', publishedDate: '2023-06-28', status: 'Published' },
  { id: '3', title: 'Sustainable Energy Solutions', content: 'Lorem ipsum...', publishedDate: '2023-07-15', status: 'Draft' },
];

let news: News[] = [
  { id: '1', title: 'Epiphany Club Awarded Grant for New Research Initiative', content: 'Lorem ipsum...', publishedDate: '2023-04-05', category: 'Research' },
  { id: '2', title: 'New Lab Equipment Expands Experimental Capabilities', content: 'Lorem ipsum...', publishedDate: '2023-03-20', category: 'Facilities' },
  { id: '3', title: 'Student Researchers Present Findings at National Conference', content: 'Lorem ipsum...', publishedDate: '2023-02-15', category: 'Events' },
];

let events: Event[] = [
  { id: '1', title: 'Annual Science Fair', description: 'Lorem ipsum...', date: '2023-09-15', location: 'Main Campus', status: 'Upcoming' },
  { id: '2', title: 'Quantum Computing Workshop', description: 'Lorem ipsum...', date: '2023-08-22', location: 'Online', status: 'Upcoming' },
  { id: '3', title: 'Research Symposium', description: 'Lorem ipsum...', date: '2023-06-10', location: 'Conference Center', status: 'Past' },
];

// MONGODB INTEGRATION POINT: Replace these functions with MongoDB queries

// Blog API
export const getBlogs = async (): Promise<Blog[]> => {
  // MONGODB INTEGRATION: Replace with MongoDB query
  // Example: return await blogsCollection.find().toArray();
  return blogs;
};

export const getBlogById = async (id: string): Promise<Blog | undefined> => {
  // MONGODB INTEGRATION: Replace with MongoDB query
  // Example: return await blogsCollection.findOne({ id });
  return blogs.find(blog => blog.id === id);
};

export const createBlog = async (blog: Omit<Blog, 'id'>): Promise<Blog> => {
  // MONGODB INTEGRATION: Replace with MongoDB insert
  // Example: const result = await blogsCollection.insertOne({ ...blog, id: new ObjectId().toString() });
  // return await blogsCollection.findOne({ _id: result.insertedId });
  const newBlog = { ...blog, id: (blogs.length + 1).toString() };
  blogs.push(newBlog as Blog);
  return newBlog as Blog;
};

export const updateBlog = async (id: string, blog: Partial<Blog>): Promise<Blog | undefined> => {
  // MONGODB INTEGRATION: Replace with MongoDB update
  // Example: await blogsCollection.updateOne({ id }, { $set: blog });
  // return await blogsCollection.findOne({ id });
  const index = blogs.findIndex(b => b.id === id);
  if (index !== -1) {
    blogs[index] = { ...blogs[index], ...blog };
    return blogs[index];
  }
  return undefined;
};

export const deleteBlog = async (id: string): Promise<boolean> => {
  // MONGODB INTEGRATION: Replace with MongoDB delete
  // Example: const result = await blogsCollection.deleteOne({ id });
  // return result.deletedCount > 0;
  const initialLength = blogs.length;
  blogs = blogs.filter(blog => blog.id !== id);
  return initialLength > blogs.length;
};

// News API - Similar structure to blogs
export const getNews = async (): Promise<News[]> => {
  // MONGODB INTEGRATION: Replace with MongoDB query
  return news;
};

export const getNewsById = async (id: string): Promise<News | undefined> => {
  // MONGODB INTEGRATION: Replace with MongoDB query
  return news.find(item => item.id === id);
};

export const createNews = async (newsItem: Omit<News, 'id'>): Promise<News> => {
  // MONGODB INTEGRATION: Replace with MongoDB insert
  const newNews = { ...newsItem, id: (news.length + 1).toString() };
  news.push(newNews as News);
  return newNews as News;
};

export const updateNews = async (id: string, newsItem: Partial<News>): Promise<News | undefined> => {
  // MONGODB INTEGRATION: Replace with MongoDB update
  const index = news.findIndex(n => n.id === id);
  if (index !== -1) {
    news[index] = { ...news[index], ...newsItem };
    return news[index];
  }
  return undefined;
};

export const deleteNews = async (id: string): Promise<boolean> => {
  // MONGODB INTEGRATION: Replace with MongoDB delete
  const initialLength = news.length;
  news = news.filter(n => n.id !== id);
  return initialLength > news.length;
};

// Events API - Similar structure to blogs and news
export const getEvents = async (): Promise<Event[]> => {
  // MONGODB INTEGRATION: Replace with MongoDB query
  return events;
};

export const getEventById = async (id: string): Promise<Event | undefined> => {
  // MONGODB INTEGRATION: Replace with MongoDB query
  return events.find(event => event.id === id);
};

export const createEvent = async (event: Omit<Event, 'id'>): Promise<Event> => {
  // MONGODB INTEGRATION: Replace with MongoDB insert
  const newEvent = { ...event, id: (events.length + 1).toString() };
  events.push(newEvent as Event);
  return newEvent as Event;
};

export const updateEvent = async (id: string, event: Partial<Event>): Promise<Event | undefined> => {
  // MONGODB INTEGRATION: Replace with MongoDB update
  const index = events.findIndex(e => e.id === id);
  if (index !== -1) {
    events[index] = { ...events[index], ...event };
    return events[index];
  }
  return undefined;
};

export const deleteEvent = async (id: string): Promise<boolean> => {
  // MONGODB INTEGRATION: Replace with MongoDB delete
  const initialLength = events.length;
  events = events.filter(event => event.id !== id);
  return initialLength > events.length;
};
