module.exports = {
  type: 'postgress',
  url: process.env.DATABASE_URL,
  entities: ['dist/src/models/*.js'],
  migrations: ['dist/src/database/migrations/*.js'],
  cli: {
    migrationsDir: './src/database/migrations/',
  },
};
