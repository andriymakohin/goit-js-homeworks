'use strict';
let country = prompt('Введіть місто доставки');
const inLowerCaseCountry = country.toLowerCase();
let prise;
let userCountry;

switch (inLowerCaseCountry) {
    case 'китай':
        userCountry = 'Китай';
        prise = 100;
        break;

    case 'чилі':
        userCountry = 'Чилі';
        prise = 250;
        break;
    
    case 'австралія':
        userCountry = 'Австралія';
        prise = 170;
        break;

    case 'індія':
        userCountry = 'Індія';
        prise = 80;
        break;

    case 'ямайка':
        userCountry = 'Ямайка';
        prise = 80;
        break;
}

if (userCountry) {
    alert(`Доставка в ${userCountry} буде коштувати ${prise} кредитів`);
} else alert('У вашій країні доставка недоступна');