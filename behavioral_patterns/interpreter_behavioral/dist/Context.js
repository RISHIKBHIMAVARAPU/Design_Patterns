export class Context {
    constructor() {
        this.contextMap = new Map();
    }
    put(name, value) {
        this.contextMap.set(name, value);
    }
    get(name) {
        var _a;
        return (_a = this.contextMap.get(name)) !== null && _a !== void 0 ? _a : 0;
    }
}
