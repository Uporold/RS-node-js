import {program} from 'commander';
import {Validator} from "./src/validator.js";
import {createPipeline} from "./src/create-pipeline.js";

program
  .description('Caesar cipher CLI')
  .option('-s, --shift <value>', 'Shift level - integer number [Required]')
  .option('-a, --action <value>', "Action type - decode or encode [Required]")
  .option('-i, --input <value>' , "Input file [Optional]")
  .option('-o, --output <value>' , "Output file [Optional]")
  .parse(process.argv);

const options = program.opts();

new Validator(options).init();
createPipeline(options)


