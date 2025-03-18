
const express = require('express');
const router = express.Router();
const {
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
} = require('../controllers/newsController');

router.route('/').get(getNews).post(createNews);
router.route('/:id').get(getNewsById).put(updateNews).delete(deleteNews);

module.exports = router;
