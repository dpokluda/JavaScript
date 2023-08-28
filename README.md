# JavaScript
Sample repo with JavaScript samples and sandbox project. For details see individual project README files.

# Learning Fundamentals
[JavaScript Fundamentals](https://app.pluralsight.com/library/courses/javascript-fundamentals) from Mark Zamoyta course on Pluralsight.

## Language Features

### Constants
``` js
const carId = 42;
```

### Variables
You can either use `var` or `let`. The difference is that `let` has scoping, which means you can't use the variable outside the scope it is defined in.
``` js
// you can only use the variable after it was defined
// console.log(carId);
let carId = 42;

// you can use the variable before to get `undefined` value
console.log(carId); // undefined
var carId = 42; 
```

### Rest Parameters
``` js
function sendCars(day, ...allCarIds) {
  allCarIds.forEach( id => console.log(id));
}

sendCars('Monday', 100, 200, 555);
```

### Destructuring
Desctructuring arrays example:
``` js
let carIds = [1, 2, 5];
let car1, remainingCars;
[car1, ... remainingCars] = carIds;

console.log(car1, remainingCars);
```

Destructuring objects example:
``` js
let car = { id: 5000, style: 'convertible' };
let {id, style} = car;

console.log(id, style);
```

### Spread Syntax
The oposite to destructuring is spreading:

```js
function startCars(car1, car2, car3) {
  console.log(car1, car2, car3);
}

let carIds = [100, 30, 500];
startCars(...carIds); // 100 30 500

let carCodes = 'abc';
startCars(...carCodes); // a b c
```

### TypeOf
Returns type of a variable, constant or a literal value:
- `typeof(1)`: number
- `typeof(true)`: boolean
- `typeof('Hello')`: string
- `typeof( function() {})`: function
- `typeof({})`: object
- `typeof(null)`: object
- `typeof(undefined)`: undefined
- `typeof(NaN)`: number

### Common Type Conversion
```js
// convert to string
foo.toString();

// convert string to integer
Number.parseInt('55'); // 55 as a number

// convert string to number
Number.parseFloat('55.99'); // 55.99 as a number
```

### Controlling Loops
Simple for loops:
```js
for (let i=0; i<4; i++) {
  if (i === 2) {
    continue;
  }

  console.log(i);
}
```

## Operators
### Equality Operators
- `var1 == var2`: it will do the necessary conversion before doing the comparison
- `var1 === var2`: it will only compare values (no conversion is done)

Similarly for inequality, `!=` and `!==`.

```js
console.log(1 == 1); // true
console.log(1 == true); // true
console.log(1 === true); // false
```

### Unary Operators
Same as any other language, like `i++`, `++i`, `-i`, etc.

### Logical (Boolean) Operators
- `&&`: logical AND operator
- `||`: logical OR operator

### Relational Operators
Same as any other language, like `<`, `<=`, etc.

### Conditional Operator
Same as any other language, (condition `?` then `:` else).

### Assignment Operator
Same as any other language, like `+=`, `-=`, `/=`, etc.

### Operator Precedence
See [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) for table with operator precedence.

## Functions and Scopes

### IIFE Pattern
IIFE stands for Immediately Invoked Function Expression.

```js
// just function
function() {
  console.log('in function');
}

  // iife - executed immediately
(function() {
  console.log('in function');
})();
```

### Closures
```js
let app = (function() {
  let carId = 123;
  let getId = function() {
    return carId;
  };
  return {
    getId: getId
  };
})();
console.log(app.getId());
```