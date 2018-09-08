import _isRommel from './_isRommel';

const shouldValidate = fn => (...args) => {
  if (args.length === 0 || _isRommel(args[0])) return shouldValidate(fn);
  return fn(...args);
};

export default shouldValidate;
