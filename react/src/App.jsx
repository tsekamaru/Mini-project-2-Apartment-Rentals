import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Navbar from './components/navbar/Navbar'


function App() {
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
