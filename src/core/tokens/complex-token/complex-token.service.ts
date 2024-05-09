import { injectable, inject } from 'inversify'
import {
    ITokenFactory,
    ITokenPersistenceStrategy,
    ITokenService,
} from '../interfaces/token.interfaces'
import TOKEN_TYPES from '../token-types'
import { ComplexTokenCreateDTO } from './models/dto/requests/create-token.dto'
import { ComplexToken } from './models/complex-token.model'
import { IComplexTokenRepository } from './types'

@injectable()
export class ComplexTokenService
    implements ITokenService<ComplexToken, ComplexTokenCreateDTO>
{
    private tokenFactory: ITokenFactory
    private tokenPersistenceStrategy: ITokenPersistenceStrategy<ComplexToken>
    private tokenRepository: IComplexTokenRepository

    constructor(
        @inject(TOKEN_TYPES.TokenFactory) tokenFactory: ITokenFactory,
        @inject(TOKEN_TYPES.ComplexTokenPersistenceStrategy)
        tokenPersistenceStrategy: ITokenPersistenceStrategy<ComplexToken>,
        @inject(TOKEN_TYPES.ComplexTokenRepository)
        tokenRepository: IComplexTokenRepository,
    ) {
        this.tokenFactory = tokenFactory
        this.tokenPersistenceStrategy = tokenPersistenceStrategy
        this.tokenRepository = tokenRepository
    }

    async createToken(data: ComplexTokenCreateDTO): Promise<ComplexToken> {
        const token = await this.tokenFactory.createComplexToken(data)
        return this.tokenPersistenceStrategy.persist(token)
    }

    async getTokens(): Promise<ComplexToken[]> {
        return this.tokenRepository.findAll()
    }
}
