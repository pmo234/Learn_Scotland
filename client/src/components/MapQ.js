import React, { useEffect, useState } from "react";
import Header from "./Navbar.js";
import styled from "styled-components";
import {
  CircleMarker,
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { Link } from "react-router-dom";
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
    getQuestions();
    getUsers();
    if (users.length !== 0) {
      console.log(users[users.length - 1]);
      setUser(users[users.length - 1]);
    }
  }, []);
  
  useEffect(() => {
    getUsers();
  }, [users])

  const getUsers = () => {
    return fetch(baseURL1)
      .then((res) => res.json())
      .then((results) => setUsers(results));
  };

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
    props.handleSetChange()
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
      <div className="flex p-3 bg-gradient-to-tr from-1bg to-2bg h-screen gap-5">
        <div className="flex">
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
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 items-center">
            <img
              className="w-100 border-solid border-blue-900 border-4"
              src={question.img}
              alt="tree"
            />
            <h3 className="text-white font-mono">{question.question}</h3>
          </div>
          {answered ? (
            <div className="flex m-10 flex-col items-center gap-4">
              {correct === false && position ? (
                <p className="font-mono text-white text-xl">Unlucky pal</p>
              ) : null}
              <p className="font-mono text-white ">{question.info}</p>
              <div className="flex justify-center gap-10">
                {correct && position ? (
                  <p className="font-mono text-white text-xl">Well done</p>
                ) : null}
                {counter < 4 ? (
                  <button
                    className="bg-blue-600 rounded py-2 px-3 text-white font-mono shadow-md shadow-white"
                    onClick={nextQ}
                  >
                    Next
                  </button>
                ) : (
                  <div>
                    <p>{score} out of 5</p>
                    <button
                      className="bg-blue-600 rounded py-2 px-3 text-white font-mono shadow-md shadow-white "
                      onClick={handleSubmit}
                    >
                      <Link  className="leader_link" to="/">Leaderboard</Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
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

  return questionList ? (
    <>
      <Header />
      {questionList[counter]}
    </>
  ) : null;
};

const Body = styled.body`
  background: linear-gradient(to right top, hsl(200, 100%, 20%), #6cd);
  height: 100vh;
`;
export default Map;
