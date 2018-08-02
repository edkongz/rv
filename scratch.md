## YUP
```
  name: 'ValidationError',
  value: '',
  path: undefined,
  type: 'required',
  errors: [ 'this is a required field' ],
  inner: [],
  message: 'this is a required field',
  params: { path: 'this', value: '', originalValue: '', label: undefined } }
```

### JOI
```
{ Error: "value" must be a string
    at Object.exports.process (eval at n.evaluate (https://replbox.repl.it/public/replbox_javascript.17918ff3215d0b744923.bundle.js:224:155740), <anonymous>:23155:19)
    at internals.String._validateWithOptions (eval at n.evaluate (https://replbox.repl.it/public/replbox_javascript.17918ff3215d0b744923.bundle.js:224:155740), <anonymous>:24620:31)
    at internals.String.validate (eval at n.evaluate (https://replbox.repl.it/public/replbox_javascript.17918ff3215d0b744923.bundle.js:224:155740), <anonymous>:24654:21)
    at eval (eval at n.evaluate (https://replbox.repl.it/public/replbox_javascript.17918ff3215d0b744923.bundle.js:224:155740), <anonymous>:8:1)
    at eval (<anonymous>)
    at n.evaluate (https://replbox.repl.it/public/replbox_javascript.17918ff3215d0b744923.bundle.js:224:155740)
    at https://replbox.repl.it/public/replbox_javascript.17918ff3215d0b744923.bundle.js:323:2015
  isJoi: true,
  name: 'ValidationError',
  details: 
   [ { message: '"value" must be a string',
       path: [],
       type: 'string.base',
       context: [Object] } ],
  _object: null,
  annotate: [Function] }
```

```
error: 'NULL_NOT_ALLOWED'
code: 'IS_REQUIRED'
type: 'Number'
message: "Value is required and can"
```