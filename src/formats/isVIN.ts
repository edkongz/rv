import * as R from '../../node_modules/@types/ramda/index';

/*################################################################
  Vehicle Identification Number
  
  https://en.wikipedia.org/wiki/Vehicle_identification_number

  Examples: 1M8GDM9A_KP042788
  ################################################################*/
const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
const table = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  P: 7,
  R: 9,
  S: 2,
  T: 3,
  U: 4,
  V: 5,
  W: 6,
  X: 7,
  Y: 8,
  Z: 9,
};

/*---------------------------------------------------------------
  Validate   
  ---------------------------------------------------------------*/
const _transformValue = value => R.propOr(Number(value), value, table);
const _getCheckDigit = R.nth(8);
const _modulo = R.flip(R.modulo);
const _calcCheckDigit = R.pipe(
  R.split(''),
  R.map(_transformValue),
  R.zipWith(R.multiply, weights),
  R.sum as any,
  // R.modulo(R.__, 11) as any,
  _modulo(11),
  R.ifElse(R.equals(10), R.always('X'), R.toString),
);

const _shouldPass = R.converge(R.equals, [_getCheckDigit, _calcCheckDigit]);

/*---------------------------------------------------------------
  Export
  ---------------------------------------------------------------*/
export default R.converge(R.equals, [_getCheckDigit, _calcCheckDigit]);
