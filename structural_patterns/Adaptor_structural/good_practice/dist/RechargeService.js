class RechargeService {
    recharge(accountId, rechargeAmount, bank) {
        if (bank.checkBalance(accountId) > rechargeAmount) {
            console.log('Rechargeservice class recharge successful');
            return true;
        }
        return false;
    }
}
export default RechargeService;
