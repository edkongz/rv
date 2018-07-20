import * as R from 'ramda';

export default R.curry((length, value) => value.length <= length);
