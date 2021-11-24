import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header name="React Game" />
        <Switch>
          <Route exact path="/" component={GameList} />
          <Route path="/games/:id" component={GameDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
