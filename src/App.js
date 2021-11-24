import GameList from "./components/GameList";
import { Route, Switch } from 'react-router';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/games/:id" component={GameList} />
      </Switch>
    </div>
  );
}

export default App;
