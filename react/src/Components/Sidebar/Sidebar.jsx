import "./Sidebar.css"
import { Link } from 'react-router'



function Sidebar() {
  return (
    <div id="sidebar">
      
      <ul>
        <li><Link to={"/apartments"}>Apartments</Link></li>
        <li><Link to={"/about"}>About</Link></li>
      </ul>
    </div>
  );
}


export default Sidebar;
