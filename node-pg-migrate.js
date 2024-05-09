require('dotenv').config();

module.exports = {
    databaseUrl: process.env.DB_SOURCE,
    migrationsDir: './src/infrastructure/storage/migrations',
    direction: 'up'
};
