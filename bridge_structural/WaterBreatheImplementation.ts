import { IBreatheImplementor } from "./IBreatheImplementor.js";

export class WaterBreatheImplementation implements IBreatheImplementor{
    breathe(){
        console.log("water breathe implementor");
        // logic of how it breaths
    }
}