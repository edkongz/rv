import * as R from '../../node_modules/@types/ramda/index';

export default R.complement(R.test)(/\D/g);
