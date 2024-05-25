const App = require("./App");

App.createUser("isaac@email.com", "Isaac Pontes");
App.createUser("lucas@email.com", "Lucas Queiroga");
App.createUser("juliana@email.com", "Juliana Conde");

App.deposit("isaac@email.com", 100);

App.transfer("isaac@email.com", "lucas@email.com", 20);

App.newFee(10);
App.takeLoan("juliana@email.com", 2000, 24);

console.log(App.findUsers("isaac@email.com"));
console.log(App.findUsers("isaac@email.com").account);
console.log(App.findUsers("lucas@email.com"));
console.log(App.findUsers("lucas@email.com").account);
console.log(App.findUsers("juliana@email.com"));
console.log(App.findUsers("juliana@email.com").account);
console.log(App.findUsers("juliana@email.com").account.loans[0].installments);
