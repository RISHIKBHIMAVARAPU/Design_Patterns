import { PaymentFlow } from './PaymentFlow.js';
export class PayToFriend extends PaymentFlow {
    validateRequest() {
        console.log('validation for paying to friend');
    }
    calculateFee() {
        console.log(' calculation for paying to friend');
        return 2;
    }
    debitAmount() {
        console.log('debiting for paying to friend');
    }
    creditAmount() {
        console.log('crediting for paying to friend');
    }
}
