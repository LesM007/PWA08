import React from "react";
import { useGeolocated } from "react-geolocated";

const Geolocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  return !isGeolocationAvailable ? (
    <div>Your browser doesn't support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <h1>This is Location!</h1>

      <h1>This is dynamic positioning:</h1>
    </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default Geolocation;
