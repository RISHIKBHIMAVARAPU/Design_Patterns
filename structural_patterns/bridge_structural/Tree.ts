import { IBreatheImplementor } from "./IBreatheImplementor.js";
import { LivingThings } from "./LivingThings.js"

export class Tree extends LivingThings{

    constructor(breathImplementor : IBreatheImplementor){
        super(breathImplementor);
    }

    breatheProcess(): void {
        console.log("living thing : tree");
        this.breatheImplementor.breathe();
    }
    
}