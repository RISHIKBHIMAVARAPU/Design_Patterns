import { LuxuryCarFactory } from "./LuxuryCarFactory.js";
import { OrdinaryCarFactory } from "./OrdinaryCarFactory.js";
export class CarFactory {
    static getCarTypeInst(carType) {
        let carTypeInst;
        switch (carType) {
            case "luxury":
                carTypeInst = new LuxuryCarFactory();
                break;
            default:
                carTypeInst = new OrdinaryCarFactory();
                break;
        }
        return carTypeInst;
    }
}
