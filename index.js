// EXAMPLE 1 - Add Months to a Date in JavaScript

function addMonths(date, months) {
  date.setMonth(date.getMonth() + months);

  return date;
}

// ✅ Add 2 months to the current Date
const result1 = addMonths(new Date(), 2);
console.log(result1); // 👉️ 2023-09-27T07:17:09.816Z

// // ----------------------------------------------

// // ✅ Add 4 months to a different date
// const date = new Date('2023-04-14T00:00:00.000Z');

// const result2 = addMonths(date, 4);
// console.log(result2); // 👉️ 2023-08-14T00:00:00.000Z

// ------------------------------------------------------------------

// // EXAMPLE 2 - Add months to a Date without mutation

// function addMonths(date, months) {
//   const dateCopy = new Date(date);

//   dateCopy.setMonth(dateCopy.getMonth() + months);

//   return dateCopy;
// }

// const date = new Date('2023-04-14T00:00:00.000Z');

// const result = addMonths(date, 5);
// console.log(result); // 👉️ 2023-09-14T00:00:00.000Z

// console.log(date); // 👉️ 2023-04-14T00:00:00.000Z

// ------------------------------------------------------------------

// // EXAMPLE 3 - Add Months to a Date using date-fns

// import {addMonths} from 'date-fns';

// const date = new Date('2023-04-14T00:00:00.000Z');

// const result1 = addMonths(date, 1);
// console.log(result1); // 👉️ 2023-05-14T00:00:00.000Z

// const result2 = addMonths(date, 2);
// console.log(result2); // 👉️ 2023-06-14T00:00:00.000Z

// ------------------------------------------------------------------

// // EXAMPLE 4 - Add Months to a Date using moment.js

// import moment from 'moment';

// const date = new Date('2023-04-14T00:00:00.000Z');

// const result1 = moment(date).add(1, 'months');
// console.log(result1); // 👉️ 2023-05-14T00:00:00.000Z

// const result2 = moment(date).add(2, 'months');
// console.log(result2); // 👉️ 2023-06-14T00:00:00.000Z

// console.log(date); // 👉️ 2023-04-14T00:00:00.000Z
