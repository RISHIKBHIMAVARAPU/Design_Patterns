import YesBank from "./YesBank.js";
class YesBankAdaptor {
    constructor() {
        this.yesBank = new YesBank();
    }
    checkBalance(accountId) {
        return this.yesBank.checkBalance(accountId);
    }
}
export default YesBankAdaptor;
