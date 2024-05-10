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

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (for running PostgreSQL in a container)
- [nvm](https://github.com/nvm-sh/nvm) (optional, for managing Node.js versions)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MauroBagnoli/token-api.git
   cd token-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env to match your local setup
   ```

4. **Start the PostgreSQL Docker container –Make sure Docker app is running in your computer–:**
   ```bash
   make postgres
   ```

5. **Create the database (if not existing):**
   ```bash
   make createdb
   ```

6. **Run database migrations:**
   ```bash
   make migrateup
   ```

### Starting the Server

#### For Development:
Use `npm run start:dev` to start the server with `nodemon` and `ts-node`, which will automatically recompile your TypeScript files when changes are detected.

```bash
npm run start:dev
```

#### For Production:
First, compile your TypeScript files into JavaScript using the build script, and then start the server with the compiled JavaScript.

1. Compile TypeScript to JavaScript:
   ```bash
   npm run build
   ```
2. Start the server using the compiled JavaScript:
   ```bash
   npm run start
   ```

### Docker Container Management

- **Start the container:**
  ```bash
  docker start postgres12
  ```

- **Stop the container:**
  ```bash
  docker stop postgres12
  ```

- **Remove the container (if necessary):**
  ```bash
  docker rm postgres12
  ```

- **Access PostgreSQL shell:**
  ```bash
  docker exec -it postgres12 psql -U root token_app_db
  ```

This structure ensures that anyone checking your repository can get up and running with minimal prerequisites, and clearly understands the commands necessary to start the development environment. The additional Docker commands provide guidance on managing the PostgreSQL container without needing to dive deep into Docker documentation.

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
