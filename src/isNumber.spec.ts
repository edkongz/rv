import { _validTests, _invalidTests } from './internal/_helpers';

const _isNumber = () => {};

/*################################################################
  isNumber()
  ################################################################*/
describe('isNumber()', () => {
  /*---------------------------------------------------------------
    Default
    ---------------------------------------------------------------*/
  describe('-default-', () => {
    // strings as numbers ?
    _validTests(_isNumber, [
      [1, 'should pass integer'],
      [1.23, 'should pass floating point'],
      [Number(123), 'should pass number constructor'],
    ]);

    _invalidTests(_isNumber, [
      [null, 'should fail null'],
      [undefined, 'should fail undefined'],
      [true, 'should fail true'],
      [false, 'should fail false'],
      [[], 'should fail arrays'],
      [{}, 'should fail object'],
    ]);
  });

  /*---------------------------------------------------------------
    Modifiers
    ---------------------------------------------------------------*/
});
