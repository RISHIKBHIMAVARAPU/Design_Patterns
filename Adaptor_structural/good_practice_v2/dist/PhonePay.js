import BankFactory from "./BankFactory.js";
import RechargeService from "./RechargeService.js";
class PhonePay {
    constructor(bankType, accountId) {
        this.rechargeService = new RechargeService();
        this.bank = BankFactory.createBank(bankType);
        this.accountId = accountId;
    }
    recharge(amount) {
        return this.rechargeService.recharge(this.accountId, amount, this.bank);
    }
}
export default PhonePay;
