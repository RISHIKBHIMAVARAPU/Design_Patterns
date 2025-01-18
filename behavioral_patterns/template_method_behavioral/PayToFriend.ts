import {PaymentFlow} from './PaymentFlow.js';

export class PayToFriend extends PaymentFlow{
    validateRequest(): void {
        console.log('validation for paying to friend')
    }
    calculateFee(): number {
        console.log(' calculation for paying to friend')
        return 2;
    }
    debitAmount(): void {
        console.log('debiting for paying to friend')
    }
    creditAmount(): void {
        console.log('crediting for paying to friend')
    }
}