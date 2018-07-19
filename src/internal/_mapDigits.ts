import * as R from 'ramda';

export default R.pipe(
  R.split(''),
  R.map(Number),
);
