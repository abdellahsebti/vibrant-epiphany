
// Mock data for news articles
const mockNews = [
  {
    id: '1',
    title: 'New Website Launch',
    content: 'Our organization has launched a brand new website with enhanced features and improved user experience.',
    excerpt: 'Our organization has launched a brand new website with enhanced features and improved user experience.',
    publishedDate: '2023-04-15',
    image: '/placeholder.svg',
    category: 'Announcement',
    author: 'Admin Team'
  },
  {
    id: '2',
    title: 'Community Outreach Program Expansion',
    content: 'We are expanding our community outreach programs to include more educational workshops and resources.',
    excerpt: 'We are expanding our community outreach programs to include more educational workshops and resources.',
    publishedDate: '2023-04-10',
    image: '/placeholder.svg',
    category: 'Community',
    author: 'Outreach Team'
  },
  {
    id: '3',
    title: 'Annual Fundraising Event',
    content: 'Join us for our annual fundraising gala to support ongoing initiatives and future projects.',
    excerpt: 'Join us for our annual fundraising gala to support ongoing initiatives and future projects.',
    publishedDate: '2023-04-05',
    image: '/placeholder.svg',
    category: 'Events',
    author: 'Events Team'
  }
];

// Mock data for blog posts
const mockBlogs = [
  {
    id: '1',
    title: 'The Importance of Community Engagement',
    content: 'Engaging with your community is crucial for building strong relationships and creating positive change.',
    excerpt: 'Engaging with your community is crucial for building strong relationships and creating positive change.',
    publishedDate: '2023-04-18',
    image: '/placeholder.svg',
    author: {
      name: 'Jane Smith',
      avatar: ''
    },
    status: 'Published',
    tags: ['Community', 'Engagement'],
    readTime: '5 min',
    commentCount: 12
  },
  {
    id: '2',
    title: 'Fundraising Strategies for Nonprofits',
    content: 'Effective fundraising strategies that can help nonprofits maximize their impact and reach their goals.',
    excerpt: 'Effective fundraising strategies that can help nonprofits maximize their impact and reach their goals.',
    publishedDate: '2023-04-14',
    image: '/placeholder.svg',
    author: {
      name: 'John Doe',
      avatar: ''
    },
    status: 'Published',
    tags: ['Fundraising', 'Nonprofit'],
    readTime: '7 min',
    commentCount: 8
  },
  {
    id: '3',
    title: 'Digital Transformation in the Nonprofit Sector',
    content: 'How digital tools and technologies are transforming the way nonprofits operate and engage with their audience.',
    excerpt: 'How digital tools and technologies are transforming the way nonprofits operate and engage with their audience.',
    publishedDate: '2023-04-09',
    image: '/placeholder.svg',
    author: {
      name: 'Sarah Johnson',
      avatar: ''
    },
    status: 'Draft',
    tags: ['Digital', 'Technology'],
    readTime: '10 min',
    commentCount: 0
  }
];

// Mock data for events
const mockEvents = [
  {
    id: '1',
    title: 'Community Workshop Series',
    description: 'A series of workshops focused on community building and engagement strategies.',
    date: '2023-05-15',
    time: '10:00 AM - 2:00 PM',
    location: 'Community Center, 123 Main St',
    attendeeCount: 45,
    maxAttendees: 60,
    image: '/placeholder.svg',
    category: 'Workshop',
    status: 'Upcoming'
  },
  {
    id: '2',
    title: 'Annual Gala Dinner',
    description: 'Join us for an evening of celebration and fundraising to support our mission.',
    date: '2023-06-30',
    time: '6:00 PM - 10:00 PM',
    location: 'Grand Hotel Ballroom, 500 Park Ave',
    attendeeCount: 120,
    maxAttendees: 200,
    image: '/placeholder.svg',
    category: 'Fundraiser',
    status: 'Upcoming'
  },
  {
    id: '3',
    title: 'Youth Leadership Conference',
    description: 'Empowering young leaders with the skills and knowledge to make a difference in their communities.',
    date: '2023-05-22',
    time: '9:00 AM - 5:00 PM',
    location: 'Youth Center, 789 Elm St',
    attendeeCount: 75,
    maxAttendees: 100,
    image: '/placeholder.svg',
    category: 'Conference',
    status: 'Upcoming'
  }
];

// Type definitions
export interface News {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publishedDate: string;
  image: string;  // Changed from optional to required
  category: string;
  author: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publishedDate: string;
  image: string;  // Changed from optional to required
  author: {
    name: string;
    avatar: string;  // Changed from optional to required
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
  maxAttendees: number;  // Changed from optional to required
  image: string;  // Changed from optional to required
  category: string;
  status: string;
}

// News API functions
export const getNews = async (): Promise<News[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockNews;
};

export const getNewsById = async (id: string): Promise<News> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const news = mockNews.find(item => item.id === id);
  if (!news) {
    throw new Error('News article not found');
  }
  return news;
};

export const createNews = async (newsItem: Omit<News, 'id'>): Promise<News> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const newNews = {
    ...newsItem,
    id: Math.random().toString(36).substring(2, 9)
  };
  mockNews.push(newNews);
  return newNews;
};

export const updateNews = async (id: string, news: Partial<News>): Promise<News> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockNews.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error('News article not found');
  }
  mockNews[index] = { ...mockNews[index], ...news };
  return mockNews[index];
};

export const deleteNews = async (id: string): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockNews.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error('News article not found');
  }
  mockNews.splice(index, 1);
};

// Blog API functions
export const getBlogs = async (): Promise<Blog[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockBlogs;
};

export const getBlogById = async (id: string): Promise<Blog> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const blog = mockBlogs.find(item => item.id === id);
  if (!blog) {
    throw new Error('Blog post not found');
  }
  return blog;
};

export const createBlog = async (blogItem: Omit<Blog, 'id'>): Promise<Blog> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const newBlog = {
    ...blogItem,
    id: Math.random().toString(36).substring(2, 9)
  };
  mockBlogs.push(newBlog);
  return newBlog;
};

export const updateBlog = async (id: string, blog: Partial<Blog>): Promise<Blog> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockBlogs.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error('Blog post not found');
  }
  mockBlogs[index] = { ...mockBlogs[index], ...blog };
  return mockBlogs[index];
};

export const deleteBlog = async (id: string): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockBlogs.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error('Blog post not found');
  }
  mockBlogs.splice(index, 1);
};

// Event API functions
export const getEvents = async (): Promise<Event[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockEvents;
};

export const getEventById = async (id: string): Promise<Event> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const event = mockEvents.find(item => item.id === id);
  if (!event) {
    throw new Error('Event not found');
  }
  return event;
};

export const createEvent = async (eventItem: Omit<Event, 'id'>): Promise<Event> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const newEvent = {
    ...eventItem,
    id: Math.random().toString(36).substring(2, 9)
  };
  mockEvents.push(newEvent);
  return newEvent;
};

export const updateEvent = async (id: string, event: Partial<Event>): Promise<Event> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockEvents.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error('Event not found');
  }
  mockEvents[index] = { ...mockEvents[index], ...event };
  return mockEvents[index];
};

export const deleteEvent = async (id: string): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockEvents.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error('Event not found');
  }
  mockEvents.splice(index, 1);
};
