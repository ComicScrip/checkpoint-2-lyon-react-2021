import GameList from "./components/GameList";
import Header from "./components/Header";
import Game from "./components/Game";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header nameTitle=" wild game" />
        <Switch>
          <Route exact path="/" component={GameList} />
          <Route exact path="/:id" component={Game} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
