const {mysqlTable, serial, text, int} = require('drizzle-orm/mysql-core');

const plots = mysqlTable('plots', {
  id: serial('id').primaryKey(),
  plotting_id: int('plotting_id').notNull(),
  plot_number: text('plot_number').notNull(),
  size: text('size'), // e.g., 30x40
  price: text('price'),
  status: text('status') // available, sold, reserved
});

module.exports = { plots };
