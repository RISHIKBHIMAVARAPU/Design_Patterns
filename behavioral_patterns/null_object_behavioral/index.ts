import { VehicleFactory } from "./VehicleFactory.js";

let vehicle1 = VehicleFactory.getVehicleInstance("Car");
let vehicle2 = VehicleFactory.getVehicleInstance("");

console.log(vehicle1.getSeatingCapacity());
console.log(vehicle2.getSeatingCapacity());

console.log(vehicle1.getTankCapacity());
console.log(vehicle2.getTankCapacity());

// in null object behavioral pattern
// we create null object instead of doing if(obj!=null)
// there will a common interface using which we create null object
// no need to use "if" conditional statements