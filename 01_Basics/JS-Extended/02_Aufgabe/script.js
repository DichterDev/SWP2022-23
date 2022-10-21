import Airplane from "./Airplane.js";
import Turbine from "./Turbine.js";
import Elevator from "./Elevator.js";
import SideRudder from "./SideRudder.js";
import Tank from "./Tank.js";

let turb1 = new Turbine();
let turb2 = new Turbine();
let turb3 = new Turbine();
let turb4 = new Turbine();
let elevator = new Elevator();
let sideRudder = new SideRudder();
let tank = new Tank();
let airplane = new Airplane(turb1, turb2, turb3, turb4, tank, elevator, sideRudder);

airplane.printFlightPosition();
airplane.getFuelStatus();
airplane.accelerate(80);
airplane.getFuelStatus();
airplane.left(10);
airplane.right(5);
airplane.up(15);
airplane.down(15);
airplane.printFlightPosition();