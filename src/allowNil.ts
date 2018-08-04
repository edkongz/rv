import * as R from '../node_modules/@types/ramda/index';
import allowNull from './allowNull';
import allowUndefined from './allowUndefined';

export default () => R.merge(allowNull(), allowUndefined());
