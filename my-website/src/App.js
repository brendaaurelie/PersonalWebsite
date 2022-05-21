import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Gallery from "./Pages/Gallery/Gallery";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Videos from './Pages/Videos/Videos';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/Landing" element={<Landing />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects/>} />  
      <Route path="/Videos" element={<Videos/>} />  

    </Routes>
    </div>
  );
}

export default App;
