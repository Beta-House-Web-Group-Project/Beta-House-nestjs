
Name ------ ID

Yohannes Ahunm ------ UGR/4045/13

Yohannes Bekele ------ UGR/3361/13

Dawit Minale ------ UGR/7990/13

Gelila Tefera ------ UGR/9453/13

Rediet Haileab ------ UGR/9422/13

We created a REST API accordingly for two features that are buying and renting events/pages. We added GET operation for the customer user to access these API resources. And for the admin, he/she can create, delete, update and also see resources. From this, it can be analyzed that our project has full CRUD (Create, Read, Update and Delete) capabilities.

The interface for the customer user and the admin is different after they signed in. Firstly, the customer user can sign up. After signing up correctly, the system leads him directly to buy page so he can show the houses that are listed there. But, for the admin case different scenario is applied. The admin has his own password and he can only access that admin page. 

After completing the sign in process correctly, he can directly access the admin page. Then there, he can show all he houses listed. And if he wants, he can update, delete, and add new houses. In our project, best RESTful API practices are used and correctly analyzed. We have also modularized our REST API. We used separate module for the two features. Our application also has JWT Token based Authentication. 

We chose MongoDB as a database technology for our application. We have a number of reasons for choosing MongoDB. These are:  
1.	Scalability: MongoDB is designed to scale easily, both vertically and horizontally. This means that it can handle large amounts of data and high levels of traffic without performance issues for our application.

2.	Flexibility: MongoDB is a document-based NoSQL database, which means it is very flexible in terms of data modeling. This can be especially useful in a real estate website project where we may need to store and retrieve various types of data such as property listings, images, and user information.

3.	Integration: NestJS has built-in support for MongoDB through its official module, making it easy to integrate MongoDB into our project.

4.	Overall, we chose MongoDB for our real estate website project with NestJS due to its scalability, flexibility, performance, integration, and community support.








<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
