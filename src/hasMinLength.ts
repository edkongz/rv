import * as R from 'ramda';

export default R.curry((length, value) => R.length(value) >= length);
