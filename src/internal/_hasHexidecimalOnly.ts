import * as R from '../../node_modules/@types/ramda/index';

export default R.complement(R.test)(/[^0-9abcdef]/gi);
