## Backend with Nest.js & GraphQL

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

```

## Test

```bash
# unit tests
$ npm run test


## DB

### Manually remove migrations
SELECT * FROM pgmigrations ORDER BY id;
DELETE FROM pgmigrations WHERE name = '1231_selectedmigration';
```
