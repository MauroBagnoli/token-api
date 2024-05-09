import { inject, injectable } from 'inversify'
import { ITokenPersistenceStrategy } from '../../interfaces/token.interfaces'
import { ComplexToken } from '../models/complex-token.model'
import { IComplexTokenRepository } from '../complex-token.interfaces'
import TOKEN_TYPES from '../../token-types'

@injectable()
export class ComplexTokenPersistenceStrategy implements ITokenPersistenceStrategy<ComplexToken> {
    constructor(
        @inject(TOKEN_TYPES.ComplexTokenRepository)
        private tokenRepo: IComplexTokenRepository,
    ) {}

    async persist(token: ComplexToken): Promise<ComplexToken> {
        // Persist the token using the ComplexTokenRepository
        return this.tokenRepo.add(token)
    }
}
