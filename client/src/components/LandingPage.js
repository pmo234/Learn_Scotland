import React from "react";
import lochVideo from "../assets/videos/w2s.mp4";
const userURL = "http://localhost:9000/api/users";

const LandingPage = (props) => {
  const postUser = (payload) => {
    return fetch(userURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const handleSubmit = (e) => {
    const formData = {
      name: e.target.nameInput.value,
      score1: null,
      score2: null,
      score3: null,
      score4: null,
      comments: [],
    };
    postUser(formData);
    e.preventDefault();
    props.changeFirst();
    props.setCurrUser(e.target.nameInput.value);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
      <h1 className="relative z-30 p-5 text-2xl text-white bg-blue-900 bg-opacity-90 rounded m-3 font-mono border-4">
        Alba Scotland
      </h1>
      <div className="flex flex-row">
        <h3 className="relative z-30 p-3 text-xl text-white bg-blue-600 bg-opacity-90 rounded m-5 font-mono border-2">
          Who?
        </h3>
        <h3 className="relative z-30 p-3 text-xl text-white bg-blue-500 bg-opacity-90 rounded m-5 font-mono border-2">
          What?
        </h3>
        <h3 className="relative z-30 p-3 text-xl text-white bg-blue-400 bg-opacity-90 rounded m-5 font-mono border-2">
          Where?
        </h3>
      </div>
      <div className="flex">
        <form
          className="flex flex-row z-30 items-center"
          onSubmit={handleSubmit}
          value="submit"
        >
          <input
            className="text-center font-mono h-12 text-white bg-blue-700 border-2 text-xl"
            type="text"
            placeholder="Name"
            id="nameInput"
            name="nameInput"
            required
          />
          <button
            className="relative z-30 p-3 text-xl text-white bg-blue-700 bg-opacity-70 rounded m-5 font-mono h-12 hover:font-bold border-2"
            type="submit"
            value="submit"
          >
            Let's quiz
          </button>
        </form>
      </div>
      <video
        className="absolute w-auto min-w-full min-h-full max-w-none"
        autoPlay
        muted
        loop
      >
        <source src={lochVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default LandingPage;
