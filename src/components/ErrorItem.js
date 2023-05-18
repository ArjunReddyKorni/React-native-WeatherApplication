import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrorItem = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.errorMessage}>Sorry Something Went Wrong</Text>
      <Feather name={"frown"} size={100} color={"white"} />
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMessage:{
    fontSize: 30,
    color: 'white',
    marginHorizontal: '10',
    textAlign: 'center'
  }
});
export default ErrorItem;
