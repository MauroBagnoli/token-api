import { Pool } from 'pg';

export class DatabasePool {
    private static instance: Pool;

    private constructor() { }

    public static getPool(): Pool {
        if (!DatabasePool.instance) {
            DatabasePool.instance = new Pool({
                connectionString: process.env.DB_SOURCE,
            });
        }
        return DatabasePool.instance;
    }
}
