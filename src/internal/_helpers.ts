/*################################################################
  Jest Test helpers
  ################################################################*/

const hasResults = (isValid: boolean) => fn => ([value, message]: any) =>
  it(message, () => expect(fn(value)).toMatchObject({ isValid }));

export const _hasValidResults = hasResults(true);
export const _hasInvalidResults = hasResults(false);

const testResults = (fn, isValid) => ([value, message]: any) =>
  it(message, () => expect(fn(value)).toMatchObject({ isValid }));

export const _validTests = (fn, values) =>
  values.forEach(testResults(fn, true));

export const _invalidTests = (fn, values) =>
  values.forEach(testResults(fn, false));
