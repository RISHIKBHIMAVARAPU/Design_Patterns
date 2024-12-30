import { CarFactory } from "./CarFactory.js";

let carFactory =  CarFactory.getCarTypeInst("luxury");
let carInstance = carFactory.getCar("Audi");

console.log(carInstance.averageMilage());


//abstract factory : factory of factories
// grouping of grouping 
// luxury car grouping : bmw, audi

// oridinary car grouping : swift, suzuki
// grouping of cars : luxury, ordinary

// all cars will have a is a relation with one interface or class
// first level of factories will have is a relation with another interface 
// top level factory will have has a relation with low level factory
// low level factory will have a has relation with interface object that is implemented  by the low level car classes;