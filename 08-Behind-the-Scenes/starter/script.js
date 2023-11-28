'use strict';

const calcAge = function (birthYear) {
  const age = 2037 - birthYear;
  console.log(this); // will be undefined
  return age;
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  const age = 2037 - birthYear;
  console.log(this); // will output window
  return age;
};
calcAgeArrow(1980);

const p1 = {
  year: 1991,
  calcAgeObj: function () {
    console.log(this); // will be the p1 object
  },
};
