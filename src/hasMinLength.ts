import * as R from '../node_modules/@types/ramda/index';

export default R.curry((length, value:any[]) => R.length(value) >= length);
