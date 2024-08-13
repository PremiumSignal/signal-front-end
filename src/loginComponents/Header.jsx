import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="Navbar-band">
            Blog Website
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" className="nav-item">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/join-our-community" className="nav-item">
                Join Out Community
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/premium-content" className="nav-item">
                Premium Content
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-item">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="nav-item">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
