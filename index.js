const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
});

fetchCoordsByIP("70.77.98.149", (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned Coords:", data);
});

fetchISSFlyOverTimes(
  { latitude: 51.1094, longitude: -114.0488 },
  (error, info) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }

    console.log("It worked! Returned Flyover:", info);
  }
);
