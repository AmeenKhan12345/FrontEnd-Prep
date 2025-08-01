import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count > 0 ? count - 1 : 0);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const bgColor = darkMode ? "#222831" : "#f5f5f5";
  const textColor = darkMode ? "#f5f5f5" : "#222831";
  const emoji = darkMode ? "🌙" : "🌞";

  const styles = {
    container: {
      textAlign: "center",
      marginTop: "40px",
      minHeight: "100vh",
      transition: "background 0.3s, color 0.3s",
    },
    button: {
      fontSize: "1.2rem",
      margin: "10px",
    },
  };
    
  return (
    <div style={{ ...styles.container, background: bgColor, color: textColor }}>
      <button onClick={toggleDarkMode} style={styles.button}>
        {emoji} {darkMode ? "Dark" : "Light"} Mode
      </button>
      <h2>Simple Counter App</h2>
      <div style={{ fontSize: "2rem", margin: "20px 0" }}>{count}</div>
      <button onClick={handleIncrease} style={{ fontSize: "1.2rem", marginRight: "10px" }}>➕ Increase</button>
      <button onClick={handleDecrease} style={{ fontSize: "1.2rem" }} disabled={count === 0}>➖ Decrease</button>
    </div>
  );
}

export default App;
