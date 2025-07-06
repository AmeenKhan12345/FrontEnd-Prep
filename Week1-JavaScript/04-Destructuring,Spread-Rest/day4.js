const players = [
  { name: "Virat", runs: 70 },
  { name: "Rohit", runs: 45 },
  { name: "Gill", runs: 90 }
];


for(let i=0; i<players.length; i++){
  const {name, runs} = players[i];
  console.log(`${players[i].name} scored ${players[i].runs} runs`);
}


const newPlayers = [...players, { name: "Rahul", runs: 55 }, { name: "Pant", runs: 60 }];
console.log(newPlayers);

const [firstPlayer, ...otherPlayers] = players;
console.log(firstPlayer);