module.exports = class Transfer {
  constructor(fromToUser, destine, value) {
    this.fromToUser = fromToUser;
    this.destine = destine;
    this.value = value;
    this.date = new Date();
  }
};
