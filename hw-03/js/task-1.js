'use strict';
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    // addMood() {
    //     this.mood = 'happy';
    // },
    // changeHobby() {
    //     this.hobby = 'skydiving';
    // },
    // changePremium() {
    //     this.premium = false;
    // }
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
console.log('Keys: ', keys);

for (const key of keys) {
    console.log('Value: ', user[key]);
}

// const entries = Object.entries(user);

// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];

//     console.log(`${key}: ${value}`);
// }