import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Home from "@/src/pages/Home";
import Primesgate from "@/src/pages/Primesgate";
import Webinar from "@/src/pages/Webinar";
import About from "@/src/pages/About";
import VineCity from "@/src/pages/VineCity";
import PeaceVille from "@/src/pages/PeaceVille";
import WhitePlains from "@/src/pages/WhitePlains";
import AddisCity from "@/src/pages/AddisCity";
import TheVerdant from "@/src/pages/TheVerdant";
import FairviewEstate from "@/src/pages/FairviewEstate";
import SummitRegistration from "@/src/pages/SummitRegistration";
import PageTransition from "@/src/components/PageTransition";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/primesgate" element={<Primesgate />} />
              <Route path="/vine-city" element={<VineCity />} />
              <Route path="/peace-ville" element={<PeaceVille />} />
              <Route path="/white-plains" element={<WhitePlains />} />
              <Route path="/addis-city" element={<AddisCity />} />
              <Route path="/the-verdant" element={<TheVerdant />} />
              <Route path="/fairview-estate" element={<FairviewEstate />} />
              <Route path="/webinar" element={<Webinar />} />
              <Route path="/summit-registration" element={<SummitRegistration />} />
              <Route path="/summit" element={<SummitRegistration />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
