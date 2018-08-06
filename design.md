If called with arguments that are a schema then it should build a new schema.
If the arguments include a non schema object then the function would be called
An actual argument must be called so checking arguments.length is required
Either it runs and validates or returns another function

```
isNumber(123, isPositive());
isNumber(isPositive()) // ->  
```

A spec(ification) is a rule(s) whereas the schema is a function that will run with a value

```
allowNull();
disallowNull();
rejectNull();
```

## `isNumber()`

- `defaultsTo(value)`
- `isRequired()`
- `isOptional()`
- `allowUndefined()`
- `rejectUndefined()`
- `allowNull()`
- `rejectNull()`
- `allowNil()`
- `rejectNil()`
- `allowNaN()`
- `rejectNaN()`
- `shouldCast()`

- `equals()`
- `isGreaterThan(min)`
- `isGreaterThanOrEqual(min)`
- `isLessThan(max)`
- `isLessThanOrEqual(max)`
- `isBetween(min, max)`
- `isPositive()`
- `isNegative()`
- `isPositiveInteger()`
- `isNegativeInteger()`
- `isInteger()`
- `isFloatingPoint()`
- `isDecimal()`

## `isString()`

- `defaultsTo(value)`
- `isRequired()`
- `isOptional()`
- `allowUndefined()`
- `rejectUndefined()`
- `allowNull()`
- `rejectNull()`
- `allowNil()`
- `rejectNil()`
- `allowEmpty()`
- `rejectEmpty()`

- `matches()`
- `equals()`
- `isOneOf()`
- `notOneOf()`
- `hasMinLength(min)`
- `hasMaxLength(max)`
- `hasLengthBetween(min, max)`
- `hasNumbersOnly()`
- `hasNumbers()`
- `hasAlphaOnly()`
- `hasAlpha()`
- `hasAlphaNumericOnly()`
- `hasAlphaNumeric()`
- `shouldCast()`
- `shouldPassLuhn`
- `shouldPassDamm`
- `shouldPassVeroff`

## `isObject()`

- `defaultsTo(value)`
- `isRequired()`
- `isOptional()`
- `allowUndefined()`
- `rejectUndefined()`
- `allowNull()`
- `rejectNull()`
- `allowNil()`
- `rejectNil()`
- `allowEmpty()`
- `rejectEmpty()`
- `hasShapeOf()`
- `hasRequiredKeys()`
- `hasKnownKeysOnly()`
- `allowOptionalKeys()`
- `allowUnknownKeys()`
- `rejectUnknownKeys()`

## `isArray()`

- `defaultsTo(value)`
- `isRequired()`
- `isOptional()`
- `allowUndefined()`
- `rejectUndefined()`
- `allowNull()`
- `rejectNull()`
- `allowNil()`
- `rejectNil()`
- `allowEmpty()`
- `rejectEmpty()`
- `hasItemsOf()`
- `hasMinLength(min)`
- `hasMaxLength(max)`
- `hasLengthBetween(min, max)`
- `allowOnlyUnique()`
- `allowDuplicates()`

## `isBoolean()`

- `defaultsTo(value)`
- `isRequired()`
- `isOptional()`
- `allowUndefined()`
- `rejectUndefined()`
- `allowNull()`
- `rejectNull()`
- `allowNil()`
- `rejectNil()`
  <!-- * `isTrue()` -->
  <!-- * `isTruthy()` -->
  <!-- * `isFalse()` -->
  <!-- * `isFalsy()` -->

<!-- ## `isNull()` -->
<!-- ## `isUndefined()` -->

## `isTypeOf()`

## `hasSchema()`

## Extras

- `isTrue()`
- `isTruthy()`
- `isFalse()`
- `isFalsy()`

- `isEmail()`
- `isIPv4()`
- `isIPv6()`
- `isCreditCard()`
- `isVIN()`
- `isABN()`

- `isToken()` - /[a-zA-Z0-9_]/
- `isUUID(v1, v2, v3, v4, v5)` - //
- `isBase64()` - //
- `isHostname()` -
- `isDate(ISO8601)` -
