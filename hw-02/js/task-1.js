'use strict';
const logItems = function (array) {
    const long = array.length;

    for (let i = 0; i < long; i += 1) {
        const position = i+1;
        const element = array[i];
        console.log (`${position} - ${element}`);
    }
  };
  
  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);