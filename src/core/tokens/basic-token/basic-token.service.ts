// Assuming getToken should fetch by ID, adjust as necessary

import { injectable, inject } from "inversify";
import TOKEN_TYPES from "../token-types";
import { ITokenFactory, ITokenPersistenceStrategy, ITokenService } from "../interfaces/token.interfaces";
import { BasicTokenCreateDTO } from "./models/dto/requests/create-token.dto";
import { BasicToken } from "./models/basic-token.model";
import { IBasicTokenRepository } from "./types";
import { BasicTokenResponseDto } from "./models/dto/response/token-response.dto";

@injectable()
export class BasicTokenService implements ITokenService<BasicToken, BasicTokenCreateDTO> {
    private tokenFactory: ITokenFactory;
    private tokenPersistenceStrategy: ITokenPersistenceStrategy<BasicToken>;
    private tokenRepository: IBasicTokenRepository;

    private static dto(token: BasicToken): BasicTokenResponseDto {
        return {
            id: token.id,
            name: token.name,
            ticker: token.ticker,
            description: token.description
        };
    }

    constructor(
        @inject(TOKEN_TYPES.TokenFactory) tokenFactory: ITokenFactory,
        @inject(TOKEN_TYPES.BasicTokenPersistenceStrategy) tokenPersistenceStrategy: ITokenPersistenceStrategy<BasicToken>,
        @inject(TOKEN_TYPES.BasicTokenRepository) tokenRepository: IBasicTokenRepository
    ) {
        this.tokenFactory = tokenFactory;
        this.tokenPersistenceStrategy = tokenPersistenceStrategy;
        this.tokenRepository = tokenRepository;
    }

    async createToken(data: BasicTokenCreateDTO): Promise<BasicTokenResponseDto> {
        const newToken = await this.tokenFactory.createBasicToken(data);
        const savedToken = await this.tokenPersistenceStrategy.persist(newToken);
        const tokenDto = BasicTokenService.dto(savedToken)
        return tokenDto
    }

    async getToken(id: number): Promise<BasicToken | null> {
        return this.tokenRepository.findById(id);
    }

    async getTokens(): Promise<BasicToken[]> {
        return this.tokenRepository.findAll();
    }
}
