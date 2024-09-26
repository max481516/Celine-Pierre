import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./i18n/i18n";
import RSVP from "./pages/RSVP";
import Home from "./pages/Home";
import Planing from "./pages/Planing";
import Infos from "./pages/Infos";
import List from "./pages/List";
import Book from "./pages/Book";
import Album from "./pages/Album";
import Accomodations from "./pages/Accomodations";
import Transports from "./pages/Transports";
import RnB from "./pages/RnB";
import Beauty from "./pages/Beauty";
import Beaches from "./pages/Beaches";
import Activities from "./pages/Activities";
import Sitters from "./pages/Sitters";

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Planing" element={<Planing />} />
          <Route path="/Infos" element={<Infos />} />
          <Route path="/List" element={<List />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/Album" element={<Album />} />
          <Route path="/RSVP" element={<RSVP />} />
          <Route path="/Accomodations" element={<Accomodations />} />
          <Route path="/Transports" element={<Transports />} />
          <Route path="/RnB" element={<RnB />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/Beaches" element={<Beaches />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Sitters" element={<Sitters />} />
        </Routes>
      </Router>
    </main>
  );
}
