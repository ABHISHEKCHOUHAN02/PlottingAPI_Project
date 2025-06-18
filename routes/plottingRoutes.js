// routes/plottingRoutes.js
const express = require('express');
const router = express.Router();
const {
  createPlottingScheme,
  getAllSchemes,
  getSchemeById,
  updatePlottingScheme,
  deletePlottingScheme,
  filterPlottingSchemes,
  searchPlottingSchemes
} = require('../controllers/plottingController');

router.post('/', createPlottingScheme);
router.get('/', getAllSchemes);
router.get('/search', searchPlottingSchemes);
router.get('/filter', filterPlottingSchemes);
router.get('/:id', getSchemeById);
router.put('/:id', updatePlottingScheme);
router.delete('/:id', deletePlottingScheme);

module.exports = router;

