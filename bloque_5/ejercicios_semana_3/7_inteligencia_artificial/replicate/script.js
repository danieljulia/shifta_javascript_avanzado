
/**
 * instrucciones para integrar la api en
 * https://replicate.com/black-forest-labs/flux-schnell/api
 * 
 */
import Replicate from "replicate";
const replicate = new Replicate();

const input = {
    prompt: "matcha cake spelling out the words \"SHIFTA\", tasty, food photography, dynamic shot"
};

const output = await replicate.run("black-forest-labs/flux-schnell", { input });

import { writeFile } from "node:fs/promises";
for (const [index, item] of Object.entries(output)) {
  await writeFile(`output_${index}.webp`, item);
}
//=> output_0.webp written to disk