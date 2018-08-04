import * as R from '../../node_modules/@types/ramda/index';

const whenFn = (predFn, trueFn) => (value, index) =>
  predFn(value, index) ? trueFn(value) : value;

export default R.curry((predFn, trueFn, list) =>
  list.map(whenFn(predFn, trueFn)),
);
