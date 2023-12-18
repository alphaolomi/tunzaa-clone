import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";

const ButtonSelect = ({ selected, onPress, title }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        className=" bg-white py-3 px-3 m-2 flex-row w-fit rounded-xl"
        style={{
          backgroundColor: selected ? Colors.primaryColor : "white",
        }}
      >
        <Text style={{ color: selected ? "white" : "black" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSelect;
