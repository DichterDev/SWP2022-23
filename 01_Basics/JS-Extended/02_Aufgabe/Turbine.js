export default class Turbine {
    constructor() {
        this.intensity = 0;
    }

    accelerate(value) {
        this.intensity = value/80;
    }

    getIntensity() {
        return this.intensity;
    }
}