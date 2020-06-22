module.exports = {
  type: process.env.DEV_DB_TYPE,
  host: process.env.DEV_DB_HOST,
  port: process.env.DEV_DB_PORT,
  username: process.env.DEV_DB_USERNAME,
  password: process.env.DEV_DB_PASSWORD,
  database: process.env.DEV_DB_DBNAME,
  entities: ['./src/models/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations/',
  },
};
