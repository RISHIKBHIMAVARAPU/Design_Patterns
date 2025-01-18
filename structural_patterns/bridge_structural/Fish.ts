import { IBreatheImplementor } from "./IBreatheImplementor.js";
import { LivingThings } from "./LivingThings.js"

export class Fish extends LivingThings{

    constructor(breathImplementor : IBreatheImplementor){
        super(breathImplementor);
    }

    breatheProcess(): void {
        console.log("living thing : fish");
        this.breatheImplementor.breathe();
    }
    
}