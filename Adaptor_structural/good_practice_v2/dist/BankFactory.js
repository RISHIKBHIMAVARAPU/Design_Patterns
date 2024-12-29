import ICICBankAdaptor from "./ICICBankAdaptor.js";
import YesBankAdaptor from "./YesBankAdaptor.js";
class BankFactory {
    static createBank(bankName) {
        let bank;
        if (bankName === "YesBank") {
            bank = new YesBankAdaptor();
        }
        else {
            bank = new ICICBankAdaptor();
        }
        return bank;
    }
}
export default BankFactory;
