import BankFactory from "./BankFactory.js";
import IBank from "./BankInterfact.js";
import RechargeService from "./RechargeService.js";

class PhonePay{
    private rechargeService: RechargeService;
    private bank : IBank;
    private accountId :string;

    constructor(bankType : string,accountId:string) {
        this.rechargeService = new RechargeService();
        this.bank = BankFactory.createBank(bankType);
        this.accountId = accountId;
    }

    recharge(amount : number){
       return this.rechargeService.recharge(this.accountId,amount,this.bank);
    }
}

export default PhonePay;