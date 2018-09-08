import { _validResults, _invalidTests } from './internal/_helpers';
import isNull from './isNull';

/*################################################################
  isNull()
  ################################################################*/
describe('isNull()', () => {
  describe('-default-', () => {
    _validResults(isNull, [[null, 'should pass null']]);
    _invalidTests(isNull, [
      [undefined, 'should fail undefined'],
      [true, 'should fail true'],
      [false, 'should fail false'],
      ['abc', 'should fail strings'],
      [new String('abc'), 'should fail string constructor'],
      [{}, 'should fail object'],
      [[], 'should fail arrays'],
    ]);
  });
});
