import { useState } from "react";
import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
