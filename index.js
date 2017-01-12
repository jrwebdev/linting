const mootools = require('mootools');

const obj = {a: 1, b: 2, c: 3};

Object.prototype.abc = 123;

Object.toQueryString(obj);
Object.contains(obj, 2);
Object.keyOf(obj);

Number.random();
Number.random();

console.log((-10).abs());

console.log(Number.random(1, 10));

console.log((-10).abs());
