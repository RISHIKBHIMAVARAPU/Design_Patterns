import { ICar } from "./ICar.js";

export class Swift implements ICar{
    averageMilage(): number {
        return 35;
    }
}