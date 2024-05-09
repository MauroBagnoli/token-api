import { BasicToken } from "./models/basic-token.model";
import { BasicTokenArgs } from "./models/basic.token.args";

export interface IBasicTokenRepository {
    add(token: BasicToken): Promise<BasicToken>;
    // TODO: args: BasicTokenArgs stretch
    findAll(): Promise<BasicToken[]>;
    findById(tokenId: number): Promise<BasicToken | null>;
    findMaxId(): Promise<number | null>;
}