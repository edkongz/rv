import * as R from 'ramda';
import _isOctet from '../internal/_isOctet';

const _shouldPass = R.pipe(
  R.split('.'),
  R.map(Number),
  R.allPass(_isOctet),
);
