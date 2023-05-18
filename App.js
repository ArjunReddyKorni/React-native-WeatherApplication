import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";
import OurButtoon from "./src/demonstration/OurButton";
//https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}
const App = () => {
  const [loading, error, weather] = useGetWeather();

  if (weather && weather) console.log(weather, error, loading);
  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }


  return (
    <View style={styles.container}>
      {/* <OurButtoon/> */}
      {loading ? (
        <ActivityIndicator size={"large"} color={"blue"} />
      ) : (
        <ErrorItem />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
