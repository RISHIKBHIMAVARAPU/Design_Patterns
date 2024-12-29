import RechargeService from "./RechargeService.js";
import YesBank from "./YesBank.js";


class PhonePay{
    id: string;
    constructor(id: string){
        this.id = id;
    }

    recharge(amount:number){
        let rechargeService = new RechargeService();
        if(rechargeService.recharge(this.id, amount,new YesBank())){
            console.log("Phone pay class recharge successful")
            return true;
        }else{
            console.log("recharge failed");
        }
     }
}

export default PhonePay;