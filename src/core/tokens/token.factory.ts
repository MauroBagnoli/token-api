import { injectable, inject } from 'inversify'

import { ComplexToken } from './complex-token/models/complex-token.model'
import TOKEN_TYPES from './token-types'
import { BasicToken } from './basic-token/models/basic-token.model'
import { IComplexTokenCreateDTO } from './complex-token/models/dto/requests/create-token.dto'
import { IBasicTokenCreateDTO } from './basic-token/models/dto/requests/create-token.dto'
import { IComplexTokenRepository } from './complex-token/complex-token.interfaces'
import { ITokenFactory } from './interfaces/token.interfaces'
import { IBasicTokenRepository } from './basic-token/basic-token.interfaces'

@injectable()
export class TokenFactory implements ITokenFactory {
    private basicTokenRepo: IBasicTokenRepository
    private complexTokenRepo: IComplexTokenRepository

    constructor(
        @inject(TOKEN_TYPES.BasicTokenRepository)
        basicTokenRepo: IBasicTokenRepository,
        @inject(TOKEN_TYPES.ComplexTokenRepository)
        complexTokenRepo: IComplexTokenRepository,
    ) {
        this.basicTokenRepo = basicTokenRepo
        this.complexTokenRepo = complexTokenRepo
    }

    async createBasicToken(params: IBasicTokenCreateDTO): Promise<BasicToken> {
        const maxId = await this.basicTokenRepo.findMaxId()
        const nextId = maxId + 1
        const token = new BasicToken(nextId, params.name, params.ticker, params.description)
        return token
    }

    async createComplexToken(params: IComplexTokenCreateDTO): Promise<ComplexToken> {
        const maxId = await this.complexTokenRepo.findMaxId()
        const nextId = maxId + 1
        const token = new ComplexToken(nextId, params.name, params.ticker, params.description, params.extraData)
        return token
    }
}
