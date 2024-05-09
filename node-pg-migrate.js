require('dotenv').config()

module.exports = {
    databaseUrl: process.env.DATABASE_URL,
    migrationsDir: './src/infrastructure/storage/migrations',
    direction: 'up',
}
