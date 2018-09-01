import { _validTests, _invalidTests } from './internal/_helpers';

const _isArray = () => {};

/*################################################################
  isArray()
  ################################################################*/
describe('isArray()', () => {
  /*---------------------------------------------------------------
    Default
    ---------------------------------------------------------------*/
  describe('-default-', () => {
    _validTests(_isArray, [
      [[], 'should pass []'],
      [Array(), 'should pass Array'],
    ]);

    _invalidTests(_isArray, [
      [undefined, 'should fail undefined'],
      [null, 'should fail null'],
      [true, 'should fail true'],
      [false, 'should fail false'],
      [123, 'should fail positive numbers'],
      [-123, 'should fail negative numbers'],
      ['abc', 'should fail strings'],
      [String('abc'), 'should fail String()'],
      [{}, 'should fail {}'],
      [Object({}), 'should fail Object()'],
    ]);
  });
});
