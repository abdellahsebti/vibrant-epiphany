
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  publishedDate: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  author: {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  },
  status: {
    type: String,
    required: true,
    default: 'Published'
  },
  tags: {
    type: [String],
    required: true
  },
  readTime: {
    type: String,
    required: true
  },
  commentCount: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
