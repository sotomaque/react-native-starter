import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Welcome</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Components")}>
        <Text>Components Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>List Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Image")}>
        <Text>Image Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Counter")}>
        <Text>Counter Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Color")}>
        <Text>Color Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Square")}>
        <Text>Square Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Text")}>
        <Text>Text Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Box")}>
        <Text>Box Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30
  }
});

export default HomeScreen;
