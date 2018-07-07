# RV🚙

A functional validation library written with ramda (all hail ramda 🙌). Heavily inspired by Joi with the following features:

* Functional all the way
* Reusable and composable
* Small footprint
* Descriptive and declarative

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

```
[
  description("Gender validation"),
  isOneOf("FEMALE", "MALE"),
  isRequired(),
  notNull(),
  notNil(),
  notEmpty(),
]
```

