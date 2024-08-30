import "./index.css";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";
import PartnerContent from "./components/PartnerContent.jsx";
import Cities from "./components/Cities.jsx";
import MobileApp from "./components/MobileApp.jsx";
import HomeHowTo from "./components/HomeHowTo.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <MainContent />
      </main>
      <section className="partner-content-root">
        <PartnerContent />
      </section>
      <section className="sections">
        <Cities />
        <MobileApp />
        <HomeHowTo />
        <Footer />
      </section>
    </>
  );
}

export default App;
