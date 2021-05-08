import {Action, ErrorText, Mode} from "./const.js";
import * as fs from 'fs';
import * as path from "path";

/**
 * Validate incoming options from CLI
 */
export class Validator {
  constructor(options) {
    this.errors = [];
    this.shift = options.shift;
    this.action = options.action;
    this.output = options.output;
    this.input = options.input;
  }

  /**
   * If errors array length more than zero, sends errors messages and exits with code 1;
   * @private
   */
  _sendErrors() {
    if (this.errors.length) {
      process.stderr.write(this.errors.join('\n'));
      process.exit(1);
    }
  }

  /**
   * Checks given file accessibility and existence
   * @param {string} file - file path
   * @param {number} mode - constant for fs.accessSync()
   * @private
   */
  _checkFileAccessibility(file, mode) {
      if (fs.existsSync(file)) {
        fs.lstatSync(file).isDirectory() &&
        this.errors.push(`${ErrorText.DIR_OPERATION}, ${ mode === fs.constants.W_OK ? Mode.WRITE : Mode.READ}`);
        try {
          fs.accessSync(file, mode)
        } catch (e) {
          this.errors.push(`${ErrorText.ACCESS} ${path.resolve(file)}`);
        }
      } else if (file) {
        this.errors.push(`${ErrorText.NO_FILE} ${path.resolve(file)}`);
      }
  }

  /**
   * Checks all options from CLI, if option has error - pushes error
   * message to errors array
   * @private
   */
  _checkOptions() {
    if (!this.shift) {
      this.errors.push(ErrorText.NO_SHIFT);
    } else if (!Number.isInteger(+this.shift)) {
        this.errors.push(`${ErrorText.SHIFT} ${this.shift}`);
      }

    if (!this.action) {
      this.errors.push(ErrorText.NO_ACTION);
    } else if (this.action !== Action.DECODE && this.action !== Action.ENCODE) {
      this.errors.push(`${ErrorText.ACTION} ${this.action}`);
    }

    if (this.input === this.output && this.input && this.output) {
      this.errors.push(ErrorText.EQUAL_FILES);
    }

    this._checkFileAccessibility(this.output, fs.constants.W_OK);
    this._checkFileAccessibility(this.input, fs.constants.R_OK);
  }

  /**
   * Starts validation and errors catching
   */
  init() {
    this._checkOptions();
    this._sendErrors();
  }
}
