import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header";
import GameDetails from "./components/GameDetails";
import GameList from "./components/GameList";
import Error from "./components/Error";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header headerTitle="WildGames" />
        <Switch>
          <Route exact path="/" component={GameList} />
          <Route exact path="/:id" component={GameDetails} />
          <Route path="/error" component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
