import BikePathStrategy from "./BikePathStrategy.js";
import CarPathStrategy from "./CarPathStrategy.js";
import PathCalculationInterface from "./PathCalculationInterface.js";
import STRATEGY from "./Strategy.js";
import WalkPathStrategy from "./WalkPathStrategy.js";

class StrategyFactory {
    static strategyFactory(strategyType:number){
        let pathCalculationObj :PathCalculationInterface;
        if(strategyType === STRATEGY.WALK) {
           pathCalculationObj= new WalkPathStrategy();
        }else if(strategyType === STRATEGY.BIKE) {
            pathCalculationObj = new BikePathStrategy();
        }else{
            pathCalculationObj = new CarPathStrategy();
        }
        return pathCalculationObj;
    }
}

export default StrategyFactory;

// observation in factory pattren
// factory method will be static 
// it will a return a interface variable which is pointing to the classes instances which implemented the interface
// it will not return diffrent reference types only reference type which  will be an interface variable