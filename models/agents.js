const { mysqlTable, serial, text } = require('drizzle-orm/mysql-core');

const agents = mysqlTable('agents', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  established_in: text('established_in'),
  total_projects: text('total_projects'),
  profile_img: text('profile_img'),
  logo: text('logo'),
  about: text('about')
});

module.exports = { agents };
