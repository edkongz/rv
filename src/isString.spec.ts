import { _validResults, _invalidResults } from './internal/_helpers';

const _isString = () => {};

/*################################################################
  isString()
  ################################################################*/
describe('isString()', () => {
  describe('-default-', () => {
    _validResults(_isString, [
      ['abc', 'should pass strings'],
      [new String('abc'), 'should pass string constructor'],
    ]);

    _invalidResults(_isString, [
      [undefined, 'should fail undefined'],
      [null, 'should fail null'],
      [true, 'should fail true'],
      [false, 'should fail false'],
      [123, 'should fail positive numbers'],
      [-123, 'should fail negative numbers'],
      [[], 'should fail []'],
      [Array(), 'should fail Array()'],
      [{}, 'should fail {}'],
      [Object(), 'should fail Object()'],
    ]);
  });
});
