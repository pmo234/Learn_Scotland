import { useEffect, useState } from "react";
import Header from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Leaderboard from "../components/LeaderboardHome";

const LearnScotlandContainer = (props) => {
  return props.firstLoad ? (
    <LandingPage
      changeFirst={props.changeFirst}
      currUser={props.currUser}
      setCurrUser={props.setCurrUser}
      getUsers={props.getUsers}
    />
  ) : (
    <>
      <Header currUser={props.currUser} changeFirst={props.changeFirst} />
      <Leaderboard
        users={props.users}
        currUser={props.currUser}
        setCurrUser={props.setCurrUser}
        change = {props.change}

      />
    </>
  );
};

export default LearnScotlandContainer;
