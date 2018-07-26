import * as R from 'ramda';
import _isType from './internal/_isType';
import _isNull from './internal/_isNull';
import _isUndefined from './internal/_isUndefined';
import { TYPES } from './internal/_definitions';
import _buildSpec from './internal/_buildSpec';
import _isEmpty from './internal/_isEmpty';
import _castNumber from './internal/_castNumber';

const numberSpec = _buildSpec({
  type: TYPES.NUMBER,
  allowNull: false,
  allowUndefined: false,
  shouldCast: true,
  rules: [],
});

/*################################################################
  
  ################################################################*/
export const isNumber = (...factoryRules:any[]) => {
  const factorySpec = numberSpec(factoryRules);
  return (value, ...instanceRules:any[]) => {
    const instanceSpec = _buildSpec(factorySpec, ...R.flatten(instanceRules));

    if (_isNull(value)) return instanceSpec.allowNull;
    if (_isUndefined(value)) return instanceSpec.allowUndefined;

    // CAST
    if (instanceSpec.shouldCast) value = _castNumber(value);
    if (isNaN(value)) return false;

    R.allPass(instanceSpec.rules)(value);
  };
};