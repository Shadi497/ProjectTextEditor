import styles from "./styles";
import { useState } from "react";

function App() {
  const [textColor, setTextColor] = useState("black");
  const [statusB, setStatusB] = useState(true);
  const [statusI, setStatusI] = useState(true);
  const [statusU, setStatusU] = useState(true);

  const [bold, setBold] = useState("");
  const [italic, setItalic] = useState("");
  const [underline, setUnderline] = useState("");

  const txtcolor = (event) => {
    setTextColor(event.target.name);
  };

  const boldfont = (event) => {
    setBold(statusB ? event.target.name : "");
    setStatusB(!statusB);
  };

  const italics = (event) => {
    setItalic(statusI ? event.target.name : "");
    setStatusI(!statusI);
  };

  const underl = (event) => {
    setUnderline(statusU ? event.target.name : "");
    setStatusU(!statusU);
  };

  return (
    <div style={styles.Appheader}>
      <div style={styles.Appheader2}>
        <button
          type="button"
          class="btn btn-info "
          style={styles.Button}
          onClick={boldfont}
          name="bold"
        >
          BOLD
        </button>

        <button
          type="button"
          class="btn btn-info "
          style={styles.Button}
          onClick={italics}
          name="italic"
        >
          ITALICS
        </button>
        <button
          type="button"
          class="btn btn-info "
          style={styles.Button}
          onClick={underl}
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
        <button style={styles.Red} onClick={txtcolor} name="red"></button>
        <button style={styles.Yellow} onClick={txtcolor} name="yellow"></button>
        <button style={styles.Black} onClick={txtcolor} name="black"></button>
        <button style={styles.Blue} onClick={txtcolor} name="blue"></button>
        <button style={styles.Violet} onClick={txtcolor} name="violet"></button>
      </div>
    </div>
  );
}

export default App;
