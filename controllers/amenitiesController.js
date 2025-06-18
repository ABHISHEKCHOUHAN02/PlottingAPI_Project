const { eq } = require('drizzle-orm');
const db = require('../db');
const { amenities } = require('../models/amenities');


const addAmenitiesToScheme = async (req, res) => {
  const { id } = req.params;
  const { amenities: amenityArray } = req.body;
  const data = amenityArray.map(a => ({ ...a, plotting_id: id }));
  await db.insert(amenities).values(data);
  res.json({ message: 'Amenities added' });
};

const getAmenitiesByScheme = async (req, res) => {
  const { id } = req.params;
  const result = await db.select().from(amenities).where(eq(amenities.plotting_id, id));
  res.json(result);
};

module.exports = {
  addAmenitiesToScheme,
  getAmenitiesByScheme
};