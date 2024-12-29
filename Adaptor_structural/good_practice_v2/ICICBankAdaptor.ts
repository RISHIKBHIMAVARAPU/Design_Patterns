import IBank from "./BankInterfact.js";
import ICICBank from "./ICICBank.js";

class ICICBankAdaptor implements IBank{
    private icicBank: ICICBank;
    constructor(){
        this.icicBank = new ICICBank();
    }

    checkBalance(accountId: string): number {
        return this.icicBank.getBalance(accountId)
    }
}

export default ICICBankAdaptor;