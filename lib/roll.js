export function roll(sides, dice, rolls) {
    let results = [];

    for (let rollCounter = 0; rollCounter < rolls; rollCounter++) {
        let result = 0;
        for (let diceCounter = 0; diceCounter < dice; diceCounter++) {
            result += Math.floor(Math.random() * sides) + 1;
        }
        results.push(result);
    }

    return {
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": results
    };
}