import GameList from "./components/GameList";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  return (
    <div>
      <Header nameTitle=" wild game" />
      <GameList />
      <Game />
    </div>
  );
}
export default App;
