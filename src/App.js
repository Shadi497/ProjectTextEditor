import styles from "./styles";
import { useState } from "react";

function App() {
  const [textColor, setTextColor] = useState("black");
  const [bold, setBold] = useState("");
  const [italic, setItalic] = useState("");
  const [underline, setUnderline] = useState("");

  // const [style, setStyle] = useState({
  //   weight: "",
  //   underline: "",
  //   italics: "",
  // });

  const toggleTheme = (event) => {
    setTextColor(event.target.name);
    setBold(event.target.name);
    setItalic(event.target.name);
    setUnderline(event.target.name);
  };

  // const toggleFont = (event) => {
  //   setStyle({ [event.target.name]: event.target.value });
  // };

  return (
    <div style={styles.Appheader}>
      <div style={styles.Appheader2}>
        <text>{toggleTheme}</text>
        <button
          type="button"
          class="btn btn-info "
          style={styles.Button}
          onClick={toggleTheme}
          name="bold"
        >
          BOLD
        </button>

        <button
          type="button"
          class="btn btn-info "
          style={styles.Button}
          onClick={toggleTheme}
          name="italic"
        >
          ITALICS
        </button>
        <button
          type="button"
          class="btn btn-info "
          style={styles.Button}
          onClick={toggleTheme}
          name="underline"
        >
          UNDERLINE
        </button>
      </div>
      <input
        style={{
          color: textColor,
          fontWeight: bold,
          textDecoration: underline,
          fontStyle: italic,
          marginTop: "25px",
          padding: "35px",
        }}
      ></input>
      <div style={styles.Appheader2}>
        <button style={styles.Red} onClick={toggleTheme} name="red"></button>
        <button
          style={styles.Yellow}
          onClick={toggleTheme}
          name="yellow"
        ></button>
        <button
          style={styles.Black}
          onClick={toggleTheme}
          name="black"
        ></button>
        <button style={styles.Blue} onClick={toggleTheme} name="blue"></button>
        <button
          style={styles.Violet}
          onClick={toggleTheme}
          name="violet"
        ></button>
      </div>
    </div>
  );
}

export default App;
