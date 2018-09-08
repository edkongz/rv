import { _validResults, _invalidResults } from './internal/_helpers';

const _isBoolean = () => {};
const _isTrue = () => {};
const _isFalse = () => {};
const _isTruthy = () => {};
const _isFalsy = () => {};

/*################################################################
  isBoolean()
  ################################################################*/
describe('isBoolean()', () => {
  /*---------------------------------------------------------------
    Default
    ---------------------------------------------------------------*/
  describe('-default-', () => {
    // Should be strict?
    _validResults(_isBoolean, [
      [true, 'should pass true'],
      [false, 'should pass false'],
    ]);
    _invalidResults(_isBoolean, []);
  });

  /*---------------------------------------------------------------
    Modifiers
    ---------------------------------------------------------------*/
  describe('isStrict()', () => {
    _invalidResults(_isBoolean, [
      [undefined, 'should fail undefined'],
      [null, 'should fail null'],
      [123, 'should fail positive numbers'],
      [-123, 'should fail negative numbers'],
      [1, 'should fail number 1'],
      [0, 'should fail number 0'],
      ['abc', 'should fail strings'],
    ]);
  });

  describe('notStrict()', () => {
    _validResults(_isBoolean, [
      [undefined, 'should pass undefined'],
      [null, 'should pass null'],
      [123, 'should pass number'],
      [1, 'should pass 1'],
      [0, 'should pass 0'],
      ['abc', 'should pass strings'],
    ]);
  });
});

/*################################################################
  Extras
  ################################################################*/
describe('isTrue()', () => {
  _validResults(_isBoolean, [[true, 'should pass true']]);
  _invalidResults(_isBoolean, [
    [false, 'should fail false'],
    [undefined, 'should fail undefined'],
    [null, 'should fail null'],
    [123, 'should fail numbers'],
    [1, 'should fail number 1'],
    [0, 'should fail number 0'],
    ['abc', 'should fail strings'],
    [[], 'should fail arrays'],
    [{}, 'should fail object'],
  ]);
});

describe('isFalse()', () => {
  _validResults(_isTrue, [[false, 'should pass false']]);
  _invalidResults(_isFalse, [
    [true, 'should fail true'],
    [undefined, 'should fail undefined'],
    [null, 'should fail null'],
    [123, 'should fail numbers'],
    [1, 'should fail number 1'],
    [0, 'should fail number 0'],
    ['abc', 'should fail strings'],
    [[], 'should fail arrays'],
    [{}, 'should fail object'],
  ]);
});

describe('isTruthy()', () => {
  // Object ?
  // Array ?
  _validResults(_isTruthy, [
    [true, 'should pass true'],
    [1, 'should pass number greater than zero'],
    ['abc', 'should pass strings'],
  ]);

  _invalidResults(_isTruthy, [
    [false, 'should fail false'],
    [undefined, 'should fail undefined'],
    [null, 'should fail null'],
    [0, 'should fail zero'],
    [-1, 'should fail negative numbers'],
  ]);
});

describe('isFalsy()', () => {
  // Object ?
  // Array ?
  _validResults(_isFalsy, [
    [false, 'should pass false'],
    [0, 'should pass zero'],
    [-1, 'should pass negative numbers'],
    [undefined, 'should pass undefined'],
    [null, 'should pass null'],
  ]);

  _invalidResults(_isFalsy, [
    [true, 'should fail true'],
    [1, 'should fail numbers greater than 0'],
    ['abc', 'should fail strings'],
  ]);
});
