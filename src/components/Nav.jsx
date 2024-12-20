import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
