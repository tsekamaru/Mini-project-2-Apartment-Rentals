import Logo from "../assets/react.svg";

function Navbar() {
  return (
    <div id="navbar">
      <img src={Logo} alt="Logo" />
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
