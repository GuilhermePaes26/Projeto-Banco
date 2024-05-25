const Account = require("./Account");

module.exports = class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.account = new Account(this);
  }
};
