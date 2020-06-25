'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
    if (login.length >= 4 && login.length <= 16) {

        return true;

    }
    return false;
};

const isLoginUnique = function(allLogins, login) {
    for (let i = 0; i < allLogins.length; i += 1) {
        if (login === allLogins[i]) {
            return false;
        }
    }
    return true;
};

const addLogin = function(allLogins, login) {
    if (login === null) {
        return 'Папа';
    }

    if (isLoginValid(login) === false) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
    if (isLoginUnique(allLogins, login) === false) {
        return 'Такий логін уже використовується!';
    } else {
        allLogins.push(login);
    }
    return "Логін успішно доданий!";
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'