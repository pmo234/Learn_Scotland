import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Leaderboard = (props) => {
  const [listToSort, setListToSort] = useState([]);
  const [listToSort2, setListToSort2] = useState([]);
  const [listToSort3, setListToSort3] = useState([]);
  const [listToSort4, setListToSort4] = useState([]);
  const [inOrder, setInOrder] = useState([]);
  const [inOrder2, setInOrder2] = useState([]);
  const [inOrder3, setInOrder3] = useState([]);
  const [inOrder4, setInOrder4] = useState([]);
  const [allInOrder, setAllInOrder] = useState([]);

  console.log(props.users)
  

  useEffect(() => {
    const newSortedList = props.users.map((user) => {
      if (user.score1)
      return {
        name: user.name,
        score1: user.score1,
      }}
    );

    const newSortedList2 = props.users.map((user) => {
      if (user.score2)
      return {
        name: user.name,
        score2: user.score2,
      };
    });
    const newSortedList3 = props.users.map((user) => {
      if (user.score3)
      return {
        name: user.name,
        score3: user.score3,
      };
    });
    const newSortedList4 = props.users.map((user) => {
      if (user.score4)
      return {
        name: user.name,
        score4: user.score4,
      };
    });

    setListToSort(newSortedList);
    setListToSort2(newSortedList2);
    setListToSort3(newSortedList3);
    setListToSort4(newSortedList4);
  }, []);

  useEffect(() => {
    setInOrder(
      listToSort.sort((a, b) => {
        return b.score1 - a.score1;
      })
    );
    setInOrder2(
      listToSort2.sort((a, b) => {
        return b.score2 - a.score2;
      })
    );
    setInOrder3(
      listToSort3.sort((a, b) => {
        return b.score3 - a.score3;
      })
    );
    setInOrder4(
      listToSort4.sort((a, b) => {
        return b.score4 - a.score4;
      })
    );
  }, [listToSort]);

  const placeIndicator = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
  ];

  const displayLeaderboard = inOrder.map((user, index) => {
    return user ? (
      <UnorderList>
        <li key={index} className="leaderboard-item">
          <p>
            {placeIndicator[index]} place {user.name}
          </p>
          <p>{user.score1}</p>
        </li>
      </UnorderList>
    ):null
  });
  const displayLeaderboard2 = inOrder2.map((user, index) => {
    return user ? (
      <UnorderList>
        <li key={index} className="leaderboard-item">
          <p>
            {placeIndicator[index]} place {user.name}
          </p>
          <p>{user.score2}</p>
        </li>
      </UnorderList>
    ):null
  });
  const displayLeaderboard3 = inOrder3.map((user, index) => {
    return user ?(
      <UnorderList>
        <li key={index} className="leaderboard-item">
          <p>
            {placeIndicator[index]} place {user.name}
          </p>
          <p>{user.score3}</p>
        </li>
      </UnorderList>
    ):null
  });
  const displayLeaderboard4 = inOrder4.map((user, index) => {
    return user ?(
      <UnorderList>
        <li key={index} className="leaderboard-item">
          <p>
            {placeIndicator[index]} place {user.name}
          </p>
          <p>{user.score4}</p>
        </li>
      </UnorderList>
    ):null
  });

  return (
    <Background>
    <QuizContainer>

      <Div>
        <Link to="/singlechoice">
          <QuizLink>Take Quiz 1</QuizLink>
        <h1>Quiz 1 Leaderboard {displayLeaderboard}</h1>
        </Link>
      </Div>
      <Div>
        <Link to="/multiplechoice">
          <QuizLink>Take Quiz 2</QuizLink>
        <h1>Quiz 2 Leaderboard {displayLeaderboard2}</h1>
        </Link>
      </Div>
      <Div>
        <Link to="/dragndrop">
          <QuizLink>Take Quiz 3</QuizLink>
        <h1>Quiz 3 Leaderboard {displayLeaderboard3}</h1>
        </Link>
      </Div>
      <Div>
        <QuizLink>Take Quiz 4</QuizLink>
        <h1>Quiz 4 Leaderboard {displayLeaderboard4}</h1>
      </Div>

    </QuizContainer>

    </Background>
  );
};
export default Leaderboard;

const QuizContainer = styled.div`
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center; */
  height: 12vw;
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin: auto;
  text-align: center;
`;

const QuizLink = styled.button`
  height: 4.3vw;
  width: 16vw;
  border-radius: 5px;
  background-color: blue;
  margin-bottom: 4vh;
  font-family: Arial, Helvetica, sans-serif;
`;

const Background = styled.body`
  background: linear-gradient(to right top, hsl(200, 100%, 20%), #6cd);
  height: 100vh;
`

const Div = styled.div`
  margin-top: 3vw;
  width: 25%;
  float: left;
`;


const UnorderList = styled.ul`
  list-style: none;
`;




