import { inject, injectable } from "inversify";
import { ITokenPersistenceStrategy } from "../../interfaces/token.interfaces";
import TOKEN_TYPES from "../../token-types";
import { IBasicTokenRepository } from "../types";
import { BasicToken } from "../models/basic-token.model";

@injectable()
export class BasicTokenPersistenceStrategy implements ITokenPersistenceStrategy<BasicToken> {
    constructor(@inject(TOKEN_TYPES.BasicTokenRepository) private tokenRepo: IBasicTokenRepository) { }

    async persist(token: BasicToken): Promise<BasicToken> {
        // Persist the token using the BasicTokenRepository
        return this.tokenRepo.add(token);
    }
}
