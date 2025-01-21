<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

## Description

Backend Boilerplate using Typescript with CI/CD, IaC and Unit Tests.

## Project setup

1. Install dependencies

```bash
$ pnpm install
```

2. Duplicate `.env.example`, rename it to `.env` and fill the appropriate variables. An example configuration:

```bash
JWT_SECRET="Random Secret Do Not Use It In Production"
DATABASE_URL="file:./dev.db"
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Database

This boilerplate uses [Prisma](https://github.com/prisma/prisma) as an ORM.

```bash
# generate client code
$ pnpm run prisma:generate

# add database migration in dev
$ pnpm run prisma:migrate:dev <migration name>
```

## License

This repository is [MIT licensed](https://github.com/Vanfarock/typescript-backend-boilerplate/blob/main/LICENSE).
