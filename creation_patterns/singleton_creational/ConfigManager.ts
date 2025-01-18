 class ConfigManager{
    port : number ;
    host: string ;
    ipAddress : string ;
    static instance : ConfigManager;

    private constructor(){
        this.port = 22;
        this.host = "localhost";
        this.ipAddress = "127.0.0.1";
    }

    public static getInstance(){
        if(ConfigManager.instance ==null){
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }
}

export default ConfigManager;


// java vs js

//1. constructors 
// java : private className(){}
// js : private constructor(){}

// 2.static attribute access in static methods (like getInstance method)
// java : we can directly access using attribute name 
// js : need to access using the class name

// we don't use any let or const for declaring class attributes or methos inside a class


// singleton structure 
// 1.private constructor method
// 2.static attribute of class instance
// 3.static getInstance method
