import { IVehicle } from "./IVehicle.js";

export class Car implements IVehicle{
    getTankCapacity(): number {
        return 40;
    }
    getSeatingCapacity(): number {
        return 4;
    }  
}