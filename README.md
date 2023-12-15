*** NEST JS REST API - [] SIMULA DDBB ***

Nodejs y Prisma ORM REST API
https://www.youtube.com/watch?v=ESShhQmBjjY&t=64s&ab_channel=FaztCode

* 1 En la carpeta raiz del proyecto

npm init -y

* 2 Instalamos Prisma (Sin TypeScript)

npm install prisma --save-dev

* 3 Inicializamos Prisma y genera una carpeta y un archivo (Prisma -> schema.prisma)

npx prisma init

* 4 Configuramos el archivo (Prisma -> schema.prisma) para personalizar nuestra conexión 
https://www.prisma.io/docs/orm/reference/connection-urls

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

* 5 Para crear modelos nos guiamos de los tipos de datos soportados en la documentación de Prisma

https://www.prisma.io/docs/orm/reference/prisma-schema-reference

* 6 Ejecutamos el migrate "--name" para establecer un nombre, en este caso "init"

npx prisma migrate dev --name init

* 7 Instalamos framework Express

npm i express

* 8 Para utilizar import y export, y no require, agregamos en el archivo "package.json" dejano de "main": "index.js",

"type": "module",

* 9 Instalamos nodemon para reiniciar el servidor atuomaticamente

npm i nodemon -D

* 10 Creamos un script nuevo en el nodo "scripts" en el archivo "package.json", esto para ejecutar con "npm run dev"

"dev": "nodemon src/index.js"




