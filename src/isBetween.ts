import * as R from 'ramda';

export default R.curry((min, max, value) => value >= min && value <= max);
