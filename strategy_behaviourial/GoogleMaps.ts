import StrategyFactory from "./StrategyFactory.js";

class GoogleMaps{

    static calculate(src:string, dest:string){
        StrategyFactory.strategyFactory(0)
                        .calculate(src, dest)
    }

}

