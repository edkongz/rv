import * as R from 'ramda';
import allowNull from './allowNull';
import allowUndefined from './allowUndefined';

export default () => R.merge(allowNull(), allowUndefined());
