import ICICBank from "./ICICBank.js";
import YesBank from "./YesBank.js";
class AdapterClass {
    constructor(bankName) {
        this.bankName = bankName;
    }
    checkBalance(accountId) {
        let balance = 0;
        switch (this.bankName) {
            case 'YesBank':
                let yesBank = new YesBank();
                balance = yesBank.getBalance(accountId);
                break;
            case 'ICICBank':
                let icicBank = new ICICBank();
                balance = icicBank.getBalanceamount(accountId);
                break;
        }
        return balance;
    }
}
export default AdapterClass;
