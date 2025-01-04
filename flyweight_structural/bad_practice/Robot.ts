import { Spirites } from "./Spirites";

export class Robot{
    x : number;
    y : number ; 
    body : Spirites;
    type : string;

    constructor(x : number, y : number,body :Spirites, type :string) {
        this.body = body;
        this.type = type;
        this.x = x;
        this.y = y;
    }
}