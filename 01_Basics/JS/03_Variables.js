// Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"
let banana = "Banane";
let apple = "Apple";

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananeWeight = 0.22;
let appleWeight = 0.34;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
console.log("Anzahl Bananen pro Kilo ".concat(1/appleWeight));
console.log("Anzahl Äpfel pro Kilo ".concat(1/bananeWeight));

// Preis von 8 Äpfeln
console.log("Preis von 8 Äpfeln: ".concat(8 * 1/appleWeight*applePricePerKilo));

// Preis von 17 Bananen
console.log("Preis von 17 Bananen: ".concat(17 * 1/bananeWeight*bananaPricePerKilo));

// Preis von 1 Tonne Bananen
console.log("Preis von 1t Bananen: ".concat(1000*bananaPricePerKilo));
// Preis von 1 Tonne Äpfel
console.log("Preis von 1t Äpfeln: ".concat(1000*applePricePerKilo));