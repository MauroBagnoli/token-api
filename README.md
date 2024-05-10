---

# Backend Token Management System

## Overview

This system provides a robust API for managing different types of tokens in the cryptocurrency industry. It leverages the flexibility of interfaces to handle multiple token types while maintaining centralized control and streamlined business logic.

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
- [Docker](https://www.docker.com/) (optional, for running PostgreSQL in a container)
- [nvm](https://github.com/nvm-sh/nvm) (optional, for managing Node.js versions)
- [cross-env](https://www.npmjs.com/package/cross-env) (recommended for Windows users)

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
   # Edit .env to reflect your configuration
   ```

4. **Database Configuration:**

   **Option A: Using Docker for PostgreSQL**
   
   - Ensure Docker is running on your machine.
   - Start the PostgreSQL Docker container:
     ```bash
     make postgres
     ```

   **Option B: Using an existing PostgreSQL installation**
   
   - Ensure your `DATABASE_URL` in the `.env` file points to your existing PostgreSQL server:
     ```plaintext
     DATABASE_URL=postgresql://username:password@hostname:port/database_name
     ```

5. **Create the database (if not existing):**
   ```bash
   make createdb
   ```

6. **Run database migrations:**
   
   For Windows users, ensuring environment variables are handled correctly:
   ```bash
   npm run migrate
   ```

   **For Windows, define the `migrate` script using `cross-env` to handle environment variables:**
   ```json
   "scripts": {
     "migrate": "cross-env DATABASE_URL=postgresql://root:admin@localhost:5432/token_app_db node-pg-migrate -m './src/infrastructure/storage/migrations'"
   }
   ```
   This modification uses `cross-env` to set the `DATABASE_URL` which ensures compatibility across different operating systems, particularly addressing issues on Windows where setting environment variables might not work as expected directly in the command line.

### Notes on Environment Variables

- When running scripts that require environment variables, Windows users may encounter issues with variables not being recognized. Using `cross-env` as shown above can resolve these issues by correctly setting environment variables across different command line environments.

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
  make 
  ```

- **Remove the container (if necessary):**
  ```bash
  make removepgimage
  ```

- **Access PostgreSQL shell:**
  ```bash
   make dbshell
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

InversifyJS enhances our architecture by facilitating the decoupling of components and adjusting the direction of dependencies. This flexibility allows seamless integration with various databases or communication controllers, promoting a more scalable, flexible and maintainable codebase.

### Modular Structure

Each token type (basic, complex) is handled in its dedicated module under `src/core/tokens`, which allows them to evolve separatedy while sharing
a common inteface.

## Token Overview

Tokens in the cryptocurrency realm embody a broad spectrum of functionalities and characteristics, often necessitating flexible yet robust management systems to handle their complexities efficiently. This project strategically abstracts the functional elements of tokens into interfaces, a design choice that enhances modularity and adaptability. By encapsulating token functionalities within well-defined interfaces, the system supports easy expansion and integration of diverse token types.

### Prioritizing Business Logic

The architecture of this system places a strong emphasis on business logic, ensuring that it remains at the forefront of the development process. By segregating token functionalities and encapsulating them in interfaces, core business logic is insulated from the volatility and variability inherent in the cryptocurrency market. This approach not only preserves the integrity of the business processes but also simplifies maintenance and scalability.

The separation of concerns achieved through this abstraction allows developers to focus on refining the business logic without being encumbered by the underlying technical complexities of different token types. This prioritization ensures that the core functionalities of the system are robust, reliable, and responsive to the needs of the business, providing a solid foundation upon which additional features and token types can be built.

Facilitating Evolutionary Development
The use of interfaces in managing token functionalities inherently supports evolutionary development. As the cryptocurrency landscape evolves, new types of tokens and token-related technologies emerge. The system’s design accommodates these advancements by allowing new token types to be integrated seamlessly without disrupting existing operations. This flexibility is vital for staying relevant and competitive in the fast-paced and ever-changing cryptocurrency environment.

Moreover, this architectural approach provides a framework that is conducive to experimentation and innovation. Developers can introduce and test new token functionalities or business processes in a controlled and modular fashion. Each interface serves as a plug-and-play component, which can be improved, replaced, or extended independently.

## API Documentation

### Generating Documentation

This project uses [TypeDoc](http://typedoc.org/) to generate HTML documentation for the TypeScript source code. TypeDoc reads the comments in the source code and generates an HTML documentation website.

**To generate the documentation:**

1. Ensure that all dependencies are installed:
   ```bash
   npm install
   ```

2. Run the documentation script:
   ```bash
   npm run docs
   ```

   This command will generate a `docs` directory in the root of the project, containing the HTML files of the generated documentation.

### Viewing Documentation

After generating the documentation, you can view it by opening the HTML files in a web browser. The easiest way to do this is to open the `index.html` file located in the `docs` folder.

**Steps to view the documentation:**

1. Navigate to the `docs` directory in the project root.
2. Open the `index.html` file in a web browser. For example, if you are using Google Chrome, you can open a new tab and use the "Open File" option to navigate to and select the `index.html` file.

Alternatively, for a better viewing experience, you can serve the documentation locally using a simple HTTP server:

- If you have Python installed, you can start an HTTP server in the `docs` directory by running one of the following commands:

  **Python 3.x:**
  ```bash
  python -m http.server
  ```

  **Python 2.x:**
  ```bash
  python -m SimpleHTTPServer
  ```

- Visit `http://localhost:8000` in your web browser to view the documentation.

### Documentation Guidelines

When writing new code or modifying existing code, please ensure that you update or add comments that TypeDoc can use to generate updated documentation. This practice helps keep the documentation useful and up-to-date for all developers.

---
