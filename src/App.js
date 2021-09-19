import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="SheCodes-logo" className="App-logo"></img>
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://optimistic-hopper-ee95fa.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Honoria Fraszt
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/fhonoria/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              Git-hub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
