import { Audi } from "./Audi.js";
import { Bmw } from "./Bmw.js";
import { ICarFactory } from "./ICarFactory.js";
import { ICar } from "./ICar.js";

export class LuxuryCarFactory implements ICarFactory {

    getCar(carName : string){
        let  carInstance : ICar;

        switch(carName){
            case "Audi" :
                carInstance = new Audi();
                break;
            default : 
                carInstance = new Bmw();
                break;
        }
        return carInstance;
    }
}