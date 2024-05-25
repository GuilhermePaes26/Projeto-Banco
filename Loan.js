const Instalment = require("./Instalment");

module.exports = class Loan {
  static #fee = 1.05;

  constructor(value, installments) {
    this.value = value;
    this.date = new Date();
    this.installments = [];
    for (let i = 1; i < installments.length; i++) {
      this.installments.push(new Instalment((value * Loan.#fee) / installments, i));
    }
  }
  static set fee(newFee) {
    Loan.#fee = 1 + newFee / 100;
  }
  static get fee() {
    return Loan.#fee;
  }
};
