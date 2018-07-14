import uniq from 'ramda/es/uniq';
import hasSameLength from './internal/hasSameLength';

export default list => hasSameLength(uniq(list), list);
