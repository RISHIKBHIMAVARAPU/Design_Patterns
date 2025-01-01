import {PaymentFlow} from './PaymentFlow.js';

export class PayToMerchant extends PaymentFlow{
    validateRequest(): void {
        console.log('validation for paying to merchant')
    }
    calculateFee(): number {
        console.log(' calculation for paying to merchant')
        return 2;
    }
    debitAmount(): void {
        console.log('debiting for paying to merchant')
    }
    creditAmount(): void {
        console.log('crediting for paying to merchant')
    }
}