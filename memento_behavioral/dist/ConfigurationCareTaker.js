export class ConfigurationCareTaker {
    constructor() {
        this.snapShotList = new Array();
    }
    addSnapshot(snapShot) {
        this.snapShotList.push(snapShot);
    }
    getPrevSnapShot() {
        if (this.snapShotList.length != 0) {
            return this.snapShotList.pop();
        }
        return null;
    }
}
