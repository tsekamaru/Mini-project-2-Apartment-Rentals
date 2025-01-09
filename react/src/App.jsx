import "./App.css";
import Homepage from "./pages/HomePage";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import listingData from "./data/listings.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="main-content">
        <div id="pages">
          <h1>Pages</h1>
          <Homepage />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
