import { hasInvalidResults, hasValidResults } from './internal/_helpers';
import isNull from './isNull';

describe('isNull', () => {
  describe('default options with invalid input', () => {
    [
      [undefined, 'should fail undefined'],
      [123, 'should fail numbers'],
      ['abc', 'should fail strings'],
      [{}, 'should fail objects'],
    ].forEach(hasInvalidResults(isNull()));
  });

  describe('defualt options with valid input', () => {
    [[null, 'should pass null']].forEach(hasValidResults(isNull()));
  });
});
