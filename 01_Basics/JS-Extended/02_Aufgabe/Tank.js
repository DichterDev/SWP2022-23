export default class Tank {
    
    constructor() {
        this.fuel = 1000;
    }
    
    accelerate(value) {
        this.fuel -= value/80; 
    }

    getStatus() {
        return this.fuel;
    }
}