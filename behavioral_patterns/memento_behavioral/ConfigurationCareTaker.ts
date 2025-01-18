import { ConfigurationMemento } from "./ConfigurationMemento.js";

export class ConfigurationCareTaker{
    snapShotList : Array<ConfigurationMemento>;

    constructor(){
        this.snapShotList = new Array<ConfigurationMemento>();
    }

    addSnapshot(snapShot : ConfigurationMemento){
        this.snapShotList.push(snapShot);
    }

    getPrevSnapShot(){
        if(this.snapShotList.length!=0){
           return  this.snapShotList.pop();
        }
        return null;
    }
}