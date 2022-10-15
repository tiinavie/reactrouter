import './App.css';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router</h1>
      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
