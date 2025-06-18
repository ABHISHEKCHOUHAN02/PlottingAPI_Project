const { eq } = require('drizzle-orm');
const db = require('../db');
const { amenities } = require('../models/media');


const addMediaToScheme = async (req, res) => {
  const { id } = req.params;
  const { media: mediaArray } = req.body;
  const data = mediaArray.map(m => ({ ...m, plotting_id: id }));
  await db.insert(media).values(data);
  res.json({ message: 'Media added' });
};

const getMediaByScheme = async (req, res) => {
  const { id } = req.params;
  const result = await db.select().from(media).where(eq(media.plotting_id, id));
  res.json(result);
};

module.exports = {
  addMediaToScheme,
  getMediaByScheme
};