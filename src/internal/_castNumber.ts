import _isType from "./_isType";
import { TYPES } from "./_definitions";
import _isEmpty from "./_isEmpty";

export default value => {
  switch(_isType(value)) {
    case TYPES.NUMBER:
      return value;
    case TYPES.STRING:
      return _isEmpty(value) ? NaN : +value;
    default:
      return NaN;
  }
}