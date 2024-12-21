import { useState } from "react";
import "./App.css";

import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import Navbar from './Components/Navbar/Navbar'


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
