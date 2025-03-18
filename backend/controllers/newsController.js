
const News = require('../models/News');

// Get all news
const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ publishedDate: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get news by ID
const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (news) {
      res.json(news);
    } else {
      res.status(404).json({ message: 'News article not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create news
const createNews = async (req, res) => {
  try {
    const news = new News(req.body);
    const createdNews = await news.save();
    res.status(201).json(createdNews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update news
const updateNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (news) {
      Object.assign(news, req.body);
      const updatedNews = await news.save();
      res.json(updatedNews);
    } else {
      res.status(404).json({ message: 'News article not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete news
const deleteNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (news) {
      await news.deleteOne();
      res.json({ message: 'News article removed' });
    } else {
      res.status(404).json({ message: 'News article not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
};
