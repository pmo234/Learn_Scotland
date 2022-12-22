import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Navbar";

const QuizDragDrop = () => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  useEffect(() => {
    if (one + two + three + four + five === 5) {
      setAnsweredCorrectly(true);
    }
  }, [one, two, three, four, five]);

  if (answeredCorrectly) {
    document.getElementById("drag1").setAttribute("draggable", false);
    document.getElementById("drag2").setAttribute("draggable", false);
    document.getElementById("drag3").setAttribute("draggable", false);
    document.getElementById("drag4").setAttribute("draggable", false);
    document.getElementById("drag5").setAttribute("draggable", false);
    document.getElementById("div1Container").innerHTML = "58.6373° N";
    document.getElementById("div2Container").innerHTML = "57.1499° N";
    document.getElementById("div3Container").innerHTML = "56.3950° N";
    document.getElementById("div4Container").innerHTML = "55.9533° N";
    document.getElementById("div5Container").innerHTML = "55.8642° N";
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    var place = ev.target.id;

    if (data.slice(-1) === place.slice(-1)) {
      if (data.slice(-1) == 1) {
        setOne(1);
      }
      if (data.slice(-1) == 2) {
        setTwo(1);
      }
      if (data.slice(-1) == 3) {
        setThree(1);
      }
      if (data.slice(-1) == 4) {
        setFour(1);
      }
      if (data.slice(-1) == 5) {
        setFive(1);
      }
    } else {
      if (data.slice(-1) == 1) {
        setOne(0);
      }
      if (data.slice(-1) == 2) {
        setTwo(0);
      }
      if (data.slice(-1) == 3) {
        setThree(0);
      }
      if (data.slice(-1) == 4) {
        setFour(0);
      }
      if (data.slice(-1) == 5) {
        setFive(0);
      }
    }
  }

  return (
    <>
      <Header />
      <Body>
      {answeredCorrectly ? (
        <Success id="success">Success!</Success>
      ) : (
        <QuizTitle>Drag and Drop!</QuizTitle>
      )}
      <QuizContainer id="quizContainer">
        <Instructions>
          Put Scottish place names in order from most northern to most southern.
        </Instructions>

        <StartBlock>
          <DivContainer id="div1Container" onDrop={drop} onDragOver={allowDrop}>
            <Word id="drag3" draggable="true" onDragStart={drag}>
              Perth
            </Word>
          </DivContainer>

          <DivContainer id="div2Container" onDrop={drop} onDragOver={allowDrop}>
            <Word id="drag4" draggable="true" onDragStart={drag}>
              Edinburgh
            </Word>
          </DivContainer>

          <DivContainer id="div3Container" onDrop={drop} onDragOver={allowDrop}>
            <Word id="drag5" draggable="true" onDragStart={drag}>
              Glasgow
            </Word>
          </DivContainer>

          <DivContainer id="div4Container" onDrop={drop} onDragOver={allowDrop}>
            <Word id="drag1" draggable="true" onDragStart={drag}>
              John o'Groats
            </Word>
          </DivContainer>

          <DivContainer id="div5Container" onDrop={drop} onDragOver={allowDrop}>
            <Word id="drag2" draggable="true" onDragStart={drag}>
              Aberdeen
            </Word>
          </DivContainer>
        </StartBlock>

        <EndBlock>
          <Place id="drop1" onDrop={drop} onDragOver={allowDrop}></Place>
          <Place id="drop2" onDrop={drop} onDragOver={allowDrop}></Place>
          <Place id="drop3" onDrop={drop} onDragOver={allowDrop}></Place>
          <Place id="drop4" onDrop={drop} onDragOver={allowDrop}></Place>
          <Place id="drop5" onDrop={drop} onDragOver={allowDrop}></Place>
        </EndBlock>
      </QuizContainer>
      </Body>
    </>
  );
};

const StartBlock = styled.div`
  float: left;
  height: 90%;
  margin-left: 13%;
  margin-top: 4%;
  width: 25%;
`;

const EndBlock = styled.div`
  float: left;
  height: 90%;
  margin-left: 23%;
  margin-top: 4%;
  width: 25%;
`;

const DivContainer = styled.div`
  border: solid darkblue;
  border-radius: 7px;
  font-family: sans-serif;
  float: left;
  font-size: 1.5vw;
  height: 10%;
  margin-bottom: 2vw;
  text-align: center;
  width: 100%;
`;

const Word = styled.div`
  border-color: darkblue;
  border-radius: 5px;
  border-width: 0.25vw;
  font-family: monospace;
  font-size: 1.5vw;
  padding-top: 1px;
  text-align: center;
  width: 100%;
  &:active {
    background-color: lightblue;
  }
`;

const Place = styled.div`
  border-radius: 5px;
  float: right;
  border: solid darkblue;
  height: 10%;
  margin-bottom: 2vw;
  margin-left: 3vw;
  width: 100%;
`;

const QuizContainer = styled.section`
  background: linear-gradient(to right top, hsl(200, 100%, 80%), #ffffff);
  border: solid darkblue;
  border-width: 0.5vw;
  border-radius: 2vw;
  height: 33vw;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
  position: relative;
  width: 65%;
`;

const QuizTitle = styled.h1`
  color: darkblue;
  font-family: monospace;
  font-size: 3vw;
  height: 4vw;
  margin: auto;
  margin-top: 0%;
  margin-bottom: 6vw;
  padding-top: 3vw;
  text-align: center;
  width: 50%;
`;

const Instructions = styled.h3`
  color: darkblue;
  font-family: monospace;
  font-size: 1.5vw;
  margin-top: 2vw;
  text-align: center;
`;

const Success = styled.h1`
  color: darkred;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  font-size: 3vw;
  height: 4vw;
  margin: auto;
  margin-top: 0%;
  margin-bottom: 6vw;
  padding-top: 3vw;
  text-align: center;
  width: 50%;
`;

const ScoreBox = styled.div`
  background: linear-gradient(to right top, hsl(200, 100%, 80%), #ffffff);
  border: solid darkblue;
  border-radius: 5px;
  color: red;
  font-family: monospace;
  height: 9vw;
  margin-left: 85%;
  margin-top: 3vw;
  padding: 0.3vw;
  position: absolute;
  text-align: center;
  width: 7vw;
  z-index: 2;
`;

const Timer = styled.div`
  font-size: 1.3vw;
  height: 2vw;
`;

const Score = styled.div`
  font-size: 1.3vw;
  height: 2vw;
`;

const Paragraph = styled.p`
  color: black;
  font-size: 1vw;
  height: 1vw;
  margin-bottom: 1vw;
`;

const Body = styled.body`
  background: linear-gradient(to right top, hsl(200, 100%, 20%), #6cd);
  height: 100vh;
`;

export default QuizDragDrop;
