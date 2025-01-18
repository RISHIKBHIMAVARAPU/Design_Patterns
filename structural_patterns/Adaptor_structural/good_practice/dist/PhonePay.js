import Adapter from "./Adapter.js";
import RechargeService from "./RechargeService.js";
class PhonePay {
    constructor(id) {
        this.id = id;
    }
    recharge(amount) {
        let rechargeService = new RechargeService();
        let bank = new Adapter("ICICBank");
        if (rechargeService.recharge(this.id, amount, bank)) {
            console.log("Phone pay class recharge successful");
            return true;
        }
        else {
            console.log("recharge failed");
        }
    }
}
export default PhonePay;
