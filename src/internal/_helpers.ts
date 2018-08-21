/*################################################################
  Jest Test helpers
  ################################################################*/

const hasResults = (isValid: boolean) => fn => ([value, message]: any) =>
  it(message, () => expect(fn(value)).toMatchObject({ isValid }));

export const hasValidResults = hasResults(true);
export const hasInvalidResults = hasResults(false);
