import Battery from "./Battery.js";
import Remote from "./Remote.js";

let bat1 = new Battery(25);
let bat2 = new Battery(50);
let remote = new Remote(bat1, bat2);

console.log(remote.getStatus());
console.log(remote.hasPower());
remote.turnOn();
console.log(remote.getStatus());