export default class SideRudder {

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