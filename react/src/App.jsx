import "./App.css";
import { Routes, Route } from "react-router";
import { useState } from "react";
import listings from "./Data/listings.json";

import Navbar from './components/navbar/Navbar';
import Homepage from "./pages/HomePage";
import AboutPage from "./pages/Aboutpage";
import Apartments from "./pages/Apartments";
import ErrorPage from "./pages/Errorpage";
import Footer from "./components/Footer/Footer";

function App() {
  const [itemList, setItemList] = useState(listings.results);
  const addListItem = (item) => setItemList([item, ...itemList]);

  return (
    <div className="App">
      <Navbar addListItem={addListItem} />

      <Routes>
        <Route path="/" element={<Homepage itemList={itemList} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
