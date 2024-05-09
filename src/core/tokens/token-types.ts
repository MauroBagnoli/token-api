const TOKEN_TYPES = {
    // Factories
    TokenFactory: Symbol.for("TokenFactory"),

    // Strategies
    BasicTokenPersistenceStrategy: Symbol.for("BasicTokenPersistenceStrategy"),
    ComplexTokenPersistenceStrategy: Symbol.for("ComplexTokenPersistenceStrategy"),

    // repositories
    BasicTokenRepository: Symbol.for("BasicTokenRepository"),
    ComplexTokenRepository: Symbol.for("ComplexTokenRepository"),

    // Additional types if needed
    BasicTokenService: Symbol.for("BasicTokenService"),
    ComplexTokenService: Symbol.for("ComplexTokenService"),

    AppContext: Symbol.for("AppContext"),

    // Tokens
    ITokenDataAccess: Symbol.for("ITokenDataAccess"),
    
};

export default TOKEN_TYPES;
