import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useAppContext } from "../../context/state";
import { useEffect } from "react";

const Footer = () => {
  const context = useAppContext();
  const {
    settings,
    fetchSettings,
    socialmedias,
    fetchSocialmedias,
    countries,
    fetchCountries,
    pages,
    fetchPages,
  } = context;

  useEffect(() => {
    if (settings == null) {
      fetchSettings();
    }
    if (socialmedias == null) {
      fetchSocialmedias();
    }
    if (countries == null) {
      fetchCountries();
    }
    if (pages == null) {
      fetchPages();
    }
  }, []);
  const isFooterImage = settings && settings.site_footer_logo;
  let footerLogo;
  if (isFooterImage) {
    footerLogo = <img src={settings && settings.site_footer_logo} alt="" />;
  } else {
    footerLogo = <img src="/images/logo2.png" alt="" />;
  }

  return (
    <>
      <footer>
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
                    <Link href="/service">Services</Link>
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
                  {countries &&
                    countries.slice(0, 5).map((data, key) => {
                      return (
                        <li className="nav-link" key={key}>
                          <Link href={`/country/${data.slug}`}>
                            {data.name}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="col-md-2 col-sm-12 py-4">
                <h2>Company</h2>

                <ul className="links">
                  <li className="nav-link">
                    <Link href="/faqs">FAQs</Link>{" "}
                  </li>
                  <li className="nav-link">
                    <Link href="/teams">Teams</Link>{" "}
                  </li>
                  {pages &&
                    pages.slice(0, 3).map((data, key) => {
                      return (
                        <li className="nav-link" key={key}>
                          <Link href={`/page/${data.slug}`}>{data.title}</Link>
                        </li>
                      );
                    })}
                </ul>
              </div>

              <div className="col-md-6 col-sm-12">
                <iframe
                  src={settings && settings.map}
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
                <div className="media-wrapper">{footerLogo}</div>
              </Link>

              <div className="follow d-flex gap-16 align-items-center pt-3">
                <h5>Follow us</h5>
                <div className="social d-flex gap-16 pb-2">
                  {socialmedias &&
                    socialmedias.map((data, key) => {
                      return (
                        <a href={data.link} key={key}>
                          <i className={data.icon}></i>
                        </a>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="copyright text-center">
            <p>&copy; {settings && settings.site_copyright}</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
