class ConfigManager {
    constructor() {
        this.port = 22;
        this.host = "localhost";
        this.ipAddress = "127.0.0.1";
    }
    static getInstance() {
        if (ConfigManager.instance == null) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }
}
export default ConfigManager;
