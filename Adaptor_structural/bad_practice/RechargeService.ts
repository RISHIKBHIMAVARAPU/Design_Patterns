import YesBank from "./YesBank.js";

 class RechargeService{
    recharge(accountId:string,rechargeAmount:number,yesBank : YesBank){
        if(yesBank.getBalance(accountId)>rechargeAmount){
            console.log('Rechargeservice class recharge successful')
            return true;
        }
        return false;
    }
}

export default RechargeService;