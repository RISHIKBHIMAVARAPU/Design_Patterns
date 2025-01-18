import { LivingThings } from "./LivingThings.js";
export class Tree extends LivingThings {
    constructor(breathImplementor) {
        super(breathImplementor);
    }
    breatheProcess() {
        console.log("living thing : tree");
        this.breatheImplementor.breathe();
    }
}
