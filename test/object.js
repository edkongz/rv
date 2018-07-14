const test = require('tape');

test('Object with invalid input', t => {
  [
    [null, 'null'],
    [undefined, 'undefined'],
    [123, 'integer number'],
    [123.4, 'floating point number'],
    ['string', 'string'],
    [(new String('string'), 'new String')],
  ];
});

test('Object with valid inpout', t => {});
