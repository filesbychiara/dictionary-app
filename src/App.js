import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header>
        <h1>dictionary app</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
      <a href="/">Coded</a> by <a href="/">Chiara</a>
        </footer>
    </div>
    </div>
  );
}

export default App;
