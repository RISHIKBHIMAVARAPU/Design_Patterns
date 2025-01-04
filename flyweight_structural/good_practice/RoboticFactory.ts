import { HumanoidRobot } from "./HumanoidRobot.js";
import { IRobot } from "./IRobot.js";
import { RoboticDog } from "./RoboticDog.js";
import { Spirite } from "./Spirite.js";

export class RoboticFactory{

    roboticMap : Map<string,IRobot>;
    constructor(){
        this.roboticMap = new Map<string,IRobot>();
    }

    getRobot(type : string):IRobot{
        let robot = this.roboticMap.get(type);
    
        if(robot){
            return robot;
        }else{
            switch(type){
                case 'HumanoidRobot' :
                    let spirite = new Spirite();
                    let humanoidRobot = new HumanoidRobot(type,spirite);
                    this.roboticMap.set(type,humanoidRobot);
                    return humanoidRobot;
                case 'RoboticDog' :
                    let dogSpirite = new Spirite();
                    let roboticDog = new RoboticDog(type,dogSpirite);
                    this.roboticMap.set(type,roboticDog);
                    return roboticDog;
                default:
                    throw new Error(`Unsupported robot type: ${type}`);                    
            }
        }
    }
}