import * as R from 'ramda';

export default R.complement(R.test)(/[^0-9abcdef]/gi);
