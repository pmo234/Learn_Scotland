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



  useEffect(() => {
    const newSortedList = props.users.map((user) => {
      if (user.score1)
        return {
          name: user.name,
          score1: user.score1,
        };
    });

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

    setListToSort([...newSortedList]);
    setListToSort2([...newSortedList2]);
    setListToSort3([...newSortedList3]);
    setListToSort4([...newSortedList4]);
  }, [, props.users]);

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
        return a.score3 - b.score3;
      })
    );
    setInOrder4(
      listToSort4.sort((a, b) => {
        return b.score4 - a.score4;
      })
    )
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
      <UnorderList className="flex flex-col">
        <li key={index} className="leaderboard-item">
          <p className="leader_list">
            {placeIndicator[index]} place: <br />
            {user.name} with {user.score1}
          </p>
        </li>
      </UnorderList>
    ) : null;
  });
  const displayLeaderboard2 = inOrder2.map((user, index) => {
    return user ? (
      <UnorderList>
        <li key={index} className="leaderboard-item">
          <p className="leader_list">
            {placeIndicator[index]} place: <br />
            {user.name} with {user.score2}
          </p>
        </li>
      </UnorderList>
    ) : null;
  });
  const displayLeaderboard3 = inOrder3.map((user, index) => {
    return user ? (
      <UnorderList>
        <li key={index} className="leaderboard-item">
          <p className="leader_list">
            {placeIndicator[index]} place: <br />
            {user.name} with {user.score3}
          </p>
        </li>
      </UnorderList>
    ) : null;
  });
  const displayLeaderboard4 = inOrder4.map((user, index) => {
    return user ? (
      <UnorderList>
        <li key={index} className="leaderboard-item">
          <p className="leader_list">
            {placeIndicator[index]} place: <br />
            {user.name} with {user.score4}
          </p>
        </li>
      </UnorderList>
    ) : null;
  });

  return (
    <Background>
      <QuizContainer className="flex gap-10">
        <Div>
          <Link to="/singlechoice">
            <QuizLink className="bg-blue-700 text-blue-50 font-mono shadow-lg shadow-gray-700">
              Take Input Quiz
            </QuizLink>
            <p className="bg-blue-500 rounded text-blue-50 py-3 border-2">
              <p className="text-l font-bold font-mono">Quiz 1 Leaderboard</p>{" "}
              {displayLeaderboard}
            </p>
          </Link>
        </Div>
        <Div>
          <Link to="/multiplechoice">
            <QuizLink className="bg-blue-700 text-blue-50 font-mono shadow-lg shadow-gray-700">
              Take Multi Quiz
            </QuizLink>
            <p className="bg-blue-500 rounded text-blue-50 py-3 border-2">
              <p className="text-l font-bold font-mono">Quiz 2 Leaderboard</p>{" "}
              {displayLeaderboard2}
            </p>
          </Link>
        </Div>
        <Div>
          <Link to="/dragndrop">
            <QuizLink className="bg-blue-700 text-blue-50 font-mono shadow-lg shadow-gray-700">
              Take DnD Quiz
            </QuizLink>
            <p className="bg-blue-500 rounded text-blue-50 py-3 border-2">
              <p className="text-l font-bold font-mono">Quiz 3 Leaderboard</p>{" "}
              {displayLeaderboard3}
            </p>
          </Link>
        </Div>
        <Div>
          <QuizLink className="bg-blue-700 text-blue-50 font-mono shadow-lg shadow-gray-700">
            Take Map Quiz
          </QuizLink>
          <p className="bg-blue-500 rounded text-blue-50 py-3 border-2">
            <p className="text-l font-bold font-mono">Quiz 4 Leaderboard</p>{" "}
            {displayLeaderboard4}
          </p>
        </Div>
      </QuizContainer>
    </Background>
  );
};
export default Leaderboard;

const QuizContainer = styled.div`
 
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
  margin-bottom: 4vh;
`;

const Background = styled.body`
  background: linear-gradient(to right top, hsl(200, 100%, 20%), #6cd);
  height: 100vh;
`;

const Div = styled.div`
  margin-top: 3vw;
  width: 25%;
  float: left;
`;

const UnorderList = styled.ul`
  list-style: none;
`;
