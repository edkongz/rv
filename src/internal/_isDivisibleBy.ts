import * as R from '../../node_modules/@types/ramda/index';

export default R.curry((a:number, b:number) => b % a === 0);
