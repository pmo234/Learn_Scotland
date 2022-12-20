import React, { useState, useEffect } from "react";
import Header from "./Header";
import styled from "styled-components";

// comment for no reason
const QuizSingle = () => {
  const [questionList, setQuestionList] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  const [formData, setFormData] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    getItems();
  }, []);

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

  const onChange = (e) => {
    formData[e.target.value] = e.target.value;
    setFormData(formData);

    if (answer in formData) {
      let score = 1;
      score = answerList.indexOf(answer) + 1;
      document.getElementById("answer").style.backgroundColor = "lightgreen";
      document.getElementById(
        "displayCorrect"
      ).innerHTML = `${answer} is correct. Well done!`;
      document.getElementById("displayScore").innerHTML = `${score}`;

      if (score === 2) {
        document.getElementById(
          "displayCorrect"
        ).innerHTML = `20 CORRECT ANSWERS!!!`;
        e.target.value = "Congratulations!";
      } else {
        setTimeout(function () {
          e.target.value = "Next question...";
          document.getElementById("displayCorrect").innerHTML = `Get ready...`;
          document.getElementById("answer").style.backgroundColor = "white";
        }, 2000);
        setTimeout(function () {
          e.target.value = "";
          let index = answerList.indexOf(answer);
          setQuestion(questionList[index + 1]);
          setAnswer(answerList[index + 1]);
          document.getElementById("displayCorrect").innerHTML = ``;
        }, 3500);
      }
    }
  };

  return (
    <>
      <Header />
      <QuizTitle>20 Questions!</QuizTitle>

      <QuizContainer id="quizContainer">
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
        <p>{answer}</p>
      </QuizContainer>
    </>
  );
};

const QuizContainer = styled.section`
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
  color: darkblue;
  font-size: 3vw;
  height: 4vw;
  margin: auto;
  margin-top: 1%;
  margin-bottom: 2vw;
  padding-top: 0.5vw;
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
  text-align: center;
`;

const InputAnswer = styled.input`
  border-radius: 1vw;
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
  color: darkred;
  text-align: right;
  margin-right: 3vw;
  margin-top: 0;
  width: 92%;
`;

export default QuizSingle;
