import { useState, useEffect } from "react";

const Location = () => {
  const [myPos, setMyPos] = useState();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setMyPos(position);
      });
    }
  }, []);

  return (
    <>
      <h1>This is Location!</h1>
      <p>Your latitude:{myPos?.coords.latitude}</p>
      <p>your longitude:{myPos?.coords.longitude}</p>
      <p>Your altitude:{myPos?.coords.altitude}</p>
      <p>Your average speed:{myPos?.coords.speed}</p>
      <p>coords accuracy:{myPos?.coords.accuracy}</p>
    </>
  );
};

export default Location;
