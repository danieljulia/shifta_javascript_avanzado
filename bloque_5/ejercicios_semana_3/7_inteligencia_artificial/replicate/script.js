/**
 * Ejemplo: generar una imagen con la API de Replicate (flux-schnell).
 *
 * Uso:
 *   node script.js
 *
 * El token también se puede pasar por variable de entorno:
 *   REPLICATE_API_TOKEN=r8_... node script.js
 */
import Replicate from "replicate";
import { writeFile } from "node:fs/promises";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN ?? "",
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const prompt =
  'matcha cake spelling out the words "SHIFTA", tasty, food photography, dynamic shot';

console.log(`Generando imagen para: "${prompt}"`);

// 1. Crear la predicción
let prediction = await replicate.predictions.create({
  model: "black-forest-labs/flux-schnell",
  input: { prompt },
});

// 2. Esperar a que termine (sondeo cada 2 segundos)
while (!["succeeded", "failed", "canceled"].includes(prediction.status)) {
  await sleep(2000);
  prediction = await replicate.predictions.get(prediction.id);
}

if (prediction.status !== "succeeded") {
  throw new Error(`La predicción ha fallado (${prediction.status}): ${prediction.error}`);
}

// 3. Descargar y guardar la imagen
const imageUrl = prediction.output[0];
const response = await fetch(imageUrl);
await writeFile("output.webp", Buffer.from(await response.arrayBuffer()));

console.log("Imagen guardada en output.webp");
