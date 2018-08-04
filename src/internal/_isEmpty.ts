import * as R from '../../node_modules/@types/ramda/index';
import _isType from './_isType';
import { TYPES } from './_definitions';

export default value => {
  switch (_isType(value)) {
    // fallthrough
    case TYPES.STRING:
    case TYPES.ARRAY:
      return value.length === 0;
    case TYPES.OBJECT:
      return R.keys(value).length === 0;
    default:
      throw new TypeError('Kabooom!!');
  }
};
