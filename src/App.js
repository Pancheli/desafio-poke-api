import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Detalles from './views/Detalles';
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="pokemones" element={ <Pokemones /> } />
        <Route path="pokemones/:nombre" element={ <Detalles /> } />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
