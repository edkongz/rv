import _isType from "./_isType";
import { TYPES } from "./_definitions";

export default value => {
  switch(_isType(value)) {
    case TYPES.STRING:
      return value;
    case TYPES.NUMBER:
      return value.toString();
    default:
      return false;
  }
}