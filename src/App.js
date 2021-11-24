import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import GameDetails from "./Components/GameDetails";
import GameList from "./Components/GameList";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header name="Toto" />
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route path="/game/:id" component={GameDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
