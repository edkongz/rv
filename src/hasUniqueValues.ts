import * as R from 'ramda';
import _hasSameLength from './internal/_hasSameLength';

export default list => _hasSameLength(R.uniq(list), list);
