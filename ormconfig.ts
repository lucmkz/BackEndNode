module.exports = {
  type: process.env.DEV_DB_TYPE,
  url: process.env.DATABASE_URL,
  entities: ['dist/src/models/*.js'],
  migrations: ['dist/src/database/migrations/*.js'],
  cli: {
    migrationsDir: './src/database/migrations/',
  },
};
