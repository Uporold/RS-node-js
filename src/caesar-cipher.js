import {alphabet, Action} from "./const.js";

/**
 *
 * @param {string} text - Input text to encode/decode
 * @param {number} shift - Shift of caesar cipher
 * @param {string} action - type of action - encode | decode
 * @returns {string}
 */

export const doCrypt = (text, shift, action ) => {
  if (action !== Action.ENCODE) {
    shift = -shift;
  }
  return text.split('').map((char) => {
    const index = alphabet.indexOf(char.toLowerCase());
    if (index !== -1) {
      const isUpperCase = char === char.toUpperCase();
      let shiftedIndex = (index + shift) % alphabet.length;

      shiftedIndex = shiftedIndex >= 0 ? shiftedIndex : shiftedIndex + alphabet.length

      return isUpperCase ? alphabet[shiftedIndex].toUpperCase() : alphabet[shiftedIndex];
    } else {
      return char;
    }
  }).join('');
}
