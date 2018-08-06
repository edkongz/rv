import { TYPES } from './_definitions';
import * as R from 'ramda';

export default value => R.type(value) === TYPES.OBJECT && value.isRommel;
