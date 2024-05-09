import { BasicToken } from '../basic-token/models/basic-token.model'
import { IBasicTokenCreateDTO } from '../basic-token/models/dto/requests/create-token.dto'
import { ComplexToken } from '../complex-token/models/complex-token.model'
import { IComplexTokenCreateDTO } from '../complex-token/models/dto/requests/create-token.dto'

export interface IToken {
    id: number
    name: string
    ticker: string
    description: string
    describe(): string
}

export interface ITokenFactory {
    createBasicToken(data: IBasicTokenCreateDTO): Promise<BasicToken>
    createComplexToken(data: IComplexTokenCreateDTO): Promise<ComplexToken>
}

export interface ITokenService<T, DTO> {
    createToken(data: DTO): Promise<DTO>
    getTokens(): Promise<T[]>
}

export interface ITokenDataAccess {
    newToken(tableName: string, tokenData: any): Promise<any>
    allTokens(tableName: string): Promise<any[]>
    tokenById(tableName: string, id: number): Promise<any>
    maxId(tableName: string): Promise<number>
}

export interface ITokenPersistenceStrategy<T> {
    persist(token: T): Promise<T>
}
