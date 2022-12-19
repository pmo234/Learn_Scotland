import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizSingleContainer from "./quizSingleContainer";
import LandingPage from "../components/LandingPage";
import Trial from "../components/Trial";
import Forum from "./Forum";
import Home from "./Home";

const LearnScotlandContainer = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quizSingle" element={<QuizSingleContainer/>} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default LearnScotlandContainer;
