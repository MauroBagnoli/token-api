import { inject, injectable } from 'inversify'
import { ITokenPersistenceStrategy } from '../../interfaces/token.interfaces'
import TOKEN_TYPES from '../../token-types'
import { BasicToken } from '../models/basic-token.model'
import { IBasicTokenRepository } from '../basic-token.interfaces'

@injectable()
export class BasicTokenPersistenceStrategy implements ITokenPersistenceStrategy<BasicToken> {
    constructor(
        @inject(TOKEN_TYPES.BasicTokenRepository)
        private tokenRepo: IBasicTokenRepository,
    ) {}

    async persist(token: BasicToken): Promise<BasicToken> {
        return this.tokenRepo.add(token)
    }
}
