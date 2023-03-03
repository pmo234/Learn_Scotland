
import React, { useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Navbar";

const QuizDragDrop = (props) => {
  console.log("props", props)
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(1);
  const [user, setUser] = useState(props?.users[props.users.length - 1]);
  const [users, setUsers] = useState([]);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const dragElementRef1 = useRef();
  const dragElementRef2 = useRef();
  const dragElementRef3 = useRef();
  const dragElementRef4 = useRef();
  const dragElementRef5 = useRef();
  const userURL = "http://localhost:9000/api/users/";
  const baseURL1 = "http://localhost:9000/api/users/";

 
  useEffect(() => {
    if (one + two + three + four + five === 5) {
      setAnsweredCorrectly(true);
      setScore(timer)
      setStart(false)
    }
  }, [one, two, three, four, five]);


  useEffect(() => {
    if (start === true) {
      timer > 0 && setTimeout(() => setTimer(timer + 1), 1000);
    }
  }, [timer, start]);

  const startTimer = () => {
    setTimer(1);
    setScore(1);
    setStart(true);
    document.getElementById("displayCorrect").innerHTML = ``;
    document.getElementById("displayScore").innerHTML = "0";
  };


  if (answeredCorrectly) {
    dragElementRef1.current.setAttribute('draggable', false);
    dragElementRef2.current.setAttribute('draggable', false);
    dragElementRef3.current.setAttribute('draggable', false);
    dragElementRef4.current.setAttribute('draggable', false);
    dragElementRef5.current.setAttribute('draggable', false);
    document.getElementById("div1Container").innerHTML = "58.6373° N";
    document.getElementById("div2Container").innerHTML = "57.1499° N";
    document.getElementById("div3Container").innerHTML = "56.3950° N";
    document.getElementById("div4Container").innerHTML = "55.9533° N";
    document.getElementById("div5Container").innerHTML = "55.8642° N";

  }
  

  const allowDrop = (ev) => {
       ev.preventDefault();
  }


  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  const drop = (ev) => {
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

  setTimeout(function () {

  }, 1000);

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
      score3: score + 1,
    };
    console.log("formdata", formData);
    console.log("User",props.users[props.users.length - 1])
    postScore(props.users[props.users.length - 1]._id, formData);
 
    props.handleSetChange()
  };

  return (
    <>
      <Header />
      <Body>
      {answeredCorrectly ? (
        <Success id="success">Success!</Success>
      ) : (
        <QuizTitle>Drag and Drop!</QuizTitle>
      )}
        <ScoreBox className="flex flex-col gap-3">
          <Timer className="font-mono">Timer</Timer>
          <Seconds id="timer">{timer}</Seconds>
          <Button onClick={startTimer}>Start</Button>
          <Button onClick={handleSubmit}><Link to="/">Leaderboard</Link></Button>
        </ScoreBox>


      <QuizContainer id="quizContainer">
        <Instructions>
          Put Scottish place names in order from most northern to most southern.
        </Instructions>

        <StartBlock>
          <DivContainer id="div1Container" onDrop={drop} onDragOver={allowDrop}>{latitudeJohn}
            <Word id="drag3" draggable="true" onDragStart={drag} ref={dragElementRef1}>
              Perth
            </Word>
          </DivContainer>

          <DivContainer id="div2Container" onDrop={drop} onDragOver={allowDrop}>{latitudeAber}
            <Word id="drag4" draggable="true" onDragStart={drag} ref={dragElementRef2}>
              Edinburgh
            </Word>
          </DivContainer>

          <DivContainer id="div3Container" onDrop={drop} onDragOver={allowDrop}>{latitudePert}
            <Word id="drag5" draggable="true" onDragStart={drag} ref={dragElementRef3}>
              Glasgow
            </Word>
          </DivContainer>

          <DivContainer id="div4Container" onDrop={drop} onDragOver={allowDrop}>{latitudeEdin}
            <Word id="drag1" draggable="true" onDragStart={drag} ref={dragElementRef4}>
              John o'Groats
            </Word>
          </DivContainer>

          <DivContainer id="div5Container" onDrop={drop} onDragOver={allowDrop}>{latitudeGlas}
            <Word id="drag2" draggable="true" onDragStart={drag} ref={dragElementRef5}>
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
