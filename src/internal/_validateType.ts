import _isType from './_isType';

const _validateType = (specs, value) => {
  if (_isType(value) !== specs.type) {
    // if(specs.shouldCast)
  }
};

export default _validateType;
