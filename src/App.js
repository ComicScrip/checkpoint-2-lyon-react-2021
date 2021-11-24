import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Game from "./Components/Game";
import GameList from "./Components/GameList";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header name="Toto" />
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route path="/:id" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
