// assume there are 2 types of robots  : humanoid, dogtype
// we want to create 5L objects of each type

import { Robot } from "./Robot.js";
import { Spirites } from "./Spirites.js";

for(let i =0;i<500000;i++){
    let humanoid = new Robot(i,i,new Spirites(),"humanoid");
}

for(let i =0;i<500000;i++){
    let dogRobot = new Robot(i,i,new Spirites(),"doggy");
}


// in total we have created 10L objects 
// what is the memory requried for each object ?
// most of the memory is take by the sprities() lets say 30kb;

// 10L objects total memory is : 10L * 30Kb = 3GB;
//Can we reduce the memory usage?
// since all the humoids use the same spirites right like wise dogyRobots