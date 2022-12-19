import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Trial from "../components/Trial";

const LearnScotlandContainer = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/trial" element={<Trial />} />
        </Routes>
      </Router>
    </>
  );
};

export default LearnScotlandContainer;
