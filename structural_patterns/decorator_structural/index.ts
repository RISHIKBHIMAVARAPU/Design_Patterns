import { ExtraCheeseToppings } from "./ExtraCheeseTopping";
import { FarmHouse } from "./FarmHouse.js";

console.log(new ExtraCheeseToppings(new FarmHouse()).cost())


// base pizza varients : framhouse, vegdelight
// toppings varients : extracheese, mushroomtoopings

// what problem does decorator problem solves ?
//decorator pattern solves  class explosion

// image there multiple toppings.. classes we need to make is 
// base pizza + extra chesse, base pizza + extra chesse + mushrrom , base pizza + mushrrom ................
// we end making n! classes 
// we call this as class explosion

// each decorator contains 
// has a relation and also is a relation with base pizza class (**********important)


// what is constructor injection?
// passing one class object into other class constructor.
