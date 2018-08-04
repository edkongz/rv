import * as R from '../../node_modules/@types/ramda/index';
// import _isOctet from '../internal/_isOctet';

const _shouldPass = R.pipe(
  R.split('.'),
  R.map(Number),
  // R.allPass(_isOctet),
);
