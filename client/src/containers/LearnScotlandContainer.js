import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizSingleContainer from "./quizSingleContainer";
import LandingPage from "../components/LandingPage";
import MapQ from "../components/MapQ"
import ZoomQ from "../components/ZoomQ";

const LearnScotlandContainer = ({baseURL}) => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage baseURL={baseURL}/>} />
          <Route path="/quizSingle" element={<QuizSingleContainer/>} />
          <Route path="/mapQ" element={<MapQ />} />
          <Route path="/zoomQ" element={<ZoomQ />} />
        </Routes>
      </Router>
    </>
  );
};

export default LearnScotlandContainer;
