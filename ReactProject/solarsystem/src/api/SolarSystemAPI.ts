// API: https://api.le-systeme-solaire.net/en/
// API (Distances): https://rhodesmill.org/skyfield/api.html
import axios from "axios";

export interface IStellarObject {
    id: number;
    name: string;
    radius: number;
    mass: Mass;
    volume: Volume;
    distance: Distance;
    moons?: number;
}

interface Moon {
    moon: string;
    rel: string;
}

interface Mass {
    massValue: number;
    massExponent: number;
}

interface Volume {
    volValue: number;
    volExponent: number;
}

interface AroundPlanet {
    planet: string;
    rel: string;
}

interface Body {
    id: string;
    name: string;
    englishName: string;
    isPlanet: boolean;
    moons: Moon[];
    semimajorAxis: any;
    perihelion: any;
    aphelion: any;
    eccentricity: number;
    inclination: number;
    mass: Mass;
    vol: Volume;
    density: number;
    gravity: number;
    escape: number;
    meanRadius: number;
    equaRadius: number;
    polarRadius: number;
    flattening: number;
    dimension: string;
    sideralOrbit: number;
    sideralRotation: number;
    aroundPlanet: AroundPlanet;
    discoveredBy: string;
    discoveryDate: string;
    alternativeName: string;
    axialTilt: number;
    avgTemp: number;
    mainAnomaly: number;
    argPeriapsis: number;
    longAscNode: number;
    bodyType: string;
    rel: string;
}
interface RootObject {
    bodies: Body[];
}
interface RootDistance {
    distances: { [key: string]: Distance };
}

interface Distance {
    name:  string;
    value: number;
}


const order: {[name: string]: number} = {
    'Sun': 0,
    'Mercury': 1,
    'Venus': 2,
    'Earth': 3,
    'Mars': 4,
    'Jupiter': 5,
    'Saturn': 6,
    'Uranus': 7,
    'Neptune': 8
}

async function getDistances() {
    let distances: RootDistance = await (await axios.get('/distances')).data;
    return distances
}

async function getPlanets() {
    let distances = await (await getDistances()).distances;
    let planets: IStellarObject[] = [];
    let rawPlanets: RootObject = await (await axios.get('https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true')).data;
    console.log(rawPlanets)
    rawPlanets.bodies.forEach(planet => {
        let object: IStellarObject = {'id': order[planet.englishName], 'name': planet.englishName, 'radius': planet.meanRadius, 'mass': planet.mass, 'volume': planet.vol, 'distance': distances[order[planet.englishName]], 'moons': planet.moons?.length ?? 0}
        object.distance = distances[object.id];
        planets.push(object);
    });
    return planets;
}

async function getSun() {
    let distances = await (await getDistances()).distances;
    let _sun: RootObject = await (await axios.get('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,sun')).data;
    let sun: Body[] = _sun.bodies;
    let object: IStellarObject = {'id': order[sun[0].englishName], 'name': sun[0].englishName, 'radius': sun[0].meanRadius, 'mass': sun[0].mass, 'volume': sun[0].vol, 'distance': distances[order[sun[0].englishName]],'moons': 0}
    return object;
}

async function getSolarSystem() {
    let stellarObjects: IStellarObject[] = await getPlanets();
    let sun: IStellarObject = await getSun();
    stellarObjects.push(sun);
    stellarObjects = stellarObjects.sort((a,b) => {
        if (a.id < b.id) {
            return -1;
        } 
        
        if(a.id > b.id) {
            return 1;
        }
        
        return 0;
    });
    console.log(stellarObjects);
    return stellarObjects;
}

export default getSolarSystem;