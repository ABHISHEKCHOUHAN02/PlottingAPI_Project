const { mysqlTable, serial, text, int} = require('drizzle-orm/mysql-core');

const amenities = mysqlTable('amenities', {
  id: serial('id').primaryKey(),
  plotting_id: int('plotting_id').notNull(), // Foreign key
  category: text('category').notNull(), // Security, Recreation, Utility
  name: text('name').notNull()
});

module.exports = { amenities };
