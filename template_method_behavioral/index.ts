import { PayToFriend } from "./PayToFriend.js";
import { PayToMerchant } from "./PayToMerchant.js";

let paymentFlow = new PayToMerchant();
paymentFlow.sendMoney();

paymentFlow = new PayToFriend();
paymentFlow.sendMoney();

// the name of pattern it self says we define a template method
// steps need to follow for a task is same 
// but logic inside steps might be different in different cases
// but all the steps are needed to followed in all the process

// for this we define abstract class where we define all the abstract methods
// we define a template method which should not be overriden and it will common across all the process 