import { IVehicle } from "./IVehicle.js";

export class NullVehicle implements IVehicle {
    getTankCapacity(): number {
        return 0;
    }
    getSeatingCapacity(): number {
        return 0;
    }
}