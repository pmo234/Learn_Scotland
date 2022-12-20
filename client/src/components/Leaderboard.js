import React, { useEffect, useState } from "react";

export default function Leaderboard(props) {
  const [listToSort, setListToSort] = useState([]);
  const [listofScores, setListofScores] = useState([]);

  useEffect(() => {
    setListToSort([props.users]);
    // setListofScores([props.users[0].score1, props.users[0].score2,props.users[0].score3, props.users[0].score4]);
    
  }, [props.users]);

  const inOrder = listToSort.sort(function (a, b) {
    if (a.score1 > b.score1) {
      return -1;
    }
    if (a.score1 < b.score1) {
      return 1;
    }
    return 0;
  });

  console.log(listofScores);
  const displayLeaderboard = props.users.map((user, index) => {
    return (
      <li key={index} className="leaderboard-item">
        <p>{user.name}</p>
        <p>{user.score1}</p>
      </li>
    );
  });

  return <div>{displayLeaderboard}</div>;
}
