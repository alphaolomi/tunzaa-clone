import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const ToolbarMain = ({ title, onPress }) => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar style="light" backgroundColor={Colors.primaryColor} />
      <View
        style={{ backgroundColor: Colors.primaryColor }}
        className="flex flex-row  items-center pt-8"
      >
        <TouchableOpacity onPress={onPress} className=" m-2 p-2">
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>

        <Text className=" text-white text-lg ml-5 font-semibold">{title}</Text>
      </View>
    </View>
  );
};

export default ToolbarMain;
