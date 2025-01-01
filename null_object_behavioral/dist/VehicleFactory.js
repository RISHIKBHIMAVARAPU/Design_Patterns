import { Car } from "./Car.js";
import { NullVehicle } from "./NullVehicle.js";
export class VehicleFactory {
    static getVehicleInstance(vehicleType) {
        let vehicleInst;
        switch (vehicleType) {
            case 'Car':
                vehicleInst = new Car();
                break;
            default:
                vehicleInst = new NullVehicle();
        }
        return vehicleInst;
    }
}
