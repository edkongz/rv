import { TYPES } from './internal/_definitions';
export default test => ({
  forType: TYPES.NUMBER,
  rules: value => value > test,
});
