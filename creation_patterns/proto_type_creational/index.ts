import {Student} from './Student.js';

const student = new Student("rk",21,"male");

const studentClone  = <Student> student.clone();


// here the catch is its not about using new key word
// intention of this to reduce the object creation overhead
// but to replicate a object it can have multiple attributes, some might be private 
// so if we need to replicate it we must have the idea of all of those attributes
// to reduce that this pattern helps