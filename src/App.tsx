import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Home from "@/src/pages/Home";
import Primesgate from "@/src/pages/Primesgate";
import Webinar from "@/src/pages/Webinar";
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
              <Route path="/primesgate" element={<Primesgate />} />
              <Route path="/webinar" element={<Webinar />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
