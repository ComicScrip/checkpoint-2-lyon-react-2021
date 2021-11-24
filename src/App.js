import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import Game from './components/Game';

function App() {
  return (
    <BrowserRouter>
      <Header wildGame='Wild' />
      <Switch>
        <Route exact path='/' component={GameList} />
        <Route exact path='/:id' component={Game} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

