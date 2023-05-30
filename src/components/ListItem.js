import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/WeatherType";
import moment from "moment";

const ListItem = (props) => {
  const { dt_txt, temp_min, temp_max, condition } = props;
  const { date, temp, item, dateTextwrapper } = styles;
  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={50} color={"white"} />
      <View style={dateTextwrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>

      <Text style={temp}>{`${Math.round(temp_min)}/${Math.round(
        temp_max
      )}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ff69b4",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  weatherIcon: {
    fontSize: 50,
    color: "#fff",
  },
  dateTextWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  date: {
    color: "#90ee90",
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    color: "#fff",
    fontSize: 14,
  },
  temperature: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ListItem;
