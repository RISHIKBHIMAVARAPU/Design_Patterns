import { Suzuki } from "./Suzuki.js";
import { Swift } from "./Swift.js";
export class OrdinaryCarFactory {
    getCar(carName) {
        let carInstance;
        switch (carName) {
            case "Suzuki":
                carInstance = new Suzuki();
                break;
            default:
                carInstance = new Swift();
                break;
        }
        return carInstance;
    }
}
