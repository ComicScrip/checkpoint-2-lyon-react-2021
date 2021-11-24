import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Games from "./Components/Games";
import GamesList from "./Components/GamesList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header title="Ben" />
        <Switch>
          <Route exact path="/GamesList" component={GamesList} />
          <Route exact path="/Games/:id" component={Games} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
