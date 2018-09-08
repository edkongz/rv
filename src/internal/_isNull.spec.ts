import { _validTests, _invalidTests } from './_helpers';
import _isNull from './_isNull';

describe('_isNull()', () => {
  _validTests(_isNull, [[null, 'should pass null']]);
  _invalidTests(_isNull, [
    [123, 'should fail numbers'],
    ['abc', 'should fail strings'],
    [{}, 'should fail {}'],
    [[], 'should fail []'],
  ]);
});
