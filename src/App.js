import "./App.css";
import Game from "./Components/Game";
import GameList from "./Components/GameList";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header name="Toto" />
      <GameList />
      <Game />
    </>
  );
}

export default App;
