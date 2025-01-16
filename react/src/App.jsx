import "./App.css";
import Homepage from "./pages/HomePage";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";

import { Routes, Route } from "react-router";
import AboutPage from "./pages/Aboutpage";
import ErrorPage from "./pages/Errorpage";
import Apartments from "./pages/Apartments";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <div id="main-content">
        <div id="pages">
          
          
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
