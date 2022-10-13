// Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren): 
// X X X X 
// O O O O 
// X X X X 
// O O O O 

for(let i = 0; i < 4; i++) {
    if (i%2){
        console.log("O O O O");
    }
    else {
        console.log("X X X X");    
    }
}

// 2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren 
// (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 
let sum = 0;

for(let i = 2; i <= 100; i+=2) {
    sum += i;   
}

console.log(sum);

// 3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.: 
// XX X XX X 
// X  X X  X
// X       X
// X       X

for (let i = 0;  i < 6; i++) {
    if (i == 0) {
        let str = "";
        for(let x = 0; x < 6; x++) {
            str += "X"
        }
        console.log(str);
        continue;
    }
    else if (i < 5) {
        let str = "";
        for(let x = 0; x < 8; x++) {
            if (x == 0) {
                str += "X";
                if (i < 4) {
                    str += " ";
                }
            }
            else if (x < 6) {
                str += " ";
            }
            else {
                str += "X";
            }
        }
        console.log(str);
        continue;
    }

    let str = "";
    for(let x = 0; x < 5; x++) {
        str += "X";
    }
    console.log(str);
}

// XXXXXX
// X     XX
// X     XX
// X     XX
// X    XX
// XXXXX