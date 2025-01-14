import "./App.css";
import Homepage from "./pages/HomePage";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import listings from "./data/listings.json";
import { useState } from "react";

function App() {
  const [itemList] = useState(listings.results);
  return (
    <div className="App">
      <Navbar />
      <div id="main-content">
        <div id="pages">
          <Homepage itemList={itemList} />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
