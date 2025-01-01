export abstract class PaymentFlow {
    abstract validateRequest():void;
    abstract  calculateFee() : number;
    abstract debitAmount(): void;
    abstract creditAmount(): void;

    sendMoney(){
        this.validateRequest();
        this.calculateFee();
        this.debitAmount();
        this.creditAmount();
    }
}