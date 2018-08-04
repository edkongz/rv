import * as R from '../node_modules/@types/ramda/index';
import _isDivisibleBy from './internal/_isDivisibleBy';

export default R.complement(_isDivisibleBy(2));
