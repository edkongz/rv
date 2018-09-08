import {
  _expectRommel,
  _expectFunction,
  _expectResults,
  _always,
} from './_helpers';
import _shouldValidate from './_shouldValidate';
import _isType from './_isType';

describe('_shouldValidate()', () => {
  it('should return a function when no arguments are supplied', () => {
    const validate = jest.fn();
    const fn = _shouldValidate(validate);
    _expectFunction(fn());
  });

  it('should return a function when all arguments are Rommel objects', () => {
    const validate = jest.fn();
    const fn = _shouldValidate(validate);
    _expectFunction(fn({ __isRommel: true }));
  });

  it('should run the validation function when the first argument is NOT rommel object', () => {
    const validate = jest.fn();
    const fn = _shouldValidate(validate);
    const value = 123;
    fn(value);
    expect(validate.mock.calls.length).toBe(1);
    expect(validate.mock.calls[0][0]).toBe(value);
  });
});
