# Rommel 🦊

A validation library with the following philosophy:

* functional 
* reusable
* comoposable
* declarative

Heavily inspired by Joi and yup this is a new validation library. With the only dependency is `Ramda` (all hail Ramda 🙌). Rommel is nothing more than a series of functions. They all have sensible defaults and should require minimal setup. Because everything function is pure tree shaking should ensure the resulting package is small.

Named after Erwin Rommel the "desert fox". 

<!-- A validation library written with ramda (all hail ramda 🙌). Heavily inspired by Joi, Yup with the following features:

- Functional all the way
- Reusable and composable
- Descriptive and declarative -->

```javascript
schema([
  	description(),
  	label(),
  	matches(),
  	defaultsTo(),

  	isObject(),
  	isString(),
  	isNumber(),
  	isDate(),
  	isBoolean(),
  	isArray(),
		isRequired(),
  	isPositive(),
  	isNegative(),
  	isInfinity(),
  	isInteger(),
  	isNaN(),
  	isPositiveInteger(),
  	isNegativeInteger(),
  	isGreaterThan(),
  	isLessThan(),
  	isNull(),
  	isUndefined(),
  	isNil(),
  	isEmpty(),
  	isTrue(),
  	isTruthy(),
  	isFalse(),
  	isFalsey(),

  	isOneOf(),
  	notOneOf(),
  	notNil(),
  	notNull(),
  	notEmpty(),
  	notUndefined(),

		hasShape(),
  	hasLength(),
  	hasMinLength(),
  	hasMaxLength(),
  	hasRequiredKeys(),
  	hasOnlyKnownKeys(),
  	hasUniqueValues(),

  	allowOptionalKeys(),
  	allowUnknownKeys(),

	rejectKeys(),
  	rejectWhen

  	shouldAnyPass(),
  	shouldAllPass(),
])
```

```javascript
// Primitives
isObject(
	hasShape({
		name: isString(isOptional()))
		email: isString(matches(/\.+@\.+/), isOptional())
		password: isString()
	}),
	notNull(),
	notEmpty(),
)
isArray()
isNumber()
isString()
isBoolean()
```

```
matches()

is
not
has
reject
allow
disallow
forbid
should

hasShape()
hasItems()

isNil()
notNil()
rejectNil()
allowNil()

isOptional()
allowUndefined()
```
