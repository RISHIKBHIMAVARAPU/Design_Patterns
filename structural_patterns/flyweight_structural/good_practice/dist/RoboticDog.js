export class RoboticDog {
    constructor(type, body) {
        this.body = body;
        this.type = type;
    }
    // no setter functions because the class is immutable;
    getType() {
        return this.type;
    }
    getBody() {
        return this.body;
    }
    display(x, y) {
        // use the robotic dog object to display
    }
}
