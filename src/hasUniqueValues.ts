import * as R from '../node_modules/@types/ramda/index';
import _hasSameLength from './internal/_hasSameLength';

export default list => _hasSameLength(R.uniq(list), list);
