'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// splice is different to slice method because splice mutates the original array
// arr.splice(2) makes the array [c, d, e]

//////////////////////////////// @ method arrays
// const arr = [23, 11, 13];

// console.log(arr.at(0));

// // Advantage of at method for arrays is that we can use negative indices
// console.log(arr.at(-1));

//////////////////////////////////////////////////

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// first parameter always is current element, second parameter is always the current index, and the third one is the enitre array being looped over.
// movements.forEach(function (movement, index, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

/////////////////////////////////////////////////// foreach maps and sets

// // map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}`);
// });

////////////////////////////////// Bankist project
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const expenses = acc.movements
    .filter(mov => mov < 0)
    .reduce((mov, acc) => mov + acc, 0);
  labelSumOut.textContent = `${Math.abs(expenses)} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((mov, acc) => mov + acc, 0);
  labelSumInterest.textContent = `${Math.abs(interest)} EUR`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  console.log(amount, receiverAccount);
  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

///////////////////////////////// challenge #1
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrect = dogsJulia.slice(1, -2);
//   const allAges = dogsJuliaCorrect.concat(dogsKate);
//   console.log(allAges);

//   allAges.forEach(function (age, i) {
//     const status = age < 3 ? 'puppy' : 'adult';
//     console.log(`dog ${i + 1} is a ${status}`);
//   });
// };

// checkDogs([1, 2, 3, 4, 5], [3, 5, 7, 8, 6]);

///////////////////////////// Map method

// const movmentsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsUSDArrow = movements.map(mov => mov * eurToUsd);

//////////////////////////// the filter method
// deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// // accumulator -> snowballs
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);

// const max = movments.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// challenge 2

// const td1 = [5, 2, 4, 1, 15, 8, 3];
// const td2 = [16, 6, 10, 5, 6, 1, 4];

// // // 1.
// const calcAvgHumanAge = dogAges => {
//   dogAges
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => {
//       acc + age / arr.length;
//     }, 0);
// };

// console.log(calcAvgHumanAge(td1));
// console.log(calcAvgHumanAge(td2));

// Chaining methods
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// the find method
// const firstWithdrawal = movements.find(mov => mov < 0);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

///////////////// some and every

// //Equality
// console.log(movements.includes(-130));

//// some: CONDITION
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// // EVERY
// console.log(account4.movements.every(mov => mov > 0));

// // separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[1, [2, 3]], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(1)); // default
// console.log(arrDeep.flat(2));

// // flat
// const accountMovements = accounts.map(acc => acc.movements);
// const allMovements = accountMovements.flat();
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
// owners.sort();
// console.log(owners);

// console.log(movements);

// // a and b represent consecutive numbers
// //return  < 0 a, b (keep order)
// // return > 0 b, a (switch order)
// movements.sort((a, b) => a - b);

// console.log(movements);
//////////////////////////////// More ways of creating and filling arrays
const x = new Array(7); // creates array with 7 empty elements
x.fill(1); // fills the empty array with 1s
const y = new Array(5);
y.fill(1, 2, 4); // fills the empty array with 1s starting from 2nd to 4th index

// Array.from
const z = Array.from({ length: 7 }, () => 1);
