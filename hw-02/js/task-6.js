'use strict';
let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введіть число');

    if (isNaN(input)) {
        alert('Було введено не число, попробуйте ще раз');
        continue;
    }

    if (input === null) {
        // for (let i = 0; i < numbers.length; i += 1) {
        //     total += numbers[i];
        // }
        if (numbers.length > 0) {
            for (let number of numbers) {
                total += number;
            }
        } else {
            alert('Ви не ввели жодного числа');
            continue;
        }
        break;
    }

    input = Number(input)
    numbers.push(input)
}

console.log(`Загальна сума чисел дорівнює ${total}`);