import { CarFactory } from "./CarFactory.js";
let carFactory = CarFactory.getCarTypeInst("luxury");
let carInstance = carFactory.getCar("Bmw");
console.log(carInstance.averageMilage());
