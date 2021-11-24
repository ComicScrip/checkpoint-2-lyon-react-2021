import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import GameDetails from './components/GameDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header name="Wild Game" />
      <div id="main" className="flex flex-col items-center pb-10 bg-gray-500">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/games/:id" component={GameDetails} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
