import * as R from '../../node_modules/@types/ramda/index';

export default R.pipe(
  R.split(''),
  R.map(Number),
);
