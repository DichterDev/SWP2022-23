import Battery from './Battery.js/';

export default class Remote {
    constructor(bat1, bat2) {
        this.battery1 = bat1;
        this.battery2 = bat2;
    }

    hasPower() {
        if ((this.battery1 + this.battery2) / 2 > 50)
        {
            console.log("true");
            return true;
        }

        return false;
    }

    turnOn() {
        this.battery1 -= 5;
        this.battery2 -= 5;
    }

    get status() {
        return (this.battery1 + this.battery2) / 2;
    }
}