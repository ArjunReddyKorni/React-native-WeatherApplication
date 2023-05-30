import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState("17.4383");
  const [lon, setLon] = useState("78.4489");

  const fetchWeatherData = async () => {
    try {
      const res =
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setError("failed to featch the weather");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("permission denied for accesing location");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      // Open weather api is not able to provide weather forecast in my current loaction so using default
      console.log(location);
      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return [loading,error,weather]
};
