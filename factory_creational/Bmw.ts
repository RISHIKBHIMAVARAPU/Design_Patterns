import { ICar } from "./ICar.js";

export class Bmw implements ICar{
    averageMilage(): number {
        return 20;
    }
}