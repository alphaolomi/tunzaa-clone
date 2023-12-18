import { View, Text } from "react-native";
import React from "react";

import { EvilIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const OrderGift = () => {
  return (
    <View>
      <View
        style={{
          height: "100%",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Text className=" text-xl text-gray-400">Hakuna Zawadi</Text>
        <EvilIcons name="search" size={64} color={Colors.primaryColor} />
      </View>
    </View>
  );
};

export default OrderGift;
