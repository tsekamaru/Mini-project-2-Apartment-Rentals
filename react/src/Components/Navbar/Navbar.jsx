/* eslint-disable react/prop-types */
import { Link } from "react-router";
import Sidebar from "../Sidebar/Sidebar";

function Navbar({ addListItem }) {
  return (
    <>
      <nav className="navbar bg-primary-subtle">
        <div className="container-start">
          <a
            className="bi bi-list text-black ms-2"
            style={{ fontSize: "2rem" }}
            data-bs-toggle="offcanvas"
            href="#offcanvas"
            role="button"
            aria-controls="offcanvas"
          ></a>
          <Link to={"/"}>
            <i className="bi bi-buildings text-black ms-3" style={{ fontSize: "2rem" }}></i>
          </Link>
          {/* <Link to={"/"}>
            <span style={{ fontSize: "2rem" }}>Apartments</span>
          </Link> */}
        </div>
      </nav>
      <Sidebar addListItem={addListItem} />
    </>
  );
}

export default Navbar;
