import NetWorkRequestBuilder from "./NetworkRequestBuilder.js";
class NetworkRequest {
    constructor(networkRequestBuilder) {
        this.url = networkRequestBuilder.url;
        this.host = networkRequestBuilder.host;
        this.port = networkRequestBuilder.port;
        this.ipAddress = networkRequestBuilder.ipAddress;
    }
    static getReqBuilder() {
        return new NetWorkRequestBuilder();
    }
}
export default NetworkRequest;
