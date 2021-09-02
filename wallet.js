"use strict";

var { walletBalance } = require("./atm");
var cash= 350.00;
function checkWallet() {
    console.log('You check your wallet and you have $'+walletBalance+' left.');
    return;
    }
module.exports = {cash, checkWallet};
