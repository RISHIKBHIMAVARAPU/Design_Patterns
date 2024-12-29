import IBank from "./BankInterface.js";
import ICICBank from "./ICICBank.js";
import YesBank from "./YesBank.js";

class AdapterClass implements IBank {
     bankName :string;

     public constructor(bankName:string) {
        this.bankName = bankName;
     }

    checkBalance(accountId: string): number {
        let balance:number=0;
        switch(this.bankName){
            case 'YesBank': 
                let yesBank = new YesBank();
                balance = yesBank.getBalance(accountId)
                break;
            case 'ICICBank':
                let icicBank = new ICICBank();
                balance = icicBank.getBalanceamount(accountId)
                break;
        }
        return balance;
    }
}

export default AdapterClass;