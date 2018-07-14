import curry from 'ramda/es/curry';
import isGreaterOrEqual from './isGreaterOrEqual';
import isLessOrEqual from './isLessOrEqual';

export default curry(
  (min, max, value) =>
    isGreaterOrEqual(min, value) && isLessOrEqual(max, value),
);
