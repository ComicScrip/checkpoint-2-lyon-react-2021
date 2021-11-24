import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header";
import GameList from "./components/GameList";


function App() {

  return (
    <BrowserRouter>
      <Header webSiteTitle="My Favorites Games" />
      <Switch>
        <Route exact path="/" component={GameList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
