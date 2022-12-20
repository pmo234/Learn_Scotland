import React, { useState } from "react";
import {
  CircleMarker,
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

const Map = () => {
  const [position, setPosition] = useState(null);
  const [correct, setCorrect] = useState(null);
  const benPos = { lat: 56.7969, lng: -5.0036 };
  

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng);
        setCorrect(e.latlng.equals(benPos, 0.25));
      },
    });
  }

  return (
    <>
      <h1>Where's Ben Nevis?</h1>
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
            <CircleMarker center={benPos} />
          </div>
        ) : null}
        <LocationMarker />
      </MapContainer>
      {correct && position ? <p>Well done</p> : null}
      {correct === false && position ? (
        <>
          <p>Unlucky pal</p>
          <form action="/trial">
            <button type="submit">try again</button>
          </form>
        </>
      ) : null}
    </>
  );
};

export default Map;
