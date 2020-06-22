'use strict';

const credits = 23580;
const pricePerDroid = 3000;

let totalDroid = prompt('Скільки дроїдів бажаєте купити?');

if (totalDroid === null) {
  console.log('Скасовано користувачем!');
} else {
  let totalPrice = pricePerDroid * totalDroid;
  let account = credits - totalPrice;
  if (account >= 0) {
    console.log(
      `Ви купили ${totalDroid} дроїдів, на рахунку залишилося ${credits} кредитів.`,
    );
  } else console.log('Недостатньо коштів на рахунку!');
}