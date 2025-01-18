import ICICBank from "./ICICBank.js";
class ICICBankAdaptor {
    constructor() {
        this.icicBank = new ICICBank();
    }
    checkBalance(accountId) {
        return this.icicBank.getBalance(accountId);
    }
}
export default ICICBankAdaptor;
