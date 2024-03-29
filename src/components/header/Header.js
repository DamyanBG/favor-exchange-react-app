import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user, setUser } = useContext(UserContext)

  const handleOnLogout = () => {
    setUser({})
    localStorage.removeItem("user")
  }

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand className="app-name text-uppercase ms-4 me-4" href="/" style={{ fontFamily: 'Montserrat', color: '#ccc' }}>
        <span className="pe-4">Favor Exchange App</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ps-4 me-auto">
          <Nav.Link as={Link} to="/search-favors">Search Favors</Nav.Link>
          <Nav.Link as={Link} to="/create-favor">Offer Favors</Nav.Link>
          <Nav.Link as={Link} to="/my-favors">My Favors</Nav.Link>
        </Nav>
        <Nav className="ms-auto me-4">
          {
            user.token ? (
              <>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/logout" onClick={handleOnLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </>
            )
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
  
};

export default Header;
