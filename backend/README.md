
# Epiphany Scientific Club Backend

This is the backend for the Epiphany Scientific Club website. It is built using Express.js and MongoDB.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

### Installation

1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory with the following variables:

```
PORT=3001
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

5. Start the server:

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Routes

### News

- GET `/api/news` - Get all news articles
- GET `/api/news/:id` - Get news article by ID
- POST `/api/news` - Create new news article
- PUT `/api/news/:id` - Update news article
- DELETE `/api/news/:id` - Delete news article

### Blogs

- GET `/api/blogs` - Get all blog posts
- GET `/api/blogs/:id` - Get blog post by ID
- POST `/api/blogs` - Create new blog post
- PUT `/api/blogs/:id` - Update blog post
- DELETE `/api/blogs/:id` - Delete blog post

### Events

- GET `/api/events` - Get all events
- GET `/api/events/:id` - Get event by ID
- POST `/api/events` - Create new event
- PUT `/api/events/:id` - Update event
- DELETE `/api/events/:id` - Delete event

## Data Models

### News

```javascript
{
  title: String,
  content: String,
  excerpt: String,
  publishedDate: String,
  image: String,
  category: String,
  author: String
}
```

### Blog

```javascript
{
  title: String,
  content: String,
  excerpt: String,
  publishedDate: String,
  image: String,
  author: {
    name: String,
    avatar: String
  },
  status: String,
  tags: [String],
  readTime: String,
  commentCount: Number
}
```

### Event

```javascript
{
  title: String,
  description: String,
  date: String,
  time: String,
  location: String,
  attendeeCount: Number,
  maxAttendees: Number,
  image: String,
  category: String,
  status: String
}
```
