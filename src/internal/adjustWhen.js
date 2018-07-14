import curry from 'ramda/es/curry';

const whenFn = (predFn, trueFn) => (value, index) =>
  predFn(value, index) ? trueFn(value) : value;

export default curry((predFn, trueFn, list) =>
  list.map(whenFn(predFn, trueFn)),
);
