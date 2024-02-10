import "../Css/navbar.css";
import { Button } from "react-bootstrap";

export function Navbar() {
  return (
    <nav className="navbar navbar-custom navbar-expand-lg navbar-light fixed-top">
      <a href="/">
        <div className="navbarimage">
          <img src="https://www.ecrebo.com/hubfs/Blend01/ecrebo-logo.svg" height="20vw"></img>
        </div>
      </a>
      <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        &nbsp; &nbsp;
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"
          className="navbar-toggler-icon"
        ></img>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        {" "}
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
