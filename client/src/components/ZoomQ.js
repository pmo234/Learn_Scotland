import React from "react";
import { useState } from "react";
import gClubZoom from "../assets/images/Golf_clubs_zoom.jpeg";
import gClub from "../assets/images/Golf_clubs.jpg";

function ZoomQ() {
  const [answered, setAnswered] = useState(null);

  const answerList = ["a", "b", "c", "d"];
  
  const answerMap = answerList.map((answer, index) => {
    return <button className="py-2 px-4 rounded bg-slate-700 m-4" key={index}>{answer}</button>
  })

  return (
    <div>
      {answered ? (
        <img
          className="w-96 h-96 rounded-full"
          src={gClub}
          alt="metal with dark grooves"
        />
      ) : (
        <img
          className="w-96 h-96 rounded-full"
          src={gClubZoom}
          alt="metal with dark grooves"
        />
      )}
      {answerMap}
    </div>
  );
}

export default ZoomQ;
