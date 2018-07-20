import * as R from 'ramda';
import _isType from './internal/_isType';
import _isNull from './internal/_isNull';
import _isUndefined from './internal/_isUndefined';
import { TYPES } from './internal/_definitions';

/*################################################################
  allowNull,
  allowUndefined,
  ################################################################*/

export const isNumber = (...rules) => {
  const defaults = {
    allowNull: true,
    allowUndefined: true,
    shouldCast: true,
    rules: [],
  };
  return value => {
    if (config.allowNull && _isNull(value)) return true;
    if (config.allowUndefined && _isUndefined(value)) return true;
    if (config.shouldCast && _isType(value) !== TYPES.NUMBER) {
    }
    return R.allPass(config.rules, value);
  };
};
