import NetWorkRequestBuilder from "./NetworkRequestBuilder.js";
class NetworkRequest{
    url : string;
    host : string;
    port : number;
    ipAddress : string;

    public constructor(networkRequestBuilder: NetWorkRequestBuilder){
       this.url = networkRequestBuilder.url;
       this.host = networkRequestBuilder.host;
       this.port = networkRequestBuilder.port;
       this.ipAddress = networkRequestBuilder.ipAddress;
    }

    public static getReqBuilder(){
        return new NetWorkRequestBuilder();
    }
}

export default NetworkRequest;