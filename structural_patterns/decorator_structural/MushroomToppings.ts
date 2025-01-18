import { BasePizza } from "./BasePizza.js";
import { ToppingsDecorator } from "./ToppingsDecorator.js";

export class MushroomToppings extends ToppingsDecorator{
    basePizza : BasePizza;

    constructor(basePizza : BasePizza){
        super();
        this.basePizza = basePizza;
    }

    cost(){
        return this.basePizza.cost()+100;
    }
}

