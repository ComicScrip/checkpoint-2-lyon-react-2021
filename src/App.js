import "./App.css";
import GameList from "./Components/GameList";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header title="Amazing Wild Game App" />
      <GameList />
    </div>
  );
}

export default App;
