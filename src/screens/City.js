import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import IconText from "../components/IconText";
import moment from 'moment'

const City = ({weatherData}) => {
  const {
    conatiner,
    imageLayout,
    city,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    sunSetText,
    rowLayout,
  } = styles;
  const {name,country,population, sunrise,sunset} = weatherData
  return (
    <SafeAreaView style={conatiner}>
      <ImageBackground
        source={require("../../assets/City8.jpg")}
        style={imageLayout}
      >
        <Text style={[city, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={`population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise).format(`h:mm:ss a`)}
            bodyTextStyles={sunSetText}
          />
          {/* <Feather name={'sunrise'} size={50} colour={'white'}/>
        <Text style={riseSetText}>10:46:58am</Text> */}
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(sunset).format(`h:mm:ss a`)}
            bodyTextStyles={sunSetText}
          />
          {/* <Feather name={'sunset'} size={50} colour={'white'}/>
        <Text style={riseSetText}>17:46:58pm</Text> */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  city: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",

    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  sunSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
