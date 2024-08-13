import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./header.css";

function HomeHeader() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="Navbar-band">
            Blog Website
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/join-our-community" className="nav-item">
              Join Our Community
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/premium-content" className="nav-item">
              Premium Content
            </Nav.Link>
            <Nav.Link as={Link} to="/logout" className="nav-item">
              Log Out
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeHeader;
