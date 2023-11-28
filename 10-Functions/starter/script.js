'use strict';

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker(); // passengerCount = 1
// booker(); // passengerCount = 2
// booker(); // passengerCount = 3

// Closure enables functions to remember variables that existed   at the functions birthplace.

// Any function always has access to the variable environment of the execution context where it was created So booker will have access to the variable environment of secure booking which includes passengerCount. This is even after the execution context is gone

// In other words a closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope which perserves the scope chain throughout time.

// More closure examples

// Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// // Re-assigning f with h
// h();
// f();

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers `);
//     console.log(`There are 3 groups each with ${perGroup}`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

////////////////////////// challenge

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
