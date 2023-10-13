'use strict';

// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// // Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge3(birthYear);
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }


//creating object using object literal syntax
const yash = {
    firstName: 'Yash',
    lastName: "Mahajan",
    birthYear: 2002,


    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }



};

//dot notation
console.log(yash.firstName + " " + yash.lastName);

//bracket notation
console.log(yash['firstName'] + " " + yash['lastName']);

//advantage of bracket notation
const nameKey = 'Name';
console.log(yash["first" + nameKey] + yash["last" + nameKey]);

console.log(yash.calcAge())
console.log(yash.age)


