import { Link } from "react-router-dom";


const Header = () => (
  <header>
    <h2 className="app-name">Favor exchange app</h2>
    <nav>
      <ul>
        <li><Link to="/create-favor">Offer Favor</Link></li>
        <li><Link to="my-favors">My favors</Link></li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;