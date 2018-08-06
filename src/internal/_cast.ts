import { TYPES } from './_definitions';
import _isEmpty from './_isEmpty';

const _toNumber = value => !_isEmpty(value) && +value;

const _cast = (type, value) => {
  switch (type) {
    case TYPES.NUMBER:
      return _isEmpty(value) ? NaN : +value;
    case TYPES.STRING:
      return value.toString();
  }
};

export default _cast;
