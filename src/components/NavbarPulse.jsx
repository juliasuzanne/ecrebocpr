import "../Css/navbar.css";
import { Button } from "react-bootstrap";

export function NavbarPulse() {
  return (
    <nav className="navbar navbar-custom navbar-expand-lg navbar-light">
      <a href="/">
        <div className="navbarimagepulse">
          <img src="https://www.ecrebo.com/hubfs/Blend01/ecrebo-logo.svg" height="20vw"></img>
        </div>
      </a>
      &nbsp; &nbsp;
    </nav>
  );
}
