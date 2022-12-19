import React from "react";
import lochVideo from "../assets/videos/Loch35630.mp4";
import highCath from "../assets/music/high_cath.mp3";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
const userURL = "http://localhost:9000/api/users";

const LandingPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const postUser = (payload) => {
    console.log(payload);
    console.log("postuser");
    return fetch(userURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const handleSubmit = (e) => {
    console.log(userURL);
    console.log(e.target.nameInput.value);
    const formData = {
      userName: e.target.nameInput.value,
    };
    postUser(formData);
    e.preventDefault();
    navigate("/mapQ");
    setUser(e.target.nameInput.value);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
      <h1 className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded m-5">
        fàilte gu Alba/ Welcome to Scotland
      </h1>
      <form
        className="flex flex-col z-30"
        onSubmit={handleSubmit}
        value="submit"
      >
        <input
          className="text-center"
          type="text"
          placeholder="Name"
          id="nameInput"
          name="nameInput"
          required
        />
        <button
          className="relative z-30 p-3 text-xl text-white bg-purple-300 bg-opacity-50 rounded m-5"
          type="submit"
          value="submit"
        >
          Let's quiz
        </button>
      </form>
      <Link
        to="/trial"
        className="relative z-30 p-3 text-xl text-white bg-purple-300 bg-opacity-50 rounded m-5"
      >
        See what you know
      </Link>
      <video
        className="absolute w-auto min-w-full min-h-full max-w-none"
        autoPlay
        muted
        loop
      >
        <source src={lochVideo} type="video/mp4" />
      </video>
      <audio controls autoPlay>
        <source src={highCath} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default LandingPage;
