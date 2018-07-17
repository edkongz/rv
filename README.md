# Rommel 🦊

A validation library written with ramda (all hail ramda 🙌). Heavily inspired by Joi, Yup with the following features:

- Functional all the way
- Reusable and composable
- Descriptive and declarative

```javascript
import {schema} from "rv";

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
