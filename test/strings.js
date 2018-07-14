const test = require('tape');

test('Strings type', t => {});

test('Strings with invalid input', t => {
  [
    [null, 'null'],
    [undefined, 'undefined'],
    [123, 'integer numbner'],
    [123.4, 'floating point number'],
    [{}, 'empty object'],
  ];
});

test('Strings with valid input', t => {
  [[new String('string'), 'New object string'], ['string', 'string']];
});
