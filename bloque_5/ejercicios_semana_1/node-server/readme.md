Un ejemplo muy sencillo de un servidor  en node
-------


- Instalación

Instalar packages
npm install express helmet cors morgan dotenv

Configurar .env
Definir el puerto y la clave para acceder a la api

API_KEY=272727
PORT=27000

- Ejecutar servidor
node server.js

Por ejemplo

localhost:27000


- Autenticacion 

Hay que enviar en el header de la peticion
X-API-Key
con la clave definida en la configuracion



- Explicación de los packages

- Express es un framework para crear aplicaciones server-side con node
Permite definir rutas, administra middleware , crear plantillas, etc
- Helmet. Añade headers de seguridad a las aplicaciones de express
- Cors. Permite Cross-Origin Resource Sharing (CORS), peticiones entre servidores diferentes
- Morgan. Crea logs de accesos al servidor en la consola.
- Dotenv. Gestionar archivos de configuración como .env