import { useEffect, useState, useRef, useCallback } from "react";
import Header from "./Navbar";
import "./MultipleChoice.css";
import { Canvas } from "@react-three/fiber";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MultipleChoice = (props) => {
  const userURL = "http://localhost:9000/api/users/";
  const baseURL1 = "http://localhost:9000/api/users/";
  const location = useLocation();
  const [score, setScore] = useState(0);
 
  const [totalLen, setTotalLen] = useState();
  const [questionLen, setQuestionLen] = useState();
  const [resultButton1Class, setResultButton1Class] = useState("btn");
  const [resultButton2Class, setResultButton2Class] = useState("btn");
  const [resultButton3Class, setResultButton3Class] = useState("btn");
  const [resultButton4Class, setResultButton4Class] = useState("btn");
  const [startContainer, setStartContainer] = useState("startContainer");
  const [container, setContainer] = useState("container hide");
  
  const [resultStat, setResultStat] = useState([]);
 
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
  const navigate = useNavigate()

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
    
    setToggle(!toggle);

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
    
  };
  const handleFinish = () => {
    setContainer("container hide");
    setScoreContainer("scoreContainer");
  };
  const reset = () => {
    
    setToggle(false);
    setAnswered(false);
  
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
      score2: score,
    };
    
    postScore(users[(users.length - 1)]._id, formData);
    props.handleSetChange()

 
  };

  const questionsList = questions.map((question, index) => {
    return (
      <>
        <div className="flex flex-col" key={index}>
          {/* <div className="product-canvas"> */}
          <img className="h-96" src={question.image} alt="our question" />
          
          <div className="font-mono text-white">{question.question}</div>
          <div className="btn-grid">
            <button
              type="button"
              className={resultButton1Class}
              // class="btn correct"
              disabled={toggle}
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
              disabled={toggle}
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
              disabled={toggle}
              value={question.false2}
            >
              {toggle && <p>&#10060;</p>}
              {question.false2}
              {toggle && <p>{percentArray[2]}%</p>}
            </button>

            <button
              type="button"
              className={resultButton4Class}
              disabled={toggle}
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

           
          </div>
        </div>
        <div className={startContainer}>
          <button className="start-btn btnMenu" onClick={handleStart}>
            Start
          </button>
        </div>
        <div className={scoreContainer}>
          <h2>Congratulations</h2>
          <p> {`${user.name} your score is ${score}`}</p>

         
           
          <button className="next-btn btnMenu" onClick={handleSubmit}>
            
          <Link className="leader_link" to="/">Leaderboard</Link>
          </button>
             
        </div>
      </div>
    </>
  );
};

export default MultipleChoice;

//__________notes_______________

// we can make a new Array where all [question.answer, question.wrong1, question.wrong2, question.wrong3] than random it than bind with a new array (to get new names) and use those names for buttons. Each name from new array will contain random question.stm
