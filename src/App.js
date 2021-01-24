import styles from "./styles";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const toggleTheme = () => {
    alert(text.toUpperCase());
  };
  const handleChange = (e) => setText(e.target.value);
  return (
    <div style={styles.Appheader}>
      <div style={styles.Appheader2}>
        <text>{toggleTheme}</text>
        <button style={styles.Button1}>BOLD</button>
        <button style={styles.Button1} onClick={toggleTheme}>
          ITALICS
        </button>
        <button style={styles.Button1}>UNDERLINE</button>
      </div>
      <input style={styles.TextStyled} onChange={handleChange}></input>
      <div style={styles.Appheader2}>
        <button style={styles.Red}></button>
        <button style={styles.Yellow}></button>
        <button style={styles.Black}></button>
        <button style={styles.Blue}></button>
        <button style={styles.Violet}></button>
      </div>
    </div>
  );
}

export default App;
