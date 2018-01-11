# date-utils *0.1.0*

> Utilities for working with Dates.


### is-date.js


#### isDate(val) 

Is given value a date object or date like value (i.e. date formatted string)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val |  | The value to check. | &nbsp; |




##### Returns


- `boolean`  




### is-older-than.js


#### isOlderThan(dob, age) 

Is the input value a date of birth where the person in question is older than a given age?




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| dob | `Date`  | Date of birth. | &nbsp; |
| age | `number`  | Minimum age. | &nbsp; |




##### Returns


- `boolean`  




### is-within-days-in-future.js


#### isWithinDaysInFuture(value, daysOut) 

Is the input value a date within a certain number of days in the future?




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `Date`  |  | &nbsp; |
| daysOut | `number`  |  | &nbsp; |




##### Returns


- `boolean`  




### is-within-days-in-past.js


#### isWithinDaysInPast(value, daysBefore) 

Is the input value a date within a given number of days in the past?




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `Date`  |  | &nbsp; |
| daysBefore | `number`  |  | &nbsp; |




##### Returns


- `boolean`  




### is-younger-than.js


#### isYoungerThan(value, maxAge) 

Is the input value a date of birth where the person in question is younger than a given age?




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `Date`  |  | &nbsp; |
| maxAge | `number`  |  | &nbsp; |




##### Returns


- `boolean`  




### offset.js


#### offset(baseDate, offsets) 

Get a new date from the given date offsetted by the given offsets.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| baseDate | `string` `Date`  |  | &nbsp; |
| offsets | `Object`  | The offsets. | &nbsp; |
| offsets.years | `number`  | # years to offset. | *Optional* |
| offsets.months | `number`  | # months to offset. | *Optional* |
| offsets.days | `number`  | # days to offset. | *Optional* |




##### Returns


- `Date`  - The new offsetted Date.




### to-age.js


#### getAgeFromDateOfBirth(dobString) 

Calculate age from the given birthday.
SOURCE: https://stackoverflow.com/questions/4060004/calculate-age-in-javascript




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| dobString | `string`  | - Birthday/DOB. | &nbsp; |




##### Returns


- `number`  - The age in number of whole years.




### to-local-iso-string.js


#### toLocalISOString(date) 

Converts a Date to an ISO 8601 'local' string (no timezone):




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  |  | &nbsp; |




##### Returns


- `string`  - The date in ISO 8601 local.




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
