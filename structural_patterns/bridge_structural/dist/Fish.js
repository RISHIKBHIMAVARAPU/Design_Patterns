import { LivingThings } from "./LivingThings.js";
export class Fish extends LivingThings {
    constructor(breathImplementor) {
        super(breathImplementor);
    }
    breatheProcess() {
        console.log("living thing : fish");
        this.breatheImplementor.breathe();
    }
}
