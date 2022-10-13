// Zähle von 7 bis 45
for(i = 7; i < 46; i++) {
    console.log(i);
}

// Zähle von 9 bis 99
for(let i = 9; i < 100; i++) {
    console.log(i);
}

// Zähle rückwärts von 10 bis 0
for(let i = 10; i >= 0; i--) {
    console.log(i);
}

// Zähle rückwärts von 1234 bis 1207
for(let i = 1234; i > 1206; i--) {
    console.log(i)
}

// Gib Deinen Namen genau 8 mal aus
for(let i = 0; i < 8; i++) {
    console.log("David");
}

// Zähle von 0 auf 10, dann gib Deinen Namen aus, dann zähle von 10 auf 0
function counting() {
    for(let i = 0; i < 11; i++) {
        console.log(i);
    }

    console.log("David")

    for(let i = 10; i >= 0; i--) {
        console.log(i);
    }
}

counting();