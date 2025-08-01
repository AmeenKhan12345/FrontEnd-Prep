import PlayerCard from "./Player";

function App() {
  const players = [
    { name: "Virat", runs: 0 },
    { name: "Rohit", runs: 72 },
    { name: "Sachin", runs: 91 },
    { name: "Dhoni", runs: 60 }
  ];

  const toppers = players.filter(player => player.runs >= 50);

  return (
    <div>
      <h1>🏆 Topper List</h1>

      {toppers.length === 0 ? (
        <p>No toppers this time 😢</p>
      ) : (
        toppers.map((player, index) => (
          <PlayerCard
            key={index}
            name={player.name}
            runs={player.runs}
          />
        ))
      )}
    </div>
  );
}

export default App;
