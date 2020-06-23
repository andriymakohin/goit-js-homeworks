'use strict';
let input;
let total = 0;

while (true) {
    input = prompt('Введіть число');
    if (isNaN(input)){
    alert('Було написано не число, спробуйте ще раз');
    continue;
    }
    if (input === null) {
        break;
    }
    input = Number(input);
    total += input;
}