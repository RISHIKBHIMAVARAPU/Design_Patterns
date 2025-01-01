import { ConfigurationMemento } from "./ConfigurationMemento.js";
export class ConfigurationOriginator {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    setWidth(width) {
        this.width = width;
    }
    createConfigurationMemento() {
        return new ConfigurationMemento(this.height, this.width);
    }
    restoreConfigurationMemento(snapshot) {
        this.height = snapshot.height;
        this.width = snapshot.width;
    }
}
