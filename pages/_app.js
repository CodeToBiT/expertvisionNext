import "../styles/globals.scss";
import NavigationBar from "../components/header/NavigationBar";
import Footer from "../components/footer/Footer";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
