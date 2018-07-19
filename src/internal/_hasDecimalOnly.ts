import * as R from 'ramda';

export default R.complement(R.test)(/\D/g);
