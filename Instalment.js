module.exports = class Instalment {
  constructor(value, number) {
    this.value = value;
    this.number = number;
    this.status = "Pending";
  }
};
