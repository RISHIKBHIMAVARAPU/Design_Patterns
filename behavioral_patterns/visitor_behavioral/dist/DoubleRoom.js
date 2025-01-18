export class DoubleRoom {
    constructor() {
        this.roomPrice = 0;
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
