module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
    moduleNameMapper: {
        '@basic-models/(.*)': '<rootDir>/src/basic-token/models/$1',
        '@complex-models/(.*)': '<rootDir>/src/complex-token/models/$1',
        '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    },
}
