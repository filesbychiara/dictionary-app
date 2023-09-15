import "./App.css";
import Dictionary from "./components/Dictionary";



function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1><a href="/">dictionary app</a></h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            href="https://github.com/filesbychiara/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Coded
          </a>{" "}
          by{" "}
          <a
            href="https://filesbychiara.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Chiara
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
