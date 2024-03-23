'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [goal, name] of game.scored.entries()) {
  console.log(`goal ${goal + 1} score by ${name}`);
}

// let sum = 0;

// for (const odds of Object.values(game.odds)) {
//   sum += odds;
//   console.log(Object.values(game.odds).length);
//   console.log(sum);
// }
// sum /= Object.values(game.odds).length;
// console.log(sum);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamName = team === 'x' ? 'draw' : `Victory ${game.team}`;
  console.log(`goal ${teamName} score by ${odd}`);
}

let score = {};
// console.log(Object.keys(score));
for (const name of game.scored) {
  if (score.hasOwnProperty(name)) {
    score[name] += 1;
  } else {
    score[name] = 1;
  }
}
console.log(score);

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
