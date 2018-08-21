// const test = require("tape");
// const isNull = require('../build/isNull');

// /*################################################################
//   Null 
//   ################################################################*/
// test("isNull() with default settings and invalid input", t => {
//   [
//     [undefined, 'should fail with undefined'],
//     [NaN, 'should fail with NaN'],
//     ['', 'should fail empty string'],
//     [' ', 'should fail when only whitespace'],
//     ["\t\r\n", 'should fail whenonly whitespace'],
//     [{}, 'should fail an empty object'],
//   ].forEach(([actual, message]) => t.equals(isNull()(actual).isValid, false, message));
//   t.end();
// })

// test("isNull() with default settings and valid input", t => {
//   [
//     [null, 'should pass with null'],
//   ]
//   t.end();
// })
