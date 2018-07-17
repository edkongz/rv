import pipe from 'ramda/es/pipe';
import split from 'ramda/es/split';
import map from 'ramda/es/map';
import sum from 'ramda/es/sum';
import toString from 'ramda/es/toString';
import adjust from 'ramda/es/adjust';
import zip from 'ramda/es/zip';
import apply from 'ramda/es/apply';
import dec from 'ramda/es/dec';
import multiply from 'ramda/es/multiply';
import isDivisibleBy from './isDivisibleBy';

/*################################################################
  Australian Business Number (ABN)

  https://abr.business.gov.au/Help/AbnFormat
  ################################################################*/

const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

export default pipe(
  toString,
  split(''),
  map(Number),
  adjust(dec, 0),
  zip(weights),
  map(apply(multiply)),
  sum,
  isDivisibleBy(89),
);
