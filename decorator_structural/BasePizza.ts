export abstract class BasePizza{
    abstract cost():number;

}

// we need to decide whether we go ahead with interfaces or abstract classes 
// when to use what ?
// if we need some attributes and some concrete methods then we can go with abstract classes;
// if we only need abstract functions then we can go with interfaces .