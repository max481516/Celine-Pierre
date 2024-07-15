import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RSVP from "./pages/RSVP";
import Home from "./pages/Home";

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RSVP" element={<RSVP />} />
        </Routes>
      </Router>
    </main>
  );
}
