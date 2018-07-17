import { Recoverable } from 'repl';

const hasConstructor = (type, value) => value.constructor == type;

const hasNumberConstructor = hasConstructor(Number);
const shouldCast = (shouldCast = true) => ({ shouldCast });
const notNil = () => value => value !== undefined || value !== null;

const defaults = [notNil(), shouldCast()];

export const isNumber = (...rules) => {
  return value => true;
};
