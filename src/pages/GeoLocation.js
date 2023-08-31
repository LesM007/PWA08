import React from "react";
import { useGeolocated } from "react-geolocated";

const GeoLocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <table>
      <tbody>
        <h1>This is the GeoLocation</h1>
        <div className="flex">
          <p>latitude</p>
          <p>{coords.latitude}</p>
        </div>
        <div className="flex">
          <p>longitude</p>

          <p>{coords.longitude}</p>
        </div>

        <div className="flex">
          <p>altitude</p>

          <p>{coords.altitude}</p>
        </div>

        <div className="flex">
          <p>heading</p>

          <p>{coords.heading}</p>
        </div>

        <div className="flex">
          <p>speed</p>

          <p>{coords.speed}</p>
        </div>
      </tbody>
    </table>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default GeoLocation;
