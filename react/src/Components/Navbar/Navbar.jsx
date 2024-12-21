import Logo from '../../assets/apartments_18633127.png'
import './Navbar.css';

function Navbar() {
  return (
    <div id="navbar" className="navbar">
      <img src={Logo} alt="Logo"  className='logo'/>
      <h1>Home</h1>
      <ul>
        <li>Houses</li>
        <li>Apartments</li>
        <li>Prices</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
