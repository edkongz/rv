const test = require("tape");

/*################################################################
  Array 
  ################################################################*/
test("isArray() with defeault settings and invalid input", t => {
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
    [{}, 'should fail with an object'],
  ]
  t.end();
})

test("isArray() with default settingss valid input", t => {
  [
    [[], 'should pass with array'],
    [new Array(), 'should pass with new array'],
  ]
  t.end();
})
