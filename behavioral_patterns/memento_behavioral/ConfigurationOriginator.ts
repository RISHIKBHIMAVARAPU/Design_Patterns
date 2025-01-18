import { ConfigurationMemento } from "./ConfigurationMemento.js";

export class ConfigurationOriginator{
     height : number;
     width : number;

     constructor(height : number,width : number){
        this.height = height;
        this.width = width; 
     }

     setHeight(height : number){
        this.height = height;
     }

     setWidth(width : number){
        this.width = width;
     }

     createConfigurationMemento(){
        return new ConfigurationMemento(this.height,this.width);
     }

     restoreConfigurationMemento( snapshot : ConfigurationMemento){
        this.height = snapshot.height;
        this.width = snapshot.width;
     }
}