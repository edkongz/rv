import { IResults } from './_buildResults';
import _isSchemaRule from './_isSchemaRule';

// import * as R from '../../node_modules/@types/ramda/index';
// import _toArray from './_toArray';
// import { TYPES } from './_definitions';

// const _concat = R.useWith(R.concat, [_toArray, _toArray]);
// const _mergeSpec = R.mergeWithKey((key, left, right) => {
//   switch (key) {
//     case 'hasRules':
//       return _concat(left, right);
//     default:
//       return right;
//   }
// });

// export interface ISchema{
//   isRommel: true,
//   allowNull: boolean;
//   allowUndefined: boolean;
//   allowNaN: boolean;
//   shouldCast: boolean;
//   hasType: TYPES;
//   hasRules: any[];
// }

// /*---------------------------------------------------------------
//   Export
//   ---------------------------------------------------------------*/
// export default R.reduce(_mergeSpec) as any;

function _schemaFactory(defaults, validateFn) {
  let specs = Object.assign({}, defaults);

  function resolve(...rules) {
    if (_isSchemaRule(rules[0])) {
      Object.assign(specs, rules);
      return resolve;
    }
    Object.assign(specs, rules.slice(1));
    return validateFn(rules[0], specs);
  }
  return resolve;
}

export default _schemaFactory;
