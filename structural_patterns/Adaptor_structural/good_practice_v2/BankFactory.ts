import IBank from "./BankInterfact.js";
import ICICBankAdaptor from "./ICICBankAdaptor.js";
import YesBankAdaptor from "./YesBankAdaptor.js";

class BankFactory{
    static createBank(bankName : string) {
        let bank:IBank;

        if(bankName === "YesBank"){
            bank = new YesBankAdaptor();
        }else {
            bank = new ICICBankAdaptor();
        }

        return bank;
    }
}

export default BankFactory;

// factory design pattren (structural design pattern)