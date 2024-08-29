import "./index.css";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";
import PartnerContent from "./components/PartnerContent.jsx";

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
      sa
    </>
  );
}

export default App;
