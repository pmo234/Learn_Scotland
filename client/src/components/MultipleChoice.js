import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import "./MultipleChoice.css";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import Counter from "./Counter.js";
const MultipleChoice = () => {
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
  useEffect(() => {
    getQuestions();
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
  // useEffect(() => {
  //   if (questions) {
  //     getPercent();
  //   }
  // }, []);

  const getPercent = () => {
    setResultStat(questions[questionNumber].statistics);
    setTotalLen(questions[questionNumber].statistics.length);
    setQuestionLen(questions.length);
    // const totalLen = questions[questionNumber].statistics.length;
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

  // const resetHint = () => {
  //   setHint(null);
  // };

  const questionsList = questions.map((question, index) => {
    return (
      <>
        <div key={index}>
          <div className="product-canvas">
            <Canvas>
              <mesh ref={ref}>
                <boxGeometry attach="geometry" args={[2, 2, 2]} />
              </mesh>
            </Canvas>
          </div>
          {/* {answered && question.image2 ? (
            <div className="img">
              <img src={question.image} />
            </div>
          ) : (
            <img src={question.image2} alt="Img not loaded" />
          )} */}
          <div>{question.question}</div>
          <div className="btn-grid">
            <button
              type="button"
              className={resultButton1Class}
              // class="btn correct"
              onClick={handleAnswerChange}
              value={question.answer}
            >
              {toggle && <p>&#x2705;</p>}
              {question.answer}
              {toggle && <p>{percentArray[0]}%</p>}
            </button>

            <button
              type="button"
              // class="btn"
              className={resultButton2Class}
              // className={resultButtonClass}
              onClick={handleAnswerChange}
              value={question.false1}
            >
              {toggle && <p>&#10060;</p>}
              {question.false1}
              {toggle && <p>{percentArray[1]}%</p>}
            </button>

            <button
              type="button"
              className={resultButton3Class}
              onClick={handleAnswerChange}
              value={question.false2}
            >
              {toggle && <p>&#10060;</p>}
              {question.false2}
              {toggle && <p>{percentArray[2]}%</p>}
            </button>

            <button
              type="button"
              className={resultButton4Class}
              onClick={handleAnswerChange}
              value={question.false3}
            >
              {toggle && <p>&#10060;</p>}
              {question.false3}
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
        {/* <div className={scoreContainer}></div> */}
      </div>
    </>
  );
};

export default MultipleChoice;

//__________notes_______________

// we can make a new Array where all [question.answer, question.wrong1, question.wrong2, question.wrong3] than random it than bind with a new array (to get new names) and use those names for buttons. Each name from new array will contain random question.stm
