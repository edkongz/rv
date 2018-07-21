import * as R from 'ramda';
import _toArray from './_toArray';

const _concat = R.useWith(R.concat, [_toArray, _toArray]);
const _mergeSpec = R.mergeWithKey((key, left, right) => {
  switch (key) {
    case 'rules':
      return _concat(left, right);
    default:
      return right;
  }
});

/*---------------------------------------------------------------
  Export
  ---------------------------------------------------------------*/
export default R.reduce(_mergeSpec);
