import {alphabet, ENCODE} from "./const";

const doCrypt = (text, shift, action = ENCODE) => {
  if (action === ENCODE) {
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
