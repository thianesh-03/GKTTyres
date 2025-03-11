import Logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarImp from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Navbar() {
  return (
    <NavbarImp expand="lg" className="custom-navbar">
      <Container className="d-flex align-items-center">
        <NavbarImp.Brand href="#home">
          <img src={Logo} height={60} width={88.61} alt="Logo" />
        </NavbarImp.Brand>

        <NavbarImp.Toggle aria-controls="basic-navbar-nav" />

        <NavbarImp.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto custom-font">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
        </NavbarImp.Collapse>
        <a href="#contactus">
          <Button variant="primary">Book a Callback</Button>
        </a>
      </Container>
    </NavbarImp>
  );
}

export default Navbar;
