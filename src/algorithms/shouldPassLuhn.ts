/*################################################################
  Luhn Algorithm
  Useful for credit cards/bank numbers

  https://en.wikipedia.org/wiki/Luhn_algorithm
  ################################################################*/
const R = require('ramda');

import _isOdd from '../isOdd';
import _adjustWhen from '../internal/_adjustWhen';
import _isDivisibleBy from '../internal/_isDivisibleBy';
import _mapDigits from '../internal/_mapDigits';

const _addDigits = R.pipe(
  R.toString,
  _mapDigits,
  R.sum,
);

// This is different from the luhn algorithm because arrays are 0 indexed
// so every odd value is used instead of every even value
const isOdd = (_, index) => _isOdd(index);

/*---------------------------------------------------------------
  Export
  ---------------------------------------------------------------*/
export default R.pipe(
  _mapDigits,
  R.reverse,
  _adjustWhen(isOdd, R.multiply(2)),
  R.map(_addDigits),
  R.sum,
  _isDivisibleBy(10),
);
