import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import BrowseTrails from "./BrowseTrails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trails" element={<BrowseTrails />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
export default App;
