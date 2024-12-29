import NetworkRequest from "./NetworkRequest.js";

class NetWorkRequestBuilder{
    url : string;
    host : string;
    port : number;
    ipAddress : string;

    public constructor(){
        this.url ="";
        this.host = "";
        this.port =-1;
        this.ipAddress = "";
    }
    
    setUrl(url:string):NetWorkRequestBuilder { 
        this.url = url;
        return this;  
    }

    setHost(host : string): NetWorkRequestBuilder{
        this.host = host;
        return this;
    }

    setPort(port:number):NetWorkRequestBuilder{
        this.port = port;
        return this;
    }

    setipAddress(ip:string): NetWorkRequestBuilder{
        this.ipAddress = ip;
        return this;
    }

    build(){
        return new NetworkRequest(this);
    }
}

export default NetWorkRequestBuilder;