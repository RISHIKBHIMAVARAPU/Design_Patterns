import { IBreatheImplementor } from "./IBreatheImplementor.js";

export abstract class LivingThings{
    breatheImplementor : IBreatheImplementor;
    
    constructor(breatheImplementor : IBreatheImplementor){
        this.breatheImplementor = breatheImplementor;
    }
    
    abstract breatheProcess() : void;
}