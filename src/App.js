import { Route, Routes, BrowserRouter } from 'react-router-dom';

// CSS
import './App.css';

// Components
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/team/:id' element={<Team/>} />
          <Route path='/about' element={<About/>} />v
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
