/*################################################################
  Luhn Algorithm
  Useful for credit cards/bank numbers

  https://en.wikipedia.org/wiki/Luhn_algorithm
  ################################################################*/
import pipe from 'ramda/es/pipe';
import split from 'ramda/es/split';
import reverse from 'ramda/es/reverse';
import map from 'ramda/es/map';
import sum from 'ramda/es/sum';
import multiply from 'ramda/es/multiply';
import modulo from 'ramda/es/modulo';
import equals from 'ramda/es/equals';
import toString from 'ramda/es/toString';
import __ from 'ramda/es/__';

import _isOdd from '../isOdd';
import _adjustWhen from '../internal/adjustWhen';

const addDigits = pipe(
  toString,
  split(''),
  map(Number),
  sum,
);

// This is different from the luhn algorithm because arrays are 0 indexed
const isOdd = (_, index) => _isOdd(index);

/*---------------------------------------------------------------
  Export
  ---------------------------------------------------------------*/
export default pipe(
  split(''),
  reverse,
  map(Number),
  _adjustWhen(isOdd, multiply(2)),
  map(addDigits),
  sum,
  modulo(__, 10),
  equals(0),
);
