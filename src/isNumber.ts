import * as R from 'ramda';
import _isType from './internal/_isType';
import _isNull from './internal/_isNull';
import _isUndefined from './internal/_isUndefined';
import { TYPES } from './internal/_definitions';
import _buildSpec from './internal/_buildSpec';

const numberSpec = _buildSpec({
  shouldBe: TYPES.NUMBER,
  allowNull: true,
  isRequired: true,
});

/*################################################################
  allowNull,
  allowUndefined,
  ################################################################*/
export const isNumber = (...rules) => {
  const spec = numberSpec(rules);

  return value => {
    // if (spec.allowNull && _isNull(value)) return true;
    // if (spec.allowUndefined && _isUndefined(value)) return true;
  };
};
