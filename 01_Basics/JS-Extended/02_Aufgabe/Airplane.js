export default class Airplane {
    
    constructor(turbLL, turbLR, turbRR, turbRL, tank, Elevator, SideRudder) {
        // this.turbLL = turbLL;
        // this.turbLR = turbLR;
        // this.turbRR = turbRR;
        // this.turbRL = turbRL;
        this.turbines = [turbLL, turbLR, turbRR, turbRL]
        this.tank = tank;
        this.Elevator = Elevator;
        this.SideRudder = SideRudder;
    }

    accelerate(value) {
        this.turbines.forEach(e => {
            e.accelerate(value);
            this.tank.accelerate(value);
        })
    }

    up(value) {
        this.Elevator.move(value);
    }

    down(value) {
        this.Elevator.move(-value);
    }

    left(value) {
        this.SideRudder.move(value)
    }

    right(value) {
        this.SideRudder.move(-value)
    }

    printFlightPosition() {
        let x = (this.SideRudder.getStatus() >= 0 ) ? String(this.SideRudder.getStatus()) + " left" : String(-this.SideRudder.getStatus()) + " right";
        let y = (this.Elevator.getStatus() >= 0 ) ? String(this.Elevator.getStatus()) + " up" : String(-this.Elevator.getStatus()) + " down";
        console.log(x);
        console.log(y);
    }

    getFuelStatus() {
        console.log(this.tank.getStatus() + " l");
    }
}