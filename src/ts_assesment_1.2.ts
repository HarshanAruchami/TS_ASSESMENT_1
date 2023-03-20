interface savingsacc {
    savingsac: number;
    balance(): void;
}
interface currentacc {
    currentac: number;
    balance(): void;
}
class account implements savingsacc, currentacc {
    savingsac: number;
    currentac: number;
    constructor(saving: number, current: number) {
        this.savingsac = saving;
        this.currentac = current;
    }
    public balance(): void {
        console.log(`savings acc balance ${this.savingsac}`);
        console.log(`current acc balance ${this.currentac}`);
    }
}
var a = new account(100, 200);
a.balance();
