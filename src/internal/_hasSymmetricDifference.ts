import * as R from '../../node_modules/@types/ramda/index';

export default R.pipe(
  R.symmetricDifference,
  R.length as any,
  R.gt(0),
);
