import { IphoneStockObservable } from "./observable/IphoneStockObservable.js";
import { IStockObservable } from "./observable/IStockObservable.js";
import { INotificationAlertObserver } from "./observer/INotificationAlertObserver.js";
import { EmailAlertObserver } from "./observer/EmailAlertObserver.js";
import { PhoneAlertObserver } from "./observer/PhoneAlertObserver.js";

let iphoneStockObservable : IStockObservable = new IphoneStockObservable();
let emailAlertObserver : INotificationAlertObserver  = new EmailAlertObserver(iphoneStockObservable,"abc.gmail.com")
let phoneAlertObserver : INotificationAlertObserver = new PhoneAlertObserver("123456789",iphoneStockObservable)

iphoneStockObservable.addObserver(emailAlertObserver);
iphoneStockObservable.addObserver(phoneAlertObserver);
iphoneStockObservable.setStockCount(10);
iphoneStockObservable.removeObserver(phoneAlertObserver);
iphoneStockObservable.setStockCount(0);
iphoneStockObservable.setStockCount(10);