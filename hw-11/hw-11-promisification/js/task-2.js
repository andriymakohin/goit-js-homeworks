"use strict";
const users = [
    { name: "Mango", active: true },
    { name: "Poly", active: false },
    { name: "Ajax", active: true },
    { name: "Lux", active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {
//     const updatedUsers = allUsers.map((user) =>
//         user.name === userName ? {...user, active: !user.active } : user
//     );

//     callback(updatedUsers);
// };

// const logger = (updatedUsers) => console.table(updatedUsers);

/*
 * Зараз працює так
 */
// toggleUserState(users, "Mango", logger);
// toggleUserState(users, "Lux", logger);

/*
 * Повинно працювати так
 */
const toggleUserState = (allUsers, userName) => {
    return new Promise((res) => {
        const updatedUsers = allUsers.map((user) =>
            user.name === userName ? {...user, active: !user.active } : user
        );
        res(updatedUsers);
    });
};

const logger = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);