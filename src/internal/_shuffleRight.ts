import * as R from '../../node_modules/@types/ramda/index';

export default R.converge(R.append, [R.tail, R.head]);
