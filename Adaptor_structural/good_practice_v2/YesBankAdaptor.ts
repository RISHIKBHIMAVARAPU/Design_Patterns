import IBank from "./BankInterfact.js";
import YesBank from "./YesBank.js";

class YesBankAdaptor implements IBank {
    private yesBank : YesBank;
    constructor(){
        this.yesBank = new YesBank();
    }
    checkBalance(accountId: string): number {
        return this.yesBank.checkBalance(accountId);
    }
}

export default YesBankAdaptor;