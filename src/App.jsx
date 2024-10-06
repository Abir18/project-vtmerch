import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LeaderShip from "./components/LeaderShip";
import Products from "./components/Products";
import SignedCollection from "./components/SignedCollection";

function App() {
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
