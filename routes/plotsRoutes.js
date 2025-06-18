const express = require('express');
const router = express.Router();
const {
  addPlotsToScheme,
  getPlotsByScheme
} = require('../controllers/plotsController');

router.post('/:id/plots', addPlotsToScheme);
router.get('/:id/plots', getPlotsByScheme);

module.exports = router;