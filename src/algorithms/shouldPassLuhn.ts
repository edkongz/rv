/*################################################################
  Luhn Algorithm
  Useful for credit cards/bank numbers

  https://en.wikipedia.org/wiki/Luhn_algorithm
  ################################################################*/
import * as R from "../../node_modules/@types/ramda/index";
import _adjustWhen from '../internal/_adjustWhen';
import _isDivisibleBy from '../internal/_isDivisibleBy';
import _mapDigits from '../internal/_mapDigits';

// Adds the invidiual digits together from a number
// For example 123 = 1 + 2 + 3 = 6;
const _addDigits = R.pipe(
  R.toString,
  _mapDigits,
  R.sum,
);

// This is different from the luhn algorithm because arrays are 0 indexed
// so every odd value is used instead of every even value
const _isOdd = (_, index) => !_isDivisibleBy(2, index);

/*---------------------------------------------------------------
  Export
  ---------------------------------------------------------------*/
export default R.pipe(
  _mapDigits,
  R.reverse as any,
  _adjustWhen(_isOdd, R.multiply(2)),
  R.map(_addDigits),
  R.sum,
  _isDivisibleBy(10),
);
