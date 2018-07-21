import { TYPES } from './internal/_definitions';

export default (min, max) => ({
  forType: TYPES.NUMBER,
  rules: value => value >= min && value <= max,
});
