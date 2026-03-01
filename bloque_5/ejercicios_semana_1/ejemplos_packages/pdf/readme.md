Pasos a seguir


Para crear package.json 

npm init 

Instalar package pdf-lib

npm i pdf-lib 

Editar package.json para que funcione con módulos

 "type": "module",

Copiar ejemplo de la página del package 

https://www.npmjs.com/package/pdf-lib

Editar el ejemplo para escribir el archivo como pdf

arriba:

import { writeFileSync } from 'fs';

al final:

writeFileSync('output.pdf', pdfBytes);
