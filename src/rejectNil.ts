import * as R from '../node_modules/@types/ramda/index';
import rejectNull from './rejectNull';
import rejectUndefined from './isRequired';

export default () => R.merge(rejectNull(), rejectUndefined());
