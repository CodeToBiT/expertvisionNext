import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <>
      <div className="navbar">
        <Navbar bg="light" expand="lg" className="w-100">
          <Container className="gap-64">
            <Navbar.Brand href="/">
              <div className="media-wrapper">
                <Image
                  src="/images/logo.png"
                  alt="loading"
                  priority="false"
                  fill
                  sizes="(max-height: 200px)"
                />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0 gap-2" navbarScroll>
                <Link href="/" className="nav-link">
                  Home
                </Link>
                <NavDropdown title="About Us" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="/teams">Our Team</NavDropdown.Item>
                </NavDropdown>
                <Link className="nav-link" href="/services">
                  Services
                </Link>
                <Link className="nav-link" href="/courses">
                  Courses
                </Link>
                <Link className="nav-link" href="/blog">
                  Blog
                </Link>
                <Link className="nav-link" href="/countries">
                  Countries
                </Link>
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </Nav>

              <Link href="#action7" className="btn btn-secondary">
                Apply now
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavigationBar;
