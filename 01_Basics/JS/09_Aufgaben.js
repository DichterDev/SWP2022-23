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