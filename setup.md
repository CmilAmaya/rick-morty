   # Instrucciones para Correr el Proyecto

   ## Requisitos Previos
   - Es necesario tener instalado [Node.js](https://nodejs.org/).
   - Además tener: [npm](https://www.npmjs.com/).

   ## Pasos para Correr el Proyecto

   1. Clona el repositorio:
      ```bash
      git clone https://github.com/CmilAmaya/rick-morty.git
      ```
   2. Ve a la carpeta del proyecto:
      ```bash
      cd rick-morty-app
      ```
   3. Instala las dependencias:
      ```bash
      npm install
      ```
   4. Agrega un archivo llamado config.js dentro de la carpeta src y añade la siguiente información con la API KEY:
      
   ```javascript
   // URL base de la API de Rick and Morty
   export const API_URL = 'https://rickandmortyapi.com/api';
   ```

   5. Corre la aplicación:
      ```bash
      npm run dev
      ```

   ## Proyecto desplegado
   - Para ver el proyecto desplegado puedes entrar aquí: [Rick and Morty app](https://rick-morty-pi-eosin.vercel.app/) 
