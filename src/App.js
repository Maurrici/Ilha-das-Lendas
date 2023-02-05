import { Route, Routes, BrowserRouter } from 'react-router-dom';

// CSS
import './App.css';

// Components
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Players from './pages/Players/Players';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/team/:id' element={<Team/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/players' element={<Players/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
