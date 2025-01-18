import Adapter from "./Adapter.js";
import RechargeService from "./RechargeService.js";
import YesBank from "./YesBank.js";


class PhonePay{
    id: string;
    constructor(id: string){
        this.id = id;
    }

    recharge(amount:number){
        let rechargeService = new RechargeService();
        let bank = new Adapter("ICICBank")
        if(rechargeService.recharge(this.id, amount,bank)){
            console.log("Phone pay class recharge successful")
            return true;
        }else{
            console.log("recharge failed");
        }
     }
}

export default PhonePay;