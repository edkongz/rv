import * as R from '../../node_modules/@types/ramda/index';
import _isDivisibleBy from '../internal/_isDivisibleBy';
import _removeNonDecimaals from '../internal/_removeNonDecimals';

/*################################################################
  Australian Business Number (ABN)

  https://abr.business.gov.au/Help/AbnFormat
  ################################################################*/
const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const _shouldPass = R.pipe(
  _removeNonDecimaals,
  R.map(Number) as any,
  R.adjust(R.dec, 0),
  R.zipWith(R.multiply, weights),
  R.sum as any,
  _isDivisibleBy(89),
);

export default R.allPass([R.is(String), _shouldPass]);
