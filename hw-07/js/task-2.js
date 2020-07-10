'use strict';

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

let ulList = document.getElementById('ingredients');
const foodIngredients = ingredients.forEach(ingredient => {
    let items = document.createElement('li');
    items.innerHTML = ingredient;
    ulList.append(items);
    items.setAttribute('style', 'list-style-type:decimal;');
});

console.log(ulList);