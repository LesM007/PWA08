import { useState, useEffect } from "react";

const Gyro = () => {
  const [deviceAlpha, setDeviceAlpha] = useState();
  const [deviceBeta, setDeviceBeta] = useState();
  const [deviceGamma, setDeviceGamma] = useState();
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.match(/iPhone/i)) {
      setIsIOS(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("deviceorientation", (e) => {
      setDeviceAlpha(e.alpha.toFixed(1));
      setDeviceBeta(e.beta.toFixed(1));
      setDeviceGamma(e.gamma.toFixed(1));
    });
  }, []);

  const enableDeviceOrientation = () => {
    DeviceOrientationEvent.requestPermission().then((response) => {
      if (response === "granted") {
        window.addEventListener("deviceorientation", (e) => {
          setDeviceAlpha(e.alpha.toFixed(1));
          setDeviceBeta(e.beta.toFixed(1));
          setDeviceGamma(e.gamma.toFixed(1));
        });
      }
    });
  };

  const handleVibrate = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate([200, 500, 10000]);
    }
  };

  return (
    <>
      <h1>Gyroskop</h1>
      {isIOS && <p>Du er på en iPhone!</p>}
      <h2>Værdier fra gyroskopet:</h2>
      <p>alpha:{deviceAlpha}</p>
      <p>beta:{deviceBeta}</p>
      <p>gamma:{deviceGamma}</p>

      {isIOS && !deviceAlpha ? (
        <button onClick={enableDeviceOrientation}>Enable on iPhone</button>
      ) : null}

      <button onClick={handleVibrate}>Vibrate me!</button>
    </>
  );
};

export default Gyro;
