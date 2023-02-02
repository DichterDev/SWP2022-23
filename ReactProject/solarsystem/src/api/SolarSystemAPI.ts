// API: https://api.le-systeme-solaire.net/en/
import axios from "axios";

export interface StellarObject {
    id: string;
    name: string;
    radius: number;
    mass: Mass;
    volume: Volume;
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


async function getPlanets() {
    let planets: StellarObject[] = [];
    let rawPlanets: Body[] = await axios.get('https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true');
    rawPlanets.forEach(planet => {
        let object: StellarObject = {'id': planet.id, 'name': planet.englishName, 'radius': planet.meanRadius, 'mass': planet.mass, 'volume': planet.vol, 'moons': planet.moons.length ?? 0}
        planets.push(object);
    });
    return planets;
}

async function getSun() {
    let _sun: Body[] = await axios.get('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,sun');
}

export default getPlanets;