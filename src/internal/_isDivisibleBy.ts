import * as R from 'ramda';

export default R.curry((a, b) => b % a === 0);
