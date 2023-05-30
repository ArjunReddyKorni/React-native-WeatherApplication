import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/WeatherType";

const CurrentWeather = ({weatherData}) => {
  const {
    header,
    wrapper,
    container,
    highLowText,
    lowHighWrapper,
    bodyWrapper,
    discription,
    message,feelsLike
  } = styles;
  const {main: {temp,feels_like,temp_max,temp_min},weather} = weatherData
 
  const weatherCondition = weather[0].main
  return (
  <View style={[wrapper,{backgroundColor: "#ffb74d" }]}>
      <View style={container}>
        <Text style={[header,{justifyContent: 'center',fontSize:40}]}> Current Weather</Text>
      <Feather name={weatherType[weatherCondition].icon} size={60} color="white" />
        <Text style={feelsLike}>{temp}</Text>
        <Text style={feelsLike}>{`feels like ${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={lowHighWrapper}
          messageOneStyles={highLowText}
          messageTwoStyles={highLowText}
           
   
        />
           </View>
      <RowText
        messageOne={weather[0].descrption}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={discription}
        messageTwoStyles={message}
      />
     
     </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#fff", 
  },
  header: {
    fontSize: 52,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  weatherIcon: {
    fontSize: 80,
    marginBottom: 20,
  },
  temperature: {
    fontSize: 56,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 10,
  },
  feelsLike: {
    fontSize: 24,
    color: "#777",
    marginBottom: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
    marginBottom: 20,
  },
  highLowText: {
    fontSize: 24,
    marginRight: 20,
    fontWeight: "bold",  color: "#555",
  },
  bodyWrapper: {
    paddingHorizontal: 25,
    marginBottom: 14,
  },
  description: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 22,
    color: "#555",
  },
});


export default CurrentWeather;
