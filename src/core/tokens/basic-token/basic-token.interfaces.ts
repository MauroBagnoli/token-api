import { BasicToken } from './models/basic-token.model'

export interface IBasicTokenRepository {
    add(token: BasicToken): Promise<BasicToken>
    findAll(): Promise<BasicToken[]>
    findById(tokenId: number): Promise<BasicToken | null>
    findMaxId(): Promise<number | null>
}
