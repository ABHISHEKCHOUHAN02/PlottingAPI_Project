const { mysqlTable, serial, text, int } = require('drizzle-orm/mysql-core');

const media = mysqlTable('media', {
  id: serial('id').primaryKey(),
  plotting_id: int('plotting_id').notNull(),
  type: text('type').notNull(), // image, video, brochure
  url: text('url').notNull(),
  caption: text('caption')
});

module.exports = { media };
