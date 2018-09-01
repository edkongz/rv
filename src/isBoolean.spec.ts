import { _validTests, _invalidTests } from './internal/_helpers';

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
    _validTests(_isBoolean, [
      [true, 'should pass true'],
      [false, 'should pass false'],
    ]);
    _invalidTests(_isBoolean, []);
  });

  /*---------------------------------------------------------------
    Modifiers
    ---------------------------------------------------------------*/
  describe('isStrict()', () => {
    _invalidTests(_isBoolean, [
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
    _validTests(_isBoolean, [
      [
        [undefined, 'should pass undefined'],
        [null, 'should pass null'],
        [123, 'should pass number'],
        [1, 'should pass 1'],
        [0, 'should pass 0'],
        ['abc', 'should pass strings'],
      ],
    ]);
  });
});

/*################################################################
  Extras
  ################################################################*/
describe('isTrue()', () => {
  _validTests(_isBoolean, [[true, 'should pass true']]);
  _invalidTests(_isBoolean, [
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
  _validTests(_isTrue, [[false, 'should pass false']]);
  _invalidTests(_isFalse, [
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
  _validTests(_isTruthy, [
    [true, 'should pass true'],
    [1, 'should pass number greater than zero'],
    ['abc', 'should pass strings'],
  ]);

  _invalidTests(_isTruthy, [
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
  _validTests(_isFalsy, [
    [false, 'should pass false'],
    [0, 'should pass zero'],
    [-1, 'should pass negative numbers'],
    [undefined, 'should pass undefined'],
    [null, 'should pass null'],
  ]);

  _invalidTests(_isFalsy, [
    [true, 'should fail true'],
    [1, 'should fail numbers greater than 0'],
    ['abc', 'should fail strings'],
  ]);
});
