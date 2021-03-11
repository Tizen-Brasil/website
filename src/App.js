/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import logo from "./img/tizen-brasil.png";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem-vindo ao <span style={{ color: "green" }}>Tizen</span>{" "}
          <span style={{ color: "yellow" }}>Brasil</span>
        </p>

        <p>
          Confira nossas redes sociais clicando nos links abaixo <br /> 👇
        </p>

        <div>
          <a
            target="_blank"
            className="fa fa-instagram"
            href="https://instagram.com/tizenbrasil"
            style={{ background: "#125688", color: "white" }}
          />

          <a
            target="_blank"
            class="fa fa-twitter"
            href="https://twitter.com/tizenbrasil"
            style={{ background: "#55ACEE", color: "white" }}
          />

          <a
            target="_blank"
            class="fa fa-github"
            href="https://github.com/tizenbrasil"
            style={{ background: "#6A0DAD", color: "white" }}
          />

          <a
            target="_blank"
            class="fa fa-envelope"
            href="mailto://tizen.brasil.team@gmail.com"
            style={{ background: "#FF0000", color: "white" }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
