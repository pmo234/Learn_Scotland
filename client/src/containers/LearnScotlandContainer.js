import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/index";
import SingleQuestion from "../components/quizSingle";
import MultiQuestion from "../components/MultipleChoice";
import DragNDrop from "../components/QuizDragNDrop";
import Home from "./Home";
import Forum from "./Forum";
const baseURL1 = "http://localhost:9000/api/users/";
// const getUsersState [usersData, setUsersData] = useState([]);





const LearnScotlandContainer = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  
    const getUsers = () => {
        return fetch(baseURL1)
          .then((res) => res.json())
          .then((results) => setUsers(results));
      };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/singlechoice" element={<SingleQuestion />} />
          <Route path="/multiplechoice" element={<MultiQuestion />} />
          <Route path="/dragndrop" element={<DragNDrop />} />
          <Route path="/forum" element={<Forum users={users}/>} />
        </Routes>
      </Router>
    </>
  );
};

export default LearnScotlandContainer;
