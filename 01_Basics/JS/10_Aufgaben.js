// Erstelle ein Programm welches einen Kalender korrekt darstellt, zu Beginn werden zwei 
// Variablen definiert (Monat und Starttag) welche wir zur Darstellung der Monatstage (30/31 
// Tage) und zum bestimmen des Tages an dem der Monat beginnt (Starttage O - Montag, 1 
// - Dienstag usw.). 
// Verwendet werden hierfür Schleifen, 
// innerhalb dieser können bereits gelemte 
// Themen wie if oder auch switch Anwendung finden. 

// Die Ausgabe sollte wie folgt sein: 
// | MO | DI | MI | DO | FR | SA | SO |
// |    |    | 01 | 02 | 03 | 04 | 05 |
// | 06 | 07 | 08 | 09 | 10 | 11 | 12 |
// | 13 | 14 | 15 | 16 | 17 | 18 | 19 |
// | 20 | 21 | 22 | 23 | 24 | 25 | 26 |
// | 27 | 28 | 29 | 30 | 31 |    |    |

let monthdays = 31;
let startday = 2;
let week = "";
let day = 1;

console.log("| MO | DI | MI | DO | FR | SA | SO |");

for(let i = 1; i <= monthdays + startday; i++) {
    
    if(i <= startday) {
        week += "|    ";
    }
    else if (((i+1)%7 == 0) || (i%7 == 0)) // Aufgabe Teil 2
    {
        week += "| WE ";
        day++;
    }
    else {
        let str_day = String(day).padStart(2, 0);
        week += "| " + str_day + " ";
        day++;
    }

    if (i%7 == 0){
        week += "|"
        console.log(week);
        week = "";
    }
}

if (week != "") {
    for (let i = 0; i < 7 - (monthdays + startday)%7; i++) {
        week += "|    ";
    }
    week += "|";
    console.log(week);
}