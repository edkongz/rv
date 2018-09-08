import * as R from 'ramda';
import { TYPES } from './_definitions';
import _isType from './_isType';
/*################################################################
  Jest Test helpers
  ################################################################*/

// const hasResults = (isValid: boolean) => fn => ([value, message]: any) =>
//   it(message, () => expect(fn(value)).toMatchObject({ isValid }));

// export const _hasValidResults = hasResults(true);
// export const _hasInvalidResults = hasResults(false);

export const _hasResults = R.curry((isValid, actual) =>
  expect(actual).toHaveProperty('isValid', isValid),
);
export const _noop = () => {};
export const _always = value => () => value;

export const _expectRommel = actual =>
  expect(actual).toHaveProperty('__isRommel');
export const _expectResults = actual =>
  expect(actual).toHaveProperty('isValid');
export const _expectValid = _hasResults(true);
export const _expectInvalid = _hasResults(false);

export const _expectType = R.curry((t: TYPES, actual) =>
  expect(_isType(actual)).toBe(t),
);
export const _expectFunction = _expectType(TYPES.FUNCTION) as (a) => void;
export const _expectObject = _expectType(TYPES.OBJECT) as (a) => void;
export const _expectNumber = _expectType(TYPES.NUMBER) as (a) => void;
export const _expectString = _expectType(TYPES.STRING) as (a) => void;
export const _expectArray = _expectType(TYPES.ARRAY) as (a) => void;

const results = (fn, isValid) => ([value, message]) => {
  it(message, () => {
    const results = fn(value);
    _expectRommel(results);
    _hasResults(isValid, results);
  });
};

export const _validResults = (fn, values) => values.forEach(results(fn, true));

export const _invalidResults = (fn, values) =>
  values.forEach(results(fn, false));

const tests = (fn, isValid) => ([value, message]) =>
  it(message, () => {
    expect(fn(value)).toBe(isValid);
  });

export const _validTests = (fn, values) => values.forEach(tests(fn, true));
export const _invalidTests = (fn, values) => values.forEach(tests(fn, false));
