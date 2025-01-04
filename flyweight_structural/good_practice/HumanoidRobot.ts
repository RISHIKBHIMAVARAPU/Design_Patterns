import { IRobot } from "./IRobot.js";
import { Spirite } from "./Spirite.js";

export class HumanoidRobot implements IRobot{
    private type : string;
    private body : Spirite;

    constructor(type : string, body :Spirite){
        this.body = body;
        this.type = type;
    }
    
    // no setter functions because the class is immutable;
    getType(){
        return this.type;
    }

    getBody(){
        return this.body;
    }

    display(x: number, y: number): void {
        // use the above humanoidRobot object to render the image
    } 
}