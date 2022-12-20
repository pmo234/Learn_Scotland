import { useEffect, useState } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Leaderboard from "./components/Leaderboard";
const baseURL1 = "http://localhost:9000/api/users/";
import Forum from "./Forum";
const baseURL1 = "http://localhost:9000/api/users/";
// const getUsersState [usersData, setUsersData] = useState([]);





const LearnScotlandContainer = () => {
  const [currUser, setCurrUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const changeFirst = () => {
    setFirstLoad(false);
  };

  // ? this is the user that was last added i.e. the current user
  useEffect(() => {
    if (users && users[0]) {
      setCurrUser(users[users.length - 1].userName);
    }
  }, [users]);

  const getUsers = () => {
    return fetch(baseURL1)
      .then((res) => res.json())
      .then((results) => setUsers(results));
  };
 
  return firstLoad ? (
    <LandingPage changeFirst={changeFirst} />
  ) : (
    <>
      <Header />
      <Leaderboard users={users}/>
    </>
  );
};

export default LearnScotlandContainer;
