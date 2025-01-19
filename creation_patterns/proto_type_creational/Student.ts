import { IProtoType } from "./IProtoType.js";

export class Student implements IProtoType{

    name : string;
    age : number;
    sex : string;

    constructor(name : string, age : number,sex: string){
        this.name = name;
        this.age = age;
        this.sex = sex
    }

    clone(): IProtoType {
       return new Student(this.name,this.age,this.sex);
    }
}