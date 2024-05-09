import { injectable } from 'inversify'
import { ComplexToken } from './models/complex-token.model'
import { TokenQueryOptions } from './models/complex-token.args'
import { IComplexTokenRepository } from './types'

// TODO: REMOVE AND COPY FROM BASIC TOKEN
const Token = {
    query: async (query: string) => ({ rows: [] }),
}

@injectable()
export class ComplexTokenRepository implements IComplexTokenRepository {
    async add(token: ComplexToken): Promise<ComplexToken> {
        // Implementation for adding a ComplexToken
        return Promise.resolve(token) // Simulate DB operation
    }
    async findAll(): Promise<ComplexToken[]> {
        // Implementation for adding a ComplexToken
        return Promise.resolve([]) // Simulate DB operation
    }
    async findById(id: string): Promise<ComplexToken> {
        // Implementation for adding a ComplexToken
        return Promise.resolve({
            id: 1,
            name: 'test',
            ticker: 'test',
            description: 'test',
            extraData: 'extradata',
            describe: () => '',
        }) // Simulate DB operation
    }

    async findMaxId(): Promise<number> {
        const result = await Token.query('SELECT MAX(id) as maxId FROM tokens')
        return result.rows[0].maxId || 0 // Return 0 if no tokens are found
    }
}
