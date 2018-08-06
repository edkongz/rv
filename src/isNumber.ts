import * as R from '../node_modules/@types/ramda/index';
import _isType from './internal/_isType';
import _isNull from './internal/_isNull';
import _isUndefined from './internal/_isUndefined';
import { TYPES } from './internal/_definitions';
import _schemaFactory from './internal/_schemaFactory';
import _isEmpty from './internal/_isEmpty';
import _castNumber from './internal/_castNumber';
import _isSchemaRule from './internal/_isSchemaRule';
import _validateNil from './internal/_validateNil';

const defaults = {};
const validate = (value, specs) => {
  let err = _validateNil(specs, value);
  if (err) return err;

  if (specs.shouldCast) value = _castNumber(value);

  // return {
  //   isRommel: true,
  //   type: 'ERROR',
  //   isValid: false,
  //   message: 'hello',
  //   code: 'HELLO',
  //   value,
  // };
};

/*---------------------------------------------------------------
  Export
  ---------------------------------------------------------------*/
export default _schemaFactory(defaults, validate);
