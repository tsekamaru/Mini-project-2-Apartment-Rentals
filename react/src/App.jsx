import { useState } from "react";
import "./App.css";

import Sidebar from "./Components/sidebar/Sidebar";
import Footer from "./Components/footer/Footer";
import Navbar from './Components/navbar/Navbar'


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div id="main-content">
        <div id="pages">
          <h1>Pages</h1>
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
