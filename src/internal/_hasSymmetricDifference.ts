import * as R from 'ramda';

export default R.pipe(
  R.symmetricDifference,
  R.length,
  R.gt(0),
);
