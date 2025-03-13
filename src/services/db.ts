
import { MongoClient } from 'mongodb';

// MongoDB connection string
const uri = "mongodb+srv://abdellahsebti001:fUBFdssrTuDkLTz7@epiphinydatabase.fpbwx.mongodb.net/?retryWrites=true&w=majority&appName=epiphinydatabase";
const client = new MongoClient(uri);

export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('epiphany-scientific-club'); // Replace with your database name if different
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

// MongoDB schemas info for reference
export const mongodbInfo = {
  collections: [
    {
      name: 'blogs',
      fields: [
        { name: 'id', type: 'string', unique: true },
        { name: 'title', type: 'string', required: true },
        { name: 'content', type: 'string', required: true },
        { name: 'publishedDate', type: 'string', required: true },
        { name: 'status', type: 'string', enum: ['Published', 'Draft'], required: true },
        { name: 'author', type: 'string', required: false },
        { name: 'imageUrl', type: 'string', required: false }
      ]
    },
    {
      name: 'news',
      fields: [
        { name: 'id', type: 'string', unique: true },
        { name: 'title', type: 'string', required: true },
        { name: 'content', type: 'string', required: true },
        { name: 'publishedDate', type: 'string', required: true },
        { name: 'category', type: 'string', required: true },
        { name: 'imageUrl', type: 'string', required: false }
      ]
    },
    {
      name: 'events',
      fields: [
        { name: 'id', type: 'string', unique: true },
        { name: 'title', type: 'string', required: true },
        { name: 'description', type: 'string', required: true },
        { name: 'date', type: 'string', required: true },
        { name: 'location', type: 'string', required: true },
        { name: 'status', type: 'string', enum: ['Upcoming', 'Past'], required: true },
        { name: 'registrationUrl', type: 'string', required: false },
        { name: 'imageUrl', type: 'string', required: false }
      ]
    },
    {
      name: 'users',
      fields: [
        { name: 'id', type: 'string', unique: true },
        { name: 'username', type: 'string', required: true, unique: true },
        { name: 'email', type: 'string', required: true, unique: true },
        { name: 'passwordHash', type: 'string', required: true },
        { name: 'isAdmin', type: 'boolean', required: true, default: false }
      ]
    }
  ]
};
