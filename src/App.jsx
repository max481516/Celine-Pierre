import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RSVP from "./pages/RSVP";
import Home from "./pages/Home";

export default function App() {
  return (
    <main>
      <Router>
        <RSVP />
        <Routes>
          {/* <Route path="/" exact element={<Home />} /> */}
          <Route path="/RSVP" exact element={<RSVP />} />
        </Routes>
      </Router>
    </main>
  );
}
