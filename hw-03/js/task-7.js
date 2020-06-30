'use strict';
/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
    // Поточний баланс рахунку
    balance: 0,

    // Історія транзакцій
    transactions: [],

    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
    createTransaction(amount, type) {

        const newTransaction = {
            id: this.transactions.length + 1,
            amount,
            type,
        };
        return newTransaction;
    },

    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {

        this.balance += amount;
        this.transactions = [
            ...this.transactions,
            this.createTransaction(amount, 'deposit'),
        ];
    },

    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {

        if (this.balance < amount) {
            console.log('Зняття такої суми не можливо, недостатньо коштів.');
        } else {
            this.balance -= amount;
            this.transactions.push(this.createTransaction(amount, 'withdraw'));
        }
    },

    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
        return this.balance;
    },

    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
        for (const detail of this.transactions) {
            if (detail.id === id) {
                return detail;
            }
        }
        return 'id не вірний.';
    },

    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
        let totalAmount = 0;
        for (const i of this.transactions) {
            if (i.type === type) {
                totalAmount += i.amount;
            }
        }
        return totalAmount;
    },
};

account.deposit(200);
account.deposit(40);
console.log(account.balance); //240
account.withdraw(3000);
account.deposit(500);
account.withdraw(240);
account.deposit(4000);
account.withdraw(300);

console.log(account.getBalance()); //Зняття такої суми не можливо, недостатньо коштів. 4200

console.log(account.transactions); //перелік обєктів

console.log(account.getTransactionDetails(4)); // id 4
console.log(account.getTransactionDetails(41)); // id не вірний
console.log(account.getTransactionDetails(2)); // id 2

console.log(account.getTransactionTotal('deposit')); // 4740
console.log(account.getTransactionTotal('withdraw')); // 540