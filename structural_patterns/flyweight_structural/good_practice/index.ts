// from object remove all extrensic data and keep intrinsic data(this object is called fly weight object)
//this fly weight class can be immutable
// extrinsic data can be passed to fly weight class in method parameter
// once the flyweight object is created ,it is cached and reused when ever it is required

import { RoboticFactory } from "./RoboticFactory.js"

let roboticFactory = new RoboticFactory();

for(let i=0;i<500000;i++){
    let humanoidRobot = roboticFactory.getRobot("HumanoidRobot");
    humanoidRobot.display(i,i);
}


for(let i=0;i<500000;i++){
    let roboticDog = roboticFactory.getRobot("RoboticDog");
    roboticDog.display(i,i);
}


// we solve word processor with same approach 



// fly weight vs singleton comparision

// Flyweight would resemble Singleton if you somehow managed to reduce all shared states of the objects to just one flyweight object. 
// But there are two fundamental differences between these patterns:
// There should be only one Singleton instance, whereas a Flyweight class can have multiple instances with different intrinsic states.
// The Singleton object can be mutable. Flyweight objects are immutable.