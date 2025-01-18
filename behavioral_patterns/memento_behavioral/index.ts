import { ConfigurationCareTaker } from "./ConfigurationCareTaker.js";
import { ConfigurationOriginator } from "./ConfigurationOriginator.js";

let configOriginator  = new ConfigurationOriginator(1,2);
let snapShot1 = configOriginator.createConfigurationMemento();

let configCareTaker = new ConfigurationCareTaker();

console.log(configOriginator.height+" "+configOriginator.width);

configCareTaker.addSnapshot(snapShot1);

configOriginator.height = 3;
configOriginator.width = 4;

console.log(configOriginator.height+" "+configOriginator.width);


let lastSnapShot = configCareTaker.getPrevSnapShot();

if(lastSnapShot!=null)
configOriginator.restoreConfigurationMemento(lastSnapShot);

console.log(configOriginator.height+" "+configOriginator.width);



// this pattern is useful to implement undo operation
// 3 key words
// originator : actual working object 
// memento : snapshots of working object
//careTaker : takes care of all the memetos(snapshots)