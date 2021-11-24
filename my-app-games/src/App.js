import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";


function App() {

  return (
    <BrowserRouter>
      <Header webSiteTitle="My Favorites Games" />
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route exact path='/games/:id' component={GameDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
