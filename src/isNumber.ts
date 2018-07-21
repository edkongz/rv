import * as R from 'ramda';
import _isType from './internal/_isType';
import _isNull from './internal/_isNull';
import _isUndefined from './internal/_isUndefined';
import { TYPES } from './internal/_definitions';
import _buildSpec from './internal/_buildSpec';
import _isEmpty from './internal/_isEmpty';

const numberSpec = _buildSpec({
  type: TYPES.NUMBER,
  allowNull: false,
  allowUndefined: false,
  shouldCast: true,
  rules: [],
});

const cast = value => {
  switch (_isType(value)) {
    case TYPES.NUMBER:
      return value;
    case TYPES.STRING:
      return _isEmpty(value) ? NaN : +value;
    default:
      return NaN;
  }
};

/*################################################################
  ################################################################*/
export const isNumber = (...factoryRules) => {
  const factorySpec = numberSpec(factoryRules);
  return (value, ...instanceRules) => {
    const instanceSpec = _buildSpec(factorySpec, ...R.flatten(instanceRules));

    if (_isNull(value)) return instanceSpec.allowNull;
    if (_isUndefined(value)) return instanceSpec.allowUndefined;

    // CAST
    if (instanceSpec.shouldCast) value = cast(value);
    if (isNaN(value)) return false;

    R.allPas(instanceSpec.rules)(value);
  };
};
