class RechargeService {
    recharge(accountId, rechargeAmount, yesBank) {
        if (yesBank.getBalance(accountId) > rechargeAmount) {
            console.log('Rechargeservice class recharge successful');
            return true;
        }
        return false;
    }
}
export default RechargeService;
