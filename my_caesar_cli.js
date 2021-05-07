import {program} from 'commander';
import fs from 'fs';
import {pipeline} from 'stream';
import {Validator} from "./src/validator.js";
import {TextTransform} from "./src/text-transform.js";

program
  .description('Caesar cipher CLI')
  .option('-s, --shift <value>', 'Shift level - integer number [Required]')
  .option('-a, --action <value>', "Action type - decode or encode [Required]")
  .option('-i, --input <value>' , "Input file [Optional]")
  .option('-o, --output <value>' , "Output file [Optional]")
  .parse(process.argv);

const { shift, action, input, output } = program.opts();

new Validator(program.opts()).init();

const readStream = input ? fs.createReadStream(input) : process.stdin;
const writeStream = output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout;
const transform = new TextTransform(shift, action);

pipeline(
  readStream,
  transform,
  writeStream,
  (err) => {
    err && process.stderr.write(err);
  }
)


