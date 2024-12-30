import { Suzuki } from "./Suzuki.js";
import { Swift } from "./Swift.js";
import { ICarFactory } from "./ICarFactory.js";
import { ICar } from "./ICar.js";

export class OrdinaryCarFactory implements ICarFactory {

    getCar(carName : string){
        let  carInstance : ICar;

        switch(carName){
            case "Suzuki" :
                carInstance = new Suzuki();
                break;
            default : 
                carInstance = new Swift();
                break;
        }
        return carInstance;
    }
}