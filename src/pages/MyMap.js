import { Map, Marker, NavigationControl, GeolocateControl } from "react-map-gl";

const MyMap = () => {
  return (
    <Map
      mapLib={import("mapbox-gl")}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      style={{ width: "100vw", height: "50vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      initialViewState={{
        latitude: 55.7060378,
        longitude: 12.5142235,
        zoom: 16,
      }}
    >
      <NavigationControl />
      <Marker latitude={55.7060378} longitude={12.5142235} color="black">
        {/* standard marker */}
        <div //selfstyled pin
          style={{ width: "1.5em", height: "1.5em", backgroundColor: "red" }}
        ></div>
      </Marker>
      <GeolocateControl
        trackUserLocation={true}
        positionOptions={{ enableHighAccuracy: true }}
        showAccuracyCircle={true}
        auto
      />
    </Map>
  );
};

export default MyMap;
