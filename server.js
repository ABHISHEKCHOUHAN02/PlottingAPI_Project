const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// Route imports
const plottingRoutes = require('./routes/plottingRoutes');
const plotsRoutes = require('./routes/plotsRoutes');
const amenitiesRoutes = require('./routes/amenitiesRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const proximityRoutes = require('./routes/proximityRoutes');
const agentsRoutes = require('./routes/agentsRoutes');

// Mount routes
app.use('/api/plotting', plottingRoutes);
app.use('/api/plotting', plotsRoutes);
app.use('/api/plotting', amenitiesRoutes);
app.use('/api/plotting', mediaRoutes);
app.use('/api/plotting', proximityRoutes);
app.use('/api/agents', agentsRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Plotting Scheme API is running');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
