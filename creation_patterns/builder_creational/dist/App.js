import NetworkRequest from "./NetworkRequest.js";
let reqBuilder = NetworkRequest.getReqBuilder();
// method chaining
reqBuilder.setHost('localhost')
    .setPort(8080)
    .setUrl('http://localhost')
    .setipAddress('127.0.0.1')
    .build();
console.log(typeof reqBuilder);
// builder : creational design pattern
// coupling of both classes is important 
// here tight coupling is ok because they are indeed tightly coupled
// we can say this as abstraction between these classes (a perfect example of oops concept)
// method chaining is crazy thing here 
