import { Car } from "./Car.js";
import { IVehicle } from "./IVehicle.js";
import { NullVehicle } from "./NullVehicle.js"; 

export class VehicleFactory{

    static getVehicleInstance(vehicleType : string){
        let vehicleInst : IVehicle;

        switch(vehicleType){
            case 'Car':
                vehicleInst  = new Car();
                break;
            default: 
                vehicleInst = new NullVehicle();
        }

        return vehicleInst;
    }
}