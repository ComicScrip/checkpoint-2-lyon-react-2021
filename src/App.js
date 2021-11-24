import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import Game from './components/Game';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';


function App() {
  return (
    <BrowserRouter>
      <Header websiteTitle='this awesome react game website'/>
      <Switch>
        <Route exact path='/' component={GameList} />
        <Route path='/games/:id' component={Game} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
