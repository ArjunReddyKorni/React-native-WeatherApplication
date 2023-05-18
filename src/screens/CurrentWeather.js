import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/WeatherType";

const CurrentWeather = ({weatherData}) => {
  const {
    wrapper,
    container,
    tempStyles,
    highLow,
    lowHighWrapper,
    bodyWrapper,
    discription,
    message,
  } = styles;
  const {main: {temp,feels_like,temp_max,temp_min},weather} = weatherData
  console.log(weatherData)
  const weatherCondition = weather[0].main
  return (
    <SafeAreaView style={[wrapper,{backgroundColor: weatherType[weatherCondition].backgroundColor }]}>
      <View style={container}>
        <Text style={{justifyContent: 'center'}}> Current Weather</Text>
        <Feather name={weatherType[weatherCondition].icon} size={60} color="white" />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={tempStyles}>{`feels like ${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={lowHighWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
        {/* <View style={lowHighWrapper}>
          <Text style={highLow}>High: 8</Text>
          <Text style={highLow}>Low: 6</Text>
        </View> */}
      </View>
      <RowText
        messageOne={weather[0].descrption}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={discription}
        messageTwoStyles={message}
      />
      {/* <View style={bodyWrapper}>
        <Text style={discription}>Its Sunny</Text>
        <Text style={message}>Its perfect Weather</Text>
      </View> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
   
  },
  tempStyles: {
    colour: "blue",
    fontSize: 36,
  },
  highLow: {
    fontSize: 20,
  },
  lowHighWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 14,
  },
  discription: {
    fontSize: 35,
    fontWeight: 600
  },
  message: {
    fontSize: 25,
    
  },
});

export default CurrentWeather;
