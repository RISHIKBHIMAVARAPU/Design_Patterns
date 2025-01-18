import { OrderFacade } from "./OrderFacade.js";

let orderFacade = new OrderFacade();
orderFacade.placeOrder(1);

// what ever logic that we mentioned in facade can be done here also 
// but here we are sepearting the responsibities
// managing all the objects and their depencies here and adding bussiness logic to them makes them hectic 
// so we create a facade which will handle it


//facade another variation : 
// if there is a class with too many methods  and now you are creating another class where you need only some of the methods from this class
// then we make another class(facade) with those methods which will call these methods

//one facade can communicate with others 
// like we can make 
// payment facade
// and order facade can communicate with payment facade..

