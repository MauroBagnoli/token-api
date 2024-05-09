import "reflect-metadata";
import { BasicToken } from "../models/basic-token.model";
import { mock, instance, when, verify } from "ts-mockito";
import { BasicTokenPersistenceStrategy } from "./basic-token-persistence.strategy";
import { IBasicTokenRepository } from "../../interfaces/token.interfaces";

describe("BasicTokenPersistenceStrategy", () => {
    let tokenRepoMock: IBasicTokenRepository;
    let persistenceStrategy: BasicTokenPersistenceStrategy;
    let testToken: BasicToken;

    beforeEach(() => {
        // Mock the repository
        tokenRepoMock = mock<IBasicTokenRepository>();

        // Create an instance of the strategy with the mocked repository
        persistenceStrategy = new BasicTokenPersistenceStrategy(instance(tokenRepoMock));

        // Set up test data
        testToken = new BasicToken(1, "Basic Token", "BT", "Description of basic token");

        // Define behavior for the mocked repository
        when(tokenRepoMock.add(testToken)).thenResolve(testToken);
    });

    test("should persist the token using the repository and return it", async () => {
        const result = await persistenceStrategy.persist(testToken);

        // Verify that the repository's add method was called exactly once with the test token
        verify(tokenRepoMock.add(testToken)).once();

        // Assert that the returned token is the same as the one passed to persist
        expect(result).toBe(testToken);
    });
});
