import * as R from 'ramda';

export default R.converge(R.append, [R.init, R.tail]);
