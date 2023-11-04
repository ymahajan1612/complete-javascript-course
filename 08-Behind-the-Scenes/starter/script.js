// 'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `you are ${age} born in ${birthYear}`;
//     console.log(output);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// hoisting with variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'yash';
let job = 'teacher';
const year = 1991;

// function hoisting
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}
