import "./App.css";

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Search defaultCity="London" />
        <div class="footer">
          <a
            href="https://github.com/jonnlai/react-weather-app"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open-source code
          </a>{" "}
          by Jonna Laine.
        </div>
      </div>
    </div>
  );
}

export default App;
