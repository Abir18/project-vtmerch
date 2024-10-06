import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LeaderShip from "./components/LeaderShip";
import Products from "./components/Products";
import SignedCollection from "./components/SignedCollection";

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      easing: "ease",
      anchorPlacement: "top-bottom"
    });
  }, []);
  return (
    <>
      <Hero />
      <Products />
      <SignedCollection />
      <LeaderShip />
      <Footer />
    </>
  );
}

export default App;
