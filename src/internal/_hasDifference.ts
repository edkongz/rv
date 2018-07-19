import * as R from 'ramda';

export default R.pipe(
  R.difference,
  R.length,
  R.gt(0),
);
