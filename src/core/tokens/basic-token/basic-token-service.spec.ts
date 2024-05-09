import "reflect-metadata";
import { ITokenFactory, ITokenPersistenceStrategy } from "../interfaces/token.interfaces";
import { BasicToken } from "./models/basic-token.model";
import { mock, instance, when, verify } from "ts-mockito";
import { IBasicTokenRepository } from "./types";
import { BasicTokenService } from "./basic-token.service";
import { BasicTokenCreateDTO } from "./models/dto/requests/create-token.dto";

describe("BasicTokenService", () => {
    let tokenFactoryMock: ITokenFactory;
    let tokenPersistenceStrategyMock: ITokenPersistenceStrategy<BasicToken>;
    let basicTokenRepositoryMock: IBasicTokenRepository;
    let tokenService: BasicTokenService;
    let tokenData: BasicTokenCreateDTO;
    let mockToken: BasicToken;

    beforeEach(() => {
        tokenFactoryMock = mock<ITokenFactory>();
        tokenPersistenceStrategyMock = mock<ITokenPersistenceStrategy<BasicToken>>();
        basicTokenRepositoryMock = mock<IBasicTokenRepository>();

        // Create an instance of the service with mocked dependencies
        tokenService = new BasicTokenService(
            instance(tokenFactoryMock),
            instance(tokenPersistenceStrategyMock),
            instance(basicTokenRepositoryMock)
        );

        // Setup test data
        tokenData = { name: "Basic Token", ticker: "BT", description: "test" };
        mockToken = new BasicToken(1, "Basic Token", "BT", "Description of basic token");

        // Setup mock behavior
        when(tokenFactoryMock.createBasicToken(tokenData)).thenResolve(mockToken);
        when(tokenPersistenceStrategyMock.persist(mockToken)).thenResolve(mockToken);
    });

    test("should create and persist a BasicToken", async () => {
        const result = await tokenService.createToken(tokenData);

        // Verify the factory was called to create the token
        verify(tokenFactoryMock.createBasicToken(tokenData)).once();

        // Verify the token was persisted using the strategy
        verify(tokenPersistenceStrategyMock.persist(mockToken)).once();

        // Assert that the result is as expected
        expect(result).toEqual(mockToken);
    });
});
