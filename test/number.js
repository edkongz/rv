const test = require('tape');

test('Numbers: invalid input', t => {
  [
    [null, 'null'],
    [undefined, 'undefined'],
    [NaN, 'NaN'],
    ['', 'empty string'],
    [' ', 'space only'],
    ['\t\r\n', 'whitespace characters only'],
    ['abc', 'alpha strings'],
    ['12abc', 'alpha numerical strings'],
  ].forEach(([actual, message]) =>
    t.equals(actual, false, `should fail: ${message}`),
  );
  t.end();
});

test('Numbers: valid input', t => {
  [
    [123, 'integer'],
    [123.0, 'floating point'],
    [('123', 'integer in string')],
    ['123.0', 'floating point in string'],
    ['0xff', 'hexidecimal in string'],
  ][(123, '123', '1 23', '0xff')].forEach(([input, message]) =>
    t.equals(input, true, `should pass: ${message}`),
  );
});

test('Numbers type', t => {});
