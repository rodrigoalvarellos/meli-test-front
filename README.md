# Mercado Libre Front-End Test

Proyecto de prueba técnica de Mercado Libre.

Es necesario correr el backend publicado en el siguiente repositorio: [rodrigoalvarellos/meli-test-backend](https://github.com/rodrigoalvarellos/meli-test-backend).

El objetivo del proyecto es crear una aplicación web, que permita buscar productos y ver sus detalles.

## Instalación

Una vez descargado el repositorio use [npm](https://www.npmjs.com/) para instalar los paquetes necesarios.

`npm i`

## Iniciar la aplicación

En este proyecto, se puede correr los siguientes scripts:

`npm start`
Correr la aplicación en modo desarrollo.

Abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

## Poner en producción

Para obtener un bundle optimizado para producción utilice el siguiente comando.

`npm build`
Generar un build para producción en la carpeta 'build'

## Testing

El proyecto cuenta con test unitarios realizados con Jest y React-testing-library. Para los test E2E se utiliza Cypress.

### Correr Test Unitarios

```bash
# Corre todos los test unitarios en modo watch.
$ npm run tes

# Genera el informe de coverage del proyecto.
$ npm run test:coverage
```

### Correr Test E2E con Cypress

Es necesario tener corriendo la aplicación para poder realizar las pruebas "E2E".

```bash
# Corre la aplicación en modo desarrollo y Cypress en modo headless.
$ npm run test:e2e:run

# Corre la aplicación en modo desarrollo y Cypress con su entorno visual.
$ npm run test:e2e:open
```

Si ya tiene corriendo la aplicación en modo desarrollo, puede utilizar los siguientes comandos para correr solo Cypress.

```bash
# Correr Cypress en modo headless.
$ npm run cypress:run

# correr Cypress en con su entorno visual.
$ npm run cypress:open
```

## Linters y Formatters

Se configuró el uso de ESLint y Prettier, utilizando la guia de estilos de Airbnb.

Se utiliza Husky para correr el linter y los nit tests al momento de hacer commit del código.

Dispone de los siguientes comandos para utilizar:

```bash
# Validar si el proyecto tiene errores de Lint
$ npm run lint

# Formatea archivos con Prettier
$ npm run format

# Formatea, valida lint y genera un build si todo sale correctamente
$ npm run isready
```

## Storybook

Este proyecto cuenta con Storybook para la documentación de los componentes. Para correrlo, utilize el siguiente comando.

`npm run storybook`

## Dependencias

- [React](https://github.com/facebook/react/)
- [React Helmet](https://github.com/nfl/react-helmet)
- [Cypress](https://github.com/cypress-io/cypress)
- [Storybooks](https://github.com/storybookjs/storybook)
- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [Husky](https://github.com/typicode/husky)

## Contacto

- Autor - [Rodrigo Alvarellos](https://www.linkedin.com/in/rodrigo-alvarellos/)
- Email - [rodri.alvarellos@gmail.com](mailto:rodri.alvarellos@gmail.com)
- LinkedIn - [rodrigo-alvarellos](https://www.linkedin.com/in/rodrigo-alvarellos/)
