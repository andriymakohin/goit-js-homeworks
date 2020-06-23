'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
const password = prompt('Введіть пароль');
let message;

if (password === null) {
  message = 'Скасовано користувачем!';
} else {
    if (password === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо';
  } else {
    message = 'Доступ заборонений, невірний пароль!';
  }
}
alert(message);
