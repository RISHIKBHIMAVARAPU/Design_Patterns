import { EmployeeDaoProxy } from "./EmployeeDaoProxy.js";
import { EmployeeDo } from "./EmployeeDo.js";


let employeeDaoProxy = new EmployeeDaoProxy();
employeeDaoProxy.create("user",new EmployeeDo())
employeeDaoProxy.create("admin",new EmployeeDo());


// when do we need proxy pattern
// client will interact with proxy objects
// proxy objects will interact with actual objects 


// use cases : 
// lets you need to block some sites access to the your local internet
// in your proxy you will list all of those sites 

// caching use case :
// you can caching at proxy level

// we can say any preprocessing can be done at proxy level 

// go through the uml diagram once