const test = require('tape');

/*################################################################
  String
  ################################################################*/
test('isString() with default settings and invalid input', t => {
  [
    [null, 'should fail null'],
    [undefined, 'should fail undefined'],
    [NaN, 'should fail NaN']
    ['', 'should fail empty string'],
    [' ', 'should fail when only whitespace'],
    ["\t\r\n", 'should fail when only whitespaces']
    [{}, 'should fail an empty object'],
  ];
  t.end();
});

test('isString() with default settings and valid input', t => {
  [[new String('string'), 'New object string'], ['string', 'string']];
  [
    ['abc', 'should pass string'],
    [new String('abc'), 'should pass string constructed with new keyword'],
    [123, 'should pass integer by casting to string'],
    [123.0, 'should pass floating number by casting to string'],
    [0xff, 'should pass hexidecimal string']
  ]
  t.end();
});
