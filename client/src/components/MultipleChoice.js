import { useEffect, useState, useRef } from "react";
import Header from "./Navbar";
import "./MultipleChoice.css";
import { Canvas } from "@react-three/fiber";
import { useLocation } from "react-router-dom";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import Counter from "./Counter.js";
const MultipleChoice = (props) => {
  const userURL = "http://localhost:9000/api/users/";
  const baseURL1 = "http://localhost:9000/api/users/";
  const location = useLocation();
  console.log(location.state?.data);
  const [score, setScore] = useState(0);
  // const [result, setResult] = useState();
  const [totalLen, setTotalLen] = useState();
  const [questionLen, setQuestionLen] = useState();
  const [resultButton1Class, setResultButton1Class] = useState("btn");
  const [resultButton2Class, setResultButton2Class] = useState("btn");
  const [resultButton3Class, setResultButton3Class] = useState("btn");
  const [resultButton4Class, setResultButton4Class] = useState("btn");
  const [startContainer, setStartContainer] = useState("startContainer");
  const [container, setContainer] = useState("container hide");
  // const [restButtonClass, setRestButtonClass] = useState("unanswered");
  const [resultStat, setResultStat] = useState([]);
  // const [resultStat2, setResultStat2] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [percentArray, setPercentArray] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answered, setAnswered] = useState(null);
  const [hint, setHint] = useState(null);
  const ref = useRef();
  const [scoreContainer, setScoreContainer] = useState("scoreContainer hide");
  const [user, setUser] = useState(props?.users[props.users.length - 1]);
  const [users, setUsers] = useState([]);
  console.log(props);
  console.log(props.currUser);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    return fetch(baseURL1)
      .then((res) => res.json())
      .then((results) => setUsers(results));
  };

  useEffect(() => {
    getQuestions();
    setUser(props?.users[props.users.length - 1]);
    console.log(user);
  }, []);

  const getQuestions = () => {
    return fetch("http://localhost:9000/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data.sort(() => Math.random() - 0.5)));
  };
  useEffect(() => {
    if (questions && questions[0]) {
      getPercent();
    }
  }, [questions]);

  const getPercent = () => {
    setResultStat(questions[questionNumber].statistics);
    setTotalLen(questions[questionNumber].statistics.length);
    setQuestionLen(questions.length);
    const count = {};
    resultStat.forEach((element) => {
      count[element] = (count[element] || 0) + 1;
    });
    const tempPerArray = [...percentArray];
    for (let value of Object.values(count)) {
      tempPerArray.push((value / (totalLen + 1)) * 100);
    }
    setPercentArray(tempPerArray);
  };

  const handleAnswerChange = (ev) => {
    setAnswered(true);
    const tempScore = score;
    let tempRes;
    console.log(ev);
    if (ev.target.value !== questions[questionNumber].answer) {
      score <= 0 ? setScore(0) : setScore(tempScore - 1);
      if (ev.target.value === questions[questionNumber].false1) {
        tempRes = "two";
        setResultButton2Class("btn wrong");
      }
      if (ev.target.value === questions[questionNumber].false2) {
        tempRes = "three";
        setResultButton3Class("btn wrong");
      }
      if (ev.target.value === questions[questionNumber].false3) {
        tempRes = "four";
        setResultButton4Class("btn wrong");
      }
    } else {
      tempRes = "one";
      setResultButton1Class("btn correct");
      setScore(tempScore + 1);
    }
    // setResult(tempRes);
    setToggle(!toggle);
    // setResultStat([...questions[questionNumber].statistics, tempRes]);
    const tempArray = [...questions[questionNumber].statistics, tempRes];

    setResultStat(tempArray);
    const tempTotalLen = questions[questionNumber].statistics.length;
    const count = {};
    tempArray.forEach((element) => {
      count[element] = (count[element] || 0) + 1;
    });

    const tempPerArray = [];
    for (let value of Object.values(count)) {
      tempPerArray.push((value / (tempTotalLen + 1)) * 100);
      setTotalLen(tempTotalLen);
    }
    setPercentArray(tempPerArray);
  };
  // setUserAnsweredquestions({
  //   ...userAnsweredquestions,
  //   [ev.target._id]: result,
  // });

  // setUserAnsweredquestions(([ev.target._id] = result));

  // updateUserRecord({
  //   userScore: score,
  //   answeredquestions: userAnsweredquestions,
  // maybe add how many questions left
  // add which question is wrong and write for statistics
  // });
  //   setResult("");
  // };
  const handleNextQuestion = () => {
    reset();
    const tempQN = questionNumber;
    if (tempQN === questionLen - 1) {
      handleFinish();
    }
    setQuestionNumber(tempQN + 1);
  };

  const handleStartAgain = () => {
    reset();
    setQuestionNumber(0);
  };

  const handleStart = () => {
    setStartContainer("startContainer hide");
    setContainer("container");
    // startTimer();
  };
  const handleFinish = () => {
    setContainer("container hide");
    setScoreContainer("scoreContainer");
  };
  const reset = () => {
    // clearTimeout(timer);
    // setCounter(5);
    setToggle(false);
    setAnswered(false);
    // startTimer();
    setResultButton1Class("btn");
    setResultButton2Class("btn");
    setResultButton3Class("btn");
    setResultButton4Class("btn");
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
      score3: score,
    };
    console.log(users[users.length] - 1);
    postScore(users[users.length - 1]._id, formData);
  };

  const questionsList = questions.map((question, index) => {
    const answersArray = [question.answer, question.false1, question.false2, question.false3]
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    const randomisedArray = shuffle(answersArray);

    return (
      <>
        <div className="flex flex-col" key={index}>
          {/* <div className="product-canvas"> */}
          <img className="h-96" src={question.image} alt="our question" />
          {/* <Canvas>
              <mesh ref={ref}>
                <boxGeometry attach="geometry" args={[2, 2, 2]} />
              </mesh>
            </Canvas> */}
          {/* </div> */}
          {/* {answered && question.image2 ? (
            <div className="img">
              <img src={question.image} />
            </div>
          ) : (
            <img src={question.image2} alt="Img not loaded" />
          )} */}
          <div className="font-mono text-white">{question.question}</div>
          <div className="btn-grid">
            <button
              type="button"
              className={resultButton1Class}
              // class="btn correct"
              disabled={toggle}
              onClick={handleAnswerChange}
              value={randomisedArray[0]}
            >
              {toggle && <p>&#x2705;</p>}
              {randomisedArray[0]}
              {toggle && <p>{percentArray[0]}%</p>}
            </button>

            <button
              type="button"
              // class="btn"
              className={resultButton2Class}
              // className={resultButtonClass}
              disabled={toggle}
              onClick={handleAnswerChange}
              value={randomisedArray[1]}
            >
              {toggle && <p>&#10060;</p>}
              {randomisedArray[1]}
              {toggle && <p>{percentArray[1]}%</p>}
            </button>

            <button
              type="button"
              className={resultButton3Class}
              onClick={handleAnswerChange}
              disabled={toggle}
              value={randomisedArray[2]}
            >
              {toggle && <p>&#10060;</p>}
              {randomisedArray[2]}
              {toggle && <p>{percentArray[2]}%</p>}
            </button>

            <button
              type="button"
              className={resultButton4Class}
              disabled={toggle}
              onClick={handleAnswerChange}
              value={randomisedArray[3]}
            >
              {toggle && <p>&#10060;</p>}
              {randomisedArray[3]}
              {toggle && <p>{percentArray[3]}%</p>}
            </button>
          </div>
          {toggle && <p>{question.info}</p>}
        </div>
      </>
    );
  });

  return (
    <>
      <Header />

      <div className="background">
        {/* // <div 
    //   id="ex1"
    //   className="backgroundContainer"
    //   onMouseMove={mouseOverContainer}
    // >
    //   <div ref={ref} id="ex1-layer" className="background">*/}
        <div className={container}>
          <div>{questionsList[questionNumber]}</div>
          <div className="controls">
            <button className="again-btn btnMenu" onClick={handleStartAgain}>
              Start Again
            </button>
            <button
              onClick={handleFinish}
              id="next-btn"
              className="next-btn btnMenu"
            >
              Finish
            </button>
            {/* <button
              onClick={handleHint}
              id="next-btn"
              className="next-btn btnMenu"
            >
              Hint
            </button> */}
            <button
              onClick={handleNextQuestion}
              id="next-btn"
              className="next-btn btnMenu"
            >
              Next Question
            </button>
          </div>
          <div>
            <p>
              {questionNumber + 1} / {questionLen}
            </p>

            {/* <Counter handleNextQuestion={handleNextQuestion} /> */}
          </div>
        </div>
        <div className={startContainer}>
          <button className="start-btn btnMenu" onClick={handleStart}>
            Start
          </button>
        </div>
        <div className={scoreContainer}>
          <h2>Congratulations</h2>
          <p> {`{user} your score is ${score}`}</p>

          {/* <a href="/leaderboard" className="next-btn btnMenu">
            Leader board
          </a> */}
          <button className="next-btn btnMenu" onClick={handleSubmit}>
            Leader board
          </button>
        </div>
      </div>
    </>
  );
};

export default MultipleChoice;

//__________notes_______________

// we can make a new Array where all [question.answer, question.wrong1, question.wrong2, question.wrong3] than random it than bind with a new array (to get new names) and use those names for buttons. Each name from new array will contain random question.stm
