import { readFile } from 'fs/promises';

async function leer_archivo() {
    try {
        const data = await readFile('ejemplo.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error('Error leyendo el archivo:', err);
    }
}

leer_archivo();
