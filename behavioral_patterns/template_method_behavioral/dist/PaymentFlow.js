export class PaymentFlow {
    sendMoney() {
        this.validateRequest();
        this.calculateFee();
        this.debitAmount();
        this.creditAmount();
    }
}
