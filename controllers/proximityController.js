const { eq } = require('drizzle-orm');
const db = require('../db');
const { amenities } = require('../models/proximity');

const getProximityByScheme = async (req, res) => {
  const { id } = req.params;
  const result = await db.select().from(proximity).where(eq(proximity.plotting_id, id));
  res.json(result);
};

module.exports = {
  getProximityByScheme
};
