import { Route, Routes, BrowserRouter } from 'react-router-dom';

// CSS
import './App.css';

// Components
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import Teams from './pages/Teams/Teams';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Players from './pages/Players/Players';
import Player from './pages/Player/Player';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/team/' element={<Teams/>} />
          <Route path='/team/:id' element={<Team/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/player' element={<Players/>} />
          <Route path='/player/:id' element={<Player />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
