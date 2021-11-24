import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import GameDetails from './components/GameDetails';

function App() {
  return (
    <div className="App">
      <Header name="Yannis" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/games/:id" component={GameDetails} />
      </Switch>
    </div>
  );
}

export default App;
