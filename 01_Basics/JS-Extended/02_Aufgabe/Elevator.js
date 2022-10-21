export default class Elevator {
    constructor() {
        this.angle = 0;
    }

    move(value) {
        this.angle += value;
    }

    getStatus() {
        return this.angle;
    }
}