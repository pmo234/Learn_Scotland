import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import QuizSingle from "../components/quizSingle";


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
