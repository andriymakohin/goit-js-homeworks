'use strict';

let inputVal = document.getElementById('validation-input');

let totalLenght = inputVal.getAttribute('data-length');
let inTotalLenght = parseInt(totalLenght, 10);

inputVal.oninput = function() {
    if (inputVal.value.length === inTotalLenght) {
        inputVal.classList.remove('invalid');
        inputVal.classList.add('valid');

    }
    if (inputVal.value.length === 0) {
        inputVal.classList.remove("valid");
        inputVal.classList.remove("invalid");
    }
    if (inputVal.value.length !== inTotalLenght && inputVal.value.lenght !== 0) {
        inputVal.classList.add("invalid");
    }
}

console.log(inputVal);