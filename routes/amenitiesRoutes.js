const express = require('express');
const router = express.Router();
const {
  addAmenitiesToScheme,
  getAmenitiesByScheme
} = require('../controllers/amenitiesController');

router.post('/:id/amenities', addAmenitiesToScheme);
router.get('/:id/amenities', getAmenitiesByScheme);

module.exports = router;
