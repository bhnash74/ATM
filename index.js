"use strict";
var {validatePin,getBalance,withdraw, deposit, newBalance} = require ('./atm')
var {accountBalance, truePin} = require ('./account')
let prompt = require ('prompt-sync')();
atm();
function atm() {
    console.log ('Welcome to our ATM!!!');
    validatePin();
    selectMenu();
}
    function selectMenu() {
    console.log ('What service would you like? \n 1) Get Account Balance \n 2) Withdraw funds \n3) Deposit funds \n 4) Exit');
    var service = prompt();
    switch (service) {
      case "1":
        getBalance();
        selectMenu();
      case "2":
        withdraw();
        selectMenu();
        break;

     case "3":
        deposit();
        selectMenu();
        break;
     case "4":
console.log('Thank you - Come again soon!');
       break;
      default:
      console.log('That is not an option');
        selectMenu(); // restart app
        break;
    }
  }