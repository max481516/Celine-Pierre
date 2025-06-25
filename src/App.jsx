import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./i18n/i18n";
import RSVP from "./pages/RSVP";
import RSVP2 from "./pages/RSVP2";
import RSVP3 from "./pages/RSVP3";
import Home from "./pages/Home";
import GiftList from "./pages/GiftList";
import Album from "./pages/Album";
import Accomodations from "./pages/Infos/Accomodations";
import Transports from "./pages/Infos/Transports";
import RnB from "./pages/Infos/RnB";
import Beaches from "./pages/Infos/Beaches";
import Activities from "./pages/Infos/Activities";
import Navbar from "./components/Navbar";
import Friday from "./pages/Events/Friday";
import Saturday from "./pages/Events/Saturday";
import Sunday from "./pages/Events/Sunday";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import Services from "./pages/Infos/Services";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

//created a new component to handle the routes to remove the Navbar and Footer from the RSVP pages
function AppContent() {
  const location = useLocation();
  const hideNavAndFooter =
    location.pathname === "/RSVP" ||
    location.pathname === "/RSVP2" ||
    location.pathname === "/RSVP3";
  return (
    <main>
      <ScrollToTop />
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GiftList" element={<GiftList />} />
        <Route path="/Album" element={<Album />} />
        <Route path="/RSVP" element={<RSVP />} />
        <Route path="/RSVP2" element={<RSVP2 />} />
        <Route path="/RSVP3" element={<RSVP3 />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Accomodations" element={<Accomodations />} />
        <Route path="/Transports" element={<Transports />} />
        <Route path="/RnB" element={<RnB />} />
        <Route path="/Beaches" element={<Beaches />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Friday" element={<Friday />} />
        <Route path="/Saturday" element={<Saturday />} />
        <Route path="/Sunday" element={<Sunday />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </main>
  );
}
