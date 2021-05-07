export const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const Action = {
  ENCODE: 'encode',
  DECODE: 'decode',
};

export const ErrorText = {
  SHIFT: 'Shift required and must be only integer number, but you provide',
  ACTION: 'Action required and must be only decode or encode, but you provide',
  ACCESS: 'Can`t access file in path',
  NO_FILE: 'No such file in path',
  NO_SHIFT: 'No shift value provided',
  NO_ACTION: 'No action value provided',
  DIR_OPERATION: 'Illegal operation on a directory'
}

export const Mode = {
  READ: 'read',
  WRITE: 'write',
}
