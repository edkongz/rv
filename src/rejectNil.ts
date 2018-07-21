import * as R from 'ramda';
import rejectNull from './rejectNull';
import rejectUndefined from './isRequired';

export default () => R.merge(rejectNull(), rejectUndefined());
