import _isDivisibleBy from './internal/_isDivisibleBy';

export default test => ({
  rules: _isDivisibleBy(test),
});
