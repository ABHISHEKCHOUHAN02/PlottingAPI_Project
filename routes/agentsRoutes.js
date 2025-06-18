const express = require('express');
const router = express.Router();
const {
  createAgent,
  getAllAgents,
  getAgentById
} = require('../controllers/agentsController');

router.post('/', createAgent);
router.get('/', getAllAgents);
router.get('/:id', getAgentById);

module.exports = router;