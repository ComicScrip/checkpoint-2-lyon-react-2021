import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import Game from './components/Game';
import GameList from './components/GameList';


function App() {
  return (
    <BrowserRouter>
      <Header websiteTitle='react game website'/>
      {/* <Switch>
        <Route exact path='/' component={} />
        <Route path='/:id' component={} />
      </Switch> */}
    </BrowserRouter>
  )
};

export default App;
