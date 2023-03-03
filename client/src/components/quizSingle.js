import React, { useState, useEffect } from "react";
import Header from "./Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const QuizSingle = (props) => {
  const [questionList, setQuestionList] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  const [formData, setFormData] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [timer, setTimer] = useState(15);
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(1);
  const [user, setUser] = useState(props?.users[props.users.length - 1]);
  const [users, setUsers] = useState([]);
  const userURL = "http://localhost:9000/api/users/";
  const baseURL1 = "http://localhost:9000/api/users/";

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    return fetch(baseURL1)
      .then((res) => res.json())
      .then((results) => setUsers(results));
  };

  useEffect(() => {
    setUser(props?.users[props.users.length - 1]);
    console.log(user);
  }, []);

  useEffect(() => {
    if (start === true) {
      timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    }
  }, [timer, start]);

  const startTimer = () => {
    setTimer(15);
    setScore(1);
    setStart(true);
    document.getElementById("displayCorrect").innerHTML = ``;
    document.getElementById("displayScore").innerHTML = "0";
  };

  if (timer === 0) {
    document.getElementById("displayCorrect").innerHTML = `Game Over!`;
    document.getElementById("displayCorrect").style.color = "red";
    document.getElementById("displayCorrect").style.fontSize = "3vw";
  }

  // fetch questions from database
  const getItems = () => {
    fetch("http://localhost:9000/api/singlequestions")
      .then((response) => response.json())
      .then((response) => {
        const questionsAll = response.map((res) => res.question);
        const answersAll = response.map((res) => res.answer);
        setQuestionList(questionsAll);
        setAnswerList(answersAll);
        setQuestion(questionsAll[0]);
        setAnswer(answersAll[0]);
      });
  };

  // Disable 'Enter' key
  window.addEventListener(
    "keydown",
    function (e) {
      if (
        e.keyIdentifier == "U+000A" ||
        e.keyIdentifier == "Enter" ||
        e.keyCode == 13
      ) {
        if (e.target.nodeName == "INPUT" && e.target.type == "text") {
          e.preventDefault();
          return false;
        }
      }
    },
    true
  );

  const onChange = (e) => {
    formData[e.target.value] = e.target.value;
    setFormData(formData);

    if (answer in formData) {
      setScore(score + 1);
      document.getElementById("answer").style.backgroundColor = "lightgreen";
      document.getElementById(
        "displayCorrect"
      ).innerHTML = `${answer} is correct.`;
      document.getElementById("displayScore").innerHTML = `${score}`;

      if (score === 25) {
        document.getElementById("displayCorrect").innerHTML = `Top Score!!!`;
        e.target.value = "Congratulations!";
      } else {
        setTimeout(function () {
          e.target.value = "";
          let index = answerList.indexOf(answer);
          setQuestion(questionList[index + 1]);
          setAnswer(answerList[index + 1]);
          document.getElementById("displayCorrect").innerHTML = ``;
          document.getElementById("answer").style.backgroundColor = "white";
        }, 1000);
      }
    }
  };

  const postScore = (id, payload) => {
    return fetch(userURL + id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      score1: score - 1,
    };
    console.log(users);
    postScore(users[users.length - 1]._id, formData);
    props.handleSetChange()
  };

  return (
    <>
      <Header />
      <Body>
        <QuizTitle className="font-mono text-blue-900 font-bold">How Many Questions!</QuizTitle>

        <ScoreBox className="flex flex-col gap-3">
          <Timer className="font-mono">Timer</Timer>
          <Seconds id="timer">{timer}</Seconds>
          <Button onClick={startTimer}>Start</Button>
          <Button onClick={handleSubmit}><Link to="/">Leaderboard</Link></Button>
        </ScoreBox>

        <QuizContainer id="quizContainer" className="shadow-2xl shadow-black">
          <QuestionBox>
            <H3 id="displayQuestion">{question}</H3>
          </QuestionBox>

          <AnswerBox>
            <Form>
              <label htmlFor="answer">
                <InputAnswer
                  autoFocus
                  id="answer"
                  name="answer"
                  onChange={onChange}
                  placeholder="Answer"
                  type="text"
                ></InputAnswer>
              </label>
            </Form>
          </AnswerBox>

          <DisplayCorrect id="displayCorrect"></DisplayCorrect>
          <DisplayScore id="displayScore">0</DisplayScore>
          {/* <p>{answer}</p> */}
        </QuizContainer>
      </Body>
    </>
  );
};

const QuizContainer = styled.section`
  background: linear-gradient(to right top, hsl(200, 100%, 80%), #ffffff);
  height: 33vw;
  width: 65%;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
  border: solid darkblue;
  border-width: 0.5vw;
  border-radius: 2vw;
`;

const QuizTitle = styled.h1`
  font-size: 3vw;
  height: 4vw;
  margin: auto;
  margin-top: 0%;
  margin-bottom: 6vw;
  padding-top: 3vw;
  text-align: center;
  width: 50%;
`;

const QuestionBox = styled.div`
  margin-top: 4vw;
  margin-bottom: 4vw;
`;

const AnswerBox = styled.div`
  height: 5vw;
  margin-top: 2%;
  margin-left: 25%;
  width: 50%;
`;

const Form = styled.form`
  height: 5vw;
  width: 100%;
`;

const H3 = styled.h3`
  font-size: 2vw;
  font-family: "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
  height: 3vw;
  text-align: center;
`;

const InputAnswer = styled.input`
  border-radius: 1vw;
  font-family: "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
  font-size: 2vw;
  height: 70%;
  padding-left: 0.8vw;
  width: 90%;
  border: solid darkblue;
  border-width: 0.3vw;
  margin-left: 1vw;
`;

const DisplayCorrect = styled.h1`
  text-align: center;
  font-family: sans-serif;
  font-size: 2vw;
  height: 5vw;
  width: 100%;
`;

const DisplayScore = styled.h3`
  font-size: 5vw;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  color: darkred;
  text-align: right;
  margin-right: 3vw;
  margin-top: 0;
  width: 92%;
`;

const ScoreBox = styled.div`
  background: linear-gradient(to right top, hsl(200, 100%, 80%), #ffffff);
  border: solid darkblue;
  border-radius: 5px;
  color: darkred;
  font-family: "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
  margin-left: 85%;
  padding: 0.3vw;
  position: absolute;
  text-align: center;
  z-index: 2;
`;

const Timer = styled.div`
  font-size: 1.3vw;
  height: 2vw;
`;

const Seconds = styled.h3`
  font-size: 2vw;
  font-family: "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
  color: darkred;
  text-align: center;
  margin-right: 3vw;
  margin-top: 0;
  margin-bottom: 1vw;
  width: 92%;
`;

const Button = styled.button`
  background-color: #e1ecf0;
  border-radius: 5px;
  border: solid darkblue;
  font-size: 1.5vw;
  height: 3vw;
  padding: 2px;
`;

const Body = styled.body`
  background: linear-gradient(to right top, hsl(200, 100%, 20%), #6cd);
  height: 100vh;
`;

export default QuizSingle;
