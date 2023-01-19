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
  const [courses, setCourses] = useState([]);
  const [countries, setCountries] = useState([]);
  const fetchSettings = () => {
    fetch("https://admin.evc.edu.np/api/settings")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSettings(data);
      });
  };
  const fetchCourses = () => {
    fetch("https://admin.evc.edu.np/api/courses")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourses(data);
      });
  };
  const fetchCountries = () => {
    fetch("https://admin.evc.edu.np/api/countries")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      });
  };
  useEffect(() => {
    fetchSettings();
    fetchCourses();
    fetchCountries();
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
                <Nav.Link href="/">Home</Nav.Link>
                <div className="nav-item show dropdown">
                  <Link
                    id="navbarScrollingDropdown"
                    aria-expanded="true"
                    role="button"
                    className="dropdown-toggle show nav-link"
                    tabIndex="0"
                    href="/about"
                  >
                    About Us
                  </Link>
                  <div
                    aria-labelledby="navbarScrollingDropdown"
                    data-bs-popper="static"
                    className="dropdown-menu show"
                  >
                    <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                    <NavDropdown.Item href="/teams">Our Team</NavDropdown.Item>
                    <NavDropdown.Item href="/testimonials">
                      Testimonials
                    </NavDropdown.Item>
                  </div>
                </div>

                <Nav.Link href="/service">Services</Nav.Link>

                <div className="nav-item show dropdown">
                  <Link
                    id="navbarScrollingDropdown"
                    aria-expanded="true"
                    role="button"
                    className="dropdown-toggle show nav-link"
                    tabIndex="0"
                    href="/course"
                  >
                    Courses
                  </Link>
                  <div
                    aria-labelledby="navbarScrollingDropdown"
                    data-bs-popper="static"
                    className="dropdown-menu show"
                  >
                    {courses &&
                      courses.data?.slice(0, 4).map((data, key) => {
                        return (
                          <NavDropdown.Item
                            className="px-4"
                            href={`/course/${data.slug}`}
                            key={key}
                          >
                            {data.name}
                          </NavDropdown.Item>
                        );
                      })}
                  </div>
                </div>
                <div className="nav-item show dropdown">
                  <Link
                    id="navbarScrollingDropdown"
                    aria-expanded="true"
                    role="button"
                    className="dropdown-toggle show nav-link"
                    tabIndex="0"
                    href="/country"
                  >
                    Countries
                  </Link>
                  <div
                    aria-labelledby="navbarScrollingDropdown"
                    data-bs-popper="static"
                    className="dropdown-menu show"
                  >
                    {countries &&
                      countries.data?.slice(0, 4).map((data, key) => {
                        return (
                          <NavDropdown.Item
                            href={`/country/${data.slug}`}
                            key={key}
                          >
                            {data.name}
                          </NavDropdown.Item>
                        );
                      })}
                  </div>
                </div>
                <Nav.Link href="/blog">Blogs</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>

              {settings && settings.data?.apply_now ? (
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
