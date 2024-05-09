import { injectable, inject } from 'inversify'
import { BasicToken } from './models/basic-token.model'
import { ITokenDataAccess } from '../interfaces/token.interfaces'
import TOKEN_TYPES from '../token-types'
import { BASIC_TOKENS } from './utils/constants'
import { IBasicTokenRepository } from './basic-token.interfaces'

@injectable()
export class BasicTokenRepository implements IBasicTokenRepository {
    constructor(
        @inject(TOKEN_TYPES.ITokenDataAccess)
        private dataAccess: ITokenDataAccess,
    ) {}

    async add(token: BasicToken): Promise<BasicToken> {
        return await this.dataAccess.newToken(BASIC_TOKENS, token)
    }

    async findAll(): Promise<BasicToken[]> {
        return await this.dataAccess.allTokens(BASIC_TOKENS)
    }

    async findById(id: number): Promise<BasicToken> {
        return await this.dataAccess.tokenById(BASIC_TOKENS, id)
    }

    async findMaxId(): Promise<number> {
        return await this.dataAccess.maxId(BASIC_TOKENS)
    }
}
