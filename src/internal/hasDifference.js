import difference from 'ramda/es/difference';
import gt from 'ramda/es/gt';
import pipe from 'ramda/es/pipe';
import length from 'ramda/es/length';

export default pipe(
  difference,
  length,
  gt(0),
);
