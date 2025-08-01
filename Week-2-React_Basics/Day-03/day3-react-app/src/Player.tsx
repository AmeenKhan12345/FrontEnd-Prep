function PlayerCard({ name, runs }: { name: string, runs: number }) {
    return (
      <div style={{ padding: "10px", margin: "10px", border: "1px solid #ccc" }}>
        <h3>{name}</h3>
        <p>Runs: {runs}</p>
      </div>
    );
  }
  
  export default PlayerCard;
  