const test = require('tape');

/*################################################################
  Boolean
  ################################################################*/
test("isBoolean() with default settings and invalid input", t => {
  [
    [undefined, 'should fail with undefined'],
    [NaN, 'should fail with NaN'],
  ]
  t.end();
})

test("isBoolean() with default settings and valid input", t => {
  [
    [true, 'should pass with true'],
    [false, 'should pass with false'],
  ]
  t.end();
})
