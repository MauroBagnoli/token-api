---

# Backend Token Management System

## Overview

This system provides a robust API for managing different types of tokens in the cryptocurrency industry, leveraging the flexibility of interfaces to handle multiple token types while maintaining centralized control and streamlined business logic.

## Table of Contents

- [Installation](#installation)
- [Operation](#operation)
- [Stack](#stack)
- [Architectural Decisions](#architectural-decisions)
- [Token Overview](#token-overview)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)

## Installation

### Prerequisites

- Node.js
- PostgreSQL
- A suitable node version manager such as `nvm`

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/MauroBagnoli/token-api.git
   ```
2. Navigate into the project directory:
   ```bash
   cd token-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env to match your local setup
   ```
5. Run dockerized database:
   ```bash
   make postgres
   ```
5. Create Database:
   ```bash
   make createdb
   ```
7. Run migrations:
   ```bash
   npm run migrate up
   ```

### Starting the Server

```bash
npm run start
```

### Running Tests

```bash
npm test
```

### Stack and Tools

- **Express.js**: Node.js web application framework.
- **TypeScript**: JavaScript superset with static typing.
- **PostgreSQL**: Open source object-relational database system.
- **InversifyJS**: Inversion of control container for JavaScript & Node.js powered by TypeScript.
- **Joi**: Schema description language and data validator for JavaScript.

### Testing and Development Tools

- **Jest**: JavaScript testing framework.
- **Supertest**: Library for testing HTTP servers.
- **ts-mockito**: TypeScript mocking library.
- **ESLint**: Static analysis tool for JavaScript and TypeScript.
- **Prettier**: Code formatter.
- **TypeDoc**: Documentation generator for TypeScript projects.
- **ts-jest**: Jest transformer with source map support for TypeScript.
- **Node-PG-Migrate**: Migration tool for PostgreSQL databases.

### Configuration Files

- **Jest**: Configures testing settings and environment.
- **ESLint**: Manages linting rules for the project.
- **Prettier**: Defines code formatting rules.
- **TypeScript (`tsconfig.json`)**: Configures TypeScript compiler options.

### Environment Management

- **dotenv**: Manages environment variables from `.env` files.

## Architectural Decisions

### Dependency Injection

InversifyJS enhances our architecture by facilitating the decoupling of components and adjusting the direction of dependencies. This flexibility allows seamless integration with various databases or communication controllers, promoting a more scalable and maintainable codebase.

### Modular Structure

Each token type (basic, complex) is handled in its dedicated module under `src/core/tokens`, which supports scalability and maintainability.

## Token Overview

Tokens in cryptocurrency often need flexible yet robust management systems. This project abstracts token functionalities to interfaces, allowing for easy expansion and management of various token types without altering core business logic.

## API Documentation

Refer to `src/api/controllers/tokens` for detailed endpoint documentation and how to interact with the token services.

## Contributing

Contributions are welcome! Please refer to CONTRIBUTING.md for guidelines on how to make a contribution.

---

This README structure provides a comprehensive guide to setting up, operating, and understanding the architecture and purpose of your token management system. You can expand each section with more details and specific examples as needed.
