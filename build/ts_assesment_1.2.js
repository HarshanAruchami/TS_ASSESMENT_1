"use strict";
class account {
    constructor(saving, current) {
        this.savingsac = saving;
        this.currentac = current;
    }
    balance() {
        console.log(`savings acc balance ${this.savingsac}`);
        console.log(`current acc balance ${this.currentac}`);
    }
}
var a = new account(100, 200);
a.balance();
