import { useEffect, useState } from "react";
import Header from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Leaderboard from "../components/LeaderboardHome";

const LearnScotlandContainer = (props) => {
  const [firstLoad, setFirstLoad] = useState(true);

  const changeFirst = () => {
    setFirstLoad(false);
  };

  return firstLoad ? (
    <LandingPage
      changeFirst={changeFirst}
      currUser={props.currUser}
      setCurrUser={props.setCurrUser}
    />
  ) : (
    <>
      <Header currUser={props.currUser} />
      <Leaderboard
        users={props.users}
        currUser={props.currUser}
        setCurrUser={props.setCurrUser}
      />
    </>
  );
};

export default LearnScotlandContainer;
