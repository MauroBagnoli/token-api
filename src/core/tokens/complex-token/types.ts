import { ComplexToken } from './models/complex-token.model'

export interface IComplexTokenRepository {
    add(token: ComplexToken): Promise<ComplexToken>
    findAll(): Promise<ComplexToken[]>
    findById(tokenId: string): Promise<ComplexToken | null>
    findMaxId(): Promise<number | null>
}
