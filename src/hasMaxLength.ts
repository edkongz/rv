import * as R from '../node_modules/@types/ramda/index';

export default R.curry((length:number, value:string|any[]) => value.length <= length);
