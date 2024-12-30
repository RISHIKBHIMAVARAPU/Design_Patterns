import { Audi } from "./Audi.js";
import { Bmw } from "./Bmw.js";
export class LuxuryCarFactory {
    getCar(carName) {
        let carInstance;
        switch (carName) {
            case "Audi":
                carInstance = new Audi();
                break;
            default:
                carInstance = new Bmw();
                break;
        }
        return carInstance;
    }
}
