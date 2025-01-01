import { PaymentFlow } from './PaymentFlow.js';
export class PayToMerchant extends PaymentFlow {
    validateRequest() {
        console.log('validation for paying to merchant');
    }
    calculateFee() {
        console.log(' calculation for paying to merchant');
        return 2;
    }
    debitAmount() {
        console.log('debiting for paying to merchant');
    }
    creditAmount() {
        console.log('crediting for paying to merchant');
    }
}
