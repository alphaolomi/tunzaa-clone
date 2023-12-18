import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Toolbar = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: Colors.primaryColor,
        padding: 12,
        height: 100,
        borderBottomLeftRadius: 40,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      className=""
    >
      <StatusBar style="light" backgroundColor={Colors.primaryColor} />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MoreMenu");
        }}
      >
        <Ionicons name="menu-outline" size={32} color="white" />
      </TouchableOpacity>

      <Image
        style={{ height: 40, resizeMode: "contain" }}
        source={require("../assets/tunzaa_text.png")}
      />
      <View />
    </View>
  );
};

export default Toolbar;
