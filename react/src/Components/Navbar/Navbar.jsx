import Logo from '../../assets/apartments_18633127.png'
import './Navbar.css';
import { Link } from 'react-router'
import Sidebar from '../sidebar/Sidebar';
import '../Sidebar/Sidebar.css'
function Navbar() {
  return (
   <> 
   <div id="navbar" className="navbar">
      <img src={Logo} alt="Logo"  className='logo'/>
      <h1><Link to={"/"}>Home</Link></h1>
     

    </div>
    <Sidebar />
   </>
   
    
    
  );
}

export default Navbar;
