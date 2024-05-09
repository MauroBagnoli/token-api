import { Pool } from 'pg'
import { config } from 'config'

export class DatabasePool {
    private static instance: Pool

    private constructor() {}

    public static getPool(): Pool {
        if (!DatabasePool.instance) {
            DatabasePool.instance = new Pool({
                connectionString: process.env.DATABASE_URL,
            })
        }
        return DatabasePool.instance
    }
}
