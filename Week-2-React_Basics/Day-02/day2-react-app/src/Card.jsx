function Card(props) {
  return (
    <div style={{ padding: "10px", margin: "10px", background: "#fef3c7", borderRadius: "10px" }}>
      <h3>{props.name} 🧑</h3>
      <p>Speciality: {props.skill}</p>
    </div>
  );
}

/*function Card({ name, skill }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{skill}</p>
    </div>
  );
}*/ 

export default Card;
