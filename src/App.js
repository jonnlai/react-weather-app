import "./App.css";

import Search from "./Search";
import Weather from "./Weather";
import Update from "./Update";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Search />
        <Weather />
        <Update />
      </div>
    </div>
  );
}

export default App;
