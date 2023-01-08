import "../../styles/globals.scss";
import NavigationBar from "../components/header/NavigationBar";
import Footer from "../components/footer/Footer";
import { SSRProvider } from "react-bootstrap";
import { useEffect, useState } from "react";
import { AppWrapper, useAppContext } from "../context/state";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  return (
    <>
      <AppWrapper>
        <NavigationBar />
        <Component {...pageProps} />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default MyApp;
