# Rick and Morty App

## Introducción

Página web desarrollada con React y Vite, que permite explorar el universo de "Rick and Morty", dando detalles acerca de los personajes, episodios y ubicaciones de la serie.

## Creación de la Aplicación

### Paso 1: Configuración Inicial

La aplicación fue creada utilizando Vite, que proporciona un entorno de desarrollo rápido y eficiente. Se utilizó el siguiente comando para iniciar el proyecto:

```bash
npm create vite@latest rick-morty-app --template react
```

### Paso 2: Instalación de Dependencias

Se instalaron las dependencias necesarias, incluyendo React y React Router para la navegación:

```bash
npm install react-router-dom
```

### Paso 3: Estructura del Proyecto

La estructura general del proyecto se organizó de la siguiente manera:

rick-morty-app/
├── src/
│ ├── components/
│ │ ├── CharacterCard.jsx
│ │ ├── EpisodeCard.jsx
│ │ └── LocationCard.jsx
│ │ └── Navbar.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── CharacterDetail.jsx
│ ├── styles/
│ │ ├── character.css
│ │ ├── home.css
│ │ ├── navbar.css
│ │ └── pagination.css
│ └── App.jsx
└── README.md
└── setup.md

## Desafíos Encontrados

### Inclusión de Locaciones y Episodios

Uno de los principales desafíos fue la inclusión de locaciones y episodios. La API de "Rick and Morty" proporciona datos sobre estos elementos, pero la integración de estos datos en la aplicación requirió un manejo de las llamadas a la API y la gestión del estado dentro del componente reutilizable Home.

### Cambio de Tipo en el Componente Home

El cambio de tipo en el componente Home fue necesario para permitir que el componente manejara diferentes tipos de datos (personajes, episodios y locaciones). Esto implicó ajustar las propiedades y el estado del componente, lo que presentó algunos desafíos en términos de tipado y validación.

## Facilidades

Uno de los aspectos más positivos en el desarrollo de esta aplicación fue la simplicidad para consumir la API de "Rick and Morty". La API no solo es intuitiva, sino que también cuenta con una documentación clara y bien estructurada, lo que facilitó enormemente el proceso de integración. Esto permitió un desarrollo más ágil y eficiente, ya que se pudo acceder rápidamente a la información necesaria para poderla mostrar por medio de los distintos componentes.

## Recursos

- [Documentación de React](https://reactjs.org/docs/getting-started.html)
- [Documentación de Vite](https://vitejs.dev/guide/)
- [API de Rick and Morty](https://rickandmortyapi.com/)