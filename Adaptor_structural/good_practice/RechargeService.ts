import IBank from "./BankInterface.js";
import YesBank from "./YesBank.js";

 class RechargeService{
    recharge(accountId:string,rechargeAmount:number,bank : IBank){
        if(bank.checkBalance(accountId)>rechargeAmount){
            console.log('Rechargeservice class recharge successful')
            return true;
        }
       
        return false;
    }
}

export default RechargeService;