import gt from 'ramda/es/gt';
import symmetricDifference from 'ramda/es/symmetricDifference';
import length from 'ramda/es/length';
import pipe from 'ramda/es/pipe';

export default pipe(
  symmetricDifference,
  length,
  gt(0),
);
