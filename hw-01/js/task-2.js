'use strict';
const total = 100;
const ordered = 50;
// let ordered = 20;
// ordered = 80;
// ordered = 130;

let available = total - ordered;

if (available > 0) {
    console.log('Замовлення оформлено, з вами зв\'яжеться менеджер');
  } else console.log('На складі недостатньо товарів!');
