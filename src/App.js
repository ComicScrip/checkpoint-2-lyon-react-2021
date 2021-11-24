
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <Header wildGame='Wild' />

    </BrowserRouter>
  );
}

export default App;
