const express = require('express');
const router = express.Router();
const {
  addMediaToScheme,
  getMediaByScheme
} = require('../controllers/mediaController');

router.post('/:id/media', addMediaToScheme);
router.get('/:id/media', getMediaByScheme);

module.exports = router;