import { PayToFriend } from "./PayToFriend.js";
import { PayToMerchant } from "./PayToMerchant.js";
let paymentFlow = new PayToMerchant();
paymentFlow.sendMoney();
paymentFlow = new PayToFriend();
paymentFlow.sendMoney();
