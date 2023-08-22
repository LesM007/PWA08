import { useState, useEffect } from "react";

const Location = () => {
  const [myPos, setMyPos] = useState();
  const [dynPos, setDynPos] = useState();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        //getCurrentPosition() istedetfor watchPosition
        console.log(position);
        setMyPos(position);
      });
    }
  }, []);

  const handleDynamicPosition = (position) => {
    setDynPos(position);
  };
  const handleDynamicPositionError = (err) => {
    console.log(err);
  };

  navigator.geolocation.watchPosition(
    handleDynamicPosition,
    handleDynamicPositionError,
    {
      timeout: 5000,
    }
  );

  return (
    <>
      <h1>This is Location!</h1>
      <p>Your latitude:{myPos?.coords.latitude}</p>
      <p>your longitude:{myPos?.coords.longitude}</p>
      <p>Your altitude:{myPos?.coords.altitude}</p>
      <p>Your average speed:{myPos?.coords.speed}</p>
      <p>coords accuracy:{myPos?.coords.accuracy}</p>

      <h1>This is dynamic positioning:</h1>
      <>
        <p>Your latitude:{dynPos?.coords.latitude}</p>
        <p>your longitude:{dynPos?.coords.longitude}</p>
        <p>Your altitude:{dynPos?.coords.altitude}</p>
        <p>Your average speed:{dynPos?.coords.speed}</p>
        <p>coords accuracy:{dynPos?.coords.accuracy}</p>
      </>
    </>
  );
};

export default Location;
