import NetworkRequest from "./NetworkRequest.js";
class NetWorkRequestBuilder {
    constructor() {
        this.url = "";
        this.host = "";
        this.port = -1;
        this.ipAddress = "";
    }
    setUrl(url) {
        this.url = url;
        return this;
    }
    setHost(host) {
        this.host = host;
        return this;
    }
    setPort(port) {
        this.port = port;
        return this;
    }
    setipAddress(ip) {
        this.ipAddress = ip;
        return this;
    }
    build() {
        return new NetworkRequest(this);
    }
}
export default NetWorkRequestBuilder;
