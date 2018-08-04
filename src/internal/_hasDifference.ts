import * as R from '../../node_modules/@types/ramda/index';

export default R.pipe(
  R.difference,
  R.length as any, 
  R.gt(0),
);