
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from "./Header";



const QuizDragDrop = () => {
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
  }

  return (
    <>
      <Header />
      <QuizTitle>Drag and Drop!</QuizTitle>

      <QuizContainer id="quizContainer">
        <StartBlock>
          <DivContainer id="div1" onDrop={drop} onDragOver={allowDrop}>
            <Word
              draggable="true"
              onDragStart={drag}
              id="drag1"
              width="88"
              height="31"
            >
              Perth
            </Word>
          </DivContainer>
          <DivContainer id="div2" onDrop={drop} onDragOver={allowDrop}>
            <Word
              draggable="true"
              onDragStart={drag}
              id="drag2"
              width="88"
              height="31"
            >
              Edinburgh
            </Word>
          </DivContainer>
          <DivContainer id="div3" onDrop={drop} onDragOver={allowDrop}>
            <Word
              draggable="true"
              onDragStart={drag}
              id="drag3"
              width="88"
              height="31"
            >
              Glasgow
            </Word>
          </DivContainer>
          <DivContainer id="div4" onDrop={drop} onDragOver={allowDrop}>
            <Word
              draggable="true"
              onDragStart={drag}
              id="drag4"
              width="88"
              height="31"
            >
              John o'Groats
            </Word>
          </DivContainer>
          <DivContainer id="div5" onDrop={drop} onDragOver={allowDrop}>
            <Word
              draggable="true"
              onDragStart={drag}
              id="drag5"
              width="88"
              height="31"
            >
              Aberdeen
            </Word>
          </DivContainer>
        </StartBlock>

        <EndBlock>
          <Place id="div2" onDrop={drop} onDragOver={allowDrop}></Place>
          <Place id="div2" onDrop={drop} onDragOver={allowDrop}></Place>
          <Place id="div2" onDrop={drop} onDragOver={allowDrop}></Place>
          <Place id="div2" onDrop={drop} onDragOver={allowDrop}></Place>
          <Place id="div2" onDrop={drop} onDragOver={allowDrop}></Place>
        </EndBlock>
      </QuizContainer>
    </>
  );
};

const StartBlock = styled.div`
  float: left;
  height: 90%;
  margin-left: 12%;
  margin-top: 5%;
  width: 25%;
`;

const EndBlock = styled.div`
  float: left;
  height: 90%;
  margin-left: 23%;
  margin-top: 5%;
  width: 25%;
`;

const DivContainer = styled.div`
  border: solid darkblue;
  border-radius: 7px;
  float: left;
  height: 10%;
  margin-bottom: 2vw;
  width: 100%;
  &:active {
    background-color: lightblue;
  }
`;

const Word = styled.div`
  border-color: darkblue;
  border-radius: 5px;
  border-width: 0.25vw;
  font-family: sans-serif;
  font-size: 1.5vw;
  padding-top: 3px;
  text-align: center;
  width: 100%;
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
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  font-size: 3vw;
  height: 4vw;
  margin: auto;
  margin-top: 1%;
  margin-bottom: 2vw;
  padding-top: 0.5vw;
  text-align: center;
  width: 50%;
`;
export default QuizDragDrop;
