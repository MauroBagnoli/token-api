import { ITokenDataAccess } from '../interfaces/token.interfaces'
import { BasicToken } from './models/basic-token.model'
import { mock, instance, when, verify } from 'ts-mockito'
import { BasicTokenRepository } from './basic-token.repository'
import { BASIC_TOKENS } from './utils/constants'

describe('BasicTokenRepository', () => {
    let dataAccessMock: ITokenDataAccess
    let basicTokenRepo: BasicTokenRepository
    let mockBasicToken: BasicToken

    beforeEach(() => {
        // Create a mock for ITokenDataAccess
        dataAccessMock = mock<ITokenDataAccess>()
        // Create an instance of BasicTokenRepository with the mocked ITokenDataAccess
        basicTokenRepo = new BasicTokenRepository(instance(dataAccessMock))

        // Setup mock token
        mockBasicToken = new BasicToken(1, 'Test Token', 'TTK', 'A test token')
    })

    test('add() should invoke dataAccess.addToken', async () => {
        when(dataAccessMock.newToken(BASIC_TOKENS, mockBasicToken)).thenResolve(mockBasicToken)

        const result = await basicTokenRepo.add(mockBasicToken)

        expect(result).toEqual(mockBasicToken)
        verify(dataAccessMock.newToken(BASIC_TOKENS, mockBasicToken)).once()
    })

    test('findAll() should retrieve tokens', async () => {
        when(dataAccessMock.allTokens(BASIC_TOKENS)).thenResolve([mockBasicToken])

        const result = await basicTokenRepo.findAll()

        expect(result).toEqual([mockBasicToken])
        verify(dataAccessMock.allTokens(BASIC_TOKENS)).once()
    })

    test('findById() should return a specific token', async () => {
        when(dataAccessMock.tokenById(BASIC_TOKENS, 1)).thenResolve(mockBasicToken)

        const result = await basicTokenRepo.findById(1)

        expect(result).toEqual(mockBasicToken)
        verify(dataAccessMock.tokenById(BASIC_TOKENS, 1)).once()
    })

    test('findMaxId() should return the highest id', async () => {
        when(dataAccessMock.maxId(BASIC_TOKENS)).thenResolve(10)

        const result = await basicTokenRepo.findMaxId()

        expect(result).toBe(10)
        verify(dataAccessMock.maxId(BASIC_TOKENS)).once()
    })
})
