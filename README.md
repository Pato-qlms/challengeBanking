<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
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
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Challenge Interbanking

Este proyecto es una aplicación backend desarrollada en NestJS utilizando una arquitectura hexagonal. La aplicación está diseñada para interactuar con MongoDB, gestionando diversas entidades y operaciones a través de controladores, servicios y repositorios, mientras que separa las preocupaciones de infraestructura y lógica de negocio. Se ha dockerizado para facilitar su ejecución en cualquier entorno, utilizando Docker Compose para orquestar los contenedores, lo que permite que la aplicación se ejecute de manera consistente y escalable.

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos 📋

Antes de empezar, asegúrate de tener las siguientes herramientas instaladas:

- **Node.js**: Instalar Node.js desde el sitio web oficial.
- **Docker**: Instalar Docker siguiendo la documentación de instalación oficial.
- **Docker Compose**: Instalar Docker Compose desde la documentación oficial.

### Instalación 🔧

#### Sin Docker

1. Clona el repositorio y entra en la carpeta del proyecto:

    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_REPOSITORIO>

2. Instala las dependencias con npm:

    npm install

3. Ejecuta la aplicación en modo de desarrollo:

    npm run start:dev

   La aplicación debería estar corriendo en `http://localhost:3000`.

#### Con Docker

1. Construye y levanta los contenedores con Docker Compose:

    docker compose up --build

2. Una vez que Docker haya iniciado los contenedores, la aplicación estará corriendo en `http://localhost:3000`. Puedes acceder a ella a través de un navegador o herramientas como Postman.

3. Para detener los contenedores, ejecuta:

    docker compose down

### Acceder a Swagger 📜

Una vez que la aplicación esté corriendo, puedes acceder a la interfaz de Swagger para ver y probar los endpoints de la API. Solo necesitas abrir un navegador y dirigirte a la siguiente URL:

    http://localhost:3000/api

Allí podrás ver una lista de todos los endpoints disponibles, sus descripciones, y podrás interactuar con la API de manera sencilla.

### Ejecutando las pruebas ⚙️

Las pruebas se pueden ejecutar con el siguiente comando:

    npm run test

### Analice las pruebas end-to-end 🔩

Las pruebas end-to-end verifican el flujo completo de la aplicación, asegurando que los controladores, servicios y repositorios interactúan correctamente. Son útiles para garantizar que la aplicación funcione de manera integrada.

Para ejecutarlas, usa el siguiente comando:

    npm run test:e2e

### Y las pruebas de estilo de codificación ⌨️

Las pruebas de estilo de codificación verifican que el código siga las convenciones establecidas, asegurando que el código sea limpio y de fácil mantenimiento. Esto ayuda a mantener un código legible y de fácil mantenimiento.

Para ejecutar las pruebas de estilo de codificación, usa:

    npm run lint

## Construido con 🛠️


* [NestJS](https://nestjs.com/) - El framework utilizado para construir la aplicación.
* [Docker](https://www.docker.com/) - Utilizado para contenerizar la aplicación y facilitar el despliegue.
* [Docker Compose](https://docs.docker.com/compose/) - Herramienta para definir y ejecutar aplicaciones Docker multicontenedor.

