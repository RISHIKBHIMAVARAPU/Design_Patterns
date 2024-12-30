import { ICar } from "./ICar.js";

export class Audi implements ICar{
    averageMilage(): number {
        console.log("audi average milleage");
        return 15;
    }
}