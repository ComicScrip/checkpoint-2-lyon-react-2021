import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameList from './screens/GameList';
import GameDetails from './screens/GameDetails';
import Header from './components/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header websiteName="Wild games" />
        <Switch>
          <Route exact path="/" component={GameList} />
          <Route path="/games/:id" component={GameDetails} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
