import { Container } from "inversify";
import "reflect-metadata";
import TOKEN_TYPES from "../core/tokens/token-types";
import CONTROLLER_TOKEN_TYPES from "../api/controllers/tokens/types"

import {
    IBasicTokenRepository,
    ITokenDataAccess,
    ITokenFactory,
    ITokenPersistenceStrategy,
    ITokenService,
} from "../core/tokens/interfaces/token.interfaces";
import { TokenFactory } from "../core/tokens/token.factory";
import { BasicToken } from "../core/tokens/basic-token/models/basic-token.model";
import { ComplexToken } from "../core/tokens/complex-token/models/complex-token.model";
import { BasicTokenPersistenceStrategy } from "../core/tokens/basic-token/strategies/basic-token-persistence.strategy";
import { ComplexTokenPersistenceStrategy } from "../core/tokens/complex-token/strategies/complex-token-persistence.strategy";
import { BasicTokenStorage } from "../infrastructure/storage/basic-token-storage";
import { BasicTokenService } from "../core/tokens/basic-token/basic-token.service";
import { IBasicTokenCreateDTO } from "../core/tokens/basic-token/models/dto/requests/create-token.dto";
import { BasicTokenRepository } from "../core/tokens/basic-token/basic-token.repository";
import { ComplexTokenService } from "../core/tokens/complex-token/complex-token.service";
import { IComplexTokenResponseDto } from "../core/tokens/basic-token/models/dto/response/token-response.dto";
import { ComplexTokenRepository } from "../core/tokens/complex-token/complex-token.repository";
import { BasicTokenController } from "../api/controllers/tokens/basic/basic-token.controller";

const container = new Container();

// Binding the shared Token Factory which can create multiple types of tokens
container.bind<ITokenFactory>(TOKEN_TYPES.TokenFactory).to(TokenFactory).inSingletonScope();

// Binding token persistence strategies for different types of tokens
container.bind<ITokenPersistenceStrategy<BasicToken>>(TOKEN_TYPES.BasicTokenPersistenceStrategy).to(BasicTokenPersistenceStrategy).inSingletonScope();
container.bind<ITokenPersistenceStrategy<ComplexToken>>(TOKEN_TYPES.ComplexTokenPersistenceStrategy).to(ComplexTokenPersistenceStrategy).inSingletonScope();

// Binding the ITokenDataAccess interface to the Token implementation
container.bind<ITokenDataAccess>(TOKEN_TYPES.ITokenDataAccess).to(BasicTokenStorage).inSingletonScope();

// Service Bindings
container.bind<ITokenService<BasicToken, IBasicTokenCreateDTO>>(TOKEN_TYPES.BasicTokenService).to(BasicTokenService).inSingletonScope();
container.bind<ITokenService<ComplexToken, IComplexTokenResponseDto>>(TOKEN_TYPES.ComplexTokenService).to(ComplexTokenService).inSingletonScope();

// Repository binding
container.bind<IBasicTokenRepository>(TOKEN_TYPES.BasicTokenRepository).to(BasicTokenRepository).inSingletonScope();
container.bind<ComplexTokenRepository>(TOKEN_TYPES.ComplexTokenRepository).to(ComplexTokenRepository).inSingletonScope();

// Controller binding
container.bind<BasicTokenController>(CONTROLLER_TOKEN_TYPES.BasicTokenController).to(BasicTokenController);

export default container;
