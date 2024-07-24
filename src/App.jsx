import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./i18n/i18n";
import RSVP from "./pages/RSVP";
import Home from "./pages/Home";

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<RSVP />} />
        </Routes>
      </Router>
    </main>
  );
}
