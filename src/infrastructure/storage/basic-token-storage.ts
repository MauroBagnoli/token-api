import { Pool } from 'pg'
import { injectable } from 'inversify'
import { ITokenDataAccess } from '../../core/tokens/interfaces/token.interfaces'
import { DatabasePool } from './db-pool'
import { BasicToken } from 'src/core/tokens/basic-token/models/basic-token.model'

@injectable()
export class BasicTokenStorage implements ITokenDataAccess {
    private pool: Pool

    constructor() {
        this.pool = DatabasePool.getPool()
    }

    async newToken(tableName: string, tokenData: BasicToken): Promise<BasicToken> {
        const query = `INSERT INTO ${tableName}(name, ticker, description) VALUES ($1, $2, $3) RETURNING *`
        const values = [tokenData.name, tokenData.ticker, tokenData.description]
        const result = await this.pool.query(query, values)
        return result.rows[0]
    }

    async allTokens(tableName: string): Promise<BasicToken[]> {
        const query = `SELECT * FROM ${tableName}`
        const result = await this.pool.query(query)
        return result.rows
    }

    async tokenById(tableName: string, id: number): Promise<BasicToken> {
        const query = `SELECT * FROM ${tableName} WHERE id = $1`
        const result = await this.pool.query(query, [id])
        return result.rows[0]
    }

    async maxId(tableName: string): Promise<number> {
        const query = `SELECT MAX(id) as maxId FROM ${tableName}`
        const result = await this.pool.query(query)
        return result.rows[0].maxId || 0
    }
}
