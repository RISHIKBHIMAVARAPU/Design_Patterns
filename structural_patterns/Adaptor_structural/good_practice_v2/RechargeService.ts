import IBank from "./BankInterfact.js";

class RechargeService{
    recharge(accountId:string, amount:number,bank: IBank){
        if(amount<bank.checkBalance(accountId)){
            console.log("recharge success");
            return true;
        }
        return false;
    }
}

export default RechargeService;