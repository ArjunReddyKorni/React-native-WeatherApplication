import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-web";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);
  useEffect(() => {
    // console.log(`count value ${count}`)
    console.log(`count value changed`);
    return() =>{
        console.log('useeffect cleanup')
    }
  },[count]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button
        color={"red"}
        title={"Increase the Count"}
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        color={"green"}
        title={"Drecrese the count"}
        onPress={() => {
          setCount(count - 1);
        }}
      />
      <Button
        color={"red"}
        title={"Increase the Count"}
        onPress={() => {
          setNewCount(newCount + 1);
        }}
      />
      <Button
        color={"green"}
        title={"Drecrese the count"}
        onPress={() => {
          setNewCount(newCount - 1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginTop: 25,
  },
});

export default Counter;
