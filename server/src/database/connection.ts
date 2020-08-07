import Knex from 'knex';
import {resolve} from 'path';
const db = Knex({
  client: 'sqlite3',
  connection: {
    filename: resolve(__dirname, 'db.sqlite'),
  },
  useNullAsDefault: true,
});

export default db;