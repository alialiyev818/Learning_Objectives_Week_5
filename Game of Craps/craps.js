function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playCraps() {
    let results = [];

    for (let i = 0; i < N; i++) {
        let roll1 = rollDice();
        let roll2 = rollDice();
        let sum = roll1 + roll2;

        if (sum === 7 || sum === 11) {
            results.push(`Round ${i + 1}: Win (Rolled ${sum})`);
        } else if (sum === 2 || sum === 3 || sum === 12) {
            results.push(`Round ${i + 1}: Lose (Crapped Out with ${sum})`);
        } else {
            let point = sum;
            while (true) {
                roll1 = rollDice();
                roll2 = rollDice();
                sum = roll1 + roll2;

                if (sum === point) {
                    results.push(`Round ${i + 1}: Win (Made the point ${point})`);
                    break;
                } else if (sum === 7) {
                    results.push(`Round ${i + 1}: Lose (Seven out)`);
                    break;
                }
            }
        }
    }

    document.getElementById('result').innerText = results.join('\n');
}

const N = 10;
