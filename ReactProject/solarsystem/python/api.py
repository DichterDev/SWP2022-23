from flask import Flask
from skyfield.api import load
from skyfield.positionlib import Barycentric
from dataclasses import dataclass


ts = load.timescale()
t = ts.now()

# Load the JPL ephemeris DE421 (covers 1900-2050).
planets = load('de440s.bsp')
sun = planets['SUN']
mercury = planets['MERCURY BARYCENTER']
venus = planets['VENUS BARYCENTER']
earth = planets['EARTH BARYCENTER']
mars = planets['MARS BARYCENTER']
jupiter = planets['JUPITER BARYCENTER']
saturn = planets['SATURN BARYCENTER']
uranus = planets['URANUS BARYCENTER']
neptune = planets['NEPTUNE BARYCENTER']

app = Flask(__name__)

@app.route('/')
def index():
    return ''

@app.route("/distances")
def distances():
    obj: object = {'distances': 
        {
            0 : {'name': 'sun', 'value': 829_200 },
            1 : {'name': 'mercury', 'value': float(str(mercury.at(t).distance().to('km')).split(' ')[0])},
            2 : {'name': 'venus', 'value': float(str(venus.at(t).distance().to('km')).split(' ')[0])},
            3 : {'name': 'earth', 'value': float(str(earth.at(t).distance().to('km')).split(' ')[0])},
            4 : {'name': 'mars', 'value': float(str(mars.at(t).distance().to('km')).split(' ')[0])},
            5 : {'name': 'jupiter', 'value': float(str(jupiter.at(t).distance().to('km')).split(' ')[0])},
            6 : {'name': 'saturn', 'value': float(str(saturn.at(t).distance().to('km')).split(' ')[0])},
            7 : {'name': 'uranus', 'value': float(str(uranus.at(t).distance().to('km')).split(' ')[0])},
            8 : {'name': 'neptune', 'value': float(str(neptune.at(t).distance().to('km')).split(' ')[0])},
        }
    }
    return obj

if __name__ == '__main__':
    app.run(debug=False)