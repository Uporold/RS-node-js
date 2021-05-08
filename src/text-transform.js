import {Transform} from "stream";
import {doCrypt} from "./caesar-cipher.js";

/**
 * Reads input, processes data and then outputs new data
 */
export class TextTransform extends Transform {
  constructor(shift, action) {
    super();
    this.shift = +shift;
    this.action = action;
  }

  /**
   *
   * @param {Buffer | string | any} chunk - Part of data
   * @param {BufferEncoding} encoding - If the chunk is a string, then this is the encoding type. If chunk is a buffer, then this is the special value 'buffer'. Ignore it in that case.
   * @param {TransformCallback} callback - A callback function (optionally with an error argument and data) to be called after the supplied chunk has been processed.
   * @private
   */
  _transform(chunk, encoding, callback) {
    try {
      const text = chunk.toString().trim();
      const result = `${doCrypt(text, this.shift, this.action)} \n`;
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  }
}
