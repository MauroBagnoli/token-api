import "reflect-metadata";
import request from 'supertest';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { mock, instance, when, anything } from 'ts-mockito';
import TOKEN_TYPES from '../../../core/tokens/token-types';
import express, { Application } from 'express';
import { BasicTokenService } from "../../../core/tokens/basic-token/basic-token.service";
import './basic-token.controller';

describe('BasicTokenController', () => {
    let container: Container;
    let server: InversifyExpressServer;
    let app: Application;
    let basicTokenServiceMock: BasicTokenService;

    beforeEach(() => {
        container = new Container();
        server = new InversifyExpressServer(container);

        basicTokenServiceMock = mock(BasicTokenService);
        container.bind<BasicTokenService>(TOKEN_TYPES.BasicTokenService).toConstantValue(instance(basicTokenServiceMock));

        server.setConfig((app) => {
            app.use(express.json()); // Middleware to parse JSON
        });

        app = server.build();

        // Setup your mocks here, for example:
        when(basicTokenServiceMock.createToken(anything())).thenResolve({
            id: 1,
            name: 'Basic Token',
            ticker: 'BT',
            description: 'Description of basic token',
        });
    });

    test('POST /tokens/basic should create a token', async () => {
        const tokenData = {
            name: 'Basic Token',
            ticker: 'BT',
            description: 'A simple description'
        };

        const response = await request(app)
            .post('/tokens/basic')
            .send(tokenData)
            .expect(201)
            .expect('Content-Type', /json/);

        expect(response.body).toEqual({
            id: 1,
            name: 'Basic Token',
            ticker: 'BT',
            description: 'Description of basic token'
        });
    });

    test('POST /tokens/basic should handle errors', async () => {
        const tokenData = {
            name: 'Basic Token',
            ticker: 'BT',
            description: 'A simple description'
        };

        when(basicTokenServiceMock.createToken(anything())).thenThrow(new Error('Something went wrong'));

        await request(app)
            .post('/tokens/basic')
            .send(tokenData)
            .expect(500)
            .expect('Content-Type', /json/)
            .expect({ error: 'Something went wrong' });
    });
});
