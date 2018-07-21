import { TYPES } from './internal/_definitions';

export default test => ({
  rules: value => value.length === test,
});
