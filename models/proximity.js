const { mysqlTable, serial, text, int, decimal} = require('drizzle-orm/mysql-core');

const proximity = mysqlTable('proximity', {
  id: serial('id').primaryKey(),
  plotting_id: int('plotting_id').notNull(),
  category: text('category'), // Metro, Airport, School, etc.
  name: text('name'),
  distance_km: decimal('distance_km', { precision: 5, scale: 2 })
});

module.exports = { proximity };
