
import React, { useState, useEffect } from "react";
import Header from "./Header";
import styled from "styled-components";


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

  window.addEventListener('keydown',function(e){
    if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){
      if(e.target.nodeName=='INPUT' && e.target.type=='text'){
        e.preventDefault();
        return false;}}},true);

  const onChange = (e) => {
    formData[e.target.value] = e.target.value;
    setFormData(formData);

    if (answer in formData) {
      let score = 1;
      score = answerList.indexOf(answer) + 1;
      document.getElementById("answer").style.backgroundColor = "lightgreen";
      document.getElementById("displayCorrect").innerHTML = `${answer} is correct. Well done!`;
      document.getElementById("displayScore").innerHTML = `${score}`;



      if (score === 20) {
        document.getElementById("displayCorrect").innerHTML = `5 CORRECT ANSWERS!!!`;
        e.target.value = "Congratulations!";
      } 


      else {
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
        }, 3000);
      }
    }
  };

  return (
    <>
      <Header />
      <QuizTitle>How Many Questions!</QuizTitle>

      <ScoreBox>
        <Timer>Timer</Timer>
        <Paragraph>Time here</Paragraph>
        <Score>Score</Score>
        <Paragraph>Score here</Paragraph>
      </ScoreBox>

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
        {/* <p>{answer}</p> */}
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
  font-family: Impact, "Arial Narrow Bold", sans-serif;
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
    border: solid darkblue;
    border-radius: 5px;
    color: red;
    font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    height: 9vw;
    margin-left: 85%;
    margin-top: 3vw;
    padding: 0.3vw;
    position: absolute;
    text-align: center;
    width: 7vw;
    z-index: 2;
`

const Timer = styled.div`
    font-size: 1.3vw;
    height: 2vw;
`

const Score = styled.div`
    font-size: 1.3vw;
    height: 2vw;
`

const Paragraph = styled.p`
    color: black;
    font-size: 1vw;
    height: 1vw;
    margin-bottom: 1vw;
`

export default QuizSingle;
