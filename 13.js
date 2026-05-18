const userObj = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

const { name, age, hobby, premium } = userObj;

console.log(name);
console.log(age);
console.log(hobby);
console.log(premium);

const employees = {
  Mango: 120,
  Poly: 80,
  Ajax: 150,
};

const { Mango, Poly, Ajax } = employees;

console.log(Mango);
console.log(Poly);
console.log(Ajax);


const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      amount,
      type,
    };
  },
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів");
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return `${id} не знайдено`;
  },
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};
console.log(account.getBalance());
account.deposit(100);
console.log(account.getBalance());
account.deposit(10);
console.log(account.getBalance());
account.withdraw(20);
console.log(account.getBalance());
account.withdraw(40);
console.log(account.getBalance());

console.log("Transaction 1: ");
console.log(account.getTransactionDetails(1));
console.log("Transaction 3: ");
console.log(account.getTransactionDetails(3));
console.log("Transaction 4: ");
console.log(account.getTransactionDetails(4));

console.log(
  "Withdrawals: " + account.getTransactionTotal(Transaction.WITHDRAW),
);
console.log("Deposits: " + account.getTransactionTotal(Transaction.DEPOSIT));