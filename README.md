

<h1>League of Nest</h1>
<p>Acesso a documentação: </p> https://league-of-nest.onrender.com/api

##


## Description
<p>Projeto feito em NodeJS, utilizando o Nest como framework. A plataforma permite ao usuário realizar login com autenticação JWT, relacionar usuários aos campeões e os campeões a suas respectivas funções. Cada entidade, (User, Champion e Duty) permite CRUD completo desde que usuário esteja logado, exceto o CRUD de Users, em que apenas o Administrador tem acesso.</p>

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

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
