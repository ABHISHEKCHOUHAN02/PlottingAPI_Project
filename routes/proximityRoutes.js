const express = require('express');
const router = express.Router();
const {
  getProximityByScheme
} = require('../controllers/proximityController');

router.get('/:id/proximity', getProximityByScheme);

module.exports = router;
