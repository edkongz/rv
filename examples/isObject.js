const test = require('tape');

/*################################################################
  Object
  ################################################################*/
test('isObject() with default settings and invalid input', t => {
  [
    [undefined, 'should fail with undefined'],
    [null, 'should fail with null'],
    [NaN, 'should fail with NaN'],
    ['abc', 'should fail with a string'],
    [new String('abc'), 'should fail with new string'],
    [123, 'should fail with a number'],
    [new Number(123), 'should fail with new number'],
    [true, 'should fail with boolean true'],
    [false, 'should fail with boolean false'],
    [[], 'should fail with array'],
    [new Array(), 'should with new array']
  ]
  t.end();
})

test('isObject() with default settings and invalid input', t => {
  [
    []
  ]
  t.end();
})

