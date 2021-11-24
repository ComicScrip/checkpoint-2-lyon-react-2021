import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Games from "./Components/Games";
import GamesList from "./Components/GamesList";
import GameDetails from "./Components/GameDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header title="Ben" />
        <Switch>
          <Route exact path="/" component={GamesList} />
          <Route exact path="/games/:id" component={GameDetails} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
