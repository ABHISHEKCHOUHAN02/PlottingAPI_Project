const { eq } = require('drizzle-orm');
const db = require('../db');
const { plotting } = require('../models/plotting');


// creating new schema
const createPlottingScheme = async (req, res) => {
  try {
    const data = req.body;
    
    const result = await db.insert(plotting).values({
      ...data,
      created_at: new Date(),
      updated_at: new Date()
    });
    res.status(201).json({ message: 'Plotting scheme created', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllSchemes = async (req, res) => {
  const result = await db.select().from(plotting);
  res.json(result);
};

const getSchemeById = async (req, res) => {
  const { id } = req.params;
  const result = await db.select().from(plotting).where(eq(plotting.id, id));
  if (result.length === 0) return res.status(404).json({ error: 'Scheme not found' });
  res.json(result[0]);
};

const updatePlottingScheme = async (req, res) => {
  const { id } = req.params;
  await db.update(plotting)
    .set({ ...req.body, updated_at: new Date() })
    .where(eq(plotting.id, id));
  res.json({ message: 'Updated' });
};

const deletePlottingScheme = async (req, res) => {
  const { id } = req.params;
  await db.delete(plotting).where(eq(plotting.id, id));
  res.json({ message: 'Deleted' });
};

const filterPlottingSchemes = async (req, res) => {
  const result = await db.select().from(plotting); // add filters if needed
  res.json(result);
};

const searchPlottingSchemes = async (req, res) => {
  const { keyword } = req.query;
  if (!keyword) return res.json([]);
  const result = await db.select().from(plotting); // naive filter
  const filtered = result.filter(p =>
    p.plot_name.toLowerCase().includes(keyword.toLowerCase()) ||
    p.builder_name.toLowerCase().includes(keyword.toLowerCase())
  );
  res.json(filtered);
};

module.exports = {
  createPlottingScheme,
  getAllSchemes,
  getSchemeById,
  updatePlottingScheme,
  deletePlottingScheme,
  filterPlottingSchemes,
  searchPlottingSchemes
};
