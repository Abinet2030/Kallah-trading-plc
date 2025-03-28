
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Path to your Home component
import About from './About';
import Contact from './Contact';
import Service from './Service';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
