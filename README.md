<h1>League of Nest</h1>
<p>Acesso a documentação: </p> <a href="https://league-of-nest.onrender.com/api" target="_blank">League of Nest<a>

##

## Description

Projeto proposto pela [Blue Editech](https://www.linkedin.com/school/blue-edtech/) e inspirado em [League of Legends](https://www.leagueoflegends.com/pt-br/), feito em NodeJS e utilizando o NestJS como framework. A plataforma permite ao usuário realizar login com autenticação JWT, relacionar e parmanecer os dados com Prisma e  PostgreSQL. Podemos manipular cada entidade, (User, Champion e Duty) fazendo CRUD completo, desde que usuário esteja logado, exceto o CRUD de User, em que apenas o Administrador tem acesso, com a "role" de admin.

## Entidades

![ENTIDADES](https://user-images.githubusercontent.com/97140028/207182665-4a464976-8191-46dc-94de-422a7e1339c6.png)

## Requisitos

<ul>
    <li>Validação de dados em todos os endpoints com class-validator;</li>
    <li>Status Code corretos em todos os endpoints;</li>
    <li>Persistência de Dados no SQL com Prisma;</li>
    <li>Formatação do código utilizando o Prettier/ESLint;</li>
    <li>Documentação dos endpoints com Swagger;</li>
    <li>Diagrama de relacionamentos do banco de dados;</li>
    <li>Cors habilitado;</li>
    <li>Deploy do projeto;</li>
    <li>Deploy do banco de dados.</li>
</ul>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Author

- Linkedin - [David Diniz Dos Santos](https://www.linkedin.com/in/david-dev-/)

## License

Nest is [MIT licensed](LICENSE).
