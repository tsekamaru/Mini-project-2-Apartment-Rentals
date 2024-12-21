import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";

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
