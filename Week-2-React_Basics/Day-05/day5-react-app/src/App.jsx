import { useState } from "react";


function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>👋 Live Greeting</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", fontSize: "1rem" }}
      />
      <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
        {name ? `Namaste, ${name}!` : "Type your name above 👆"}
      </p>
    </div>
  );
}
export default App;

//function App() {
//  const [name, setName] = useState("");
//
//  return (
//    <div style={{ textAlign: "center", marginTop: "40px" }}>
//      <h2>👋 Live Greeting</h2>
//      <input
//        type="text"
//        placeholder="Enter your name"
//        value={name}
//        onChange={(e) => setName(e.target.value)}
//        style={{ padding: "10px", fontSize: "1rem" }}
//      />
//      <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
//        {name ? `Namaste, ${name}!` : "Type your name above 👆"}
//      </p>
//    </div>
//  );
//}
//
//
/*function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: "300px", margin: "40px auto", padding: "20px", border: "1px solid #ccc" }}>
      <h2>🔐 Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Login
        </button>
      </form>

      {submitted && (
        <p style={{ marginTop: "20px" }}>
          👋 Welcome, user with email <b>{email}</b>
        </p>
      )}
    </div>
  );
}*/

