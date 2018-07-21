import * as R from 'ramda';
import _isType from './_isType';
import { TYPES } from './_definitions';

const notArray = value => _isType(value) !== TYPES.ARRAY;

export default R.when(notArray, R.of);
