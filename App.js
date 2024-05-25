const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");
const User = require("./User");

module.exports = class App {
  static #users = [];
  static findUsers(email) {
    const user = this.#users.find((user) => user.email === email);
    return user ?? null;
  }
  static createUser(email, fullname) {
    const userExist = App.findUsers(email);
    if (!userExist) {
      this.#users.push(new User(email, fullname));
    }
  }
  static deposit(email, value) {
    const user = App.findUsers(email);
    if (user) {
      const newDeposit = new Deposit(value);
      user.account.addDeposit(newDeposit);
    }
  }
  static transfer(fromUserEmail, toUserEmail, value) {
    const userFrom = App.findUsers(fromUserEmail);
    const toUser = App.findUsers(toUserEmail);
    if (userFrom && toUser) {
      const newTransfer = new Transfer(userFrom, toUser, value);
      userFrom.account.addTransfer(newTransfer);
      toUser.account.addTransfer(newTransfer);
    }
  }
  static takeLoan(email, value, numOfInstallments) {
    const user = App.findUsers(email);
    if (user) {
      const newLoan = new Loan(value, numOfInstallments);
      user.account.addLoan(newLoan);
    }
  }
  static newFee(newFee) {
    Loan.fee = newFee;
  }
};
