/**
 * Mini servidor local para la versión HTML del generador de imágenes.
 * El navegador no puede llamar a la API de Replicate directamente (CORS),
 * así que este servidor sirve index.html y actúa de intermediario.
 *
 * Uso:
 *   node server.js
 *   y abrir http://localhost:3000
 */
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import Replicate from "replicate";

const PORT = 3001;

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN ?? "",
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateImage(prompt) {
  let prediction = await replicate.predictions.create({
    model: "black-forest-labs/flux-schnell",
    input: { prompt },
  });

  while (!["succeeded", "failed", "canceled"].includes(prediction.status)) {
    await sleep(2000);
    prediction = await replicate.predictions.get(prediction.id);
  }

  if (prediction.status !== "succeeded") {
    throw new Error(`La predicción ha fallado (${prediction.status}): ${prediction.error}`);
  }

  return prediction.output[0];
}

const server = createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const html = await readFile("index.html", "utf8");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
    return;
  }

  if (req.method === "POST" && req.url === "/generate") {
    try {
      let body = "";
      for await (const chunk of req) body += chunk;
      const { prompt } = JSON.parse(body);

      const imageUrl = await generateImage(prompt);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ imageUrl }));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: error.message }));
    }
    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(PORT, () => {
  console.log(`Servidor en marcha: http://localhost:${PORT}`);
});
