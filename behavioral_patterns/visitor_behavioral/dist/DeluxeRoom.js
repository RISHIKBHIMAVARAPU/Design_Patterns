export class DeluxeRoom {
    constructor() {
        this.roomPrice = 0;
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
