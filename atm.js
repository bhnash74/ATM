"use strict";
let newBalance;
let prompt = require ('prompt-sync')();
var {accountBalance, truePin} = require ('./account');

function getBalance(){
    console.log ('your balance is: '+ accountBalance);
     
}


function withdraw(){
    console.log ('How much would you like to withdraw?');
    var withdrawal = parseInt(prompt());
    if (accountBalance >= withdrawal) {
        newBalance = accountBalance- withdrawal;
        console.log ('Please collect your money below. \n  Your new balance is: '+newBalance);
        return accountBalance = newBalance;

    }


}
function deposit(){
    console.log ('How much would you like to deposit?');
    var deposit = parseInt(prompt());
    newBalance = accountBalance+ deposit;
    console.log ('Please deposit your money below. \n  Your new balance is: '+newBalance);
        return accountBalance = newBalance;
}
function validatePin(){ 
    console.log ('Please enter your PIN');
    var pinNumber = prompt();
    if (pinNumber==truePin){
        return true;
        }
    else return validatePin();
    
}
module.exports = {accountBalance, validatePin,getBalance,withdraw, deposit};