import { ICar } from "./ICar.js";

export class Suzuki implements ICar{
    averageMilage(): number {
        return 30;
    }
}