import React from "react";
import lochVideo from "../assets/videos/Loch35630.mp4";
import highCath from "../assets/music/high_cath.mp3";
import oldFlag from "../assets/images/oldflag.jpeg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
      <h1 className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded m-5">
        fàilte gu Alba/ Welcome to Scotland
      </h1>
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
