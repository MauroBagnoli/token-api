import { Container } from 'inversify'

declare module 'express-serve-static-core' {
    export interface Request {
        container: Container
    }
}
