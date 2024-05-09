import { injectable, inject } from 'inversify'
import { ITokenDataAccess } from '../interfaces/token.interfaces'
import TOKEN_TYPES from '../token-types'
import { COMPLEX_TOKENS } from './utils/constants'
import { ComplexToken } from './models/complex-token.model'
import { IComplexTokenRepository } from './complex-token.interfaces'

@injectable()
export class ComplexTokenRepository implements IComplexTokenRepository {
    constructor(
        @inject(TOKEN_TYPES.ITokenDataAccess)
        private dataAccess: ITokenDataAccess,
    ) {}

    async add(token: ComplexToken): Promise<ComplexToken> {
        return await this.dataAccess.newToken(COMPLEX_TOKENS, token)
    }

    async findAll(): Promise<ComplexToken[]> {
        return await this.dataAccess.allTokens(COMPLEX_TOKENS)
    }

    async findById(id: number): Promise<ComplexToken> {
        return await this.dataAccess.tokenById(COMPLEX_TOKENS, id)
    }

    async findMaxId(): Promise<number> {
        return await this.dataAccess.maxId(COMPLEX_TOKENS)
    }
}
