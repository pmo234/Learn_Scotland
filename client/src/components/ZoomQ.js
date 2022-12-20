import React from "react";
import { useState } from "react";
import gClubZoom from "../assets/images/Golf_clubs_zoom.jpeg";
import gClub from "../assets/images/Golf_clubs.jpg";

function ZoomQ() {
  const [answered, setAnswered] = useState(null);

  return (
    <div>
      <img
        className="w-96 h-96 rounded-full"
        src={gClubZoom}
        alt="metal with dark grooves"
      />
      <ul className="flex flex-col">
        <li>a</li>
        <li>b</li>
        <br />
        <li>c</li>
        <li>d</li>
      </ul>
      <img
        className="w-96 h-96 rounded-full"
        src={gClub}
        alt="metal with dark grooves"
      />
    </div>
  );
}

export default ZoomQ;
