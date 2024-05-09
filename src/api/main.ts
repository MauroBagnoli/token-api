import 'reflect-metadata';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import container from '../config/inversify.config';
import 'dotenv/config';

// Load all controllers for binding
import './controllers/tokens/basic/basic-token.controller'; // Adjust the path as needed

// Create an instance of InversifyExpressServer and pass the configured container
const server = new InversifyExpressServer(container, null, { rootPath: '/api/v1' });

// Additional express setup
server.setConfig((app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
});

const app = server.build();

app.get('/status', (_, res) => {
    res.send('server working!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
