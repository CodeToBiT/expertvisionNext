import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import Head from "next/head";

const NavigationBar = () => {
  const [settings, setSettings] = useState([]);
  const fetchSettings = () => {
    fetch("https://admin.evc.edu.np/api/settings")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSettings(data);
      });
  };
  useEffect(() => {
    fetchSettings();
  }, []);

  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const isImage = settings && settings.data?.site_main_logo;

  const isIcon = settings && settings.data?.fav_icon;

  let favIcon;

  if (isIcon) {
    favIcon = (
      <link rel="shortcut icon" href={settings && settings.data?.fav_icon} />
    );
  } else {
    favIcon = <link rel="shortcut icon" href="/images/logo2.webp" />;
  }

  let mainLogo;
  let footerLogo;
  if (isImage) {
    mainLogo = (
      <Image
        src={settings && settings.data?.site_main_logo}
        alt="loading"
        priority="false"
        fill
        sizes="(max-height: 62px)"
      />
    );
  } else {
    mainLogo = (
      <Image
        src="/images/logo.webp"
        alt="loading"
        priority="false"
        fill
        sizes="(max-height: 62px)"
      />
    );
  }

  return (
    <>
      <Head>{favIcon}</Head>
      <div className="navbar">
        <Navbar bg="light" expand="lg" className="w-100">
          <Container className="gap-64">
            <Navbar.Brand href="/">
              <div className="media-wrapper">{mainLogo}</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0 gap-2" navbarScroll>
                <Link href="/" className="nav-link">
                  Home
                </Link>
                {/* <NavDropdown
                  title="About Us"
                  id="navbarScrollingDropdown"
                
                >
                  <Link href="/about" className="dropdown-item">
                    About Us
                  </Link>
                  <Link href="/teams" className="dropdown-item">
                    Our Team
                  </Link>
                </NavDropdown> */}
                <div class="nav-item show dropdown">
                  <Link
                    id="navbarScrollingDropdown"
                    aria-expanded="true"
                    role="button"
                    class="dropdown-toggle show nav-link"
                    tabindex="0"
                    href="/about"
                  >
                    About Us
                  </Link>
                  <div
                    aria-labelledby="navbarScrollingDropdown"
                    data-bs-popper="static"
                    class="dropdown-menu show"
                  >
                    <Link class="dropdown-item" href="/about">
                      About Us
                    </Link>
                    <a class="dropdown-item" href="/teams">
                      Our Team
                    </a>
                  </div>
                </div>

                <Link className="nav-link" href="/service">
                  Services
                </Link>
                <Link className="nav-link" href="/course">
                  Courses
                </Link>
                <Link className="nav-link" href="/blog">
                  Blog
                </Link>
                <Link className="nav-link" href="/country">
                  Countries
                </Link>
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </Nav>

              {settings && settings.apply_now ? (
                <Link
                  href={settings && settings.data?.apply_now}
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Apply Now
                </Link>
              ) : (
                <></>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavigationBar;
