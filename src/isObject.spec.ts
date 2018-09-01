import { _validTests, _invalidTests } from './internal/_helpers';
const _isObject = () => {};

/*################################################################
  isObject()
  ################################################################*/
describe('isObject()', () => {
  /*---------------------------------------------------------------
    Default
    ---------------------------------------------------------------*/
  describe('-default-', () => {
    _validTests(_isObject, [
      [{}, 'should pass {}'],
      [Object(null), 'should pass Object()'],
    ]);

    _invalidTests(_isObject, [
      [undefined, 'should fail undefined'],
      [null, 'should fail null'],
      [123, 'should fail postiive numbers'],
      [-123, 'should fail negative numbers'],
      [true, 'should fail true'],
      [false, 'should fail false'],
      ['abc', 'should fail strings'],
      [[], 'should fail []'],
      [Array(), 'should fail Array()'],
    ]);
  });
});
