function playCrapsRounds(n) {
    function rollDice() {
      return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
    }
  
    function playOneRound() {
      const comeOutRoll = rollDice();
      if (comeOutRoll === 7 || comeOutRoll === 11) {
        return 'Win';
      } else if (comeOutRoll === 2 || comeOutRoll === 3 || comeOutRoll === 12) {
        return 'Craps';
      } else {
        const point = comeOutRoll;
        let roll;
        do {
          roll = rollDice();
          if (roll === point) {
            return 'Win';
          } else if (roll === 7) {
            return 'Seven out';
          }
        } while (roll !== point && roll !== 7);
      }
    }
  
    const results = [];
    for (let i = 0; i < n; i++) {
      results.push(playOneRound());
    }
  
    return results;
  }
  
  const rounds = 5;
  const results = playCrapsRounds(rounds);
  console.log(`Played ${rounds} rounds:`, results);
  