import Card from "./Card";

function App() {
  return (
    <div>
      <h1>🔥 Our Desi Developers:</h1>
      <Card name="Ravi" skill="Python" />
      <Card name="Neha" skill="React + Tailwind" />
      <Card name="Amit Bhai" skill="ML + FastAPI" />
    </div>
  );
}

/*import Card from "./Card"; // 👈 Make sure this path is correct

function App() {
  const devs = [
    { name: "Riya", skill: "Frontend" },
    { name: "Ajay", skill: "Backend" },
  ];

  return (
    <div>
      {devs.map((dev, index) => (
        <Card key={index} name={dev.name} skill={dev.skill} />
      ))}
    </div>
  );
}*/

export default App;
