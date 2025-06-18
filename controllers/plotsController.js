const { eq } = require('drizzle-orm');
const db = require('../db');
const { plots } = require('../models/plots');


const addPlotsToScheme = async (req, res) => {
  const { id } = req.params;
  const { plots: plotArray } = req.body;
  const data = plotArray.map(p => ({ ...p, plotting_id: id }));
  await db.insert(plots).values(data);
  res.json({ message: 'Plots added' });
};

const getPlotsByScheme = async (req, res) => {
  const { id } = req.params;
  const result = await db.select().from(plots).where(eq(plots.plotting_id, id));
  res.json(result);
};

module.exports = {
  addPlotsToScheme,
  getPlotsByScheme
};