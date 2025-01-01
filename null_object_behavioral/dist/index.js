import { VehicleFactory } from "./VehicleFactory.js";
let vehicle1 = VehicleFactory.getVehicleInstance("Car");
let vehicle2 = VehicleFactory.getVehicleInstance("");
console.log(vehicle1.getSeatingCapacity());
console.log(vehicle2.getSeatingCapacity());
console.log(vehicle1.getTankCapacity());
console.log(vehicle2.getTankCapacity());
