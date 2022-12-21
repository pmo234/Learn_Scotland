import React from "react";
import lochVideo from "../assets/videos/w2s.mp4";
import highCath from "../assets/music/high_cath.mp3";
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
      ame: e.target.nameInput.value,
    };
    postUser(formData);
    e.preventDefault();
    props.changeFirst();
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
      <h1 className="relative z-30 p-5 text-2xl text-white bg-purple-500 bg-opacity-70 rounded m-3">
        Alba/Scotland
      </h1>
      <h3 className="relative z-30 p-3 text-xl text-white bg-purple-400 bg-opacity-80 rounded m-5">
        Who? What? Where?
      </h3>
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
