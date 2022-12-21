import React, { useEffect, useState } from "react";
import Header from "./Navbar.js";
import {
  CircleMarker,
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
const userURL = "http://localhost:9000/api/users/";
const baseURL1 = "http://localhost:9000/api/users/";

const Map = (props) => {
  const [position, setPosition] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(null);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    getUsers();
    if (users.length !== 0){
      console.log(users[users.length - 1])
      setUser(users[users.length - 1])}
  }, []);
  
  const getUsers = () => {
    return fetch(baseURL1)
      .then((res) => res.json())
          .then((results) => setUsers(results))}
      console.log(users)
      
  const getQuestions = () => {
    return fetch("http://localhost:9000/api/mapquestions").then((response) =>
      response.json().then((data) => setQuestions(data))
    );
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
      score4: score,
    };
    postScore(users[users.length - 1]._id, formData);
  };

  const nextQ = () => {
    const tempCounter = counter;
    setCounter(tempCounter + 1);
    setPosition(null);
    setCorrect(null);
    setAnswered(null);
  };

  const questionList = questions?.map((question) => {
    return (
      <>
        <div className="flex m-3 align-middle justify-center ">
          <MapContainer
            center={[56.8169, -4.1826]}
            doubleClickZoom={false}
            dragging={false}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "525px" }}
            zoom={6}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {position ? (
              <div>
                <Marker position={position}></Marker>
                <CircleMarker center={question.position} />
              </div>
            ) : null}
            <LocationMarker />
          </MapContainer>
        </div>
        <div className="flex align-middle justify-center gap-3 m-3">
          <img
            className="w-1/5 border-solid border-blue-900 border-4"
            src={question.img}
            alt="tree"
          />
          <h3>{question.question}</h3>
        </div>
        {answered ? (
          <div className="flex m-10 flex-col">
            <p>{question.info}</p>
            <div className="flex justify-center gap-10">
              {correct && position ? <p>Well done</p> : null}
              {correct === false && position ? <p>Unlucky pal</p> : null}
              <button
                className="bg-blue-900 rounded py-1 px-2 text-white "
                onClick={nextQ}
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
      </>
    );
  });

  // * below gives functionality of producing click position marker and correct marker
  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
        setAnswered(true);
        const tempScore = score;
        if (e.latlng.equals(questions[counter].position, 0.25)) {
          setCorrect(true);
          setScore(tempScore + 1);
        } else {
          setCorrect(false);
        }
      },
    });
  }

  return questionList && counter < 5 ? (
    <>
      <Header />
      {questionList[counter]}
    </>
  ) : (
    <>
      <Header />
      <p>{score} out of 5</p>
      <button
        className="bg-blue-900 rounded py-1 px-2 text-white "
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  );
};

export default Map;
