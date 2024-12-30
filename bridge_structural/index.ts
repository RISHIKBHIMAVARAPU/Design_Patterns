import { Fish } from "./Fish.js";
import { WaterBreatheImplementation } from "./WaterBreatheImplementation.js";


let fish = new Fish(new WaterBreatheImplementation());
fish.breatheProcess();



// we can include the implementor interface in the abstract class
// but it results in multiple types of child classes that
// like TreeLandBreathe, TreeWaterBreathe .. like this 
// actuall brethe and living type can be grown independently

// so now  we separated out concerns
// we have implementor interface for all the breathe types
// we have an abstract class for lving things which maintains a has a relationship with implementor interfaces
// the above composition relationship acts as a bridge
// once refer uml diagrams