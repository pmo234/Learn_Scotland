import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import QuizSingle from "../components/QuizSingle";


const quizSingleContainer = () => {
  return (
    <>
        <Header />
        <QuizSingle />
        <QuizSingle />

    </>
  );
};

export default quizSingleContainer;
