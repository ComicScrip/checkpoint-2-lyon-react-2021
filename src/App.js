import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GameDetails from "./Components/GameDetails";
import GameList from "./Components/GameList";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="Amazing Wild Game App" />
      </div>

      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/:id" element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
