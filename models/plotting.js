const { mysqlTable, serial, text, json, timestamp } = require('drizzle-orm/mysql-core');
const { agents } = require('./agents');
//const { json } = require('drizzle-orm/gel-core');

const plotting = mysqlTable('plotting', {
  // Primary key
  id: serial('id').primaryKey(),

  // Foreign key (agent/developer)
  builder_id: serial('builder_id')
    .notNull()
    .references(() => agents.id),

  // Developer Details
  builder_name: text('builder_name').notNull(),
  established_in: text('established_in'),
  total_projects: text('total_projects'), // renamed for clarity
  profile_img: text('profile_img'), // builder's profile image
  logo: text('logo'),

  // Project Info
  plot_name: text('plot_name').notNull(), // Project name
  address: text('address').notNull(),
  coordinates: json('coordinates'), // { lat, lng }

  launch_date: text('launch_date'),
  rera_id: text('rera_id'), //Real Estate Regulatory Authority

  // Pricing & Area
  price_from: text('price_from'),
  price_to: text('price_to'),
  project_area: text('project_area'),
  plot_sizes: text('plot_sizes'), // e.g., "30x40, 40x60"

  // Media
  cover_img: text('cover_img'),
  plot_img: text('plot_img'), // thumbnail
  images: json('images'), // [{ url, caption }]
  brochure: text('brochure'),
  videos: json('videos'), // optional enhancement

  // Descriptions
  description: text('description'), // long / rich text

  // Plot Details
  plots: json('plots'), // [{ number, size, status }]
  amenities: json('amenities'), // { security: [], recreation: [], utility: [] }

  // Meta
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow()
});

module.exports = {
  plotting
};
