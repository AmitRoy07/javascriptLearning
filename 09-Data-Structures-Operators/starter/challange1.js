'use strict';

// const players1 = ['A', 'B', 'C', 'D', 'E', 'F'];
// const players2 = ['D', 'h', 'I', 'J'];

// const [gk, ...fieldPlayers] = players1;
// const [gk2, ...fieldPlayers2] = players2;

// const playerPosition = function (gk, ...fieldPlayers) {
//   console.log(gk, fieldPlayers);
// };

// playerPosition(...players1);
// playerPosition(...players2);

// console.log(gk2, fieldPlayers2);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Peristic'];

// console.log(players1Final);

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

const player1 = game.players[0];
const player2 = game.players[1];

console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
const [gk2, ...fieldPlayers2] = player2;

const playerPosition = function (gk, ...fieldPlayers) {
  console.log(gk, fieldPlayers);
};

playerPosition(...player1);
playerPosition(...player2);

// console.log(gk2, fieldPlayers2);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Peristic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals was score`);
};

printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
printGoals(...game.scored);

console.log(team1 < team2 ? team1 : team2);
