import {TextTransform} from "./text-transform.js";
import * as fs from "fs";
import {pipeline} from "stream";

/**
 *
 * @param options - object containing options from cli as key-value pairs
 * @returns {WriteStream|{fd: 1}}
 */
export const createPipeline = (options) => {
  const { shift, action, input, output } = options;
  const readStream = input ? fs.createReadStream(input) : process.stdin;
  const writeStream = output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout;
  const transform = new TextTransform(shift, action);

  return pipeline(
  readStream,
  transform,
  writeStream,
  (err) => {
    if (err) {
      process.stderr.write(err.message);
      process.exit(1);
    }
  }
)
}


