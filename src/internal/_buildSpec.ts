import * as R from 'ramda';
import _toArray from './_toArray';
import { TYPES } from './_definitions';

const _concat = R.useWith(R.concat, [_toArray, _toArray]);
const _mergeSpec = R.mergeWithKey((key, left, right) => {
  switch (key) {
    case 'rules':
      return _concat(left, right);
    default:
      return right;
  }
});

export interface rommelSpec {
  type: TYPES;
  allowNull: boolean;
  allowUndefined: boolean;
  shouldCast: boolean;
  rules: any[]; 
}

/*---------------------------------------------------------------
  Export
  ---------------------------------------------------------------*/
export default R.reduce(_mergeSpec) as any;
