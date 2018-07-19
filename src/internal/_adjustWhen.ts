import * as R from 'ramda';

const whenFn = (predFn, trueFn) => (value, index) =>
  predFn(value, index) ? trueFn(value) : value;

export default R.curry((predFn, trueFn, list) =>
  list.map(whenFn(predFn, trueFn)),
);
