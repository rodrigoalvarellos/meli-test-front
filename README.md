# Mercado Libre Front-End Test

Proyecto de prueba técnica de Mercado Libre.\
Es necesario correr el backend publicado en el siguiente repositorio: [rodrigoalvarellos/meli-test-backend](https://github.com/rodrigoalvarellos/meli-test-backend).

## Instalación

Una vez descargado el repositorio use [npm](https://www.npmjs.com/) para instalar los paquetes necesarios.

`npm i`

## Iniciar la aplicación

En este proyecto, se puede correr los siguientes scripts:

`npm start`
Correr la aplicación en modo desarrollo.

Abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

## Poner en producción

Para obtener un bundle optimizado para producción utilize el siguiente comando.

`npm build`
Generar un build para producción en la carpeta 'build'

## Testing

El proyecto cuenta con test unitarios realizados con Jest y React-testing-library. Para los test E2E se utiliza Cypress.

### Correr Test Unitarios

`npm run test` Corre todos los test unitarios en modo watch.

`npm run test:coverage` Genera el informe de coverage del proyecto.

### Correr Test E2E con Cypress

Es necesario tener corriendo la aplicación para poder realizar las pruebas "E2E".

`npm run test:e2e:run`
Corre la aplicación en modo desarrollo y Cypress en modo run.

`npm run test:e2e:open`
Corre la aplicación en modo desarrollo y Cypress en modo open.

Si ya tiene corriendo la aplicación en modo desarrollo, puede utilizar los siguientes comandos para correr solo Cypress.

`npm run cypress:run`
para correr Cypress en modo headless.

`npm run cypress:open`
para correr Cypress en con su entorno visual.

## Storybook

Este proyecto cuenta con Storybook para la documentación de los componentes. Para correrlo, utilize el siguiente comando.

`npm run storybook`

## Dependencias principales

- [React](https://github.com/facebook/react/)
- [React Helmet](https://github.com/nfl/react-helmet)
- [Cypress](https://github.com/cypress-io/cypress)
- [Storybooks](https://github.com/storybookjs/storybook)
- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [Husky](https://github.com/typicode/husky)
