import { _validTests, _invalidTests } from './internal/_helpers';
// import isNull from './isNull';

const _isNull = () => {};

/*################################################################
  isNull()
  ################################################################*/
describe('isNull()', () => {
  describe('-default-', () => {
    _validTests(_isNull, [null, 'should pass null']);
    _invalidTests(_isNull, [
      [undefined, 'should fail undefined'],
      [true, 'should fail true'],
      [false, 'should fail false'],
      ['abc', 'should fail strings'],
      [new String('abc'), 'should fail string constructor'],
      [{}, 'should fail object'],
      [[], 'should fail arrays'],
    ]);
});
