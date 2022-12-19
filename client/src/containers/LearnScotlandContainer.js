import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/index";
import QuizSingle from "../components/QuizSingle";
import MultipleChoice from "../components/MultipleChoice";
import DragNDrop from "../components/QuizDragNDrop";

const baseURL = "http://localhost:9000/api/questions/";
const baseURLmulti = "http://localhost:9000/api/multiquestions/";
const baseURLsingle = "http://localhost:9000/api/singlequestions/";

// import Home from "./home";

const LearnScotlandContainer = () => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions()
  }, []);

  const getQuestions = () => {
    return fetch(baseURL)
      .then((response) => response.json())
      .then((data) => setQuestions(data))
  };

  const [singlequestions, setSingleQuestions] = useState([]);

  useEffect(() => {
    getSingleQuestions()
  }, []);

  const getSingleQuestions = () => {
    return fetch(baseURLsingle)
      .then((response) => response.json())
      .then((data) => setSingleQuestions(data))
  };

  const [multiquestions, setMultiQuestions] = useState([]);

  useEffect(() => {
    getMultiQuestions()
  }, []);

  const getMultiQuestions = () => {
    return fetch(baseURLmulti)
      .then((response) => response.json())
      .then((data) => setMultiQuestions(data))
  };


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/singlechoice" element={<QuizSingle/>} />
          <Route path="/multiplechoice" element={<MultipleChoice/>} />
          <Route path="/dragndrop" element={<DragNDrop />} />
        </Routes>
      </Router>
    </>
  );
};

export default LearnScotlandContainer;
