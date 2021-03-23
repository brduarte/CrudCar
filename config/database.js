require('dotenv').config();

module.exports = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'crudcar',
  host: process.env.DB_DATABASE || '127.0.0.1',
  dialect: 'postgres',
}
