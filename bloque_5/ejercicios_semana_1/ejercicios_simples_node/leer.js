//cargamos este módulo
const fs = require('fs');

// leer el archivo ejemplo.txt
fs.readFile('ejemplo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log('Este mensaje se imprimirá antes de que se lea el archivo debido a la naturaleza asíncrona de Node.js');