const test = require('tape');

/*################################################################
  Number
  ################################################################*/
test('isNumber() with default settings and invalid input', t => {
  [
    [null, `should fail null`],
    [undefined, `should fail undefined`],
    [NaN, `should fail NaN`],
    ['', 'should fail empty string'],
    [' ', 'should fail whitespace'],
    ['\t\r\n', 'should fail whitespace'],
    ['abc', 'should fail alpha string'],
    ['12abc', 'should fail string starting with numbers'],
  ].forEach(([actual, message]) => t.equals(actual, false, message));
  t.end();
});

test('isNumber() with default settings and valid input', t => {
  [
    [123, 'should pass integer'],
    [123.4, 'should pass floating point'],
    [0xff, 'should pass hexidecimal'],
    ['123', 'should pass string integer'],
    ['123.4', 'should pass string floating pont'],
    ['0xff', 'should pass string hexidecimalstring'],
  ].forEach(([actual, message]) => t.equals(actual, true, message));
  t.end();
});
