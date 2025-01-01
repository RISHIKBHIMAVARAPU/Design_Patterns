export class Context{
    contextMap : Map<String,number>;

    constructor(){
        this.contextMap = new Map<String,number>();
    }

    put(name : string, value : number){
        this.contextMap.set(name, value);
    }

    get(name : string):number{
        return this.contextMap.get(name)??0;
    }
}