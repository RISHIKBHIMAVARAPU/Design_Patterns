class RechargeService {
    recharge(accountId, amount, bank) {
        if (amount < bank.checkBalance(accountId)) {
            console.log("recharge success");
            return true;
        }
        return false;
    }
}
export default RechargeService;
