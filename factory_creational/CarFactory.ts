import { ICarFactory } from "./ICarFactory.js";
import { LuxuryCarFactory } from "./LuxuryCarFactory.js";
import { OrdinaryCarFactory } from "./OrdinaryCarFactory.js";

export class CarFactory{

    static getCarTypeInst(carType : string): ICarFactory{

        let carTypeInst : ICarFactory;

        switch(carType){
            case "luxury":
                carTypeInst = new LuxuryCarFactory();
                break;
            default:
                carTypeInst = new OrdinaryCarFactory()
                break;
        }
        return carTypeInst;
    }
}