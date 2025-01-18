import ConfigManager from "./ConfigManager";

let obj1 = ConfigManager.getInstance();
let obj2 = ConfigManager.getInstance();

let value = obj1 == obj2;
console.log("verifying the references "+value)