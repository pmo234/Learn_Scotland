import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/index";
import SingleQuestion from "../components/quizSingle";
import MultiQuestion from "../components/MultipleChoice";
import DragNDrop from "../components/QuizDragNDrop";
import Home from "./Home";

const LearnScotlandContainer = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/singlechoice" element={<SingleQuestion />} />
          <Route path="/multiplechoice" element={<MultiQuestion />} />
          <Route path="/dragndrop" element={<DragNDrop />} />
        </Routes>
      </Router>
    </>
  );
};

export default LearnScotlandContainer;
