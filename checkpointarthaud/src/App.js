import { Switch, Route} from "react-router";
import { BrowserRouter } from "react-router-dom";
import GameDetails from "./components/GameDetails";
import GameList from "./components/GameList";
import Header from "./components/Header";

function App() {
  return (
    
    <BrowserRouter>
    <Header MyWebSiteTitle="Wild Ludo Game" />
    <Switch>
      <Route exact path='/' component={GameList} />
      <Route exact path='/games/:id' component={GameDetails} />

    </Switch>
    </BrowserRouter>
    
  )
}

export default App;
