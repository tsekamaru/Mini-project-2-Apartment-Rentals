import { Link } from "react-router";
import Form from "../Form/Form";

function Sidebar() {
  return (
    <div
      className="offcanvas offcanvas-start bg-light-subtle"
      tabIndex="-1"
      id="offcanvas"
      aria-labelledby="offcanvasLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title ms-3" id="offcanvasLabel">
          Menu
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="list-group">
          <Link className="text-decoration-none" to={"/"}>
            <a className="list-group-item list-group-item-action list-group-item-light fw-semibold">
              Home
            </a>
          </Link>

          <Link className="text-decoration-none" to={"/apartments"}>
            <a className="list-group-item list-group-item-action list-group-item-light fw-semibold">
              Apartments
            </a>
          </Link>

          <Link className="text-decoration-none" to={"/about"}>
            <a className="list-group-item list-group-item-action list-group-item-light fw-semibold">
              About
            </a>
          </Link>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Sidebar;
