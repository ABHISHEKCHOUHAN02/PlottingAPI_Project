// controllers/agentsController.js
const { eq } = require('drizzle-orm');
const db = require('../db');
const { agents } = require('../models/agents');

// Create a new agent
const createAgent = async (req, res) => {
  try {
    const data = req.body;
    const result = await db.insert(agents).values(data);
    res.status(201).json({ message: 'Agent created', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all agents
const getAllAgents = async (req, res) => {
  try {
    const result = await db.select().from(agents);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get agent by ID
const getAgentById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.select().from(agents).where(eq(agents.id, id));
    if (result.length === 0) return res.status(404).json({ error: 'Agent not found' });
    res.json(result[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createAgent,
  getAllAgents,
  getAgentById
};