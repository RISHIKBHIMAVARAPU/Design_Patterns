import { Invoice } from "./Invoice.js";
import { Payment } from "./Payment.js";
import { Products } from "./Products.js";
import { Notification } from './Notificaiton.js'
export class OrderFacade{

    placeOrder(productId: number){
        let productInst = new Products();
        let product =  productInst.getProducts(productId);
        let paymentInst = new Payment();
        paymentInst.paymentProcessor();
        let invoice = new Invoice();
        invoice.genrateInvoice();
        let notificationInst = new Notification();
        notificationInst.sendNotificaiton();
    }
}