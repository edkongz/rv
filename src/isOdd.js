import * as R from 'ramda';
import _isDivisibleBy from './internal/_isDivisibleBy';

export default R.complement(_isDivisibleBy(2));
