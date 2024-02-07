'use strict';

const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Enhanced object literals
  openingHours,

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

<<<<<<< HEAD
/////// Coding challenge 3:
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2.
// gameEvents.delete(64);
// console.log(gameEvents);

// //3.
// console.log(`An event happened on average every ${90 / gameEvents.size} mins`);

// //4.
// for (const [minute, event] of gameEvents) {
//   const time = minute < 45 ? '[FIRST HALF]' : '[SECOND HALF]';
//   console.log(`${time} ${minute}: ${event}`);
// }

/////////////////////////////////////////////////////////
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
=======
// const [first, second] = restaurant.categories;
// console.log(first, second);

// let [main, , starter] = restaurant.categories;
// console.log(main, starter);

// // swapping main and secondary
// [main, starter] = [starter, main];
// console.log(main, starter);

// [starter, main] = restaurant.order(2, 0);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

/////////////////////////////////////////////
// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// //destructuring objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // default values and changing variable names
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); //has to be wrapped into parenthesis

// //nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   time: '22: 30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

//////////////////////////////////////////////////////////////////////

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// //using spread operator (...)
// //...array allows you to access individual elements of the array
// // ...arr would = 7, 8,9
// const goodNewArr = [1, 2, ...arr];

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// //important: the spread operator doesn't create new variables
// //so can only use it in other places where we would write values separated by commas

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// // Iterables: arrays, strings, maps, sets. Not objects!
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3'),
// ];

// restaurant.orderPasta(...ingredients);

// // Spreading objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

/////////////////////////////////////////////////////////////////////////////////

// // 1) Destructuring
// // SPREAD, because on RHS of =
// const arr = [1, 2, ...[3, 4]];

// //REST, because on LHS of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// // REST pattern should always be last element
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// // objects using REST
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
// };

// add(2, 3);
// add(2, 3, 4, 5);
// add(2, 3, 4, 5, 10, 13);

// const x = [24, 5, 6];
// add(...x);

// restaurant.orderPizza('Mushrooms', 'Olives', 'Onions', 'Spinach');
// restaurant;

////////////////////////////////////////////////////////////////////////////

//Logical operators can use and return any data type

//------------------------------------OR--------------------------------------
//OR short circuits when the first operand is a truthy value will be returned immediately
// console.log(3 || 'Hi'); //will return 3
// console.log('' || 2); // will return 2
// console.log(undefined || null); // Will return null

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// const guests2 = restaurant.numGuests || 10;

// //------------------------------AND-------------------------------------------
// // AND operator short-circuits when first value is falsey, returning that
// // If no falsy value is found then the last truthy value is returned

// console.log(0 && 'Jonas'); // reutnrs 0 since it is falsey
// console.log(7 && 'Hello'); // returns 'hello'

// // Example: if orderPizza method doesn't exist it will return that, else the
// // method will be called.
// restaurant.orderPizza && restaurant.orderPizza('Mushroom');

// //--------------------------NULLISH(??)---------------------------------------
// // Nullish values: null and undefined (Not 0 or '')
// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10; // will output 0

// /////////////////////////////////////////////////////////////////////////////////////////
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10; // 20
// rest2.numGuests = rest2.numGuests || 10; // 10

// // logical OR assigment operator
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= 'ANONYMOUS';
// rest2.owner &&= 'ANONYMOUS';

///////////////////////////////// Challenge
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// //1.
// const [players1, players2] = game.players;

// //2.
// const [gk, ...fieldPlayers] = players1;

// //3.
// const allPlayers = [...players1, ...players2];

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// // 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// // 7.
// team1 < team2 && console.log('Team 1');
// team1 < team1 && console.log('Team 2');
////////////////////////////////////////////////////////////

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const [number, food] of [...menu.entries()]) {
//   console.log(`${number + 1}: ${food}`);
// }
//////////////////////////////////////////////////////////

// With optional chaining (causes error)
// console.log(restaurant.openingHours.mon.open);
// Without optional chaining (returns undefined)
// Only if mon exists it will look at open otherwise return undefined
console.log(restaurant.openingHours.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';

//   console.log(`On ${day}, we open at ${open}`);
// }

// // Optional chaining for methods
// console.log(restaurant.orderDelivery?.(0, 1) ?? "Method doesn't exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist");

// // Optional chaining for arrays
// const users = [{ name: `Jonas`, email: `hello@jonas.io` }];

// console.log(users[0]?.name ?? `User array empty`);

//////////////////////////////////////////////////////////////

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
// console.log(`We're open ${Object.keys(openingHours)} days a week`);

// const values = Object.values(openingHours);

// const entries = Object.entries(openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
//////////////////////////////////////////////////////////////

// // 1.
// for (const [number, player] of Object.entries(game.scored)) {
//   console.log(`Goal ${number + 1}: ${player}`);
// }

// // 2.
// const odds_arr = Object.values(game.odds);
// let avg = 0;
// for (const odd of odds_arr) {
//   avg += odd;
// }

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === x ? 'draw' : `winning ${game[team]}`;
//   console.log(`Odds of ${team}: ${odd}`);
// }

// // Bonus.
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

/////////////////////////////////////////////////////////////////////////
// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza']);
// console.log(ordersSet);
// ordersSet.add('Garlic bread');
// ordersSet.delete('Pasta');

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
/////////////////////////////////////////////////////////////////////////

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// // Set method returns the updated maps, so we can chain
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegitarian', 'Organic'])
//   .set('Open', 11)
//   .set('Close', 23)
//   .set(true, 'we are open :D')
//   .set(false, 'we are shut');

// console.log(rest.get('name'));

// const time = 21;
// rest.get(time > rest.get('open') && time < rest.get('close'));

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

const question = new Map([
  ['question', 'Q'],
  [1, 'option1'],
  [2, 'option2'],
  [3, 'option3'],
  [true, 'Correct!'],
]);

// Convert objects to map
const hoursMap = new Map(Object.entries(openingHours));

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`option ${key}: ${value}`);
  }
}

const answer = Number(prompt('Your answer'));
console.log(answer === question.get('correct'));
>>>>>>> eb0a87814447c73edc29d2d727788ca425462444
