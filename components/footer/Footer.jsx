import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-12 py-4">
              <h2>Quick Links</h2>

              <ul className="links">
                <li className="nav-link">
                  <Link href="/">Home</Link>
                </li>
                <li className="nav-link">
                  <Link href="/about">About</Link>
                </li>
                <li className="nav-link">
                  <Link href="/services">Services</Link>
                </li>
                <li className="nav-link">
                  <Link href="/country">Country</Link>
                </li>
                <li className="nav-link">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-12 py-4">
              <h2>Countries</h2>

              <ul className="links">
                <li className="nav-link">
                  <Link href="/single">Japan</Link>
                </li>
                <li className="nav-link">
                  <Link href="/single">Australia</Link>
                </li>
                <li className="nav-link">
                  <Link href="/single">Canada</Link>
                </li>
                <li className="nav-link">
                  <Link href="/single">Uk</Link>
                </li>
                <li className="nav-link">
                  <Link href="/single">USA</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-12 py-4">
              <h2>Company</h2>

              <ul className="links">
                <li className="nav-link">
                  <Link href="/">FAQ</Link>
                </li>
                <li className="nav-link">
                  <Link href="/teams">Teams</Link>
                </li>
                <li className="nav-link">
                  <Link href="/single">Privacy Policy</Link>
                </li>
                <li className="nav-link">
                  <Link href="/single">Terms and conditions</Link>
                </li>
                <li className="nav-link">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-sm-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.472385448525!2d85.31947921498778!3d27.702697582793782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198b49142b07%3A0x7e92d2ac8a797e05!2sExpert%20Vision!5e0!3m2!1sen!2snp!4v1671425038937!5m2!1sen!2snp"
                width="100%"
                height="268"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="d-flex justify-content-between py-3">
            <Link href="/">
              <div className="media-wrapper">
                <img src="/images/logo2.png" alt="" />
              </div>
            </Link>

            <div className="follow d-flex gap-64 align-items-center pt-3">
              <h5>Follow us</h5>
              <div className="social d-flex gap-16 pb-2">
                <Link href="/"><FaFacebook /></Link>
                <Link href="/"><FaInstagram /></Link>
                <Link href="/"><FaTwitter /></Link>
                <Link href="/"><FaLinkedin /></Link>
                
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center">
          <p>&copy; 2021 All Rights Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
