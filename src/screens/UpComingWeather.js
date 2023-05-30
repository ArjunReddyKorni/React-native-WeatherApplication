import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ListItem from "../components/ListItem";


const Item = (props) => {
  const { dt_txt, temp_min, temp_max, condition } = props;
  return (
    <View style={styles.item}>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{temp_min}</Text>
      <Text style={styles.temp}>{temp_max}</Text>
      <Text>{condition}</Text>
    </View>
  );
};


const UpComingWeather = ({weatherData}) => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        temp_min={item.main.temp_min}
        temp_max={item.main.temp_max}
      />
    );
  };
  const {container,image} = styles
  return (
    <SafeAreaView style={container}>
    
      <ImageBackground
        source={require("../../assets/UpComingWeather.jpg")}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt}
          // ItemSeparatorComponent={() => (
          //   <View style={{ backgroundColor: "red", height: 2 }} />
          // )}
          
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "royalblue",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
});

export default UpComingWeather;
