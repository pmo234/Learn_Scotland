import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleQuestion from "./components/QuizSingle";
import MultiQuestion from "./components/MultipleChoice";
import DragNDrop from "./components/QuizDragNDrop";
import MapQ from "./components/MapQ";
import LearnScotlandContainer from "./containers/LearnScotlandContainer";
import Forum from "./components/Forum";
import { useEffect, useState } from "react";
const baseURL1 = "http://localhost:9000/api/users/";

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [firstLoad]);

  const changeFirst = () => {
    setFirstLoad(false);
  };

  // ? this is the user that was last added i.e. the current user
  // useEffect(() => {
  //   if (users && users[0]) {
  //     setCurrUser(users[users.length - 1].name);
  //   }
  // }, [users2]);

  const getUsers = () => {
    return fetch(baseURL1)
      .then((res) => res.json())
      .then((results) => setUsers(results));
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LearnScotlandContainer
                currUser={currUser}
                users={users}
                setCurrUser={setCurrUser}
                changeFirst={changeFirst}
                firstLoad={firstLoad}
                getUsers={getUsers}
              />
            }
          />
          <Route
            path="/leaderboard"
            element={
              <LearnScotlandContainer users={users} currUser={currUser} />
            }
          />
          <Route
            path="/singlechoice"
            element={<SingleQuestion users={users} currUser={currUser} />}
          />
          <Route
            path="/multiplechoice"
            element={
              <MultiQuestion
                users={users}
                currUser={currUser}
                setUsers={setUsers}
              />
            }
          />
          <Route
            path="/dragndrop"
            element={<DragNDrop users={users} currUser={currUser} />}
          />
          <Route
            path="/mapquiz"
            element={
              <MapQ users={users} currUser={currUser} serUsers={setUsers} />
            }
          />
          <Route
            path="/forum"
            element={
              <Forum
                users={users}
                setUsers={setUsers}
                currUser={currUser}
                getUsers={getUsers}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
