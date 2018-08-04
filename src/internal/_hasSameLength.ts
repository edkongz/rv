import * as R from '../../node_modules/@types/ramda/index';

export default R.curry((a:any[], b:any[]) => a.length === b.length);
