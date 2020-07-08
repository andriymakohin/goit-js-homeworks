'use strict';
import users from "./users.js";

// 1
const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// 2
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue")); // [обєкт Moore Hensley, обєкт Sharlene Bush, обєкт Carey Barr]

// 3
const getUsersWithGender = (users, gender) => {
    const maleGender = users.filter(user => user.gender === gender);
    return maleGender.map(user => user.name);
};
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// 4
const getInactiveUsers = users => users.filter(user => user.isActive);
console.log(getInactiveUsers(users)); // [обєкт Moore Hensley, обєкт Ross Vazquez, обєкт Blackburn Dotson]

// 5
const getUserWithEmail = (users, email) => users.find(user => user.email === email);
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {обєкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {обєкт користувача Elma Head}

// 6
const getUsersWithAge = (users, min, max) => users.filter(user => min <= user.age && user.age <= max);
console.log(getUsersWithAge(users, 20, 30)); // [обєкт Ross Vazquez, обєкт Elma Head, обєкт Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [обєкт Moore Hensley, обєкт Sharlene Bush, обєкт Blackburn Dotson, обєкт Sheree Anthony]

// 7

const calculateTotalBalance = users => users.reduce(
    (totalBalance, user) => totalBalance + user.balance, 0);
console.log(calculateTotalBalance(users)); // 20916

// 8

const getUsersWithFriend = (users, friendName) =>
    users
    .filter(user => user.friends.some(friend => friend === friendName))
    .map(user => user.name);
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// 9

const getNamesSortedByFriendsCount = users =>
    users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// 10

const getSortedUniqueSkills = users =>
    users
    .map(user => user.skills)
    .reduce((allSkills, user) => [...allSkills, ...user], [])
    .filter((elem, index, array) => array.indexOf(elem) === index)
    .sort((b, a) => b.localeCompare(a, 'en'));

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]