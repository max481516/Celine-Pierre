import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./i18n/i18n";
import RSVP from "./pages/RSVP";
import RSVP2 from "./pages/RSVP2";
import RSVP3 from "./pages/RSVP3";
import Home from "./pages/Home";
import List from "./pages/List";
import Album from "./pages/Album";
import Accomodations from "./pages/Infos/Accomodations";
import Transports from "./pages/Infos/Transports";
import RnB from "./pages/Infos/RnB";
import Beauty from "./pages/Infos/Beauty";
import Beaches from "./pages/Infos/Beaches";
import Activities from "./pages/Infos/Activities";
import Sitters from "./pages/Infos/Sitters";
import Navbar from "./components/Navbar";
import Friday from "./pages/Events/Friday";
import Saturday from "./pages/Events/Saturday";
import Sunday from "./pages/Events/Sunday";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} />
          <Route path="/Album" element={<Album />} />
          <Route path="/RSVP" element={<RSVP />} />
          <Route path="/RSVP2" element={<RSVP2 />} />
          <Route path="/RSVP3" element={<RSVP3 />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Accomodations" element={<Accomodations />} />
          <Route path="/Transports" element={<Transports />} />
          <Route path="/RnB" element={<RnB />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/Beaches" element={<Beaches />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Sitters" element={<Sitters />} />
          <Route path="/Friday" element={<Friday />} />
          <Route path="/Saturday" element={<Saturday />} />
          <Route path="/Sunday" element={<Sunday />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
